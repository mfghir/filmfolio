import { IconAward, IconBulb, IconRosetteDiscountCheck, IconUsers } from "@tabler/icons-react";
import {
  ThumbsUp,
  ThumbsDown,
  Star,
  Heart,
  HeartOff,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Gauge,
  ListFilter,
  SquareUserRound,
  UsersRound,
  MessageSquare,
  KeyRound,
} from "lucide-react";


export interface UserInfo {
  _id: string;
  username: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
  imgUrl?: string;
  __v?: number;
}



export interface NavItemMenu {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
}



export const navItemsMenu: NavItemMenu[] = [
  {
    title: "خانه",
    href: "/",
    label: "خانه"
  },
  {
    title: "برترین ها",
    href: "/the-best",
    label: "برترین ها"
  },
  // {
  //   title: "Movies",
  //   href: "/",
  //   label: "Movies"
  // },
  {
    title: "وبلاگ",
    href: "/blog",
    label: "وبلاگ"
  }, {
    title: "درباره ما",
    href: "/about-us",
    label: "درباره ما"
  },
  {
    title: "ارتباط",
    href: "/contact",
    label: "ارتباط"
  }
]


export interface NavItemsDashboard {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: unknown;
  label?: string;
  role: string[];
}

export const navItemsDashboard: NavItemsDashboard[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Gauge,
    label: "Dashboard",
    role: ["user", "admin"],
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: SquareUserRound,
    label: "Profile",
    role: ["user", "admin"],
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: UsersRound,
    label: "Users",
    role: ["admin"],
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
    label: "Messages",
    role: ["user"],
  },
  {
    title: "KDrama List",
    href: "/dashboard/kdrama-list",
    icon: ListFilter,
    label: "KDrama List",
    role: ["user", "admin"],
  },
  {
    title: "Change Password",
    href: "/dashboard/change-password",
    icon: KeyRound,
    label: "Change Password",
    role: ["user", "admin"],
  },
];










export const termsItems = [
  { title: "رعایت حقوق مالکیت فکری", text: "لطفاً از محتوای کپی‌رایت‌دار (مثل عکس، متن و ویدئو) بدون اجازه صاحب اثر استفاده نکنید. اگه این قانون رو رعایت نکنید، ممکنه حساب کاربری‌تون مسدود بشه." },
  { title: "احترام به دیگران", text: "با بقیه با احترام رفتار کنید و از توهین، تهدید، آزار و اذیت یا تبعیض خودداری کنید. هر نوع رفتار ناپسند می‌تونه به تعلیق یا حذف حساب کاربری‌تون منجر بشه." },
  { title: "انتشار نظرات صادقانه", text: "نظرات و نقدهاتون رو به‌طور صادقانه و بر اساس تجربیات شخصی‌تون بنویسید و لطفا اگر نظرتون حاوی اسپویل هست، حتما قبل از انتشار تیک اسپویل رو بزنید. انتشار نظرات جعلی یا گمراه‌کننده هم ممنوعه." },
  { title: "حفظ حریم خصوصی", text: "لطفاً اطلاعات شخصی دیگران رو بدون اجازه‌شون منتشر نکنید. حفظ حریم خصوصی بقیه از اولویت‌های ماست و هرگونه نقض این حریم می‌تونه به اقدامات قانونی منجر بشه." },
  { title: "عدم انتشار محتوای نامناسب", text: "محتوای نامناسب، غیرقانونی، مستهجن یا خشونت‌آمیز رو منتشر نکنید. این شامل تصاویر، ویدئوها و متن‌ها می‌شه." },
  { title: "گزارش تخلفات", text: "اگه تخلف یا نقض قوانین رو دیدید، لطفاً به تیم پشتیبانی گزارش بدید. این کار کمک می‌کنه تا امنیت و کیفیت پلتفرم بهتر بشه." },
  { title: "مسئولیت محتوا", text: "مسئولیت کامل محتوایی که منتشر می‌کنید با خودتونه. فیلم‌فولیو مسئولیتی در قبال صحت و دقت نظرات و نقدهای کاربران نداره." },
  { title: "تغییرات در قوانین و مقررات", text: "فیلم‌فولیو حق داره در هر زمان قوانین و مقرراتش رو به‌روزرسانی کنه. لطفاً به‌طور منظم این صفحه رو بررسی کنید و از تغییرات آگاه بشید." },
]



export const teamMembers = [
  { name: "علی رضایی", job: "بنیان‌گذار و سردبیر", picUrl: "https://i.postimg.cc/vZbTRfHR/team-mate-1.png" },
  { name: "سمیرا حسینی", job: "مدیر محتوا", picUrl: "https://i.postimg.cc/Pq6PQJjg/team-mate-2.png" },
  { name: "احمد موسوی", job: "منتقد ارشد", picUrl: "https://i.postimg.cc/JhK1C2YZ/team-mate-3.png" },
  { name: "نازنین کاظمی", job: "نویسنده و تحلیل‌گر سینما", picUrl: "https://i.postimg.cc/VkQsqMbr/team-mate-4.png" },
  { name: "رضا شریفی", job: "مسئول پادکست", picUrl: "https://i.postimg.cc/W4s2Kv8s/team-mate-5.png" },
  { name: "مینا سعیدی", job: "کارشناس جشنواره‌ها", picUrl: "https://i.postimg.cc/1RbVd8qP/team-mate-6.png" }
]







const GradientDefs = () => (
  <svg width="0" height="0">
    <defs>
      <linearGradient id="galaxyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#f0abfc", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#67e8f9", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
);

const GradientIcon = ({ IconComponent }: { IconComponent: any }) => (
  <div className="icon-wrapper">
    <GradientDefs />
    <IconComponent stroke="url(#galaxyGradient)" />
  </div>
);



export const ourValues = [
  {
    title: "کیفیت بالا",
    text: "برای ما کیفیت همیشه در اولویته. چه از نظر محتوای نوشته‌ها، چه از نظر طراحی سایت، تلاش می‌کنیم بهترین‌ها رو به شما ارائه کنیم تا تجربه‌ای بی‌نظیر از دنیای سینما داشته باشید.",
    icon: <GradientIcon IconComponent={IconAward} />
  },
  {
    title: "احترام به تنوع",
    text: "ما به همه سلیقه‌ها و ژانرهای سینمایی احترام می‌ذاریم. تلاش می‌کنیم به فیلم‌های مختلف با نگاه باز و متنوع نگاه کنیم و به هر اثر فرصتی برای درخشش بدیم.",
    icon: <GradientIcon IconComponent={IconRosetteDiscountCheck} />
  },
  {
    title: " تعامل با مخاطب",
    text: "ارتباط با شما برای ما خیلی مهمه. نظرات، پیشنهادات و انتقادات شما رو با روی باز می‌پذیریم و همیشه دنبال اینیم که با شما در تعامل باشیم و نیازهای شما رو بهتر درک کنیم.",
    icon: <GradientIcon IconComponent={IconUsers} />
  },
  {
    title: "خلاقیت و نوآوری",
    text: "ما به دنبال ایده‌های جدید و نوآورانه هستیم. توی نقد و بررسی‌ها و محتواهای سایت، همیشه سعی می‌کنیم با رویکردهای خلاقانه و متفاوت به شما خدمت کنیم.",
    icon: <GradientIcon IconComponent={IconBulb} />
  },
];







export const blogPosts = [
  {
    "id": 1,
    "title": "پشت صحنه ساخت انیمه 'شیطان کش: فصل 3'",
    "articleImg": "https://cdn.stocksnap.io/img-thumbs/280h/people-woman_BT3Y03PPE6.jpg",
    "summary": "در این مقاله به پشت صحنه ساخت فصل سوم انیمه محبوب 'شیطان کش' می‌پردازیم و جزئیات جدیدی از این انیمه را بررسی می‌کنیم.",
    "publishDate": "2024-06-30",
    "authorName": "احمد موسوی",
    "authorImage": "https://randomuser.me/api/portraits/men/60.jpg",
    "tags": ["انیمه", "پشت صحنه", "شیطان کش"],
    "fullText": [
      { paragraphId: 1, text: "انیمه 'شیطان کش' یکی از محبوب‌ترین انیمه‌های حال حاضر است که طرفداران بسیاری در سراسر جهان دارد." },
      { paragraphId: 2, text: "فصل سوم این انیمه با هیجان و انتظارات بسیاری از سوی طرفداران مواجه شد." },
      { paragraphId: 3, text: "در این مقاله قصد داریم به پشت صحنه ساخت این فصل بپردازیم و جزئیات جدیدی از آن را بررسی کنیم." },
      { paragraphId: 4, text: "کارگردان این فصل گفته است که تلاش زیادی برای بهبود کیفیت انیمیشن و داستان انجام داده‌اند." },
      { paragraphId: 5, text: "یکی از چالش‌های اصلی تیم تولید، ایجاد تعادل بین وفاداری به منبع اصلی و اضافه کردن جزئیات جدید بود." },
      { paragraphId: 6, text: "استفاده از تکنولوژی‌های جدید در انیمیشن‌سازی نیز یکی از نکات برجسته این فصل است." },
      { paragraphId: 7, text: "طرفداران می‌توانند انتظار داشته باشند که فصل سوم 'شیطان کش' به یکی از بهترین فصل‌های این سری تبدیل شود." }
    ]
  },
  {
    "id": 2,
    "title": "تاریخچه انیمه و تاثیر آن بر فرهنگ عمومی",
    "articleImg": "https://cdn.stocksnap.io/img-thumbs/280h/mlikyway-galaxy_OLPRPBVXWT.jpg",
    "summary": "در این مقاله به بررسی فیلم جدید کریستوفر نولان با عنوان 'دهه ۲۰۳۰' می‌پردازیم و جزئیات تازه‌ای از این فیلم را معرفی می‌کنیم.",
    "publishDate": "2024-07-01",
    "authorName": "نازنین کاظمی",
    "authorImage": "https://randomuser.me/api/portraits/women/75.jpg",
    "tags": ["فیلم", "کریستوفر نولان", "علمی-تخیلی"],
    "fullText": [
      { paragraphId: 1, text: "انیمه به عنوان یک فرم هنری خاص از دهه‌های گذشته تا به امروز مسیر طولانی را پیموده است." },
      { paragraphId: 2, text: "این هنر در ژاپن شروع شد و به تدریج به یک پدیده جهانی تبدیل شد." },
      { paragraphId: 3, text: "انیمه‌ها توانسته‌اند تأثیرات عمیقی بر فرهنگ عمومی و جوامع مختلف بگذارند." },
      { paragraphId: 4, text: "از داستان‌های عمیق و پیچیده گرفته تا شخصیت‌های محبوب و نمادین، انیمه‌ها نقش مهمی در سرگرمی و آموزش داشته‌اند." },
      { paragraphId: 5, text: "یکی از ویژگی‌های منحصر به فرد انیمه، توانایی آن در تلفیق عناصر مختلف فرهنگی است." },
      { paragraphId: 6, text: "انیمه‌ها می‌توانند مفاهیم پیچیده فلسفی، اجتماعی و فرهنگی را به شیوه‌ای قابل فهم و جذاب منتقل کنند." },
      { paragraphId: 7, text: "تأثیر انیمه بر صنعت مد، موسیقی، و حتی سبک زندگی جوانان در سراسر جهان قابل مشاهده است." }
    ]
  },
  {
    "id": 3,
    "title": "محبوب‌ترین شخصیت‌های انیمه در دهه گذشته",
    "articleImg": "https://cdn.stocksnap.io/img-thumbs/280h/woman-model_5SWNDCR5SS.jpg",
    "summary": "در این مقاله به بررسی عملکرد و تاثیر بازیگران زن در سینمای هالیوود می‌پردازیم و نقش آنان را در این صنعت مهم بررسی می‌کنیم.",
    "publishDate": "2024-07-05",
    "authorName": "مینا سعیدی",
    "authorImage": "https://randomuser.me/api/portraits/women/31.jpg",
    "tags": ["هالیوود", "بازیگران زن", "سینما"],
    "fullText": [
      { paragraphId: 1, text: "شخصیت‌های انیمه همیشه جایگاه ویژه‌ای در قلب طرفداران داشته‌اند." },
      { paragraphId: 2, text: "در دهه گذشته، برخی شخصیت‌ها توانسته‌اند به محبوبیت بی‌نظیری دست پیدا کنند." },
      { paragraphId: 3, text: "یکی از این شخصیت‌ها، ناروتو از انیمه 'ناروتو' است که داستان پرفراز و نشیبش دل بسیاری را به دست آورده است." },
      { paragraphId: 4, text: "دیگری، لوفی از 'وان پیس' است که با شخصیت‌پردازی منحصر به فردش توانسته است محبوبیت زیادی کسب کند." },
      { paragraphId: 5, text: "اتسوکا از 'شیطان کش' نیز یکی از شخصیت‌هایی است که توانسته است در مدت کوتاهی طرفداران زیادی پیدا کند." },
      { paragraphId: 6, text: "این شخصیت‌ها با داستان‌های جذاب و عمیق خود توانسته‌اند تأثیرات زیادی بر طرفداران بگذارند." },
      { paragraphId: 7, text: "در آینده نیز مطمئناً شخصیت‌های جدیدی خواهند آمد که بتوانند به این سطح از محبوبیت دست پیدا کنند." }
    ]
  },
  {
    "id": 4,
    "title": "تأثیرات کرونا بر صنعت سینما: چالش‌ها و فرصت‌ها",
    "articleImg": "https://cdn.stocksnap.io/img-thumbs/280h/architecture-building_LZDG3B8SXI.jpg",
    "summary": "در این مقاله به بررسی تأثیرات همه‌گیری کرونا بر صنعت سینما می‌پردازیم و چالش‌ها و فرصت‌هایی که برای سینماگران به وجود آمده را مورد بررسی قرار می‌دهیم.",
    "publishDate": "2024-07-10",
    "authorName": "سینا رضایی",
    "authorImage": "https://randomuser.me/api/portraits/men/46.jpg",
    "tags": ["کرونا", "صنعت سینما", "نوآوری"],
    "fullText": [
      { paragraphId: 1, text: "فصل بهار 2023 با عرضه انیمه‌های متنوع و جذاب همراه بود." },
      { paragraphId: 2, text: "در این فصل، انیمه‌های مختلفی در ژانرهای مختلف به نمایش درآمدند که هر کدام توانستند مخاطبان زیادی جذب کنند." },
      { paragraphId: 3, text: "یکی از بهترین انیمه‌های این فصل، 'حماسه وینلند: فصل 2' بود که با داستانی جذاب و انیمیشن‌های با کیفیت توانست توجهات زیادی را جلب کند." },
      { paragraphId: 4, text: "همچنین، 'توکیو ریونجرز: فصل 2' نیز با داستانی هیجان‌انگیز و شخصیت‌پردازی عالی مورد استقبال قرار گرفت." },
      { paragraphId: 5, text: "انیمه 'سایه‌های خانه: فصل 2' نیز با داستانی مرموز و پیچیده توانست جایگاه ویژه‌ای در بین طرفداران پیدا کند." },
      { paragraphId: 6, text: "در نهایت، 'حمله به غول: فصل 4' نیز با پایانی حماسی و هیجان‌انگیز به کار خود پایان داد و توانست یکی از بهترین انیمه‌های این فصل باشد." }
    ]
  },
  {
    "id": 5,
    "title": "معرفی بهترین انیمه‌های سال 2024",
    "articleImg": "https://cdn.stocksnap.io/img-thumbs/280h/SITGEA7FF9.jpg",
    "summary": "در این مقاله به معرفی بهترین انیمه‌های سال 2024 می‌پردازیم و دلایل موفقیت هر کدام را بررسی می‌کنیم.",
    "publishDate": "2024-07-15",
    "authorName": "نرگس ابراهیمی",
    "authorImage": "https://randomuser.me/api/portraits/women/9.jpg",
    "tags": ["انیمه", "بهترین انیمه‌ها", "2024"],
    "fullText": [
      { paragraphId: 1, text: "انیمه 'تایتان نهایی' یکی از انیمه‌های محبوب اخیر است که توانسته است توجهات زیادی را جلب کند." },
      { paragraphId: 2, text: "داستان این انیمه درباره مبارزه بین انسان‌ها و موجودات عظیم‌الجثه‌ای به نام تایتان‌ها است." },
      { paragraphId: 3, text: "یکی از نقاط قوت این انیمه، داستان جذاب و پیچیده آن است که توانسته است مخاطبان را به خود جذب کند." },
      { paragraphId: 4, text: "همچنین، شخصیت‌پردازی عالی و توسعه شخصیت‌ها نیز از دیگر نکات مثبت این انیمه است." },
      { paragraphId: 5, text: "با این حال، برخی از نقدها به انیمه 'تایتان نهایی' مربوط به سرعت پایین داستان در برخی از قسمت‌ها و همچنین برخی از جزئیات نامشخص در داستان است." },
      { paragraphId: 6, text: "در نهایت، 'تایتان نهایی' توانسته است با داستانی جذاب و شخصیت‌های به‌یادماندنی جایگاه ویژه‌ای در بین انیمه‌های محبوب پیدا کند." }
    ]
  },
  {
    "id": 6,
    "title": "چهره‌های جدید در دنیای سینما: بازیگران جوانی که باید بشناسید",
    "articleImg": "https://cdn.stocksnap.io/img-thumbs/280h/beautiful-bohemian_9AZW8YSXHA.jpg",
    "summary": "در این مقاله به معرفی چهره‌های جدید و بازیگران جوانی می‌پردازیم که در دنیای سینما به تازگی شناخته شده‌اند و آینده‌ای درخشان پیش رو دارند.",
    "publishDate": "2024-07-20",
    "authorName": "سارا کرمی",
    "authorImage": "https://randomuser.me/api/portraits/women/29.jpg",
    "tags": ["بازیگران جوان", "سینما", "چهره‌های جدید"],
    "fullText": [
      { paragraphId: 1, text: "انیمه‌ها در سال‌های اخیر توانسته‌اند تاثیرات زیادی بر صنعت بازی‌های ویدیویی بگذارند." },
      { paragraphId: 2, text: "بسیاری از بازی‌های ویدیویی از داستان‌ها و سبک‌های بصری انیمه الهام گرفته‌اند." },
      { paragraphId: 3, text: "این تاثیرات در بازی‌هایی مانند 'Final Fantasy' و 'Persona' به وضوح دیده می‌شود." },
      { paragraphId: 4, text: "استفاده از سبک‌های بصری انیمه در طراحی شخصیت‌ها و محیط‌ها باعث شده است که این بازی‌ها جذابیت بیشتری پیدا کنند." },
      { paragraphId: 5, text: "همچنین، انیمه‌ها توانسته‌اند با ارائه داستان‌های پیچیده و شخصیت‌های عمیق، استانداردهای جدیدی را برای داستان‌سرایی در بازی‌های ویدیویی تعیین کنند." },
      { paragraphId: 6, text: "در نهایت، تاثیر انیمه بر صنعت بازی‌های ویدیویی نه تنها در ظاهر و داستان‌ها بلکه در نحوه ارائه و تجربه بازی‌ها نیز مشهود است." }
    ]
  },
  {
    "id": 7,
    "title": "بررسی فیلم‌های جشنواره کن 2024",
    "articleImg": "https://cdn.stocksnap.io/img-thumbs/280h/fireworks-background_OI14LFAXLO.jpg",
    "summary": "در این مقاله به بررسی فیلم‌های برجسته جشنواره کن 2024 می‌پردازیم و نکات جالب و برجسته هر فیلم را معرفی می‌کنیم.",
    "publishDate": "2024-07-25",
    "authorName": "رضا شریفی",
    "authorImage": "https://randomuser.me/api/portraits/men/20.jpg",
    "tags": ["جشنواره کن", "فیلم‌های برجسته", "2024"],
    "fullText": [
      { paragraphId: 1, text: "انیمه‌های عاشقانه همیشه جایگاه ویژه‌ای در بین طرفداران داشته‌اند." },
      { paragraphId: 2, text: "یکی از بهترین انیمه‌های عاشقانه 'Your Lie in April' است که داستانی دل‌انگیز درباره عشق و موسیقی دارد." },
      { paragraphId: 3, text: "همچنین، 'Toradora!' نیز یکی از انیمه‌های عاشقانه محبوب است که با داستانی جذاب و شخصیت‌های به‌یادماندنی توانسته است توجهات زیادی را جلب کند." },
      { paragraphId: 4, text: "انیمه 'Clannad' نیز با داستانی احساسی و شخصیت‌های عمیق یکی دیگر از بهترین انیمه‌های عاشقانه است." },
      { paragraphId: 5, text: "در نهایت، 'Fruits Basket' نیز با ترکیب عناصر عاشقانه و فانتزی توانسته است جایگاه ویژه‌ای در بین انیمه‌های عاشقانه پیدا کند." }
    ]
  },
  {
    "id": 8,
    "title": "بررسی فیلم جدید استیون اسپیلبرگ: 'سفر به آینده'",
    "articleImg": "https://cdn.stocksnap.io/img-thumbs/280h/crowd-audience_FYXAZHCHGM.jpg",
    "summary": "در این مقاله به بررسی فیلم جدید استیون اسپیلبرگ با عنوان 'سفر به آینده' می‌پردازیم و نکات برجسته این فیلم را معرفی می‌کنیم.",
    "publishDate": "2024-07-30",
    "authorName": "علیرضا ناصری",
    "authorImage": "https://randomuser.me/api/portraits/men/79.jpg",
    "tags": ["استیون اسپیلبرگ", "فیلم", "علمی-تخیلی"],
    "fullText": [
      { paragraphId: 1, text: "انیمه 'تایتان نهایی' یکی از انیمه‌های محبوب اخیر است که توانسته است توجهات زیادی را جلب کند." },
      { paragraphId: 2, text: "داستان این انیمه درباره مبارزه بین انسان‌ها و موجودات عظیم‌الجثه‌ای به نام تایتان‌ها است." },
      { paragraphId: 3, text: "یکی از نقاط قوت این انیمه، داستان جذاب و پیچیده آن است که توانسته است مخاطبان را به خود جذب کند." },
      { paragraphId: 4, text: "همچنین، شخصیت‌پردازی عالی و توسعه شخصیت‌ها نیز از دیگر نکات مثبت این انیمه است." },
      { paragraphId: 5, text: "با این حال، برخی از نقدها به انیمه 'تایتان نهایی' مربوط به سرعت پایین داستان در برخی از قسمت‌ها و همچنین برخی از جزئیات نامشخص در داستان است." },
      { paragraphId: 6, text: "در نهایت، 'تایتان نهایی' توانسته است با داستانی جذاب و شخصیت‌های به‌یادماندنی جایگاه ویژه‌ای در بین انیمه‌های محبوب پیدا کند." }
    ]
  },
  {
    "id": 9,
    "title": "تحلیل روندهای جدید در انیمه‌سازی",
    "articleImg": "https://cdn.stocksnap.io/img-thumbs/280h/cinema-sign_OBWDJNGDBN.jpg",
    "summary": "در این مقاله به بررسی روندهای جدید در صنعت انیمه‌سازی می‌پردازیم و تکنیک‌ها و سبک‌های جدیدی که در این حوزه به کار می‌روند را معرفی می‌کنیم.",
    "publishDate": "2024-08-01",
    "authorName": "هانیه رضایی",
    "authorImage": "https://randomuser.me/api/portraits/women/43.jpg",
    "tags": ["انیمه", "تحلیل", "تکنولوژی"],
    "fullText": [
      { paragraphId: 1, text: "انیمیشن در ژاپن تاریخچه‌ای طولانی و پرفراز و نشیب دارد." },
      { paragraphId: 2, text: "اولین انیمه‌ها در دهه 1910 تولید شدند و به تدریج با پیشرفت تکنولوژی و هنر انیمیشن‌سازی، این صنعت رشد کرد." },
      { paragraphId: 3, text: "در دهه 1960، انیمه‌ها با پخش سریال‌هایی مانند 'Astro Boy' به محبوبیت بیشتری دست یافتند." },
      { paragraphId: 4, text: "در دهه‌های بعدی، انیمه‌ها توانستند با ارائه داستان‌های پیچیده و شخصیت‌های عمیق، جایگاه ویژه‌ای در بین مخاطبان جهانی پیدا کنند." },
      { paragraphId: 5, text: "استودیوهای معروفی مانند 'Ghibli' و 'Toei Animation' نقش مهمی در تحولات این صنعت داشتند." },
      { paragraphId: 6, text: "در نهایت، انیمه‌ها توانسته‌اند با ترکیب عناصر فرهنگی ژاپنی و تکنولوژی‌های جدید، به یکی از بخش‌های مهم فرهنگ جهانی تبدیل شوند." }
    ]
  },
  {
    "id": 10,
    "title": "نگاهی به فیلم جدید تارانتینو: 'پایان یک دوران'",
    "articleImg": "https://cdn.stocksnap.io/img-thumbs/280h/seat-number_K6FFR9WB9O.jpg",
    "summary": "در این مقاله به بررسی فیلم جدید کوئنتین تارانتینو با عنوان 'پایان یک دوران' می‌پردازیم و نکات برجسته این فیلم را معرفی می‌کنیم.",
    "publishDate": "2024-08-05",
    "authorName": "امیر حسینی",
    "authorImage": "https://randomuser.me/api/portraits/men/34.jpg",
    "tags": ["جدید", "فیلم", "اکشن"],
    "fullText": [
      { paragraphId: 1, text: "انیمه 'آکادمی قهرمان من' یکی از انیمه‌های محبوب در سال‌های اخیر است." },
      { paragraphId: 2, text: "این انیمه داستان دانش‌آموزانی را دنبال می‌کند که در یک آکادمی برای تبدیل شدن به قهرمانان آموزش می‌بینند." },
      { paragraphId: 3, text: "یکی از نقاط قوت این انیمه، شخصیت‌پردازی عمیق و توسعه شخصیت‌های مختلف است." },
      { paragraphId: 4, text: "همچنین، داستان جذاب و مبارزات هیجان‌انگیز از دیگر نکات مثبت این انیمه هستند." },
      { paragraphId: 5, text: "با این حال، برخی از نقدها به این انیمه مربوط به تکراری بودن برخی از داستان‌ها و شخصیت‌ها است." },
      { paragraphId: 6, text: "در نهایت، 'آکادمی قهرمان من' توانسته است با ترکیب داستانی جذاب و شخصیت‌های به‌یادماندنی، جایگاه ویژه‌ای در بین انیمه‌های محبوب پیدا کند." }
    ]
  }
]

