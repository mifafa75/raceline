/**
 * Raceline Remap - Core Database & Initial State
 * Brand: مرکز تخصصی ریمپ ریس لاین (@raceline_remap)
 */

const INITIAL_DATA = {
  brand: {
    name: "Raceline Remap",
    nameFa: "مرکز تخصصی ریمپ ریس لاین",
    title: "مرکز تخصصی ریمپ ریس لاین",
    tagline: "تخصصی‌ترین مرکز ریمپ و کالیبراسیون داینو در کرمانشاه و غرب کشور",
    taglineEn: "Premier ECU Calibration & Dyno Tuning Center",
    instagram: "raceline_remap",
    instagramUrl: "https://instagram.com/raceline_remap",
    phone: "09187351735",
    phoneDisplay: "0918 735 1735",
    whatsappUrl: "https://wa.me/989187351735",
    addressFa: "کرمانشاه، صد متر بعد از پل امام حسین به سمت پل لب آب",
    addressEn: "100 meters after Imam Hossein Bridge towards Lab-e Ab Bridge, Kermanshah, Iran",
    logo: "assets/img/logo.jpg",
    bookingDepositAmount: 1000000, // 1,000,000 Tomans
    zarinpalMerchantId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  },

  // Tuning database with real automotive data (HP / Torque gains)
  carDatabase: [
    {
      id: "dena-turbo",
      brand: "IKCO",
      model: "دنا پلاس توربو (EF7-TC)",
      modelEn: "Dena Plus Turbo (EF7-TC)",
      engine: "1.7L Turbocharged (16V)",
      ecu: "Bosch ME17 / Kesens",
      stockHp: 150,
      stockTorque: 215,
      stage1Hp: 185,
      stage1Torque: 270,
      stage2Hp: 210,
      stage2Torque: 310,
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
      notesFa: "رفع تاخیر توربو، کاهش دمای آب، حذف ناک، بهبود شتاب ۰ تا ۱۰۰ تا ۲.۵ ثانیه"
    },
    {
      id: "peugeot-207-tu5",
      brand: "Peugeot",
      model: "پژو 206 / 207 (TU5)",
      modelEn: "Peugeot 206 / 207 (TU5)",
      engine: "1.6L 16V TU5",
      ecu: "Bosch ME7.4.5 / Easy-U / Crouse",
      stockHp: 105,
      stockTorque: 142,
      stage1Hp: 118,
      stage1Torque: 160,
      stage2Hp: 130,
      stage2Torque: 175,
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
      notesFa: "رفع تاخیر دریچه گاز برقی، کاهش دمای فن، افزایش کات‌آف به ۷۰۰۰، شتاب خیره‌کننده"
    },
    {
      id: "pars-elx",
      brand: "Peugeot",
      model: "پژو پارس ELX / XU7P",
      modelEn: "Peugeot Pars ELX / XU7P",
      engine: "1.8L XU7P / XUM",
      ecu: "SSAT / Sagem / Siemens",
      stockHp: 97,
      stockTorque: 146,
      stage1Hp: 112,
      stage1Torque: 165,
      stage2Hp: 122,
      stage2Torque: 178,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      notesFa: "کاهش مصرف سوخت، رفع کپ سرگاز، افزایش چشمگیر کشش در دنده‌های سبک"
    },
    {
      id: "tara-tu5p",
      brand: "IKCO",
      model: "تارا دنده‌ای و اتوماتیک (TU5P)",
      modelEn: "Tara MT/AT (TU5P)",
      engine: "1.6L TU5P (CVVT)",
      ecu: "Bosch ME17 / Kesens",
      stockHp: 113,
      stockTorque: 144,
      stage1Hp: 126,
      stage1Torque: 163,
      stage2Hp: 138,
      stage2Torque: 178,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
      notesFa: "هماهنگی دقیق با گیربکس اتوماتیک 6 سرعته، معکوس‌کشی سریع‌تر و رفع تنبلی دنده"
    },
    {
      id: "shahin-turbo",
      brand: "Saipa",
      model: "شاهین توربو (M15-TC)",
      modelEn: "Saipa Shahin Turbo (M15-TC)",
      engine: "1.5L 8V Turbo",
      ecu: "Bosch ME17",
      stockHp: 110,
      stockTorque: 178,
      stage1Hp: 135,
      stage1Torque: 215,
      stage2Hp: 150,
      stage2Torque: 240,
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
      notesFa: "لود سریع‌تر بوست توربو از دور موتور پایین، اصلاح سوخت و جرقه، توان خروجی پرقدرت"
    },
    {
      id: "quick-saina",
      brand: "Saipa",
      model: "کوییک / ساینا / تیبا (M15)",
      modelEn: "Quick / Saina / Tiba (M15)",
      engine: "1.5L 8V M15",
      ecu: "Easy-U / Crouse / Maw",
      stockHp: 87,
      stockTorque: 128,
      stage1Hp: 98,
      stage1Torque: 144,
      stage2Hp: 106,
      stage2Torque: 154,
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      notesFa: "رفع ناک بنزین، نرم‌تر شدن کارکرد موتور، رفع لرزش در سربالایی با کولر"
    },
    {
      id: "genesis-coupe",
      brand: "Hyundai",
      model: "هیوندای جنسیس کوپه 3.8",
      modelEn: "Hyundai Genesis Coupe 3.8",
      engine: "3.8L V6 Lambda",
      ecu: "Siemens SIM2K-241",
      stockHp: 306,
      stockTorque: 361,
      stage1Hp: 335,
      stage1Torque: 395,
      stage2Hp: 360,
      stage2Torque: 425,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
      notesFa: "تنظیم تخصصی لانچ کنترل، هاردکات، پاپ اند بنگ شعله‌دار، باز شدن کامل تراتل"
    },
    {
      id: "bmw-328i",
      brand: "BMW",
      model: "بی ام و 328i / 428i (موتور N20)",
      modelEn: "BMW 328i / 428i (N20 Turbo)",
      engine: "2.0L TwinPower Turbo",
      ecu: "Bosch MEVD17.2.9",
      stockHp: 245,
      stockTorque: 350,
      stage1Hp: 295,
      stage1Torque: 425,
      stage2Hp: 325,
      stage2Torque: 470,
      image: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=800&q=80",
      notesFa: "کالیبراسیون مپ بوست توربو، بهینه‌سازی تایمینگ سوپاپ VANOS، برابری با سری M Power"
    },
    {
      id: "benz-c200",
      brand: "Mercedes-Benz",
      model: "مرسدس بنز C200 / E200 (موتور M274)",
      modelEn: "Mercedes-Benz C200 / E200 (M274)",
      engine: "2.0L Turbo",
      ecu: "Bosch MED17.7.2",
      stockHp: 184,
      stockTorque: 300,
      stage1Hp: 240,
      stage1Torque: 380,
      stage2Hp: 265,
      stage2Torque: 420,
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
      notesFa: "برنامه‌ریزی نسخه C300 بر روی ECU اورجینال، هماهنگی کامل با گیربکس 7G/9G Tronic"
    }
  ],

  // Services offered
  services: [
    {
      id: "stage-1",
      icon: "zap",
      titleFa: "ریمپ استیج ۱ (نرم‌افزاری)",
      titleEn: "Stage 1 ECU Calibration",
      descFa: "افزایش توان و گشتاور تا ۲۵٪ روی قطعات کاملا فابریک موتور با سوخت استاندارد، رفع تاخیر پدال گاز و تنظیم دمای آب.",
      descEn: "Up to 25% power & torque gain on 100% stock engine components with improved throttle response & thermals.",
      price: 2500000,
      badgeFa: "محبوب‌ترین",
      badgeEn: "Most Popular"
    },
    {
      id: "stage-2",
      icon: "flame",
      titleFa: "ریمپ استیج ۲ (داون‌پایپ + کیت مکش)",
      titleEn: "Stage 2 Custom Dyno Tune",
      descFa: "کالیبراسیون اختصاصی روی داینو برای خودروهای مجهز به هدرز، داون‌پایپ و کیت مکش با راندمان حداکثری.",
      descEn: "Custom dyno-calibrated software tailored for vehicles with upgraded intake and downpipe/headers.",
      price: 4200000,
      badgeFa: "عملکرد بالا",
      badgeEn: "High Output"
    },
    {
      id: "pop-bang",
      icon: "volume-2",
      titleFa: "پاپ اند بنگ و بک‌فایر (Pop & Bang)",
      titleEn: "Pops & Bangs / Burble & Flame",
      descFa: "فعالسازی صدای انفجاری اگزوز و شعله در هنگام رها کردن گاز به صورت کاملا ایمن و تنظیم شده در کات‌آف.",
      descEn: "Sport exhaust crackles, overrun burbles and flame mapping tuned safely in deceleration zones.",
      price: 1800000,
      badgeFa: "صدای اسپرت",
      badgeEn: "Sport Sound"
    },
    {
      id: "dyno-tune",
      icon: "gauge",
      titleFa: "تیونینگ و تست توان روی داینامومتر",
      titleEn: "Chassis Dyno Power Runs & Logging",
      descFa: "ثبت دقیق نمودار گشتاور و اسب بخار چرخ، آنالیز نسبت هوا به سوخت (AFR) و کالیبراسیون میلی‌متری.",
      descEn: "Accurate wheel horsepower and torque logging, AFR wideband analysis, and fine precision mapping.",
      price: 1500000,
      badgeFa: "دقت بالا",
      badgeEn: "Precision"
    },
    {
      id: "decat-egr",
      icon: "shield-alert",
      titleFa: "حذف نرم‌افزاری سنسور اکسیژن ۲ و کاتالیزور",
      titleEn: "Decat / Lambda 2 / EGR / DPF Delete",
      descFa: "حذف خطای سنسور اکسیژن دوم پس از نصب هدرز، حذف خطای کاتالیزور و رفع خطای سیستم سوپاپ دود.",
      descEn: "Software suppression of secondary O2/catalytic converter error codes and emission systems.",
      price: 1200000,
      badgeFa: "تخصصی",
      badgeEn: "Diagnostic"
    },
    {
      id: "hardcut-limiter",
      icon: "activity",
      titleFa: "کات‌آف رگباری و هاردکات (Hardcut)",
      titleEn: "Hardcut RPM Limiter & Launch Control",
      descFa: "تبدیل کات‌آف نرم به کات‌آف رگباری سریع مسابقه‌ای به همراه سیستم لانچ کنترل برای استارت سریع در پیست.",
      descEn: "Sharp ignition cut rev-limiter and launch control for maximum traction and standing starts.",
      price: 1400000,
      badgeFa: "ریس",
      badgeEn: "Race Spec"
    }
  ],

  // Store Products
  products: [
    {
      id: "prod-1",
      nameFa: "پکیج فایل ریمپ استیج ۱ تخصصی TU5 (ارسال فایل / پروگرم حضوری)",
      nameEn: "Stage 1 ECU Tune File - TU5 Engine",
      category: "software",
      categoryFa: "فایل و نرم‌افزار",
      categoryEn: "Software & Maps",
      price: 2500000,
      stock: 99,
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      reviewsCount: 38,
      descFa: "فایل اختصاصی ریمپ کالیبره شده روی داینو برای ایسیوهای بوش و کروز 206 و 207، افزایش 13 اسب بخار."
    },
    {
      id: "prod-2",
      nameFa: "داون‌پایپ تمام استیل 304 مخصوص دنا پلاس توربو و سمند سورن EF7",
      nameEn: "Stainless Steel 304 Downpipe - EF7 Turbo",
      category: "hardware",
      categoryFa: "قطعات تیونینگ",
      categoryEn: "Performance Parts",
      price: 6800000,
      stock: 7,
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80",
      rating: 5.0,
      reviewsCount: 22,
      descFa: "ساخته شده از لوله استیل 304 ضخیم ضد زنگ با جوش آرگون، کاهش لگ توربو و خروجی دود روان."
    },
    {
      id: "prod-3",
      nameFa: "کیت مکش هوای خنک کربن استایل به همراه فیلتر سیموتا (Simota)",
      nameEn: "Carbon Style Cold Air Intake Kit w/ Simota Filter",
      category: "hardware",
      categoryFa: "قطعات تیونینگ",
      categoryEn: "Performance Parts",
      price: 3400000,
      stock: 14,
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      reviewsCount: 19,
      descFa: "افزایش حجم هوای ورودی به منیفولد، خنک‌تر نگه داشتن هوای تنفسی و ایجاد صدای جذاب توربوشارژر."
    },
    {
      id: "prod-4",
      nameFa: "دانگل دیاگ و تعویض مپ OBD2 بلوتوث هوشمند Raceline Pro",
      nameEn: "Raceline Pro Smart OBD2 Diagnostic & Map Switcher",
      category: "tools",
      categoryFa: "تجهیزات دیاگ",
      categoryEn: "Tools & OBD",
      price: 4900000,
      stock: 12,
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      reviewsCount: 15,
      descFa: "اتصال به گوشی هوشمند برای خواندن و پاک کردن خطاها، مانیتورینگ زنده بوست، دمای آب و تغییر حالت رانندگی."
    },
    {
      id: "prod-5",
      nameFa: "هودی اورجینال ریس‌لاین ریمپ (کالکشن مسابقه‌ای 2026)",
      nameEn: "Raceline Remap Official Heavyweight Hoodie",
      category: "merch",
      categoryFa: "اکسسوری و پوشاک",
      categoryEn: "Merch & Apparel",
      price: 1850000,
      stock: 25,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      reviewsCount: 44,
      descFa: "پارچه سه نخ پنبه‌ای سنگین با لوگوی ژلاتینی باکیفیت ریس‌لاین، طرح پشت خودروهای مسابقه‌ای."
    },
    {
      id: "prod-6",
      nameFa: "پک پچ نرم‌افزاری پاپ اند بنگ و لانچ کنترل ایسیو زیمنس و بوش",
      nameEn: "Custom Pops & Bangs Software Addon Pack",
      category: "software",
      categoryFa: "فایل و نرم‌افزار",
      categoryEn: "Software & Maps",
      price: 1900000,
      stock: 99,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      reviewsCount: 61,
      descFa: "پچ آماده به همراه راهنمای پروگرم برای تیونرها و مالکان خودرو به همراه ۲ حالت صدای نرم و انفجاری."
    }
  ],

  // Initial projects showcase
  projects: [
    {
      id: "proj-1",
      titleFa: "ریمپ استیج ۲ دنا پلاس توربو اتوماتیک",
      titleEn: "Dena Plus Turbo AT - Stage 2 Custom Dyno Tune",
      car: "IKCO Dena+ Turbo 2023",
      hpGain: "+42 HP",
      torqueGain: "+78 Nm",
      beforeStats: "148 HP / 212 Nm",
      afterStats: "190 HP / 290 Nm",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
      descFa: "نصب داون‌پایپ استیل + کیت مکش + ریمپ داینو. صفر تا صد از ۱۱.۸ ثانیه به ۸.۶ ثانیه رسید."
    },
    {
      id: "proj-2",
      titleFa: "تیونینگ اختصاصی بی ام و 428i گرن کوپه",
      titleEn: "BMW 428i Gran Coupe - Stage 2 Bootmod3 Custom",
      car: "BMW 428i N20 Engine",
      hpGain: "+75 HP",
      torqueGain: "+115 Nm",
      beforeStats: "242 HP / 348 Nm",
      afterStats: "317 HP / 463 Nm",
      image: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=800&q=80",
      descFa: "کالیبراسیون بوست تا ۲۲ psi به همراه هاردکات آتشین و غیرفعالسازی سنسورهای کاتالیزور بدون خطا."
    },
    {
      id: "proj-3",
      titleFa: "پروژه ریمپ و لانچ کنترل پژو 207 MC موتور TU5P",
      titleEn: "Peugeot 207 MC (TU5P) - Stage 1 Plus & Launch",
      car: "Peugeot 207 MC 6-Speed",
      hpGain: "+18 HP",
      torqueGain: "+25 Nm",
      beforeStats: "111 HP / 143 Nm",
      afterStats: "129 HP / 168 Nm",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
      descFa: "رفع تاخیر دریچه گاز، اصلاح دمای روشن شدن فن به ۸۸ درجه و حذف کامل کپ دنده ۲."
    }
  ],

  // Initial Bookings (Appointment slots with 1,000,000 Tomans deposit tracking)
  initialBookings: [
    {
      id: "BOOK-8492",
      customerName: "علیرضا رضایی",
      customerPhone: "09187351735",
      carModel: "دنا پلاس توربو دنده‌ای",
      year: "1401",
      service: "ریمپ استیج ۲ + داینو",
      bookingDate: "1403/06/15",
      bookingTime: "11:00",
      depositPaid: 1000000,
      paymentRef: "ZP-849201934",
      paymentStatus: "paid", // paid, pending, refunded
      status: "confirmed", // pending, confirmed, completed, cancelled
      createdAt: "1403/06/10 14:30"
    },
    {
      id: "BOOK-7721",
      customerName: "محمد مهدی حسینی",
      customerPhone: "09187351735",
      carModel: "پژو 207 TU5",
      year: "1399",
      service: "ریمپ استیج ۱ + پاپ اند بنگ",
      bookingDate: "1403/06/16",
      bookingTime: "15:30",
      depositPaid: 1000000,
      paymentRef: "ZP-772199042",
      paymentStatus: "paid",
      status: "pending",
      createdAt: "1403/06/11 09:15"
    }
  ],

  // Default initial users
  initialUsers: [
    {
      id: "usr-admin",
      username: "admin",
      password: "fdmf1148",
      name: "مدیریت مرکز ریمپ ریس لاین",
      email: "admin@racelineremap.ir",
      role: "admin",
      phone: "09187351735"
    },
    {
      id: "usr-demo",
      username: "driver",
      password: "123456",
      name: "امیرحسین تیونر",
      email: "driver@example.com",
      role: "customer",
      phone: "09187351735"
    }
  ]
};

// Expose on window for client script usage
window.INITIAL_DATA = INITIAL_DATA;
