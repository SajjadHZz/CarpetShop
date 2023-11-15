const machineProducts = [
  {
    id: 1,
    brand: "پامچال",
    pattern: "سنتی",
    title: "فرش 1200 شانه طرح گیلدا با زمینه صدفی کد 14561",
    srcGallery: [
      "public/img/Carpets/Machine/01/01.jpg",
      "public/img/Carpets/Machine/01/02.jpg",
      "public/img/Carpets/Machine/01/03.jpg",
      "public/img/Carpets/Machine/01/04.jpg",
      "public/img/Carpets/Machine/01/05.jpg",
      "public/img/Carpets/Machine/01/06.jpg",
      "public/img/Carpets/Machine/01/07.jpg",
      "public/img/Carpets/Machine/01/08.jpg",
      "public/img/Carpets/Machine/01/09.jpg",
    ],
    attributes: [
      { name: "رنگ پس زمینه", value: "صدفی" },
      { name: "تعداد شانه", value: "1200 شانه" },
      { name: "ضخامت فرش", value: "7 + 1 میلی متر" },
      { name: "جنس فرش", value: "پلی استر پنبه" },
      { name: "سایر مشخصات", value: "بدون پرز _ ضد حساسیت و آلرژی" },
    ],
    colors: ["صدفی", "#e1fefe"],
    comb: 1200,
    dimensions: [
      { size: "12 متر", price: 3_345_000 },
      { size: "9 متر", price: 2_866_000 },
      { size: "6 متر", price: 2_105_000 },
    ],
    discount: {
      percent: 5,
      timeDiscount: "2023/12/7",
    },
    labels: ["پذیرایی", "آشپزخانه", "اتاق خواب"],
  },
  {
    id: 2,
    brand: "شاهرخ",
    pattern: "سنتی",
    title: "فرش 1000 شانه طرح گیلدا سرمه ای کد 11252",
    srcGallery: [
      "public/img/Carpets/Machine/02/01.jpg",
      "public/img/Carpets/Machine/02/02.jpg",
      "public/img/Carpets/Machine/02/03.jpg",
      "public/img/Carpets/Machine/02/04.jpg",
      "public/img/Carpets/Machine/02/05.jpg",
      "public/img/Carpets/Machine/02/06.jpg",
      "public/img/Carpets/Machine/02/07.jpg",
      "public/img/Carpets/Machine/02/08.jpg",
      "public/img/Carpets/Machine/02/09.jpg",
    ],
    attributes: [
      { name: "رنگ پس زمینه", value: "سرمه ای" },
      { name: "تعداد شانه", value: "1000 شانه" },
      { name: "ضخامت فرش", value: "7 + 1 میلی متر" },
      { name: "جنس فرش", value: "پلی استر پنبه" },
      { name: "سایر مشخصات", value: "قابل شستشو بدون تغییر رنگ و حالت" },
    ],
    colors: ["سرمه ای", "#140e94"],
    comb: 1000,
    dimensions: [
      { metter: 12, price: 3_155_000 },
      { metter: 9, price: 2_657_000 },
      { metter: 6, price: 2_116_000 },
    ],
    discount: null,
    labels: ["پذیرایی", "آشپزخانه"],
  },
  {
    id: 3,
    brand: "نیاوران",
    pattern: "سنتی",
    title: "فرش 1500 شانه طرح افرا سرمه ای کد 618",
    srcGallery: [
      "public/img/Carpets/Machine/03/01.jpg",
      "public/img/Carpets/Machine/03/02.jpg",
      "public/img/Carpets/Machine/03/03.jpg",
      "public/img/Carpets/Machine/03/04.jpg",
      "public/img/Carpets/Machine/03/05.jpg",
      "public/img/Carpets/Machine/03/06.jpg",
      "public/img/Carpets/Machine/03/07.jpg",
      "public/img/Carpets/Machine/03/08.jpg",
      "public/img/Carpets/Machine/03/09.jpg",
    ],
    attributes: [
      { name: "رنگ پس زمینه", value: "سرمه ای" },
      { name: "تعداد شانه", value: "1500 شانه" },
      { name: "ضخامت فرش", value: "9 + 1 میلی متر" },
      { name: "جنس فرش", value: "پلی استر پنبه" },
      { name: "سایر مشخصات", value: "بدون پرز _ ضد حساسیت و آلرژی" },
    ],

    colors: ["سرمه ای", "#140e94"],
    comb: 1500,
    dimensions: [
      { metter: 12, price: 2_645_000 },
      { metter: 9, price: 1_888_000 },
      { metter: 6, price: 1_405_000 },
    ],

    discount: null,
    labels: ["آشپزخانه"],
  },
  {
    id: 4,
    brand: "سبلان",
    pattern: "وینتیج",
    title: "فرش 400 شانه وینتیج طرح سنتی کد 207",
    srcGallery: [
      "public/img/Carpets/Machine/04/01.jpg",
      "public/img/Carpets/Machine/04/02.jpg",
      "public/img/Carpets/Machine/04/03.jpg",
      "public/img/Carpets/Machine/04/04.jpg",
      "public/img/Carpets/Machine/04/05.jpg",
      "public/img/Carpets/Machine/04/06.jpg",
      "public/img/Carpets/Machine/04/07.jpg",
      "public/img/Carpets/Machine/04/08.jpg",
      "public/img/Carpets/Machine/04/09.jpg",
    ],
    attributes: [
      { name: "رنگ پس زمینه", value: "آبی نفتی" },
      { name: "تعداد شانه", value: "400 شانه" },
      { name: "ضخامت فرش", value: "7 + 1 میلی متر" },
      { name: "جنس فرش", value: "کنف" },
      { name: "سایر مشخصات", value: "بدون پرز _ ضد حساسیت و آلرژی" },
    ],

    colors: ["آبی نفتی", "#6c66f0"],
    comb: 400,
    dimensions: [
      { metter: 12, price: 2_050_000 },
      { metter: 9, price: 1_806_000 },
      { metter: 6, price: 1_155_000 },
    ],

    discount: {
      percent: 8,
      timeDiscount: "2023/11/3",
    },
    labels: ["آشپزخانه", "اتاق خواب", "پذیرایی", "محل کار"],
  },
  {
    id: 5,
    brand: "بزرگمهر",
    pattern: "پرزبلند",
    title: "فرش پرز بلند (شگی) طرح سه بعدی زمینه کرم قهوه ای کد 5016",
    srcGallery: [
      "public/img/Carpets/Machine/05/01.jpg",
      "public/img/Carpets/Machine/05/02.jpg",
      "public/img/Carpets/Machine/05/03.jpg",
      "public/img/Carpets/Machine/05/04.jpg",
      "public/img/Carpets/Machine/05/05.jpg",
    ],
    attributes: [
      { name: "رنگ پس زمینه", value: "کرم قهوه ای" },
      { name: "تعداد شانه", value: "160 شانه" },
      { name: "ضخامت فرش", value: "48 + 1 میلی متر" },
      { name: "جنس فرش", value: "پلی پروپیلن کیبل شده" },
      { name: "سایر مشخصات", value: "درجه یک" },
    ],

    colors: ["کرم قهوه ای", "#D3BB93"],
    comb: 160,
    dimensions: [{ metter: 6, price: 855_000 }],

    discount: null,
    labels: ["اتاق خواب", "پذیرایی"],
  },
  {
    id: 6,
    brand: "محتشم",
    pattern: "کودک",
    title: "فرش 700 شانه سه بعدی طرح کودک زمینه آبی کد 02",
    srcGallery: [
      "public/img/Carpets/Machine/06/01.jpg",
      "public/img/Carpets/Machine/06/02.jpg",
      "public/img/Carpets/Machine/06/03.jpg",
      "public/img/Carpets/Machine/06/04.jpg",
      "public/img/Carpets/Machine/06/05.jpg",
    ],
    attributes: [
      { name: "رنگ پس زمینه", value: "آبی" },
      { name: "تعداد شانه", value: "700 شانه" },
      { name: "ضخامت فرش", value: "10 + 1 میلی متر" },
      { name: "جنس فرش", value: "کنف" },
      { name: "سایر مشخصات", value: "قابل شست و شو" },
    ],

    colors: ["آبی", "#91F3F5"],
    comb: 700,
    dimensions: [{ metter: 6, price: 1_110_000 }],

    discount: {
      percent: 10,
      timeDiscount: "2024/2/15",
    },
    labels: ["اتاق خواب"],
  },
  {
    id: 7,
    brand: "قیطران",
    pattern: "مدرن",
    title: "فرش 1000 شانه مدرن طرح ورساچه کد 300108",
    srcGallery: [
      "public/img/Carpets/Machine/07/01.jpg",
      "public/img/Carpets/Machine/07/02.jpg",
      "public/img/Carpets/Machine/07/03.jpg",
      "public/img/Carpets/Machine/07/04.jpg",
      "public/img/Carpets/Machine/07/05.jpg",
      "public/img/Carpets/Machine/07/06.jpg",
    ],
    attributes: [
      { name: "رنگ پس زمینه", value: "آبی" },
      { name: "تعداد شانه", value: "1000 شانه" },
      { name: "ضخامت فرش", value: "9 + 1 میلی متر" },
      { name: "جنس فرش", value: "پلی اوژن" },
      { name: "سایر مشخصات", value: "ضد الکتریسیته ساکن" },
    ],
    colors: ["سیاه", "#10101B"],
    comb: 1000,
    dimensions: [
      { metter: 12, price: 4_735_000 },
      { metter: 9, price: 3_896_000 },
      { metter: 6, price: 3_115_000 },
    ],

    discount: {
      percent: 2,
      timeDiscount: "2023/12/22",
    },
    labels: ["پذیرایی", "آشپزخانه"],
  },
  {
    id: 8,
    brand: "پاتریس",
    pattern: "تابلوفرش",
    title: "تابلو فرش ماشینی طرح گلدان گل کد 97",
    srcGallery: [
      "public/img/Carpets/Machine/08/01.jpg",
      "public/img/Carpets/Machine/08/02.jpg",
      "public/img/Carpets/Machine/08/03.jpg",
      "public/img/Carpets/Machine/08/04.jpg",
      "public/img/Carpets/Machine/08/05.jpg",
    ],
    attributes: [
      { name: "رنگ پس زمینه", value: "قرمز" },
      { name: "تعداد شانه", value: "700 شانه" },
      { name: "ضخامت فرش", value: "7 + 1 میلی متر" },
      { name: "جنس فرش", value: "آکریلیک" },
      { name: "سایر مشخصات", value: "دارای نشان استاندارد ملی ایران" },
    ],

    colors: ["قرمز", "#C7553F"],
    comb: 700,
    dimensions: [{ metter: 6, price: 775_000 }],
    discount: null,
    labels: ["اتاق پذیرایی", "اتاق خواب", "محل کار"],
  },
  {
    id: 9,
    brand: "ساوین",
    pattern: "عشایری",
    title: "فرش 320 شانه طرح عشایری زمینه آبی کد 4065",
    srcGallery: [
      "public/img/Carpets/Machine/09/01.jpg",
      "public/img/Carpets/Machine/09/02.jpg",
      "public/img/Carpets/Machine/09/03.jpg",
      "public/img/Carpets/Machine/09/04.jpg",
      "public/img/Carpets/Machine/09/05.jpg",
      "public/img/Carpets/Machine/09/06.jpg",
    ],
    attributes: [
      { name: "رنگ پس زمینه", value: "آبی" },
      { name: "تعداد شانه", value: "320 شانه" },
      { name: "ضخامت فرش", value: "10 + 1 میلی متر" },
      { name: "جنس فرش", value: "پلی پروپیلن هیت ست فریز" },
      { name: "سایر مشخصات", value: "قابل شست و شو بدون تغییر رنگ و حالت" },
    ],
    colors: ["آبی", "#71B0C6"],
    comb: 320,
    dimensions: [
      { metter: 12, price: 1_845_000 },
      { metter: 9, price: 1_556_000 },
      { metter: 6, price: 905_000 },
    ],
    discount: {
      percent: 10,
      timeDiscount: "2024/1/2",
    },
    labels: ["آشپزخانه", "اتاق خواب"],
  },
  {
    id: 10,
    brand: "زمرد مشهد",
    pattern: "مدرن",
    title: "فرش 700 شانه طرح ادویه جات ۱۰۰۴۸۸",
    srcGallery: ["public/img/Carpets/Machine/10/01.jpg"],
    attributes: [
      { name: "رنگ پس زمینه", value: "مشکی" },
      { name: "تعداد شانه", value: "700 شانه" },
      { name: "ضخامت فرش", value: "9 + 1 میلی متر" },
      { name: "جنس فرش", value: "پلی استر" },
      { name: "سایر مشخصات", value: "قابل شست و شو" },
    ],
    colors: ["مشکی", "#252525"],
    comb: 700,
    dimensions: [{ metter: 6, price: 1_278_000 }],
    discount: {
      percent: 1,
      timeDiscount: "2023/12/28",
    },
    labels: ["مدرن و فانتزی", "آشپزخانه"],
  },
  {
    id: 11,
    brand: "عرش",
    pattern: "عشایری",
    title: "فرش 320 شانه طرح شیوا سرمه ای کد 52009",
    srcGallery: [
      "public/img/Carpets/Machine/11/01.jpg",
      "public/img/Carpets/Machine/11/02.jpg",
      "public/img/Carpets/Machine/11/03.jpg",
      "public/img/Carpets/Machine/11/04.jpg",
      "public/img/Carpets/Machine/11/05.jpg",
      "public/img/Carpets/Machine/11/06.jpg",
    ],
    attributes: [
      { name: "رنگ پس زمینه", value: "نفتی" },
      { name: "تعداد شانه", value: "320 شانه" },
      { name: "ضخامت فرش", value: "6 + 1 میلی متر" },
      { name: "جنس فرش", value: "پلی پروپیلن هیت ست فریز" },
      { name: "سایر مشخصات", value: "گارانتی اصالت و سلامت کالا" },
    ],
    colors: ["نفتی", "#131115"],
    comb: 320,
    dimensions: [{ metter: 9, price: 1_156_000 }],
    discount: null,
    labels: ["اتاق خواب"],
  },
  {
    id: 12,
    brand: "نگین مشهد",
    pattern: "وینتیج",
    title: "فرش 400 شانه وینتیج مدرن کد 218",
    srcGallery: [
      "public/img/Carpets/Machine/12/01.jpg",
      "public/img/Carpets/Machine/12/02.jpg",
      "public/img/Carpets/Machine/12/03.jpg",
      "public/img/Carpets/Machine/12/04.jpg",
      "public/img/Carpets/Machine/12/05.jpg",
      "public/img/Carpets/Machine/12/06.jpg",
      "public/img/Carpets/Machine/12/07.jpg",
      "public/img/Carpets/Machine/12/08.jpg",
      "public/img/Carpets/Machine/12/09.jpg",
      "public/img/Carpets/Machine/12/10.jpg",
    ],
    attributes: [
      { name: "رنگ پس زمینه", value: "خاکستری" },
      { name: "تعداد شانه", value: "400 شانه" },
      { name: "ضخامت فرش", value: "7 + 1 میلی متر" },
      { name: "جنس فرش", value: "کنف" },
      { name: "سایر مشخصات", value: "بدون پرز _ ضد حساسیت و آلرژی" },
    ],
    colors: ["خاکستری", "#99A0A3"],
    comb: 400,
    dimensions: [
      { metter: 12, price: 3_100_000 },
      { metter: 9, price: 2_800_000 },
      { metter: 6, price: 2_500_000 },
    ],

    discount: {
      percent: 8,
      timeDiscount: "2023/11/22",
    },
    labels: ["پذیرایی", "اشپزخانه"],
  },
];
const handmadeProducts = [
  {
    id: 1,
    brand: "تبریز",
    pattern: "سالاری",
    title: "فرش دستبافت تبریز طرح سالاری کد 55",
    srcGallery: [
      "public/img/Carpets/Handmade/01/01.jpg",
      "public/img/Carpets/Handmade/01/02.jpg",
      "public/img/Carpets/Handmade/01/03.jpg",
      "public/img/Carpets/Handmade/01/04.jpg",
    ],
    attributes: {
      colors: ["کرم", "#B18E59"],
      comb: 1200,
      thickness: 7,
      density: 3600,
      dimensions: [{ metter: 6, price: 5_885_000 }],
      type: "مرینوس گل ابریشم",
      other: ["نوع چله پشم", "قابل شست و شو بدون تغییر رنگ و حالت"],
    },
    discount: {
      percent: 2,
      timeDiscount: "2023/10/25",
    },
    labels: ["پذیرایی", "آشپزخانه", "اتاق خواب"],
  },
  {
    id: 2,
    brand: "خراسان",
    pattern: "ترنجی",
    title: "فرش دستبافت خراسان طرح ترنجی کد 2345",
    srcGallery: [
      "public/img/Carpets/Handmade/02/01.jpg",
      "public/img/Carpets/Handmade/02/02.jpg",
      "public/img/Carpets/Handmade/02/03.jpg",
    ],
    attributes: {
      colors: ["قرمز", "#C00000"],
      comb: 1000,
      thickness: 7,
      density: 3600,
      dimensions: [{ metter: 9, price: 2_657_000 }],
      type: "پشم گل ابریشم",
      other: ["قابل شستشو بدون تغییر رنگ و حالت"],
    },
    discount: null,
    labels: ["پذیرایی", "آشپزخانه"],
  },
  {
    id: 3,
    brand: "نیاوران",
    pattern: "سنتی",
    title: "فرش 1500 شانه طرح افرا سرمه ای کد 618",
    srcGallery: [
      "public/img/Carpets/Handmade/03/01.jpg",
      "public/img/Carpets/Handmade/03/02.jpg",
      "public/img/Carpets/Handmade/03/03.jpg",
      "public/img/Carpets/Handmade/03/04.jpg",
      "public/img/Carpets/Handmade/03/05.jpg",
      "public/img/Carpets/Handmade/03/06.jpg",
      "public/img/Carpets/Handmade/03/07.jpg",
      "public/img/Carpets/Handmade/03/08.jpg",
      "public/img/Carpets/Handmade/03/09.jpg",
    ],
    attributes: {
      colors: ["سرمه ای", "#140e94"],
      comb: 1500,
      thickness: 9,
      density: 3650,
      dimensions: [
        { metter: 12, price: 2_645_000 },
        { metter: 9, price: 1_888_000 },
        { metter: 6, price: 1_405_000 },
      ],
      type: "پلی استر پنبه",
      other: ["بدون پرز _ ضد حساسیت و آلرژی"],
    },
    discount: null,
    labels: ["آشپزخانه"],
  },
  {
    id: 4,
    brand: "سبلان",
    pattern: "وینتیج",
    title: "فرش 400 شانه وینتیج طرح سنتی کد 207",
    srcGallery: [
      "public/img/Carpets/Handmade/04/01.jpg",
      "public/img/Carpets/Handmade/04/02.jpg",
      "public/img/Carpets/Handmade/04/03.jpg",
      "public/img/Carpets/Handmade/04/04.jpg",
      "public/img/Carpets/Handmade/04/05.jpg",
      "public/img/Carpets/Handmade/04/06.jpg",
      "public/img/Carpets/Handmade/04/07.jpg",
      "public/img/Carpets/Handmade/04/08.jpg",
      "public/img/Carpets/Handmade/04/09.jpg",
    ],
    attributes: {
      colors: ["آبی نفتی", "#6c66f0"],
      comb: 1200,
      thickness: 7,
      density: 3600,
      dimensions: [
        { metter: 12, price: 2_050_000 },
        { metter: 9, price: 1_806_000 },
        { metter: 6, price: 1_155_000 },
      ],
      type: "کنف",
      other: null,
    },
    discount: {
      percent: 8,
      timeDiscount: "2023/11/3",
    },
    labels: ["آشپزخانه", "اتاق خواب", "پذیرایی", "محل کار"],
  },
  {
    id: 5,
    brand: "بزرگمهر",
    pattern: "پرزبلند",
    title: "فرش پرز بلند (شگی) طرح سه بعدی زمینه کرم قهوه ای کد 5016",
    srcGallery: [
      "public/img/Carpets/Handmade/05/01.jpg",
      "public/img/Carpets/Handmade/05/02.jpg",
      "public/img/Carpets/Handmade/05/03.jpg",
      "public/img/Carpets/Handmade/05/04.jpg",
      "public/img/Carpets/Handmade/05/05.jpg",
    ],
    attributes: {
      colors: ["کرم", "#D3BB93"],
      comb: 160,
      thickness: 48,
      density: 3600,
      dimensions: [{ metter: 6, price: 855_000 }],
      type: "پلی پروپیلن کیبل شده",
      other: ["بدون پرز _ ضد حساسیت و آلرژی", "درجه یک"],
    },
    discount: null,
    labels: ["اتاق خواب", "پذیرایی"],
  },
  {
    id: 6,
    brand: "محتشم",
    pattern: "کودک",
    title: "فرش 700 شانه سه بعدی طرح کودک زمینه آبی کد 02",
    srcGallery: [
      "public/img/Carpets/Handmade/06/01.jpg",
      "public/img/Carpets/Handmade/06/02.jpg",
      "public/img/Carpets/Handmade/06/03.jpg",
      "public/img/Carpets/Handmade/06/04.jpg",
      "public/img/Carpets/Handmade/06/05.jpg",
    ],
    attributes: {
      colors: ["آبی", "#91F3F5"],
      comb: 700,
      thickness: 10,
      density: 2400,
      dimensions: [{ metter: 6, price: 1_110_000 }],
      type: "کنف",
      other: ["بدون پرز _ ضد حساسیت و آلرژی", "قابل شست و شو", "باکیفیت و درجه یک"],
    },
    discount: {
      percent: 10,
      timeDiscount: "2024/2/15",
    },
    labels: ["اتاق خواب"],
  },
  {
    id: 7,
    brand: "قیطران",
    pattern: "مدرن",
    title: "فرش 1000 شانه مدرن طرح ورساچه کد 300108",
    srcGallery: [
      "public/img/Carpets/Handmade/07/01.jpg",
      "public/img/Carpets/Handmade/07/02.jpg",
      "public/img/Carpets/Handmade/07/03.jpg",
      "public/img/Carpets/Handmade/07/04.jpg",
      "public/img/Carpets/Handmade/07/05.jpg",
      "public/img/Carpets/Handmade/07/06.jpg",
    ],
    attributes: {
      colors: ["سیاه", "#10101B"],
      comb: 1000,
      thickness: 9,
      density: 3300,
      dimensions: [
        { metter: 12, price: 4_735_000 },
        { metter: 9, price: 3_896_000 },
        { metter: 6, price: 3_115_000 },
      ],
      type: "پلی اوژن",
      other: [
        "ضد الکتریسته ساکن",
        "ضد حساسیت و آلرژی",
        "دارای نشان استاندارد ملی ایران",
        "دارای استاندارد اکوتکس اتریش",
      ],
    },
    discount: {
      percent: 2,
      timeDiscount: "2023/12/22",
    },
    labels: ["", "", ""],
  },
  {
    id: 8,
    brand: "پاتریس",
    pattern: "تابلوفرش",
    title: "تابلو فرش ماشینی طرح گلدان گل کد 97",
    srcGallery: [
      "public/img/Carpets/Handmade/08/01.jpg",
      "public/img/Carpets/Handmade/08/02.jpg",
      "public/img/Carpets/Handmade/08/03.jpg",
      "public/img/Carpets/Handmade/08/04.jpg",
      "public/img/Carpets/Handmade/08/05.jpg",
    ],
    attributes: {
      colors: ["قرمز", "#C7553F"],
      comb: 700,
      thickness: 7,
      density: 2550,
      dimensions: [{ metter: 6, price: 775_000 }],
      type: "اکریلیک",
      other: null,
    },
    discount: null,
    labels: ["اتاق پذیرایی", "اتاق خواب", "محل کار"],
  },
  {
    id: 9,
    brand: "ساوین",
    pattern: "عشایری",
    title: "فرش 320 شانه طرح عشایری زمینه آبی کد 4065",
    srcGallery: [
      "public/img/Carpets/Handmade/09/01.jpg",
      "public/img/Carpets/Handmade/09/02.jpg",
      "public/img/Carpets/Handmade/09/03.jpg",
      "public/img/Carpets/Handmade/09/04.jpg",
      "public/img/Carpets/Handmade/09/05.jpg",
      "public/img/Carpets/Handmade/09/06.jpg",
    ],
    attributes: {
      colors: ["آبی", "#71B0C6"],
      comb: 320,
      thickness: 10,
      density: 960,
      dimensions: [
        { metter: 12, price: 1_845_000 },
        { metter: 9, price: 1_556_000 },
        { metter: 6, price: 905_000 },
      ],
      type: "پلی پروپیلن هیت ست فریز",
      other: null,
    },
    discount: {
      percent: 10,
      timeDiscount: "2024/1/2",
    },
    labels: ["", "", ""],
  },
  {
    id: 10,
    brand: "زمرد مشهد",
    pattern: "مدرن",
    title: "فرش 700 شانه طرح ادویجات ۱۰۰۴۸۸",
    srcGallery: ["public/img/Carpets/Handmade/10/01.jpg"],
    attributes: {
      colors: ["مشکی", "#252525"],
      comb: 700,
      thickness: 9,
      density: 2550,
      dimensions: [{ metter: 6, price: 1_278_000 }],
      type: "پلی استر",
      other: ["قابل شست و شو"],
    },
    discount: {
      percent: 1,
      timeDiscount: "2023/12/28",
    },
    labels: ["مدرن و فانتزی", "آشپزخانه"],
  },
];
const carpetProducts = [
  {
    id: 1,
    brand: "پامچال",
    pattern: "سنتی",
    title: "فرش 1200 شانه طرح گیلدا صدفی کد 14561",
    srcGallery: [
      "public/img/Carpets/Handmade/01/01.jpg",
      "public/img/Carpets/Handmade/01/02.jpg",
      "public/img/Carpets/Machine/01/03.jpg",
      "public/img/Carpets/Machine/01/04.jpg",
      "public/img/Carpets/Machine/01/05.jpg",
      "public/img/Carpets/Machine/01/06.jpg",
      "public/img/Carpets/Machine/01/07.jpg",
      "public/img/Carpets/Machine/01/08.jpg",
      "public/img/Carpets/Machine/01/09.jpg",
    ],
    attributes: {
      colors: ["صدفی", "#e1fefe"],
      comb: 1200,
      thickness: 7,
      density: 3600,
      dimensions: [
        { metter: 12, price: 3_345_000 },
        { metter: 9, price: 2_866_000 },
        { metter: 6, price: 2_105_000 },
      ],
      type: "پلی استر پنبه",
      other: ["بدون پرز _ ضد حساسیت و آلرژی", "قابل شست و شو بدون تغییر رنگ و حالت"],
    },
    discount: {
      percent: 5,
      timeDiscount: "2023/12/7",
    },
    labels: ["پذیرایی", "آشپزخانه", "اتاق خواب"],
  },
  {
    id: 2,
    brand: "شاهرخ",
    pattern: "سنتی",
    title: "فرش 1000 شانه طرح گیلدا سرمه ای کد 11252",
    srcGallery: [
      "public/img/Carpets/Machine/02/01.jpg",
      "public/img/Carpets/Machine/02/02.jpg",
      "public/img/Carpets/Machine/02/03.jpg",
      "public/img/Carpets/Machine/02/04.jpg",
      "public/img/Carpets/Machine/02/05.jpg",
      "public/img/Carpets/Machine/02/06.jpg",
      "public/img/Carpets/Machine/02/07.jpg",
      "public/img/Carpets/Machine/02/08.jpg",
      "public/img/Carpets/Machine/02/09.jpg",
    ],
    attributes: {
      colors: ["سرمه ای", "#140e94"],
      comb: 1000,
      thickness: 7,
      density: 3600,
      dimensions: [
        { metter: 12, price: 3_155_000 },
        { metter: 9, price: 2_657_000 },
        { metter: 6, price: 2_116_000 },
      ],
      type: "پلی استر پنبه",
      other: ["قابل شستشو بدون تغییر رنگ و حالت"],
    },
    discount: null,
    labels: ["پذیرایی", "آشپزخانه"],
  },
  {
    id: 3,
    brand: "نیاوران",
    pattern: "سنتی",
    title: "فرش 1500 شانه طرح افرا سرمه ای کد 618",
    srcGallery: [
      "public/img/Carpets/Machine/03/01.jpg",
      "public/img/Carpets/Machine/03/02.jpg",
      "public/img/Carpets/Machine/03/03.jpg",
      "public/img/Carpets/Machine/03/04.jpg",
      "public/img/Carpets/Machine/03/05.jpg",
      "public/img/Carpets/Machine/03/06.jpg",
      "public/img/Carpets/Machine/03/07.jpg",
      "public/img/Carpets/Machine/03/08.jpg",
      "public/img/Carpets/Machine/03/09.jpg",
    ],
    attributes: {
      colors: ["سرمه ای", "#140e94"],
      comb: 1500,
      thickness: 9,
      density: 3650,
      dimensions: [
        { metter: 12, price: 2_645_000 },
        { metter: 9, price: 1_888_000 },
        { metter: 6, price: 1_405_000 },
      ],
      type: "پلی استر پنبه",
      other: ["بدون پرز _ ضد حساسیت و آلرژی"],
    },
    discount: null,
    labels: ["آشپزخانه"],
  },
  {
    id: 4,
    brand: "سبلان",
    pattern: "وینتیج",
    title: "فرش 400 شانه وینتیج طرح سنتی کد 207",
    srcGallery: [
      "public/img/Carpets/Machine/04/01.jpg",
      "public/img/Carpets/Machine/04/02.jpg",
      "public/img/Carpets/Machine/04/03.jpg",
      "public/img/Carpets/Machine/04/04.jpg",
      "public/img/Carpets/Machine/04/05.jpg",
      "public/img/Carpets/Machine/04/06.jpg",
      "public/img/Carpets/Machine/04/07.jpg",
      "public/img/Carpets/Machine/04/08.jpg",
      "public/img/Carpets/Machine/04/09.jpg",
    ],
    attributes: {
      colors: ["آبی نفتی", "#6c66f0"],
      comb: 1200,
      thickness: 7,
      density: 3600,
      dimensions: [
        { metter: 12, price: 2_050_000 },
        { metter: 9, price: 1_806_000 },
        { metter: 6, price: 1_155_000 },
      ],
      type: "کنف",
      other: null,
    },
    discount: {
      percent: 8,
      timeDiscount: "2023/11/3",
    },
    labels: ["آشپزخانه", "اتاق خواب", "پذیرایی", "محل کار"],
  },
  {
    id: 5,
    brand: "بزرگمهر",
    pattern: "پرزبلند",
    title: "فرش پرز بلند (شگی) طرح سه بعدی زمینه کرم قهوه ای کد 5016",
    srcGallery: [
      "public/img/Carpets/Machine/05/01.jpg",
      "public/img/Carpets/Machine/05/02.jpg",
      "public/img/Carpets/Machine/05/03.jpg",
      "public/img/Carpets/Machine/05/04.jpg",
      "public/img/Carpets/Machine/05/05.jpg",
    ],
    attributes: {
      colors: ["کرم", "#D3BB93"],
      comb: 160,
      thickness: 48,
      density: 3600,
      dimensions: [{ metter: 6, price: 855_000 }],
      type: "پلی پروپیلن کیبل شده",
      other: ["بدون پرز _ ضد حساسیت و آلرژی", "درجه یک"],
    },
    discount: null,
    labels: ["اتاق خواب", "پذیرایی"],
  },
  {
    id: 6,
    brand: "محتشم",
    pattern: "کودک",
    title: "فرش 700 شانه سه بعدی طرح کودک زمینه آبی کد 02",
    srcGallery: [
      "public/img/Carpets/Machine/06/01.jpg",
      "public/img/Carpets/Machine/06/02.jpg",
      "public/img/Carpets/Machine/06/03.jpg",
      "public/img/Carpets/Machine/06/04.jpg",
      "public/img/Carpets/Machine/06/05.jpg",
    ],
    attributes: {
      colors: ["آبی", "#91F3F5"],
      comb: 700,
      thickness: 10,
      density: 2400,
      dimensions: [{ metter: 6, price: 1_110_000 }],
      type: "کنف",
      other: ["بدون پرز _ ضد حساسیت و آلرژی", "قابل شست و شو", "باکیفیت و درجه یک"],
    },
    discount: {
      percent: 10,
      timeDiscount: "2024/2/15",
    },
    labels: ["اتاق خواب"],
  },
  {
    id: 7,
    brand: "قیطران",
    pattern: "مدرن",
    title: "فرش 1000 شانه مدرن طرح ورساچه کد 300108",
    srcGallery: [
      "public/img/Carpets/Machine/07/01.jpg",
      "public/img/Carpets/Machine/07/02.jpg",
      "public/img/Carpets/Machine/07/03.jpg",
      "public/img/Carpets/Machine/07/04.jpg",
      "public/img/Carpets/Machine/07/05.jpg",
      "public/img/Carpets/Machine/07/06.jpg",
    ],
    attributes: {
      colors: ["سیاه", "#10101B"],
      comb: 1000,
      thickness: 9,
      density: 3300,
      dimensions: [
        { metter: 12, price: 4_735_000 },
        { metter: 9, price: 3_896_000 },
        { metter: 6, price: 3_115_000 },
      ],
      type: "پلی اوژن",
      other: [
        "ضد الکتریسته ساکن",
        "ضد حساسیت و آلرژی",
        "دارای نشان استاندارد ملی ایران",
        "دارای استاندارد اکوتکس اتریش",
      ],
    },
    discount: {
      percent: 2,
      timeDiscount: "2023/12/22",
    },
    labels: ["", "", ""],
  },
  {
    id: 8,
    brand: "پاتریس",
    pattern: "تابلوفرش",
    title: "تابلو فرش ماشینی طرح گلدان گل کد 97",
    srcGallery: [
      "public/img/Carpets/Machine/08/01.jpg",
      "public/img/Carpets/Machine/08/02.jpg",
      "public/img/Carpets/Machine/08/03.jpg",
      "public/img/Carpets/Machine/08/04.jpg",
      "public/img/Carpets/Machine/08/05.jpg",
    ],
    attributes: {
      colors: ["قرمز", "#C7553F"],
      comb: 700,
      thickness: 7,
      density: 2550,
      dimensions: [{ metter: 6, price: 775_000 }],
      type: "اکریلیک",
      other: null,
    },
    discount: null,
    labels: ["اتاق پذیرایی", "اتاق خواب", "محل کار"],
  },
  {
    id: 9,
    brand: "ساوین",
    pattern: "عشایری",
    title: "فرش 320 شانه طرح عشایری زمینه آبی کد 4065",
    srcGallery: [
      "public/img/Carpets/Machine/09/01.jpg",
      "public/img/Carpets/Machine/09/02.jpg",
      "public/img/Carpets/Machine/09/03.jpg",
      "public/img/Carpets/Machine/09/04.jpg",
      "public/img/Carpets/Machine/09/05.jpg",
      "public/img/Carpets/Machine/09/06.jpg",
    ],
    attributes: {
      colors: ["آبی", "#71B0C6"],
      comb: 320,
      thickness: 10,
      density: 960,
      dimensions: [
        { metter: 12, price: 1_845_000 },
        { metter: 9, price: 1_556_000 },
        { metter: 6, price: 905_000 },
      ],
      type: "پلی پروپیلن هیت ست فریز",
      other: null,
    },
    discount: {
      percent: 10,
      timeDiscount: "2024/1/2",
    },
    labels: ["", "", ""],
  },
  {
    id: 10,
    brand: "زمرد مشهد",
    pattern: "مدرن",
    title: "فرش 700 شانه طرح ادویجات ۱۰۰۴۸۸",
    srcGallery: ["public/img/Carpets/Machine/10/01.jpg"],
    attributes: {
      colors: ["مشکی", "#252525"],
      comb: 700,
      thickness: 9,
      density: 2550,
      dimensions: [{ metter: 6, price: 1_278_000 }],
      type: "پلی استر",
      other: ["قابل شست و شو"],
    },
    discount: {
      percent: 1,
      timeDiscount: "2023/12/28",
    },
    labels: ["مدرن و فانتزی", "آشپزخانه"],
  },
  {
    id: 11,
    brand: "عرش",
    pattern: "عشایری",
    title: "فرش 320 شانه طرح شیوا سرمه ای کد 52009",
    srcGallery: [
      "public/img/Carpets/Machine/11/01.jpg",
      "public/img/Carpets/Machine/11/02.jpg",
      "public/img/Carpets/Machine/11/03.jpg",
      "public/img/Carpets/Machine/11/04.jpg",
      "public/img/Carpets/Machine/11/05.jpg",
      "public/img/Carpets/Machine/11/06.jpg",
    ],
    attributes: {
      colors: ["نفتی", "#131115"],
      comb: 320,
      thickness: 6,
      density: 1500,
      dimensions: [{ metter: 9, price: 1_156_000 }],
      type: "پلی پروپیلن هیت ست فریز",
      other: ["گارانتی اصالت و سلامت کالا"],
    },
    discount: null,
    labels: ["اتاق خواب"],
  },
  {
    id: 12,
    brand: "نگین مشهد",
    pattern: "وینتیج",
    title: "فرش 400 شانه وینتیج مدرن کد 218",
    srcGallery: [
      "public/img/Carpets/Machine/12/01.jpg",
      "public/img/Carpets/Machine/12/02.jpg",
      "public/img/Carpets/Machine/12/03.jpg",
      "public/img/Carpets/Machine/12/04.jpg",
      "public/img/Carpets/Machine/12/05.jpg",
      "public/img/Carpets/Machine/12/06.jpg",
      "public/img/Carpets/Machine/12/07.jpg",
      "public/img/Carpets/Machine/12/08.jpg",
      "public/img/Carpets/Machine/12/09.jpg",
      "public/img/Carpets/Machine/12/10.jpg",
    ],
    attributes: {
      colors: ["خاکستری", "#99A0A3"],
      comb: 400,
      thickness: 7,
      density: 1800,
      dimensions: [
        { metter: 12, price: 3_100_000 },
        { metter: 9, price: 2_800_000 },
        { metter: 6, price: 2_500_000 },
      ],
      type: "کنف",
      other: ["بدون پرز _ ضد حساسیت و آلرژی"],
    },
    discount: {
      percent: 8,
      timeDiscount: "2023/11/22",
    },
    labels: ["پذیرایی", "اشپزخانه"],
  },
];

const machineCategory = [
  { value: "سنتی", lable: "فرش سنتی", sub: null },
  { value: "وینتیج", lable: "فرش وینتیج (کهنه نما)", sub: null },
  { value: "پرزبلند", lable: "فرش پرزبلند (شگی)", sub: null },
  { value: "کودک", lable: "فرش کودک", sub: null },
  { value: "مدرن", lable: "فرش مدرن و فانتزی", sub: null },
  { value: "تابلوفرش", lable: "تابلوفرش ماشینی", sub: null },
  { value: "عشایری", lable: "فرش ماشینی طرح عشایری", sub: null },
  {
    value: "شانه",
    lable: "فرش براساس شانه",
    sub: ["1500 شانه", "1200 شانه", "1000 شانه", "700 شانه"],
  },
];
const handmadeCategory = [
  { value: "تبریز", lable: "فرش تبریز", sub: null },
  { value: "خراسان", lable: "فرش خراسان", sub: null },
  { value: "کاشان", lable: "فرش کاشان", sub: null },
  { value: "اصفهان", lable: "فرش اصفهان", sub: null },
  { value: "اردکان", lable: "فرش اردکان", sub: null },
  { value: "شهرکرد", lable: "فرش شهرکرد (بختیاری)", sub: null },
  { value: "نایین", lable: "فرش نایین", sub: null },
  { value: "شیراز", lable: "فرش شیراز", sub: null },
];
const carpetCategory = [
  { value: "نمدی", lable: "موکت نمدی", sub: null },
  { value: "تافتینگ", lable: "موکت تافتینگ", sub: null },
  { value: "ظریف", lable: "موکت ظریف مصور", sub: null },
  { value: "پالاز", lable: "موکت پالاز", sub: null },
  { value: "پرزبلند", lable: "موکت پرزبلند", sub: null },
  { value: "اداری", lable: "موکت اداری", sub: null },
  { value: "تشریفات", lable: "موکت تشریفات", sub: null },
];
const brandCategory = [
  { value: "بزرگمهر", lable: "فرش بزرگمهر", sub: null },
  { value: "پامچال", lable: "فرش پامچال", sub: null },
  { value: "محتشم", lable: "فرش محتشم", sub: null },
  { value: "قیطران", lable: "فرش قیطران", sub: null },
  { value: "شاهرخ", lable: "فرش شاهرخ", sub: null },
  { value: "نیاوران", lable: "فرش نیاوران", sub: null },
  { value: "سبلان", lable: "فرش سبلان", sub: null },
  { value: "پاتریس", lable: "فرش پاتریس", sub: null },
  { value: "زمرد", lable: "فرش زمرد مشهد", sub: null },
  { value: "ساوین", lable: "فرش ساوین", sub: null },
  { value: "عرش", lable: "فرش عرش", sub: null },
  { value: "نگین", lable: "فرش نگین مشهد", sub: null },
];

const navbarCategory = [
  { title: "مقالات", icon: "public/img/Icons/note.png", link: "/blog" },
  { title: "تخفیف ها", icon: "public/img/Icons/percentage.png", link: "/products" },
  { title: "راهنمای خرید", icon: "public/img/Icons/information.png", link: "/help" },
  { title: "درباره ما", icon: "public/img/Icons/team.png", link: "/about" },
];
const productsCategory = [
  {
    id: 1,
    title: "فرش ماشینی",
    value: "machine",
    icon: "public/img/Icons/carpet.png",
  },
  {
    id: 2,
    title: "فرش دستبافت",
    value: "handmade",
    icon: "public/img/Icons/prayer.png",
  },
  {
    id: 3,
    title: "موکت",
    value: "carpet",
    icon: "public/img/Icons/yoga-mat.png",
  },
  {
    id: 4,
    title: "برندهای فرش ماشینی",
    value: "brands",
    icon: "public/img/Icons/tag.png",
  },
];

export {
  machineProducts,
  handmadeProducts,
  carpetProducts,
  machineCategory,
  navbarCategory,
  productsCategory,
  handmadeCategory,
  carpetCategory,
  brandCategory,
};
