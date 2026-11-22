export type ProductCategoryId = 'all' | 'nuts' | 'grains' | 'snacks';

export interface NavItem {
  id: string;
  label: string;
}

export interface ProductCategory {
  id: ProductCategoryId;
  label: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: Exclude<ProductCategoryId, 'all'>;
  note: string;
  feature?: boolean;
}

export interface BranchItem {
  id: string;
  name: string;
  note?: string;
  hq?: boolean;
  pinClass: string;
  pos: { x: number; y: number };
}

export interface CraftStep {
  num: string;
  title: string;
  description: string;
}

export interface OfferPoster {
  id: string;
  alt: string;
}

export interface SampleReview {
  name: string;
  place: string;
  quote: string;
}

export const SITE_INFO = {
  name: 'مطاحن ومحامص الضياء',
  shortName: 'الضياء',
  since: 1997,
  city: 'عمّان',
  tagline:
    'مكسرات وحبوب وبهارات وتسالي، من مصنعنا في أبو علندا إلى ثمانية فروع في أحياء عمّان.',
  whatsapp: {
    display: '+962 7 9203 0055',
    number: '962792030055',
  },
  email: 'info@aldyaa.com',
  social: {
    instagram: 'https://www.instagram.com/aldiaaroastery',
    facebook: 'https://www.facebook.com/share/1Ph3trpEfQ/',
    snapchat: 'https://www.snapchat.com/@aldiaaroastery',
  },
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'من نحن' },
  { id: 'products', label: 'المنتجات' },
  { id: 'craft', label: 'لماذا الضياء' },
  { id: 'branches', label: 'الفروع' },
  { id: 'reviews', label: 'آراء العملاء' },
  { id: 'contact', label: 'تواصل' },
];

export const MARQUEE_ITEMS: string[] = [
  'مخلوطة اكسترا',
  'بزر أفغاني',
  'فستق مياسي',
  'برغل خشن',
  'بوشار',
  'شيبس محمّص',
  'قهوة وهال طازج',
  'بهارات وتوابل',
  `الضياء منذ ${SITE_INFO.since}`,
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: 'all', label: 'الكل' },
  { id: 'nuts', label: 'المكسرات' },
  { id: 'grains', label: 'الحبوب' },
  { id: 'snacks', label: 'التسالي' },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'extra-mix',
    name: 'مخلوطة اكسترا',
    category: 'nuts',
    note: 'لوز وفستق وبذور محمّصة في خلطة واحدة متوازنة، تكفي لصحن الضيافة كاملاً.',
    feature: true,
  },
  {
    id: 'afghan-seeds',
    name: 'بزر أفغاني',
    category: 'nuts',
    note: 'حبّة كبيرة وتحميص متوازن ضمن تشكيلة المكسرات، رفيق السهرات الطويلة.',
  },
  {
    id: 'flavored-peanuts',
    name: 'فستق مياسي مشكّل',
    category: 'nuts',
    note: 'فستق مغلّف بنكهات وألوان متعددة، يحبّه الصغار قبل الكبار.',
  },
  {
    id: 'coarse-bulgur',
    name: 'برغل خشن',
    category: 'grains',
    note: 'حبّة نظيفة ومتماسكة للمجدّرة والكبّة وطبخات البيت.',
  },
  {
    id: 'roasted-chips',
    name: 'شيبس محمّص',
    category: 'snacks',
    note: 'رقائق بطاطا مقرمشة جاهزة للأكل مباشرة.',
  },
  {
    id: 'raw-chips',
    name: 'شيبس نيّ (رقائق)',
    category: 'snacks',
    note: 'رقائق للقلي في البيت، لتحضير الشيبس طازجاً متى شئت.',
  },
  {
    id: 'popcorn',
    name: 'بوشار',
    category: 'grains',
    note: 'حبوب ذرة مختارة لتحضير البوشار في البيت.',
  },
];

export const CRAFT_STEPS: CraftStep[] = [
  {
    num: '01',
    title: 'الاختيار قبل التحميص والطحن',
    description:
      'الطعم الجيد يبدأ من الحبّة نفسها، لذلك نفرز المكسرات والبن والبهارات والحبوب قبل أن تدخل خط الإنتاج.',
  },
  {
    num: '02',
    title: 'لكل صنفٍ درجته الخاصة',
    description:
      'اللوز غير الكاجو والفستق، والبن بالهال غير التوابل. لكل صنف حرارته ووقته ليخرج بقرمشة ورائحة متوازنة.',
  },
  {
    num: '03',
    title: 'من مصنعنا في أبو علندا إلى الرفّ',
    description:
      'نحمّص ونطحن ونعبّئ في مصنعنا بأبو علندا — من المكسرات والبهارات إلى الطحين والسميد والطحينية ودبس الرمان والحلاوة — لتصل إلى فروعنا الثمانية بأقصر طريق.',
  },
  {
    num: '04',
    title: 'أسعار واضحة وعروض دورية',
    description:
      'سعر واضح لكل صنف، وعروض نعلن عنها أولاً بأول على صفحاتنا وفي فروعنا.',
  },
];

export const OFFER_POSTERS: OfferPoster[] = [
  { id: 'offer-5', alt: 'منشور عرض الضياء: مخلوطة اكسترا' },
  { id: 'offer-4', alt: 'منشور عرض الضياء: بزر أفغاني' },
  { id: 'offer-3', alt: 'منشور عرض الضياء: فستق مياسي مشكّل' },
  { id: 'offer-2', alt: 'منشور عرض الضياء: برغل خشن' },
  { id: 'offer-1', alt: 'منشور عرض الضياء: شيبس وبوشار' },
];

export const BRANCHES: BranchItem[] = [
  { id: 'yasmeen', name: 'ضاحية الياسمين', pinClass: 'pin-yasmeen', pos: { x: 58, y: 64 } },
  { id: 'nazzal', name: 'حي نزال', pinClass: 'pin-nazzal', pos: { x: 46, y: 58 } },
  { id: 'hashmi-1', name: 'الهاشمي الشمالي 1', pinClass: 'pin-hashmi-1', pos: { x: 66, y: 36 } },
  { id: 'hashmi-2', name: 'الهاشمي الشمالي 2', pinClass: 'pin-hashmi-2', pos: { x: 71, y: 30 } },
  { id: 'rimam', name: 'وادي الرمم', pinClass: 'pin-rimam', pos: { x: 61, y: 48 } },
  { id: 'bayader', name: 'البيادر', pinClass: 'pin-bayader', pos: { x: 17, y: 46 } },
  { id: 'nuzha', name: 'النزهة', pinClass: 'pin-nuzha', pos: { x: 54, y: 27 } },
  { id: 'marka', name: 'ماركا الشمالية', pinClass: 'pin-marka', pos: { x: 82, y: 22 } },
  {
    id: 'abu-alanda',
    name: 'أبو علندا',
    note: 'فرع الإدارة والمصنع',
    hq: true,
    pinClass: 'pin-abu-alanda',
    pos: { x: 76, y: 78 },
  },
];

export const SAMPLE_REVIEWS: SampleReview[] = [
  {
    quote:
      'صرت آخذ مكسرات العزايم من الضياء؛ التشكيلة واسعة والوزن دايماً مزبوط على الميزان.',
    name: 'أم يزن',
    place: 'حي نزال',
  },
  {
    quote:
      'بعتت لهم على واتساب الساعة سبعة، وجهّزوا الطلب قبل ما أوصل الفرع. هيك الخدمة ولا بلاش.',
    name: 'خالد العبادي',
    place: 'ماركا الشمالية',
  },
  {
    quote:
      'البرغل الخشن عندهم نظيف وما بده تنقاية، وهاد الإشي بفرق مع أي حدا بطبخ كبّة.',
    name: 'رنا الحوراني',
    place: 'ضاحية الياسمين',
  },
  {
    quote:
      'البزر الأفغاني صار جزء من سهرة الجمعة عنا. الحبّة كبيرة والملح معتدل.',
    name: 'أبو فراس',
    place: 'البيادر',
  },
];
