/**
 * Raceline Remap - Admin Management Panel Controller
 * Handles CRUD operations, analytics metrics, appointment statuses and store products.
 */

class AdminController {
  constructor() {
    this.currentTab = 'analytics';
    this.init();
  }

  init() {
    this.render();
  }

  // Refresh admin UI
  render() {
    const adminContainer = document.getElementById('admin-content-area');
    if (!adminContainer) return;

    const currentUser = window.app ? window.app.currentUser : null;
    if (!currentUser || currentUser.role !== 'admin') {
      adminContainer.innerHTML = `
        <div class="text-center py-16">
          <div class="inline-flex p-4 rounded-full bg-red-500/10 text-red-400 mb-4">
            <i data-lucide="shield-alert" class="w-12 h-12"></i>
          </div>
          <h2 class="text-2xl font-bold text-white mb-2" data-i18n="admin_access_denied">دسترسی غیرمجاز</h2>
          <p class="text-slate-400 max-w-md mx-auto mb-6" data-i18n="admin_access_desc">برای مشاهده پنل مدیریت، لطفا با حساب کاربری ادمین وارد شوید.</p>
          <button onclick="window.app.openAuthModal('login')" class="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition">
            ورود به حساب ادمین
          </button>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    const state = window.app.getState();
    const bookings = state.bookings || [];
    const products = state.products || [];
    const orders = state.orders || [];

    // Calculate metrics
    const totalDeposits = bookings.reduce((sum, b) => b.paymentStatus === 'paid' ? sum + (Number(b.depositPaid) || 0) : sum, 0);
    const confirmedBookings = bookings.filter(b => b.status === 'confirmed').length;
    const pendingBookings = bookings.filter(b => b.status === 'pending').length;
    const totalStoreSales = orders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);

    adminContainer.innerHTML = `
      <!-- Admin Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold rounded-full">
              ADMIN CONTROL CENTER
            </span>
            <span class="text-xs text-slate-400">ورود: ${currentUser.name}</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-black text-white mt-2">
            پنل مدیریت اختصاصی <span class="text-red-500">ریس‌لاین ریمپ</span>
          </h1>
        </div>

        <div class="flex items-center gap-3">
          <!-- Tab Switcher -->
          <div class="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 overflow-x-auto">
            <button onclick="window.adminCtrl.switchTab('analytics')" 
              class="px-4 py-2 rounded-xl text-sm font-bold transition whitespace-nowrap ${this.currentTab === 'analytics' ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'text-slate-400 hover:text-white'}">
              📊 آمار و تحلیل
            </button>
            <button onclick="window.adminCtrl.switchTab('bookings')" 
              class="px-4 py-2 rounded-xl text-sm font-bold transition whitespace-nowrap relative ${this.currentTab === 'bookings' ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'text-slate-400 hover:text-white'}">
              🗓️ نوبت‌های ریمپ
              ${pendingBookings > 0 ? `<span class="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold bg-amber-500 text-black rounded-full mr-1">${pendingBookings}</span>` : ''}
            </button>
            <button onclick="window.adminCtrl.switchTab('products')" 
              class="px-4 py-2 rounded-xl text-sm font-bold transition whitespace-nowrap ${this.currentTab === 'products' ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'text-slate-400 hover:text-white'}">
              🛍️ محصولات فروشگاه
            </button>
            <button onclick="window.adminCtrl.switchTab('orders')" 
              class="px-4 py-2 rounded-xl text-sm font-bold transition whitespace-nowrap ${this.currentTab === 'orders' ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'text-slate-400 hover:text-white'}">
              📦 سفارشات
            </button>
          </div>

          <!-- Admin Logout Button -->
          <button onclick="window.app.logout()" class="px-3.5 py-2.5 rounded-xl bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/30 text-xs font-bold transition flex items-center gap-1.5" title="خروج از حساب ادمین">
            <i data-lucide="log-out" class="w-4 h-4"></i>
            <span>خروج</span>
          </button>
        </div>
      </div>

      <!-- Tab Content Area -->
      <div id="admin-tab-body">
        ${this.getTabContent(this.currentTab, { bookings, products, orders, totalDeposits, confirmedBookings, pendingBookings, totalStoreSales })}
      </div>
    `;

    if (window.lucide) lucide.createIcons();
  }

  switchTab(tabName) {
    this.currentTab = tabName;
    this.render();
  }

  getTabContent(tab, data) {
    switch (tab) {
      case 'analytics':
        return this.renderAnalyticsTab(data);
      case 'bookings':
        return this.renderBookingsTab(data);
      case 'products':
        return this.renderProductsTab(data);
      case 'orders':
        return this.renderOrdersTab(data);
      default:
        return this.renderAnalyticsTab(data);
    }
  }

  // 1. Analytics & Overview Tab
  renderAnalyticsTab({ bookings, products, orders, totalDeposits, confirmedBookings, pendingBookings, totalStoreSales }) {
    return `
      <!-- Stats Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div class="glass-panel p-5 rounded-2xl border border-white/10 relative overflow-hidden">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-400">بیعانه‌های دریافتی ریمپ</span>
            <div class="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <i data-lucide="wallet" class="w-5 h-5"></i>
            </div>
          </div>
          <div class="text-2xl font-black text-white mt-3">${window.app.formatPrice(totalDeposits)}</div>
          <div class="text-xs text-amber-400/80 mt-1">تراکنش‌های واریز زرین‌پال</div>
        </div>

        <div class="glass-panel p-5 rounded-2xl border border-white/10 relative overflow-hidden">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-400">نوبت‌های رزرو ریمپ</span>
            <div class="p-2 rounded-xl bg-red-500/10 text-red-400">
              <i data-lucide="calendar" class="w-5 h-5"></i>
            </div>
          </div>
          <div class="text-2xl font-black text-white mt-3">${bookings.length} <span class="text-sm font-normal text-slate-400">خودرو</span></div>
          <div class="text-xs text-green-400 mt-1">${confirmedBookings} تایید شده | ${pendingBookings} در انتظار</div>
        </div>

        <div class="glass-panel p-5 rounded-2xl border border-white/10 relative overflow-hidden">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-400">فروش کل فروشگاه</span>
            <div class="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <i data-lucide="shopping-bag" class="w-5 h-5"></i>
            </div>
          </div>
          <div class="text-2xl font-black text-white mt-3">${window.app.formatPrice(totalStoreSales)}</div>
          <div class="text-xs text-slate-400 mt-1">${orders.length} سفارش ثبت شده</div>
        </div>

        <div class="glass-panel p-5 rounded-2xl border border-white/10 relative overflow-hidden">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-400">تنوع محصولات فعال</span>
            <div class="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <i data-lucide="box" class="w-5 h-5"></i>
            </div>
          </div>
          <div class="text-2xl font-black text-white mt-3">${products.length} <span class="text-sm font-normal text-slate-400">کالا</span></div>
          <div class="text-xs text-cyan-400 mt-1">آماده سفارش و ارسال</div>
        </div>
      </div>

      <!-- Quick Action & Recent Bookings -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/10">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-white text-lg">آخرین نوبت‌های ثبت شده در سیستم</h3>
            <button onclick="window.adminCtrl.switchTab('bookings')" class="text-xs text-red-400 hover:text-red-300">مشاهده همه</button>
          </div>

          <div class="space-y-3">
            ${bookings.slice(0, 4).map(b => `
              <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-white/5 gap-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 font-black">
                    🏎️
                  </div>
                  <div>
                    <div class="font-bold text-white text-sm">${b.carModel} (${b.year})</div>
                    <div class="text-xs text-slate-400">${b.customerName} - ${b.customerPhone}</div>
                  </div>
                </div>
                <div class="flex items-center gap-3 self-end sm:self-center">
                  <span class="px-2.5 py-1 text-xs font-semibold rounded-lg ${b.status === 'confirmed' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}">
                    ${b.status === 'confirmed' ? 'تایید شده' : 'در انتظار'}
                  </span>
                  <span class="text-xs font-racing text-slate-300">${b.bookingDate} ${b.bookingTime}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Zarinpal Gateway Status Card -->
        <div class="glass-panel p-6 rounded-2xl border border-white/10 bg-zarinpal flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold text-yellow-400 tracking-wider">درگاه پرداخت زرین‌پال</span>
              <span class="inline-flex items-center gap-1 text-[11px] text-green-400 bg-green-500/20 px-2 py-0.5 rounded-full">
                <span class="w-1.5 h-1.5 rounded-full bg-green-400"></span> آنلاین
              </span>
            </div>
            <h4 class="text-lg font-black text-white mb-2">تسویه و پرداخت بیعانه ۱,۰۰۰,۰۰۰ تومان</h4>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              تمام نوبت‌های داینو و ریمپ پس از پرداخت بیعانه با درگاه امن زرین‌پال به صورت آنی در این پنل ثبت و پیامک تایید ارسال می‌شود.
            </p>
            <div class="p-3 bg-black/40 rounded-xl border border-white/10 text-xs text-slate-300 font-mono">
              Merchant ID: <span class="text-yellow-400 font-bold">${window.INITIAL_DATA.brand.zarinpalMerchantId}</span>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span class="text-xs text-slate-400">وضعیت درگاه: تایید شده</span>
            <button onclick="window.adminCtrl.editGatewayPrompt()" class="text-xs text-yellow-400 hover:underline">ویرایش مرچنت کد</button>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Bookings Management Tab
  renderBookingsTab({ bookings }) {
    return `
      <div class="glass-panel p-6 rounded-2xl border border-white/10">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-xl font-bold text-white">مدیریت نوبت‌های ریمپ و تست داینو</h3>
            <p class="text-xs text-slate-400 mt-1">مشاهده مشخصات خودرو، مبلغ بیعانه و تغییر وضعیت نوبت‌ها</p>
          </div>
          <button onclick="window.app.openBookingModal()" class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 self-start">
            <i data-lucide="plus" class="w-4 h-4"></i> ثبت نوبت جدید
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-right text-xs">
            <thead>
              <tr class="border-b border-white/10 text-slate-400 font-bold uppercase">
                <th class="pb-3 px-3">کد رزرو</th>
                <th class="pb-3 px-3">مشتری</th>
                <th class="pb-3 px-3">خودرو و موتور</th>
                <th class="pb-3 px-3">نوع خدمت</th>
                <th class="pb-3 px-3">تاریخ و ساعت</th>
                <th class="pb-3 px-3">بیعانه و درگاه</th>
                <th class="pb-3 px-3">وضعیت نوبت</th>
                <th class="pb-3 px-3 text-center">عملیات</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
              ${bookings.length === 0 ? `
                <tr><td colspan="8" class="text-center py-8 text-slate-500">هیچ نوبتی ثبت نشده است.</td></tr>
              ` : bookings.map(b => `
                <tr class="hover:bg-white/5 transition">
                  <td class="py-4 px-3 font-mono font-bold text-slate-300">${b.id}</td>
                  <td class="py-4 px-3">
                    <div class="font-bold text-white">${b.customerName}</div>
                    <div class="text-[11px] text-slate-400 font-mono">${b.customerPhone}</div>
                  </td>
                  <td class="py-4 px-3">
                    <span class="font-bold text-white">${b.carModel}</span>
                    <span class="text-slate-400 text-[10px]"> (${b.year})</span>
                  </td>
                  <td class="py-4 px-3 text-slate-300 font-medium">${b.service}</td>
                  <td class="py-4 px-3 font-mono text-slate-300">${b.bookingDate}<br><span class="text-red-400 font-bold">${b.bookingTime}</span></td>
                  <td class="py-4 px-3">
                    <div class="text-emerald-400 font-bold">${window.app.formatPrice(b.depositPaid)}</div>
                    <div class="text-[10px] text-slate-400 font-mono">زرین‌پال: ${b.paymentRef}</div>
                  </td>
                  <td class="py-4 px-3">
                    <select onchange="window.adminCtrl.updateBookingStatus('${b.id}', this.value)"
                      class="bg-slate-900 border border-white/10 text-xs rounded-lg px-2.5 py-1 text-white font-medium focus:outline-none focus:border-red-500">
                      <option value="pending" ${b.status === 'pending' ? 'selected' : ''}>در انتظار بررسی</option>
                      <option value="confirmed" ${b.status === 'confirmed' ? 'selected' : ''}>تایید شده ✅</option>
                      <option value="completed" ${b.status === 'completed' ? 'selected' : ''}>انجام شده 🏁</option>
                      <option value="cancelled" ${b.status === 'cancelled' ? 'selected' : ''}>لغو شده ❌</option>
                    </select>
                  </td>
                  <td class="py-4 px-3 text-center">
                    <button onclick="window.adminCtrl.deleteBooking('${b.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition" title="حذف">
                      <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // 3. Products Management Tab
  renderProductsTab({ products }) {
    return `
      <div class="glass-panel p-6 rounded-2xl border border-white/10">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-xl font-bold text-white">مدیریت کالاهای فروشگاه تیونینگ</h3>
            <p class="text-xs text-slate-400 mt-1">افزودن قطعات جدید، مپ‌های تیونینگ و تغییر موجودی و قیمت</p>
          </div>
          <button onclick="window.adminCtrl.openNewProductModal()" class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 self-start">
            <i data-lucide="plus" class="w-4 h-4"></i> افزودن محصول جدید
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${products.map(p => `
            <div class="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
              <div class="flex gap-3">
                <img src="${p.image}" alt="${p.nameFa}" class="w-20 h-20 rounded-lg object-cover bg-slate-800 border border-white/10 flex-shrink-0">
                <div class="flex-1 min-w-0">
                  <span class="text-[10px] px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-bold">${p.categoryFa}</span>
                  <h4 class="text-sm font-bold text-white mt-1 line-clamp-2">${p.nameFa}</h4>
                  <div class="text-xs text-emerald-400 font-bold mt-1">${window.app.formatPrice(p.price)}</div>
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span class="text-xs text-slate-400">موجودی انبار: <b class="text-white font-mono">${p.stock}</b></span>
                <div class="flex items-center gap-1">
                  <button onclick="window.adminCtrl.editProductPrompt('${p.id}')" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200">
                    ویرایش قیمت
                  </button>
                  <button onclick="window.adminCtrl.deleteProduct('${p.id}')" class="p-1 rounded text-slate-400 hover:text-red-400">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 4. Orders Management Tab
  renderOrdersTab({ orders }) {
    return `
      <div class="glass-panel p-6 rounded-2xl border border-white/10">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-xl font-bold text-white">سفارشات فروشگاه آنلاین</h3>
            <p class="text-xs text-slate-400 mt-1">لیست تمام کالاهای خریداری شده توسط کاربران</p>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-right text-xs">
            <thead>
              <tr class="border-b border-white/10 text-slate-400 font-bold uppercase">
                <th class="pb-3 px-3">شماره سفارش</th>
                <th class="pb-3 px-3">خریدار</th>
                <th class="pb-3 px-3">اقلام</th>
                <th class="pb-3 px-3">مبلغ کل</th>
                <th class="pb-3 px-3">تاریخ</th>
                <th class="pb-3 px-3">وضعیت ارسال</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
              ${orders.length === 0 ? `
                <tr><td colspan="6" class="text-center py-8 text-slate-500">هنوز سفارشی در فروشگاه ثبت نشده است.</td></tr>
              ` : orders.map(o => `
                <tr class="hover:bg-white/5 transition">
                  <td class="py-4 px-3 font-mono font-bold text-white">${o.id}</td>
                  <td class="py-4 px-3">
                    <div class="font-bold text-white">${o.customerName || 'کاربر مهمان'}</div>
                    <div class="text-slate-400 font-mono text-[11px]">${o.phone || '-'}</div>
                  </td>
                  <td class="py-4 px-3 text-slate-300">
                    ${(o.items || []).map(i => `${i.nameFa || i.name} (${i.quantity}x)`).join(', ')}
                  </td>
                  <td class="py-4 px-3 font-bold text-emerald-400">${window.app.formatPrice(o.total)}</td>
                  <td class="py-4 px-3 font-mono text-slate-400">${o.date}</td>
                  <td class="py-4 px-3">
                    <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
                      پرداخت شده
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // Status updates
  updateBookingStatus(id, newStatus) {
    const state = window.app.getState();
    const booking = state.bookings.find(b => b.id === id);
    if (booking) {
      booking.status = newStatus;
      window.app.saveState(state);
      window.app.showToast(`وضعیت نوبت ${id} با موفقیت به‌روزرسانی شد.`, 'success');
      this.render();
    }
  }

  deleteBooking(id) {
    if (confirm(`آیا از حذف نوبت ${id} اطمینان دارید؟`)) {
      const state = window.app.getState();
      state.bookings = state.bookings.filter(b => b.id !== id);
      window.app.saveState(state);
      window.app.showToast(`نوبت ${id} حذف شد.`, 'info');
      this.render();
    }
  }

  editProductPrompt(id) {
    const state = window.app.getState();
    const product = state.products.find(p => p.id === id);
    if (!product) return;

    const newPriceStr = prompt(`قیمت جدید را به تومان وارد کنید (قیمت فعلی: ${product.price}):`, product.price);
    if (newPriceStr !== null && !isNaN(Number(newPriceStr)) && Number(newPriceStr) > 0) {
      product.price = Number(newPriceStr);
      window.app.saveState(state);
      window.app.showToast(`قیمت محصول "${product.nameFa}" به‌روزرسانی شد.`, 'success');
      this.render();
      window.app.renderShop();
    }
  }

  deleteProduct(id) {
    if (confirm('آیا از حذف این محصول اطمینان دارید؟')) {
      const state = window.app.getState();
      state.products = state.products.filter(p => p.id !== id);
      window.app.saveState(state);
      window.app.showToast('محصول با موفقیت حذف شد.', 'info');
      this.render();
      window.app.renderShop();
    }
  }

  openNewProductModal() {
    const name = prompt('نام محصول را به فارسی وارد کنید:');
    if (!name) return;
    const price = prompt('قیمت به تومان:');
    if (!price || isNaN(Number(price))) return;
    const category = prompt('دسته‌بندی (software, hardware, tools, merch):', 'hardware');

    const state = window.app.getState();
    const newProd = {
      id: 'prod-' + Date.now(),
      nameFa: name,
      nameEn: name,
      category: category || 'hardware',
      categoryFa: category === 'software' ? 'فایل و نرم‌افزار' : 'قطعات تیونینگ',
      categoryEn: 'Performance Parts',
      price: Number(price),
      stock: 10,
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
      rating: 5.0,
      reviewsCount: 1,
      descFa: 'کالای جدید اضافه شده توسط مدیریت ریس‌لاین.'
    };

    state.products.push(newProd);
    window.app.saveState(state);
    window.app.showToast('محصول جدید به فروشگاه اضافه شد.', 'success');
    this.render();
    window.app.renderShop();
  }

  editGatewayPrompt() {
    const currentId = window.INITIAL_DATA.brand.zarinpalMerchantId;
    const newId = prompt('مرچنت کد اختصاصی زرین‌پال خود را وارد کنید:', currentId);
    if (newId) {
      window.INITIAL_DATA.brand.zarinpalMerchantId = newId;
      window.app.showToast('مرچنت کد زرین‌پال ذخیره شد.', 'success');
      this.render();
    }
  }
}

window.adminCtrl = new AdminController();
