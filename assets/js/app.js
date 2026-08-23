/**
 * Raceline Remap - Core Application Engine
 * Interactive Tuning Calculator, Dyno Graph, Zarinpal Payment Flow, Cart, I18n & Auth
 */

// Translation dictionary
const TRANSLATIONS = {
  fa: {
    nav_home: "صفحه اصلی",
    nav_calculator: "محاسبه‌گر توان (داینو)",
    nav_services: "خدمات ریمپ",
    nav_booking: "رزرو نوبت داینو",
    nav_shop: "فروشگاه آنلاین",
    nav_projects: "پروژه‌ها",
    nav_contact: "تماس با ما",
    nav_admin: "پنل مدیریت",
    nav_login: "ورود / عضویت",
    nav_logout: "خروج",
    nav_portal: "حساب کاربری",

    hero_badge: "🔥 تخصصی‌ترین مرکز کالیبراسیون ECU و داینو در ایران",
    hero_title: "نهایت قدرت و شتاب با ریمپ تخصصی <span class='text-red-500 font-black'>ریس‌لاین</span>",
    hero_desc: "کالیبراسیون دقیق نرم‌افزاری انواع خودروهای داخلی و وارداتی روی داینامومتر ۴ چرخ. افزایش چشمگیر شتاب، حذف تاخیر دریچه گاز و کاهش دمای موتور با ضمانت کتبی.",
    hero_btn_calc: "تست و محاسبه توان خودروی شما",
    hero_btn_book: "رزرو نوبت ریمپ با بیعانه",
    hero_stat_cars: "+۳۵۰۰ خودروی ریمپ شده",
    hero_stat_satisfaction: "۹۹.۴٪ رضایت مشتریان",
    hero_stat_warranty: "۳۰ روز ضمانت بازگشت وجه",

    calc_title: "محاسبه‌گر آنلاین افزایش توان و گشتاور",
    calc_subtitle: "مدل خودروی خود را انتخاب کنید تا توان فابریک و افزایش قدرت پس از ریمپ استیج ۱ و ۲ را به همراه نمودار داینو مشاهده کنید.",
    calc_select_car: "انتخاب خودرو و موتور:",
    calc_select_stage: "انتخاب استیج تیونینگ:",
    calc_stock_power: "توان استاندارد (کارخانه):",
    calc_tuned_power: "توان پس از ریمپ ریس‌لاین:",
    calc_gain: "میزان افزایش خالص:",
    calc_torque_gain: "افزایش گشتاور:",
    calc_hp: "اسب بخار",
    calc_nm: "نیوتن‌متر",
    calc_notes: "تغییرات و نتایج ریمپ روی این خودرو:",

    services_title: "پکیج‌های تخصصی تیونینگ و کالیبراسیون",
    services_subtitle: "کلیه خدمات با نرم‌افزارهای اورجینال اروپایی و لاگ‌گیری دقیق سنسورها انجام می‌شود.",

    booking_title: "رزرو نوبت ریمپ و تست داینو",
    booking_subtitle: "جهت رزرو قطعی نوبت و تخصیص تایم داینامومتر، پرداخت مبلغ ۱,۰۰۰,۰۰۰ تومان بیعانه الزامی است که از هزینه نهایی کسر خواهد شد.",
    booking_form_name: "نام و نام خانوادگی:",
    booking_form_phone: "شماره تماس همراه:",
    booking_form_car: "مدل خودرو و سال ساخت:",
    booking_form_service: "نوع خدمات مورد نیاز:",
    booking_form_date: "تاریخ مورد نظر:",
    booking_form_time: "ساعت مراجعه:",
    booking_deposit_label: "مبلغ بیعانه رزرو نوبت:",
    booking_deposit_val: "۱,۰۰۰,۰۰۰ تومان (پرداخت امن با زرین‌پال)",
    booking_btn_pay: "پرداخت ۱,۰۰۰,۰۰۰ تومان بیعانه و ثبت نوبت در زرین‌پال 💳",

    shop_title: "فروشگاه تخصصی لوازم تیونینگ و مپ‌های نرم‌افزاری",
    shop_subtitle: "خرید مستقیم قطعات اورجینال، داون‌پایپ‌های استیل، کیت‌های مکش و پکیج‌های نرم‌افزاری ریمپ.",
    shop_tab_all: "همه محصولات",
    shop_tab_software: "فایل و مپ",
    shop_tab_hardware: "قطعات تقویتی",
    shop_tab_tools: "تجهیزات دیاگ",
    shop_tab_merch: "اکسسوری و لباس",
    shop_add_to_cart: "افزودن به سبد خرید",
    shop_in_stock: "موجود در انبار",
    shop_price_unit: "تومان",

    projects_title: "گالری پروژه‌ها و نتایج داینو",
    projects_subtitle: "تعدادی از جدیدترین خودروهای کالیبره شده در مرکز ریس‌لاین ریمپ.",

    cart_title: "سبد خرید شما",
    cart_empty: "سبد خرید شما در حال حاضر خالی است.",
    cart_total: "مبلغ کل قابل پرداخت:",
    cart_checkout_zp: "پرداخت آنلاین با زرین‌پال 💳",
    cart_checkout_wa: "ثبت و ارسال سفارش در واتساپ 📲",

    footer_about: "مرکز تخصصی تیونینگ و کالیبراسیون خودرو ریس‌لاین ریمپ. ارائه خدمات فوق تخصصی ریمپ ایسیو، تیونینگ داینو، فروش قطعات افترمارکت و دوره‌های آموزشی.",
    footer_quick_links: "دسترسی سریع",
    footer_instagram_follow: "ما را در اینستاگرام دنبال کنید:",
    footer_rights: "تمامی حقوق مادی و معنوی برای ریس‌لاین ریمپ (Raceline Remap) محفوظ است."
  },

  en: {
    nav_home: "Home",
    nav_calculator: "Dyno Calculator",
    nav_services: "Tuning Services",
    nav_booking: "Book Appointment",
    nav_shop: "Online Shop",
    nav_projects: "Projects",
    nav_contact: "Contact Us",
    nav_admin: "Admin Panel",
    nav_login: "Login / Register",
    nav_logout: "Logout",
    nav_portal: "My Account",

    hero_badge: "🔥 Premier Automotive ECU Calibration & Dyno Center",
    hero_title: "Unleash Maximum Power with <span class='text-red-500 font-black'>Raceline Remap</span>",
    hero_desc: "Precision chassis dyno mapping and software calibration for domestic & import vehicles. Massive torque increase, instant throttle response and cooler running temperatures with a money-back warranty.",
    hero_btn_calc: "Calculate Your Car's Power",
    hero_btn_book: "Book Dyno Appointment",
    hero_stat_cars: "+3,500 Calibrated Cars",
    hero_stat_satisfaction: "99.4% Satisfied Drivers",
    hero_stat_warranty: "30-Day Guarantee",

    calc_title: "Interactive Dyno & Power Gain Calculator",
    calc_subtitle: "Select your car model to view stock output, dyno curves, and estimated gains across Stage 1 and Stage 2 tuning.",
    calc_select_car: "Select Vehicle & Engine:",
    calc_select_stage: "Select Tuning Stage:",
    calc_stock_power: "Stock Factory Output:",
    calc_tuned_power: "Raceline Tuned Output:",
    calc_gain: "Net Power Gain:",
    calc_torque_gain: "Net Torque Gain:",
    calc_hp: "HP",
    calc_nm: "Nm",
    calc_notes: "Tuning notes and custom adjustments for this platform:",

    services_title: "Specialized ECU Calibration Packages",
    services_subtitle: "All calibrations logged in real-time with European diagnostic tools and wideband sensors.",

    booking_title: "Book Dyno Tuning Appointment",
    booking_subtitle: "To secure your dedicated dyno bay slot, a 1,000,000 Tomans deposit is required, which will be deducted from your final bill.",
    booking_form_name: "Full Name:",
    booking_form_phone: "Phone Number:",
    booking_form_car: "Car Model & Year:",
    booking_form_service: "Service Required:",
    booking_form_date: "Preferred Date:",
    booking_form_time: "Preferred Time:",
    booking_deposit_label: "Booking Deposit Amount:",
    booking_deposit_val: "1,000,000 Tomans (Secure Zarinpal Payment)",
    booking_btn_pay: "Pay 1,000,000 Tomans & Book via Zarinpal 💳",

    shop_title: "Performance Parts & ECU Tuning Store",
    shop_subtitle: "Direct purchase of stainless steel downpipes, cold air intakes, tune map files, and official merchandise.",
    shop_tab_all: "All Products",
    shop_tab_software: "Software & Maps",
    shop_tab_hardware: "Performance Parts",
    shop_tab_tools: "Diagnostic Tools",
    shop_tab_merch: "Merch & Apparel",
    shop_add_to_cart: "Add to Cart",
    shop_in_stock: "In Stock",
    shop_price_unit: "Tomans",

    projects_title: "Dyno Projects & Customer Builds",
    projects_subtitle: "A showcase of recent custom tuning projects completed at Raceline Remap center.",

    cart_title: "Your Shopping Cart",
    cart_empty: "Your cart is currently empty.",
    cart_total: "Total Order Amount:",
    cart_checkout_zp: "Pay Online with Zarinpal 💳",
    cart_checkout_wa: "Send Order via WhatsApp 📲",

    footer_about: "Raceline Remap - Specialized ECU calibration, custom dyno tuning, aftermarket performance hardware and professional calibration solutions.",
    footer_quick_links: "Quick Navigation",
    footer_instagram_follow: "Follow our builds on Instagram:",
    footer_rights: "All rights reserved for Raceline Remap."
  }
};

class App {
  constructor() {
    this.lang = localStorage.getItem('raceline_lang') || 'fa';
    this.state = this.loadState();
    this.currentUser = this.loadUserSession();
    this.selectedCarId = 'dena-turbo';
    this.selectedStage = 1;
    this.selectedShopCategory = 'all';
    this.activeView = 'home'; // home, shop, admin, portal

    this.init();
  }

  // Persistent storage loader
  loadState() {
    const saved = localStorage.getItem('raceline_state_v1');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure admin user password is synchronized
        const adminUser = (parsed.users || []).find(u => u.username === 'admin');
        if (adminUser) {
          adminUser.password = 'fdmf1148';
        }
        return parsed;
      } catch (e) {
        console.error('State load error', e);
      }
    }
    // Initialize default seed
    const initial = {
      products: window.INITIAL_DATA.products,
      bookings: window.INITIAL_DATA.initialBookings,
      users: window.INITIAL_DATA.initialUsers,
      cart: [],
      orders: []
    };
    this.saveState(initial);
    return initial;
  }

  saveState(state) {
    this.state = state;
    localStorage.setItem('raceline_state_v1', JSON.stringify(state));
  }

  getState() {
    return this.state;
  }

  loadUserSession() {
    const saved = localStorage.getItem('raceline_session_user');
    return saved ? JSON.parse(saved) : null;
  }

  saveUserSession(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem('raceline_session_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('raceline_session_user');
    }
    this.updateUserUI();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.applyLanguage(this.lang);
      this.renderCarOptions();
      this.updateCalculator();
      this.renderServices();
      this.renderShop();
      this.renderProjects();
      this.updateCartUI();
      this.updateUserUI();
      this.setupEventListeners();
      
      // Auto-render icons
      if (window.lucide) {
        lucide.createIcons();
      }
    });
  }

  // Set Language and RTL/LTR Direction
  setLanguage(lang) {
    this.lang = lang;
    localStorage.setItem('raceline_lang', lang);
    this.applyLanguage(lang);
    this.renderCarOptions();
    this.updateCalculator();
    this.renderServices();
    this.renderShop();
    this.renderProjects();
    this.updateCartUI();
    if (window.adminCtrl) window.adminCtrl.render();
  }

  applyLanguage(lang) {
    const isRtl = lang === 'fa';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.body.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    const dict = TRANSLATIONS[lang] || TRANSLATIONS.fa;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
      langToggleBtn.innerHTML = lang === 'fa' ? '🇬🇧 English' : '🇮🇷 فارسی';
    }
  }

  t(key) {
    const dict = TRANSLATIONS[this.lang] || TRANSLATIONS.fa;
    return dict[key] || key;
  }

  formatPrice(amount) {
    const num = Number(amount) || 0;
    if (this.lang === 'fa') {
      return num.toLocaleString('fa-IR') + ' تومان';
    }
    return num.toLocaleString('en-US') + ' Tomans';
  }

  // Views navigation
  navigateTo(view) {
    this.activeView = view;
    const mainSections = document.getElementById('main-sections-wrapper');
    const adminSection = document.getElementById('admin-section-wrapper');
    const portalSection = document.getElementById('portal-section-wrapper');

    if (view === 'admin') {
      if (mainSections) mainSections.classList.add('hidden');
      if (portalSection) portalSection.classList.add('hidden');
      if (adminSection) adminSection.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.adminCtrl) window.adminCtrl.render();
    } else if (view === 'portal') {
      if (mainSections) mainSections.classList.add('hidden');
      if (adminSection) adminSection.classList.add('hidden');
      if (portalSection) portalSection.classList.remove('hidden');
      this.renderCustomerPortal();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (mainSections) mainSections.classList.remove('hidden');
      if (adminSection) adminSection.classList.add('hidden');
      if (portalSection) portalSection.classList.add('hidden');
      if (view === 'shop') {
        const shopEl = document.getElementById('shop-section');
        if (shopEl) shopEl.scrollIntoView({ behavior: 'smooth' });
      } else if (view === 'calculator') {
        const calcEl = document.getElementById('calculator-section');
        if (calcEl) calcEl.scrollIntoView({ behavior: 'smooth' });
      } else if (view === 'booking') {
        const bookEl = document.getElementById('booking-section');
        if (bookEl) bookEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    if (window.lucide) lucide.createIcons();
  }

  // -------------------------------------------------------------
  // CALCULATOR & DYNO GRAPH
  // -------------------------------------------------------------
  renderCarOptions() {
    const select = document.getElementById('calc-car-select');
    if (!select) return;

    select.innerHTML = window.INITIAL_DATA.carDatabase.map(car => {
      const title = this.lang === 'fa' ? `${car.model} (${car.engine})` : `${car.modelEn} (${car.engine})`;
      return `<option value="${car.id}" ${car.id === this.selectedCarId ? 'selected' : ''}>${title}</option>`;
    }).join('');
  }

  onCarChange(carId) {
    this.selectedCarId = carId;
    this.updateCalculator();
  }

  onStageChange(stage) {
    this.selectedStage = Number(stage);
    document.querySelectorAll('.stage-btn').forEach(btn => {
      const btnStage = Number(btn.getAttribute('data-stage'));
      if (btnStage === this.selectedStage) {
        btn.classList.add('bg-red-600', 'text-white', 'border-red-500', 'shadow-lg', 'shadow-red-600/30');
        btn.classList.remove('bg-slate-900/80', 'text-slate-400', 'border-white/10');
      } else {
        btn.classList.remove('bg-red-600', 'text-white', 'border-red-500', 'shadow-lg', 'shadow-red-600/30');
        btn.classList.add('bg-slate-900/80', 'text-slate-400', 'border-white/10');
      }
    });
    this.updateCalculator();
  }

  updateCalculator() {
    const car = window.INITIAL_DATA.carDatabase.find(c => c.id === this.selectedCarId);
    if (!car) return;

    let targetHp = car.stockHp;
    let targetTorque = car.stockTorque;

    if (this.selectedStage === 1) {
      targetHp = car.stage1Hp;
      targetTorque = car.stage1Torque;
    } else if (this.selectedStage === 2) {
      targetHp = car.stage2Hp;
      targetTorque = car.stage2Torque;
    }

    const hpGain = targetHp - car.stockHp;
    const torqueGain = targetTorque - car.stockTorque;
    const hpPercent = Math.round((hpGain / car.stockHp) * 100);

    // Update DOM
    const stockHpEl = document.getElementById('calc-stock-hp');
    const tunedHpEl = document.getElementById('calc-tuned-hp');
    const hpGainEl = document.getElementById('calc-hp-gain');
    const torqueGainEl = document.getElementById('calc-torque-gain');
    const notesEl = document.getElementById('calc-car-notes');
    const carImageEl = document.getElementById('calc-car-image');

    if (stockHpEl) stockHpEl.innerText = `${car.stockHp} ${this.t('calc_hp')}`;
    if (tunedHpEl) tunedHpEl.innerText = `${targetHp} ${this.t('calc_hp')}`;
    if (hpGainEl) hpGainEl.innerText = `+${hpGain} ${this.t('calc_hp')} (${hpPercent}+ %)`;
    if (torqueGainEl) torqueGainEl.innerText = `+${torqueGain} ${this.t('calc_nm')}`;
    if (notesEl) notesEl.innerText = car.notesFa;
    if (carImageEl) carImageEl.src = car.image;

    this.drawDynoGraph(car.stockHp, targetHp, car.stockTorque, targetTorque);
  }

  // HTML5 Canvas Dyno Curve Drawing
  drawDynoGraph(stockHp, tunedHp, stockTq, tunedTq) {
    const canvas = document.getElementById('dyno-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.parentElement.clientWidth || 600;
    const height = canvas.parentElement.clientHeight || 280;

    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 40; x < width - 20; x += (width - 60) / 6) {
      ctx.beginPath();
      ctx.moveTo(x, 20);
      ctx.lineTo(x, height - 35);
      ctx.stroke();
    }
    for (let y = 30; y < height - 30; y += (height - 60) / 4) {
      ctx.beginPath();
      ctx.moveTo(40, y);
      ctx.lineTo(width - 20, y);
      ctx.stroke();
    }

    // RPM Labels at bottom
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Orbitron, sans-serif';
    ctx.textAlign = 'center';
    const rpms = ['1500', '2500', '3500', '4500', '5500', '6500', '7200'];
    rpms.forEach((rpm, index) => {
      const x = 40 + (index * ((width - 60) / (rpms.length - 1)));
      ctx.fillText(rpm, x, height - 15);
    });

    const maxVal = Math.max(tunedHp, tunedTq) * 1.15;
    const mapY = (val) => (height - 35) - (val / maxVal) * (height - 70);

    // 1. Stock HP Curve (Dashed Grey)
    this.drawCurve(ctx, width, height, [
      stockHp * 0.25, stockHp * 0.45, stockHp * 0.70, stockHp * 0.90, stockHp * 0.98, stockHp * 0.92, stockHp * 0.80
    ], mapY, '#94a3b8', [5, 5], 2);

    // 2. Tuned HP Curve (Neon Red Glow)
    this.drawCurve(ctx, width, height, [
      tunedHp * 0.30, tunedHp * 0.55, tunedHp * 0.82, tunedHp * 0.96, tunedHp * 1.00, tunedHp * 0.97, tunedHp * 0.88
    ], mapY, '#ef4444', [], 3.5, true);

    // 3. Tuned Torque Curve (Amber)
    this.drawCurve(ctx, width, height, [
      tunedTq * 0.45, tunedTq * 0.85, tunedTq * 1.00, tunedTq * 0.95, tunedTq * 0.82, tunedTq * 0.68, tunedTq * 0.52
    ], mapY, '#f59e0b', [], 2.5);
  }

  drawCurve(ctx, width, height, dataPoints, mapY, color, lineDash = [], lineWidth = 2, hasGlow = false) {
    ctx.save();
    ctx.beginPath();
    ctx.setLineDash(lineDash);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    if (hasGlow) {
      ctx.shadowColor = 'rgba(239, 68, 68, 0.8)';
      ctx.shadowBlur = 12;
    }

    const step = (width - 60) / (dataPoints.length - 1);
    dataPoints.forEach((val, i) => {
      const x = 40 + i * step;
      const y = mapY(val);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        const prevX = 40 + (i - 1) * step;
        const prevY = mapY(dataPoints[i - 1]);
        const cpX1 = prevX + step / 2;
        const cpX2 = prevX + step / 2;
        ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y);
      }
    });
    ctx.stroke();
    ctx.restore();
  }

  // -------------------------------------------------------------
  // SERVICES RENDERER
  // -------------------------------------------------------------
  renderServices() {
    const container = document.getElementById('services-grid');
    if (!container) return;

    container.innerHTML = window.INITIAL_DATA.services.map(svc => `
      <div class="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition duration-300">
              <i data-lucide="${svc.icon}" class="w-6 h-6"></i>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 border border-amber-500/20 text-amber-400">
              ${this.lang === 'fa' ? svc.badgeFa : svc.badgeEn}
            </span>
          </div>

          <h3 class="text-lg font-black text-white group-hover:text-red-400 transition mb-2">
            ${this.lang === 'fa' ? svc.titleFa : svc.titleEn}
          </h3>
          <p class="text-xs text-slate-400 leading-relaxed mb-4">
            ${this.lang === 'fa' ? svc.descFa : svc.descEn}
          </p>
        </div>

        <div class="pt-4 border-t border-white/10 flex items-center justify-between">
          <div class="text-sm font-black text-emerald-400">
            ${this.formatPrice(svc.price)}
          </div>
          <button onclick="window.app.selectServiceAndBook('${svc.id}')" class="px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white text-xs font-bold transition flex items-center gap-1.5">
            رزرو این پکیج <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
  }

  // -------------------------------------------------------------
  // ONLINE STORE
  // -------------------------------------------------------------
  renderShop() {
    const container = document.getElementById('shop-products-grid');
    if (!container) return;

    const filtered = this.selectedShopCategory === 'all' 
      ? this.state.products 
      : this.state.products.filter(p => p.category === this.selectedShopCategory);

    container.innerHTML = filtered.map(p => `
      <div class="glass-panel glass-panel-hover rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group">
        <div class="relative overflow-hidden aspect-video bg-slate-900">
          <img src="${p.image}" alt="${p.nameFa}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <span class="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-bold rounded-lg bg-black/70 backdrop-blur border border-white/10 text-white">
            ${this.lang === 'fa' ? p.categoryFa : p.categoryEn}
          </span>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-1 text-amber-400 text-xs font-bold mb-1.5">
              <span>★</span> <span>${p.rating}</span>
              <span class="text-slate-500 font-normal">(${p.reviewsCount} نظر)</span>
            </div>
            <h4 class="text-sm font-bold text-white group-hover:text-red-400 transition line-clamp-2 mb-2">
              ${this.lang === 'fa' ? p.nameFa : p.nameEn}
            </h4>
            <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
              ${p.descFa}
            </p>
          </div>

          <div class="pt-3 border-t border-white/10 flex items-center justify-between">
            <div class="text-sm font-black text-white">
              ${this.formatPrice(p.price)}
            </div>
            <button onclick="window.app.addToCart('${p.id}')" class="px-3.5 py-2 bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-lg shadow-red-600/20">
              <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
              ${this.t('shop_add_to_cart')}
            </button>
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
  }

  filterShop(cat) {
    this.selectedShopCategory = cat;
    document.querySelectorAll('.shop-cat-btn').forEach(btn => {
      if (btn.getAttribute('data-cat') === cat) {
        btn.classList.add('bg-red-600', 'text-white', 'border-red-500');
        btn.classList.remove('bg-slate-900/80', 'text-slate-400', 'border-white/10');
      } else {
        btn.classList.remove('bg-red-600', 'text-white', 'border-red-500');
        btn.classList.add('bg-slate-900/80', 'text-slate-400', 'border-white/10');
      }
    });
    this.renderShop();
  }

  // -------------------------------------------------------------
  // CART SYSTEM
  // -------------------------------------------------------------
  addToCart(productId) {
    const product = this.state.products.find(p => p.id === productId);
    if (!product) return;

    const existing = this.state.cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.state.cart.push({ ...product, quantity: 1 });
    }

    this.saveState(this.state);
    this.updateCartUI();
    this.showToast(`محصول "${product.nameFa}" به سبد خرید اضافه شد.`, 'success');
  }

  updateCartQty(productId, delta) {
    const item = this.state.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.state.cart = this.state.cart.filter(i => i.id !== productId);
    }
    this.saveState(this.state);
    this.updateCartUI();
  }

  updateCartUI() {
    const cartCountEl = document.getElementById('cart-count-badge');
    const drawerListEl = document.getElementById('cart-items-list');
    const drawerTotalEl = document.getElementById('cart-total-amount');

    const count = this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = this.state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartCountEl) {
      cartCountEl.innerText = count;
      cartCountEl.classList.toggle('hidden', count === 0);
    }

    if (drawerTotalEl) {
      drawerTotalEl.innerText = this.formatPrice(total);
    }

    if (drawerListEl) {
      if (this.state.cart.length === 0) {
        drawerListEl.innerHTML = `
          <div class="text-center py-12 text-slate-500">
            <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto mb-3 opacity-30"></i>
            <p class="text-sm">${this.t('cart_empty')}</p>
          </div>
        `;
      } else {
        drawerListEl.innerHTML = this.state.cart.map(item => `
          <div class="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5 gap-3">
            <img src="${item.image}" alt="${item.nameFa}" class="w-14 h-14 rounded-lg object-cover bg-slate-800 flex-shrink-0">
            <div class="flex-1 min-w-0">
              <h5 class="text-xs font-bold text-white truncate">${this.lang === 'fa' ? item.nameFa : item.nameEn}</h5>
              <div class="text-xs text-emerald-400 font-semibold mt-1">${this.formatPrice(item.price)}</div>
            </div>
            <div class="flex items-center gap-2 bg-slate-800/80 px-2 py-1 rounded-lg border border-white/10">
              <button onclick="window.app.updateCartQty('${item.id}', -1)" class="text-slate-400 hover:text-white font-bold text-xs px-1">-</button>
              <span class="text-xs font-bold text-white font-mono">${item.quantity}</span>
              <button onclick="window.app.updateCartQty('${item.id}', 1)" class="text-slate-400 hover:text-white font-bold text-xs px-1">+</button>
            </div>
          </div>
        `).join('');
      }
      if (window.lucide) lucide.createIcons();
    }
  }

  toggleCartDrawer(open) {
    const drawer = document.getElementById('cart-drawer-backdrop');
    const panel = document.getElementById('cart-drawer-panel');
    if (!drawer || !panel) return;

    if (open) {
      drawer.classList.remove('hidden');
      setTimeout(() => panel.classList.add('translate-on'), 10);
    } else {
      panel.classList.remove('translate-on');
      setTimeout(() => drawer.classList.add('hidden'), 250);
    }
  }

  checkoutCartWithZarinpal() {
    if (this.state.cart.length === 0) {
      this.showToast('سبد خرید شما خالی است.', 'error');
      return;
    }

    const total = this.state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

    this.toggleCartDrawer(false);
    this.openZarinpalPaymentModal({
      title: 'پرداخت سفارش فروشگاه ریس‌لاین ریمپ',
      amount: total,
      type: 'store_order',
      referenceId: orderId,
      items: [...this.state.cart]
    });
  }

  checkoutCartWithWhatsApp() {
    if (this.state.cart.length === 0) {
      this.showToast('سبد خرید شما خالی است.', 'error');
      return;
    }

    const total = this.state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let message = `سلام، قصد خرید اقلام زیر از فروشگاه ریس‌لاین ریمپ را دارم:%0A%0A`;
    this.state.cart.forEach((i, idx) => {
      message += `${idx + 1}. ${i.nameFa} (${i.quantity} عدد) - ${this.formatPrice(i.price * i.quantity)}%0A`;
    });
    message += `%0Aمبلغ کل: ${this.formatPrice(total)}%0Aلطفا شرایط پرداخت و ارسال را بفرمایید.`;

    window.open(`https://wa.me/989187351735?text=${message}`, '_blank');
  }

  // -------------------------------------------------------------
  // BOOKING WITH 1,000,000 TOMAN DEPOSIT & ZARINPAL FLOW
  // -------------------------------------------------------------
  selectServiceAndBook(serviceId) {
    const service = window.INITIAL_DATA.services.find(s => s.id === serviceId);
    const select = document.getElementById('booking-service-select');
    if (select && service) {
      select.value = service.titleFa;
    }
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleBookingFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('book-name').value.trim();
    const phone = document.getElementById('book-phone').value.trim();
    const car = document.getElementById('book-car').value.trim();
    const year = document.getElementById('book-year').value.trim();
    const service = document.getElementById('booking-service-select').value;
    const date = document.getElementById('book-date').value.trim();
    const time = document.getElementById('book-time').value.trim();

    if (!name || !phone || !car || !date) {
      this.showToast('لطفا تمامی فیلدهای الزامی را پر کنید.', 'error');
      return;
    }

    const bookingId = 'BOOK-' + Math.floor(1000 + Math.random() * 9000);
    const bookingData = {
      id: bookingId,
      customerName: name,
      customerPhone: phone,
      carModel: car,
      year: year || '1402',
      service: service,
      bookingDate: date,
      bookingTime: time || '12:00',
      depositPaid: window.INITIAL_DATA.brand.bookingDepositAmount,
      status: 'pending',
      createdAt: new Date().toLocaleDateString('fa-IR')
    };

    // Open Zarinpal Payment gateway modal for 1,000,000 Tomans
    this.openZarinpalPaymentModal({
      title: 'پرداخت بیعانه رزرو نوبت ریمپ و داینو',
      amount: window.INITIAL_DATA.brand.bookingDepositAmount,
      type: 'booking_deposit',
      referenceId: bookingId,
      bookingData: bookingData
    });
  }

  // -------------------------------------------------------------
  // ZARINPAL PAYMENT GATEWAY SIMULATION & VERIFICATION
  // -------------------------------------------------------------
  openZarinpalPaymentModal(paymentInfo) {
    this.currentPendingPayment = paymentInfo;
    const modal = document.getElementById('zarinpal-payment-modal');
    const amountEl = document.getElementById('zp-modal-amount');
    const titleEl = document.getElementById('zp-modal-title');
    const refEl = document.getElementById('zp-modal-ref');

    if (amountEl) amountEl.innerText = this.formatPrice(paymentInfo.amount);
    if (titleEl) titleEl.innerText = paymentInfo.title;
    if (refEl) refEl.innerText = paymentInfo.referenceId;

    // Reset step
    document.getElementById('zp-step-gateway').classList.remove('hidden');
    document.getElementById('zp-step-success').classList.add('hidden');

    if (modal) modal.classList.remove('hidden');
  }

  closeZarinpalModal() {
    const modal = document.getElementById('zarinpal-payment-modal');
    if (modal) modal.classList.add('hidden');
  }

  processZarinpalPaymentSimulation() {
    const payBtn = document.getElementById('zp-pay-submit-btn');
    if (payBtn) {
      payBtn.disabled = true;
      payBtn.innerHTML = `در حال اتصال به شاپرک و درگاه زرین‌پال... <span class="inline-block animate-spin">⏳</span>`;
    }

    setTimeout(() => {
      const refNumber = 'ZP-' + Date.now().toString().slice(-8);
      
      if (this.currentPendingPayment.type === 'booking_deposit') {
        const newBooking = {
          ...this.currentPendingPayment.bookingData,
          paymentRef: refNumber,
          paymentStatus: 'paid',
          status: 'confirmed'
        };
        this.state.bookings.unshift(newBooking);
        this.saveState(this.state);
      } else if (this.currentPendingPayment.type === 'store_order') {
        const newOrder = {
          id: this.currentPendingPayment.referenceId,
          total: this.currentPendingPayment.amount,
          items: this.currentPendingPayment.items,
          date: new Date().toLocaleDateString('fa-IR'),
          paymentRef: refNumber,
          customerName: this.currentUser ? this.currentUser.name : 'مشتری ریس‌لاین',
          phone: this.currentUser ? this.currentUser.phone : ''
        };
        this.state.orders.unshift(newOrder);
        this.state.cart = []; // clear cart
        this.saveState(this.state);
        this.updateCartUI();
      }

      // Show Success Screen
      document.getElementById('zp-step-gateway').classList.add('hidden');
      document.getElementById('zp-step-success').classList.remove('hidden');
      document.getElementById('zp-success-ref-id').innerText = refNumber;
      
      if (payBtn) {
        payBtn.disabled = false;
        payBtn.innerHTML = `پرداخت امن با کلیه کارت‌های عضو شتاب 💳`;
      }

      this.showToast('پرداخت با موفقیت انجام شد و نوبت شما تایید شد.', 'success');
      if (window.adminCtrl) window.adminCtrl.render();
    }, 1200);
  }

  // -------------------------------------------------------------
  // PROJECTS SHOWCASE
  // -------------------------------------------------------------
  renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    container.innerHTML = window.INITIAL_DATA.projects.map(proj => `
      <div class="glass-panel glass-panel-hover rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group">
        <div class="relative overflow-hidden aspect-video bg-slate-900">
          <img src="${proj.image}" alt="${proj.car}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="absolute bottom-3 right-3 left-3 flex items-center justify-between">
            <span class="text-xs font-bold text-white bg-red-600 px-2.5 py-1 rounded-lg">${proj.hpGain}</span>
            <span class="text-xs font-bold text-amber-400 bg-black/60 backdrop-blur px-2.5 py-1 rounded-lg font-racing">${proj.torqueGain}</span>
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h4 class="text-base font-bold text-white group-hover:text-red-400 transition mb-2">
              ${this.lang === 'fa' ? proj.titleFa : proj.titleEn}
            </h4>
            <p class="text-xs text-slate-400 leading-relaxed mb-4">
              ${proj.descFa}
            </p>
          </div>

          <div class="p-3 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between text-xs font-mono">
            <span class="text-slate-400">قبل: ${proj.beforeStats}</span>
            <span class="text-emerald-400 font-bold">بعد: ${proj.afterStats}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // -------------------------------------------------------------
  // AUTHENTICATION & CUSTOMER PORTAL
  // -------------------------------------------------------------
  openAuthModal(tab = 'login') {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;
    this.switchAuthTab(tab);
    modal.classList.remove('hidden');
  }

  closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.add('hidden');
  }

  switchAuthTab(tab) {
    const loginForm = document.getElementById('auth-login-form');
    const registerForm = document.getElementById('auth-register-form');
    const tabLoginBtn = document.getElementById('tab-btn-login');
    const tabRegisterBtn = document.getElementById('tab-btn-register');

    if (tab === 'login') {
      if (loginForm) loginForm.classList.remove('hidden');
      if (registerForm) registerForm.classList.add('hidden');
      tabLoginBtn.classList.add('text-red-500', 'border-red-500');
      tabLoginBtn.classList.remove('text-slate-400', 'border-transparent');
      tabRegisterBtn.classList.remove('text-red-500', 'border-red-500');
      tabRegisterBtn.classList.add('text-slate-400', 'border-transparent');
    } else {
      if (loginForm) loginForm.classList.add('hidden');
      if (registerForm) registerForm.classList.remove('hidden');
      tabRegisterBtn.classList.add('text-red-500', 'border-red-500');
      tabRegisterBtn.classList.remove('text-slate-400', 'border-transparent');
      tabLoginBtn.classList.remove('text-red-500', 'border-red-500');
      tabLoginBtn.classList.add('text-slate-400', 'border-transparent');
    }
  }

  handleLogin(e) {
    e.preventDefault();
    const u = document.getElementById('login-username').value.trim();
    const p = document.getElementById('login-password').value.trim();

    const user = this.state.users.find(x => x.username === u && x.password === p);
    if (!user) {
      this.showToast('نام کاربری یا رمز عبور اشتباه است.', 'error');
      return;
    }

    this.saveUserSession(user);
    this.closeAuthModal();
    this.showToast(`خوش آمدید ${user.name}!`, 'success');

    if (user.role === 'admin') {
      this.navigateTo('admin');
    } else {
      this.navigateTo('portal');
    }
  }

  handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const username = document.getElementById('reg-username').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const password = document.getElementById('reg-password').value.trim();

    if (!name || !username || !password) {
      this.showToast('لطفا همه فیلدها را پر کنید.', 'error');
      return;
    }

    const exists = this.state.users.some(x => x.username === username);
    if (exists) {
      this.showToast('این نام کاربری قبلا ثبت شده است.', 'error');
      return;
    }

    const newUser = {
      id: 'usr-' + Date.now(),
      username,
      password,
      name,
      phone,
      role: 'customer'
    };

    this.state.users.push(newUser);
    this.saveState(this.state);
    this.saveUserSession(newUser);
    this.closeAuthModal();
    this.showToast('حساب کاربری شما با موفقیت ایجاد شد.', 'success');
    this.navigateTo('portal');
  }

  quickDemoLogin(role) {
    if (role === 'admin') {
      document.getElementById('login-username').value = 'admin';
      document.getElementById('login-password').value = 'fdmf1148';
    } else {
      document.getElementById('login-username').value = 'driver';
      document.getElementById('login-password').value = '123456';
    }
  }

  logout() {
    this.saveUserSession(null);
    this.showToast('با موفقیت از حساب کاربری خارج شدید.', 'info');
    this.navigateTo('home');
    if (window.adminCtrl) window.adminCtrl.render();
  }

  updateUserUI() {
    const authBtn = document.getElementById('nav-auth-btn');
    const navLogoutBtn = document.getElementById('nav-logout-btn');
    const adminLink = document.getElementById('nav-admin-link');
    const mobileAdminLink = document.getElementById('mobile-admin-link');
    const mobileLogoutLink = document.getElementById('mobile-logout-link');

    if (this.currentUser) {
      if (authBtn) {
        authBtn.innerHTML = `
          <span class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            ${this.currentUser.name.split(' ')[0]} (${this.currentUser.role === 'admin' ? 'ادمین' : 'کاربر'})
          </span>
        `;
        authBtn.onclick = () => this.navigateTo(this.currentUser.role === 'admin' ? 'admin' : 'portal');
      }

      if (navLogoutBtn) {
        navLogoutBtn.classList.remove('hidden');
      }

      if (adminLink) {
        adminLink.classList.toggle('hidden', this.currentUser.role !== 'admin');
      }
      if (mobileAdminLink) {
        mobileAdminLink.classList.toggle('hidden', this.currentUser.role !== 'admin');
      }
      if (mobileLogoutLink) {
        mobileLogoutLink.classList.remove('hidden');
      }
    } else {
      if (authBtn) {
        authBtn.innerHTML = `<i data-lucide="user" class="w-4 h-4"></i> ${this.t('nav_login')}`;
        authBtn.onclick = () => this.openAuthModal('login');
      }
      if (navLogoutBtn) {
        navLogoutBtn.classList.add('hidden');
      }
      if (adminLink) adminLink.classList.add('hidden');
      if (mobileAdminLink) mobileAdminLink.classList.add('hidden');
      if (mobileLogoutLink) mobileLogoutLink.classList.add('hidden');
    }

    if (window.lucide) lucide.createIcons();
  }

  // Customer Portal Renderer
  renderCustomerPortal() {
    const container = document.getElementById('portal-content-area');
    if (!container) return;

    if (!this.currentUser) {
      this.navigateTo('home');
      return;
    }

    const myBookings = this.state.bookings.filter(b => 
      (this.currentUser.phone && b.customerPhone === this.currentUser.phone) || 
      b.customerName === this.currentUser.name
    );

    container.innerHTML = `
      <div class="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 mb-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-white text-2xl font-black shadow-lg">
              ${this.currentUser.name.charAt(0)}
            </div>
            <div>
              <h2 class="text-2xl font-black text-white">${this.currentUser.name}</h2>
              <p class="text-xs text-slate-400 mt-1 font-mono">@${this.currentUser.username} | تلفن: ${this.currentUser.phone || '-'}</p>
            </div>
          </div>
          <button onclick="window.app.logout()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-red-600/20 text-slate-300 hover:text-red-400 text-xs font-bold transition flex items-center gap-1.5 self-start">
            <i data-lucide="log-out" class="w-4 h-4"></i> خروج از حساب
          </button>
        </div>

        <!-- My Bookings & Dyno Appointments -->
        <div class="mt-8">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-bold text-white flex items-center gap-2">
              <i data-lucide="calendar" class="w-5 h-5 text-red-500"></i>
              نوبت‌های رزرو ریمپ و داینو شما
            </h3>
            <button onclick="window.app.navigateTo('booking')" class="text-xs text-red-400 hover:underline">
              + ثبت نوبت جدید
            </button>
          </div>

          <div class="space-y-3">
            ${myBookings.length === 0 ? `
              <div class="text-center py-8 rounded-2xl bg-slate-900/40 border border-white/5 text-slate-400 text-sm">
                شما هنوز هیچ نوبتی با بیعانه ثبت نکرده‌اید.
              </div>
            ` : myBookings.map(b => `
              <div class="p-5 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded text-[11px] font-bold ${b.status === 'confirmed' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'}">
                      ${b.status === 'confirmed' ? 'تایید شده ✅' : 'در انتظار'}
                    </span>
                    <h4 class="font-bold text-white text-base">${b.carModel} (${b.year})</h4>
                  </div>
                  <div class="text-xs text-slate-400 mt-2">
                    سرویس: <b class="text-slate-200">${b.service}</b> | تاریخ و ساعت: <b class="text-red-400 font-mono">${b.bookingDate} - ${b.bookingTime}</b>
                  </div>
                </div>

                <div class="flex items-center gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-white/10">
                  <div>
                    <div class="text-xs text-slate-400">بیعانه واریز شده:</div>
                    <div class="text-sm font-bold text-emerald-400 font-mono">${window.app.formatPrice(b.depositPaid)}</div>
                    <div class="text-[10px] text-slate-500 font-mono">پیگیری: ${b.paymentRef}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    if (window.lucide) lucide.createIcons();
  }

  // -------------------------------------------------------------
  // TOAST NOTIFICATIONS
  // -------------------------------------------------------------
  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    const isError = type === 'error';
    const isSuccess = type === 'success';

    toast.className = `fixed bottom-6 ${this.lang === 'fa' ? 'left-6' : 'right-6'} z-50 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-bold text-white transition transform duration-300 border ${
      isError 
        ? 'bg-red-950/90 border-red-500 text-red-100 shadow-red-500/20' 
        : isSuccess 
          ? 'bg-emerald-950/90 border-emerald-500 text-emerald-100 shadow-emerald-500/20' 
          : 'bg-slate-900/90 border-slate-700 text-slate-100'
    }`;

    toast.innerHTML = `
      <span>${isSuccess ? '✅' : isError ? '⚠️' : 'ℹ️'}</span>
      <span>${message}</span>
    `;

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  setupEventListeners() {
    // Mobile Drawer Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const closeMobileDrawer = document.getElementById('close-mobile-drawer');

    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.addEventListener('click', () => mobileDrawer.classList.remove('hidden'));
    }
    if (closeMobileDrawer && mobileDrawer) {
      closeMobileDrawer.addEventListener('click', () => mobileDrawer.classList.add('hidden'));
    }

    // Dyno chart responsive resize
    window.addEventListener('resize', () => {
      if (window.app && window.app.updateCalculator) {
        window.app.updateCalculator();
      }
    });
  }
}

// Global instance
window.app = new App();
