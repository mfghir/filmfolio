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
  },
  // {
  //   title: "وبلاگ",
  //   href: `/وبلاگ/${blogId}` ,
  //   label: "وبلاگ"

  // },
  {
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
    "title": "دنباله فیلم ترسناک In a Violent Nature ساخته می شود",
    "articleImg": "https://cdn.zoomg.ir/2024/3/in-a-violent-nature.jpg?w=768",
    "summary": "جانی، قاتل خون‌خوار فیلم In a Violent Nature در قسمت دوم این فیلم دوباره به جنگل برمی‌گردد.",

    "publishDate": " ۷ مرداد ۱۴۰۳",
    "articleImg_2": "https://cdn.zoomg.ir/2024/7/in-a-violent-nature-2-poster.jpg",
    "authorName": "یاشار ظروفی",
    "authorImage": "https://randomuser.me/api/portraits/men/60.jpg",
    "tags": ["انیمه", "پشت صحنه", "شیطان کش"],
    "fullText": [
      { paragraphId: 1, text: "«در طبیعت خشن» عمدتا به آشوب‌های ایجاد شده توسط شخصیت جانی (که تقلیدی از شخصیت‌های قاتل مشهوری مانند جیسون وورهیز از سری فیلم‌های «جمعه، سیزدهم» است) می‌پردازد. در این فیلم ما با این قاتل همراه می‌شویم و او را تا پیدا کردن قربانیان بعدی خود در جنگل دنبال می‌کنیم." },
      { paragraphId: 2, text: "«در طبیعت خشن» عمدتا به آشوب‌های ایجاد شده توسط شخصیت جانی (که تقلیدی از شخصیت‌های قاتل مشهوری مانند جیسون وورهیز از سری فیلم‌های «جمعه، سیزدهم» است) می‌پردازد. در این فیلم ما با این قاتل همراه می‌شویم و او را تا پیدا کردن قربانیان بعدی خود در جنگل دنبال می‌کنیم." },
      { paragraphId: 3, text: "فیلم «در طبیعت خشن» در اردیبهشت ماه در سینماها اکران شد و تبدیل به یکی از ۱۰ فیلم پرفروش تمام دوران از استودیو IFC شد. این فیلم در حال حاضر در سینماها و شبکه‌های نمایش خانگی در دسترس است و از جمعه ۲۳ شهریور در شبکه Shudder که یک شبکه پخش آنلاین مخصوص فیلم‌های ترسناک است نیز پخش می‌شود. نسخه اصلی فیلم در حال حاضر در صدر فهرست بهترین فیلم‌های ترسناک سال ۲۰۲۴ در رسانه ورایتی قرار دارد." },
      { paragraphId: 4, text: "«در طبیعت خشن» عمدتا به آشوب‌های ایجاد شده توسط شخصیت جانی (که تقلیدی از شخصیت‌های قاتل مشهوری مانند جیسون وورهیز از سری فیلم‌های «جمعه، سیزدهم» است) می‌پردازد. در این فیلم ما با این قاتل همراه می‌شویم و او را تا پیدا کردن قربانیان بعدی خود در جنگل دنبال می‌کنیم." },
      { paragraphId: 5, text: "اسکات شومان، رئیس گروه فیلم‌سازی شبکه AMC، در بیانیه‌ای گفت:«فیلم «در طبیعت خشن» نشان داد که همچنان اشتیاق برای دیدگاه‌های جدید در دنیای وحشت وجود دارد. ما بلافاصله متوجه شدیم که این نگاه متفاوت به شخصیت جانی، طرفداران را مجذوب می‌کند و خوشحالیم که می‌بینیم جامعه، جانی را به عنوان یک قاتل مشهور جدید پذیرفته است. در جریان دنباله این فیلم، هدف ما این است که ثابت کنیم جانی می‌تواند بزرگ‌تر و بدتر شود و سلاخی‌های او نیز چشمگیرتر شود.»" },
      { paragraphId: 6, text: "کوپلووسکی نیز در بیانیه‌ای گفت:«عنوان In a Violent Nature ابتدا قرار بود به عنوان یک دنباله متا در یک مجموعه سلاخی تخیلی باشد بنابراین ما همیشه آشوب آن را فراتر از محدوده فیلم اصلی تصور می‌کردیم. اینکه اکنون فرصت داریم جانی را در این پیاده‌روی خستگی‌ناپذیرش دنبال کنیم، از شرکای شگفت‌انگیز خود در IFC Films و Shudder بسیار سپاسگزار هستیم که از همان روز اول به نظرات کریس نش اعتقاد داشتند. ما هیجان‌زده‌ایم که برای یک فصل جدید برگردیم و برای استفاده از جانی به عنوان وسیله‌ای برای آزمایش‌های بیشتر در این ژانر نیز بسیار هیجان‌زده هستیم.»" }
    ]
  },
  {
    "id": 2,
    "title": "ساخت فیلم بتمن ۲ تایید شد",
    "articleImg": "https://cdn.zoomg.ir/2022/2/the-batman-wallpaper.jpg?w=768",
    "summary": "فیلمبرداری بتمن ۲ سال میلادی آینده آغاز می‌شود و قرار است که کالین فارل در نقش پنگوئن در این فیلم حضور داشته باشد.",

    "publishDate": "۷ مرداد ۱۴۰۳ ",
    "articleImg_2": "https://cdn.zoomg.ir/2023/11/colin-farrell-the-penguin-the-batman.jpg",
    "authorName": "نادیا رشیدی",
    "authorImage": "https://randomuser.me/api/portraits/women/75.jpg",
    "tags": ["فیلم", "سریال‌", "رسانه"],
    "fullText": [
      { paragraphId: 1, text: "شرکت دی سی در همایش کامیک‌کان سن دیگو بالاخره پروژه اصلی خود را رونمایی کرد و اعلام کرد که همه فیلم‌ها و سریال‌های تلویزیونی آن رسما زیر چتر DC Studios قرار می‌گیرند. این بدین معناست که راه‌اندازی دنیای سینمایی جدید دی سی با «کوماندوهای هیولا» و «سوپرمن» و همچنین فیلم‌ها و جهان‌های مستقل دیگری که از قبل باقی مانده‌اند مانند «جوکر» و «بتمن» نیز از این به بعد تحت نظارت دی سی استودیوز تولید و ادامه داده می‌شوند." },
      { paragraphId: 2, text: "اخیرا توسط اریک دیویس از رسانه Fandango گزارش شد که فصل بعدی مجموعه بتمن (که در حال حاضر با نام «بتمن: قسمت دوم» شناخته می‌شود) قرار است سال آینده فیلمبرداری شود. دیویس همچنین فاش کرد که کالین فارل نقش پنگوئن را در این فیلم هم تکرار می‌کند و داستان سریال پنگوئن محصول شبکه HBO Max نیز به دنباله این فیلم منتهی می‌شود. این‌ها خبرهای خوبی برای طرفداران بتمن به حساب می‌آیند و امیدواریم که جزئیات بیشتری درباره داستان و سایر جنبه‌های این فیلم تا پایان سال جاری میلادی منتشر شود." },
      { paragraphId: 3, text: "قبل از اینکه بتمن ۲ در سینماها اکران شود، طرفداران فرصت دارند تا به دنیایی که مت ریوز در سریال پنگوئن معرفی کرد، بازگردند. پنگوئن کار خود را از همان جایی ادامه می‌دهد که بتمن آن را رها کرده بود چون پس از وقایع فیلم اول فهمیدیم که او به دنبال تصاحب دنیای زیرزمینی گاتهام است. حالا همه متوجه شدند که در این راه با بتمن طرف هستند اما این موضوع کوچک‌ترین تاثیری در تصمیم پنگوئن ندارد." },
      { paragraphId: 4, text: "کوین فارل در مصاحبه‌ای با رسانه HeyUGuys مقداری از آنچه که طرفداران می‌توانند از این سریال انتظار داشته باشند را فاش و تایید کرد که این سریال قرار است بسیار تاریک و سیاه باشد. فارل گفت: «خشونت زیاد، تاریکی مطلق، یک مرد و تلاشی بزرگ برای رسیدن به نوک قله. می‌دانید، اکنون یک جنگ بر سر تصاحب قدرت در گاتهام جریان دارد. [فضای سریال] تاریک است، مرد. لورن له‌فرانک و تیم نویسندگانش هشت قسمت خارق‌العاده نوشتند. منظورم این است که [داستانی که نوشتند] واقعا جسورانه است. من نمی‌توانستم باور کنم که به این تاریکی باشد... این سریال قطعا در رده R (محتوای نامناسب برای افراد زیر ۱۷ سال) قرار می‌گیرد.»" },
      { paragraphId: 5, text: "این سریال کوتاه و هشت قسمتی محصول شبکه HBO که تحت نظارت DC Studios و با بازی کالین فارل در نقش «آز کاب» یا همان پنگوئن ساخته شده، به داستان جنایی و حماسی‌ای که مت ریوز در فیلم بتمن آغاز کرد و با موفقیت جهانی روبرو شد، ادامه می‌دهد. از ستارگان این سریال علاوه‌بر کالین فارل می‌توان به کریستین میلیوتی، رنزی فلیز، مایکل کلی، شهره آغداشلو، دیردر اوکانل، کلنسی براون، جیمز مادیو، اسکات کوهن، کارمن اجوگو و تئو روسی اشاره کرد." },
      { paragraphId: 6, text: "سریال پنگوئن بر اساس شخصیت‌هایی که باب کین و بیل فینگر برای دی سی ساخته بودند و توسط استودیو 6th & Idaho Productions و دیلن کلارک پروداکشنز و با همکاری استودیو برادران وارنر تولید می‌شود. تهیه‌کنندگان اجرایی این اثر مت ریوز، دیلن کلارک، کالین فارل، لورن له‌فرانک، کریگ زوبل، بیل کارارو و دنیل پیپسکی هستند. نویسنده اصلی و مجری صحنه نیز آقای لورن له‌فرانک است" }
    ]
  },
  {
    "id": 3,
    "title": "جوکر قرار نیست در فیلم Joker 2 تبدیل به یک جنایتکار شود",
    "articleImg": "https://cdn.zoomg.ir/2023/10/joker-folie-a-deux-joaquin-phoenix-in-prison.jpg?w=768",
    "summary": "جوکر قرار نیست در فیلم Joker 2 تبدیل به یک جنایتکار شود",

    "publishDate": "۷ مرداد ۱۴۰۳",
    "articleImg_2": "https://cdn.zoomg.ir/2023/12/joker-folie-a-deux-stars.jpg",
    "authorName": "مینا ترابی",
    "authorImage": "https://randomuser.me/api/portraits/women/31.jpg",
    "tags": ["هالیوود", "جنایی", "سینما"],
    "fullText": [
      { paragraphId: 1, text: "جوکر قرار نیست در فیلم Joker 2 تبدیل به یک جنایتکار شود" },
      { paragraphId: 2, text: "فیلیپس در ادامه گفت: «ما هرگز این کار را نمی‌کنیم چون آرتور به وضوح یک نابغه جنایی نیست. هیچ‌وقت هم نبوده است. آرتور به نمادی برای مردم تبدیل شده است. این نماد حالا ناخواسته بابت جرایمی که در فیلم اول مرتکب شده، هزینه می‌دهد اما در عین حال چیزی را که همیشه می‌خواسته یعنی عشق را پیدا می‌کند. این چیزی است که او همیشه به‌دنبال آن بوده حتی اگر در جهات مختلف هل داده شده و کشیده شده باشد. بنابراین ما سعی کردیم خالص‌ترین نسخه از آن را بسازیم.»" },
      { paragraphId: 3, text: "این رویکردی کاملا متفاوت از فیلم شوالیه تاریکی ساخته کریستوفر نولان است که در آن هیث لجر نقش جوکر را به‌عنوان یک نابغه جنایی بازی می‌کرد. تاد فیلیپس در مورد عناصر موزیکال فیلم Joker: Folie A Deux نیز صحبت کرد و گفت که آرتور درواقع خواننده نیست بلکه با موسیقی‌ای که مادرش در رادیو پخش می‌کرد بزرگ شده است. بنابراین در دنباله این فیلم، وظیفه واکین فینیکس این بود که کاری کند آرتور مانند کسی که در حمام تنهاست، آواز بخواند." },
      { paragraphId: 4, text: "فینیکس در این فیلم درکنار لیدی گاگا که نقش هارلی کویین را بازی می‌کند قرار گرفته و طبق گفته خودش، از استعداد او شگفت‌زده شده است. فینیکس درباره لیدی گاگا گفت: «گاگا همیشه من را تشویق می‌کرد تا جوری که احساس می‌کنم، بخوانم. برای کسی که مانند او خواننده نیست، انجام این کار می‌تواند ناراحت‌کننده باشد اما در عین حال بسیار هیجان‌انگیز هم است.»" },
      { paragraphId: 5, text: "فیلم Joker: Folie A Deux برای اکران در تاریخ ۴ اکتبر (۱۳ مهر) برنامه‌ریزی شده است.  علاوه‌بر فینیکس و گاگا، زازی بیتز، کاترین کینر، برندان گلیسون و استیو کوگان نیز در فیلم Joker 2 به ایفای نقش می‌پردازند." },
      { paragraphId: 6, text: "" }
    ]
  },
  {
    "id": 4,
    "title": "فیلم ددپول و ولورین با شکستن رکوردی تاریخی آغاز کرد",
    "articleImg": "https://cdn.zoomg.ir/2024/7/deadpool-and-wolverine-ready-for-fight.jpg?w=768",
    "summary": "فیلم Deadpool and Wolverine در اولین هفته اکرانش توانست رکورد بزرگ‌ترین افتتاحیه یک فیلم بزرگسال را با ثبت یک آمار فوق‌العاده بشکند",

    "publishDate": "۷ مرداد ۱۴۰۳ ",
    "articleImg_2": "https://cdn.zoomg.ir/2024/5/deadpool-and-wolverine-surprised-watching.jpg",
    "authorName": "سینا مرادی",
    "authorImage": "https://randomuser.me/api/portraits/men/46.jpg",
    "tags": ["گیشه", "صنعت سینما", "افتتاحیه"],
    "fullText": [
      { paragraphId: 1, text: "فیلم Deadpool and Wolverine سرانجام روی پرده‌های سینما رفت و اکنون طبق جدیدترین اخبار سینما و تلویزیون، فیلم ددپول و ولورین با ثبت چندین رکورد کار خودش را آغاز کرده است. فیلم Deadpool and Wolverine موفق شد در سه روز اول اکران خود در آمریکای شمالی ۲۰۵ میلیون دلار فروش کند تا نه‌تنها بزرگ‌ترین افتتاحیه یک فیلم با درجه سنی بزرگسال را تجربه کند، بلکه به اولین فیلم با درجه سنی R تبدیل شود که به افتتاحیه‌ای بیش از ۲۰۰ میلیون دلار دست پیدا می‌کند." },
      { paragraphId: 2, text: "همچنین این هشتمین افتتاحیه بزرگ گیشه آمریکای شمالی است. فیلم Deadpool and Wolverine با دریافت سینمااسکور A از تماشاگران مانند دو قسمت قبل شانس بالایی برای حفظ فروش خود دارد. این رکورد پیش از این به فیلم Deadpool با فروش ۱۳۳.۷ میلیون دلار تعلق داشت. همچنین فیلم Deadpool 2 افتتاحیه ۱۲۵.۵ میلیون دلاری را تجربه کرده بود. در گیشه جهانی نیز فیلم ددپول و ولورین با رکوردشکنی آغاز کرد و توانست ۲۳۳.۳ میلیون دلار در گیشه بین‌المللی و در مجموع ۴۳۸.۳ میلیون دلار در سراسر جهان در اولین هفته اکرانش فروش کند." },
      { paragraphId: 3, text: "فیلم Deadpool and Wolverine همچنین بزرگ‌ترین افتتاحیه سال ۲۰۲۴ را تجربه می‌کند و بزرگ‌ترین افتتاحیه پس از فیلم Spider-Man: No Way Home در آمریکا و بزرگ‌ترین افتتاحیه جهانی پس از فیلم Avatar: The Way of the Water را تجربه کرده است. شان لوی، کارگردان فیلم Free Guy و فیلم The Adam Project، وظیفه کارگردانی فیلم Deadpool and Wolverine را بر عهده داشته است. رت ریس و پال ورنیک که پیش از این فیلمنامه دو قسمت اول فیلم Deadpool را نوشته بودند، وظیفه نوشتن فیلمنامه فیلم ددپول و ولورین را به‌همراه زب ولز، رینولدز و لوی بر عهده داشته‌اند." },
      { paragraphId: 4, text: "رایان رینولدز در نقش ددپول، هیو جکمن در نقش لوگان ملقب به ولورین، اما کورین در نقش کاساندرا نوا، متیو مک‌فادین، دافنه کین، وونمی موساکو، مورنا باکارین، استفان کاپیچیچ، برایانا هیلدبرند، کوتسونا شیئوری، راب دلینی، کاران سونی، لزلی اوگامس، جنیفر گارنر، آرون استنفورد، تایلر مین و لوئیس تان از جمله بازیگرانی هستند که در فیلم Deadpool and Wolverine حضور دارند و به ایفای نقش پرداخته‌اند." },
      { paragraphId: 5, text: "" },
      { paragraphId: 6, text: "" }
    ]
  },
  {
    "id": 5,
    "title": "انیمیشن Blood of Zeus برای فصل سوم و پایانی تمدید شد",
    "articleImg": "https://cdn.zoomg.ir/2023/11/blood-of-zeus-season-2-heron-blue-spider.jpg?w=768",
    "summary": "نتفلیکس در جریان کامیک کان سن دیگو از تمدید انیمیشن Blood of Zeus برای فصل سوم و پایانی خبر داد.",

    "publishDate": "۷ مرداد ۱۴۰۳",
    "articleImg_2": "https://cdn.zoomg.ir/2024/7/blood-of-zeus-third-and-final-season.jpg",
    "authorName": "مسیح کریمی",
    "authorImage": "https://randomuser.me/api/portraits/women/9.jpg",
    "tags": ["انیمه", "نتفلیکس", "انیمیشن"],
    "fullText": [
      { paragraphId: 1, text: "اردیبهشت امسال بود که فصل دوم انیمیشن خون زئوس از شبکه نتفلیکس پخش شد و حالا در جدیدترین اخبار سینما و تلویزیون، این انیمیشن بزرگسالانه به پایان راه خود رسیده است. نتفلیکس در جریان کامیک کان سن دیگو امسال با انتشار یک تصویر رسما اعلام کرد که انیمیشن Blood of Zeus برای فصل سوم تمدید شده است که فصل سوم این انیمیشن قرار است فصل پایانی آن باشد. همچنین نتفلیکس تایید کرد که فصل پایانی انیمیشن خون زئوس در سال ۲۰۲۵ از این شبکه پخش خواهد شد." },
      { paragraphId: 2, text: "چارلی پارلاپانیدس و ولاس پارلاپانیدس وظیفه ساخت سریال Blood of Zeus را بر عهده داشته‌اند و وظیفه کارگردانی تمامی قسمت‌ها نیز بر عهده شان نیگوگوسیان بوده است که انتظار می‌رود برای ساخت فصل سوم سریال خون زئوس نیز بازگردند. استودیو پاورهوس انیمیشن، سازنده آثاری چون انیمیشن Castlevania، انیمیشن Masters of the Universe: Revelation و انیمیشن Castlevania: Nocturne مانند دو فصل اول وظیفه تولید فصل سوم و پایانی انیمیشن Blood of Zeus را بر عهده دارند." },
      { paragraphId: 3, text: "درک فیلیپس در نقش هرون، جیسون اومارا در نقش زئوس، کلودیا کریستین در نقش هرا، الیاس توفکسیس در نقش سرافیم، مامی گامر در نقش الکترا، کریس دیامانتوپولوس در نقش اوویس، جسیکا هنویک در نقش الکسیا، ملینا کاناکاردس در نقش آریانا، متیو مرسر در نقش هرمس، آدتوکومبوه مکورمک در نقش کوفی و آدام کرواسدل در نقش آپولون از جمله بازیگرانی بودند که به‌عنوان صداپیشه در دو فصل اول انیمیشن Blood of Zeus حضور داشتند." },
      { paragraphId: 4, text: "" },
      { paragraphId: 5, text: "" },
      { paragraphId: 6, text: "" }
    ]
  },
  {
    "id": 6,
    "title": "انیمیشن سریالی بتمن نسخه مونث پنگوئن را معرفی می‌کند",
    "articleImg": "https://cdn.zoomg.ir/2024/7/batman-caped-crusader-oswalda-cobblepot..jpg?w=768",
    "summary": "انیمیشن سریالی Batman: Caped Crusader نسخه مونث یکی از کاراکترهای شرور دی‌سی را معرفی می‌کند.",

    "publishDate": " ۸ مرداد ۱۴۰۳ ",
    "articleImg_2": "https://cdn.zoomg.ir/2024/7/batman-caped-crusader-oswalda-cobblepot..jpg?w=768",
    "authorName": "عارفه نوروزی",
    "authorImage": "https://randomuser.me/api/portraits/women/29.jpg",
    "tags": ["انیمیشن", "سینما", "تلویزیون"],
    "fullText": [
      { paragraphId: 1, text: "در میان جدیدترین اخبار سینما و تلویزیون مطلع شدیم که انیمیشن سریالی Batman: Caped Crusader (بتمن: شوالیه شنل‌پوش) نسخه مونث یکی از کاراکترهای شرور دی‌سی را به نمایش می‌گذارد. همان‌طور که رسانه ورایتی گزارش داد، مینی درایور وظیفه صداپیشگی نسخه مونث پنگوئن را در برعهده دارد که آزوالدا کابلپات نام دارد. انیمیشن سریالی بتمن: شوالیه شنل‌پوش در تاریخ ۱۱ مرداد ۱۴۰۳ (۱ اوت ۲۰۲۴) از شبکه آمازون پرایم ویدیو پخش می‌شود." },
      { paragraphId: 2, text: "همیش لینکلیتر، مکینا گریس، توبی استیونز، رید اسکات، دن دانوهیو، گری آنتونی ویلیامز، جیسون واتکینز، جان دیماجیو، کریستال جوی براون، میشل سی. بونیلا، اریک مورگان استوارت، تام کنی، مینی درایور، دیدریک بیدر، جیمی چانگ و کریستینا ریچی ازجمله صداپیشه‌های انیمیشن سریالی Batman: Caped Crusader به‌شمار می‌آیند. بروس تیم، جی. جی. آبرامز، مت ریوز، ادو بروبیکر و جیمز تاکر به‌عنوان مدیر تولید اجرایی پروژه فعالیت می‌کنند." },
      { paragraphId: 3, text: "در خلاصه داستان انیمیشن Batman: Caped Crusader می‌خوانیم: «بروس وین معروف پس از وقوع یک حادثه تلخ خانوادگی به بتمن تبدیل می‌شود، اما تلاش شوالیه تاریکی برای برقراری عدالت تبعات دور از انتظاری دارد.» این انیمیشن سریالی ابرقهرمانی در ابتدا برای پخش از شبکه مکس در نظر گرفته شده بود، ولی شرکت آمازون نهایتا امتیاز پخش آن را به‌دست آورد. انیمیشن بتمن: شوالیه شنل‌پوش درحال‌حاضر برای فصل دوم نیز تمدید شده است." },
      { paragraphId: 4, text: "" },
      { paragraphId: 5, text: "" },
      { paragraphId: 6, text: "" }
    ]
  },
  {
    "id": 7,
    "title": "دیو باتیستا از نقش خود در دنیای سینمایی دی‌سی مطمئن نیست",
    "articleImg": "https://cdn.zoomg.ir/2024/7/dave-bautista.jpg?w=768",
    "summary": "دیو باتیستا هنوز مطمئن نیست که ایفای نقش چه شخصیتی در دنیای سینمایی دی‌سی برای او مناسب خواهد بود.",

    "publishDate": "۸ مرداد ۱۴۰۳ ",
    "articleImg_2": "https://cdn.zoomg.ir/2024/7/dave-bautista.jpg?w=768",
    "authorName": "علیرضا محمدی",
    "authorImage": "https://randomuser.me/api/portraits/men/20.jpg",

    "tags": ["نقش", "دی‌سی", "مصاحبه‌"],
    "fullText": [
      { paragraphId: 1, text: "به اعتقاد بسیاری از افراد، دیو باتیستا یکی از بهترین کشتی‌گیران و بازیگران چند دهه اخیر است. او از زمان ورودش به عرصه بازیگری نقش‌های متنوع و زیادی را ایفا کرده است؛ اما نقطه اوج کارش را می‌توان در فیلم‌های مارول و شخصیت درکس جست‌وجو کرد. دیو باتیستا در قالب این نقش توانست شخصیتی بامزه و در عین حال خشن را به تصویر بکشد." },
      { paragraphId: 2, text: "اگرچه ممکن است کار او با دنیای سینمایی مارول تمام شده باشد، اما باتیستا همچنان مشتاق داستان‌های ابرقهرمانی است و دوست دارد به دنیای سینمایی تحت رهبری جیمز گان بپیوندد. او مطمئن نیست که ایفای نقش چه شخصیتی برایش مناسب خواهد بود. دیو باتیستا اخیرا در مصاحبه‌ای با رسانه اسکرین رنت به اظهارنظر در این‌باره پرداخت و گفت:" },
      { paragraphId: 3, text: "«شخصیت مورد علاقه من در دنیای دی‌سی از بچگی تا همین الان کسی نیست جز Bane. وقتی جوان‌تر بودم می‌خواستم نقش Bane را بازی کنم. این برای من مانند یک رویا بود و حالا به نقطه‌ای از حرفه‌ام رسیده‌ام که احساس می‌کنم برای بازی در نقش Bane خیلی پیر شده‌ام. مدتی پیش دیدم که یک هوادار، من را در قالب شخصیت لکس لوتر طراحی کرده است و راستش را اگر بخواهید مدت زیادی به آن فکر کردم؛ اما این شخصیت حالا بازیگر خود را دارد؛ بنابراین در حال تقلا برای یافتن جایگاه خود در دنیای دی‌سی هستم. من برای انجام هر کاری آماده‌ام.»" },
      { paragraphId: 4, text: "«شخصیت مورد علاقه من در دنیای دی‌سی از بچگی تا همین الان کسی نیست جز Bane. وقتی جوان‌تر بودم می‌خواستم نقش Bane را بازی کنم. این برای من مانند یک رویا بود و حالا به نقطه‌ای از حرفه‌ام رسیده‌ام که احساس می‌کنم برای بازی در نقش Bane خیلی پیر شده‌ام. مدتی پیش دیدم که یک هوادار، من را در قالب شخصیت لکس لوتر طراحی کرده است و راستش را اگر بخواهید مدت زیادی به آن فکر کردم؛ اما این شخصیت حالا بازیگر خود را دارد؛ بنابراین در حال تقلا برای یافتن جایگاه خود در دنیای دی‌سی هستم. من برای انجام هر کاری آماده‌ام.»" },
      { paragraphId: 5, text: "" },
      { paragraphId: 6, text: "" }
    ]
  },
  {
    "id": 8,
    "title": "آهنگساز انتقام جویان برای دو قسمت جدید فیلم Avengers باز خواهد گشت",
    "articleImg": "https://cdn.zoomg.ir/2021/8/avengers-infinity-war-cover.jpg?w=768",
    "summary": "آلن سیلوستری، آهنگساز فیلم‌های انتقام جویان اخیرا به احتمال بازگشت خود برای ساخت موسیقی متن دو قسمت آینده فیلم Avengers اشاره کرده است.",
    "publishDate": "۸ مرداد ۱۴۰۳",
    "articleImg_2": "https://cdn.zoomg.ir/2024/7/alan-silvestri.jpg",
    "authorName": "مسیحا کریمی",
    "authorImage": "https://randomuser.me/api/portraits/men/79.jpg",
    "tags": ["موسیقی ", "فیلم", "آهنگساز"],
    "fullText": [
      { paragraphId: 1, text: "پس از انتشار اخبار هیجان‌انگیز در کامیک کان سن دیگو، حالا طبق جدیدترین اخبار سینما و تلویزیون، آهنگساز فیلم‌های آینده انتقام جویان هم احتمالا مشخص شده است. پس از معرفی فیلم Avengers: Doomsday و فیلم Avengers: Secret Wars، آلن سیلوستری، آهنگساز نامزد دریافت ۲ جایزه اسکار در واکنش به این خبر در اینستاگرام شخصی خود گفت که بی‌صبرانه منتظر است و در ادامه برادران روسو، کارگردان دو قسمت جدید فیلم اونجرز او را دعوت به شروع کار کردند." },
      { paragraphId: 2, text: "بسیاری تصور می‌کنند که آلن سیلوستری وظیفه ساخت موسیقی متن فیلم Avengers: Doomsday و فیلم Avengers: Secret Wars را بر عهده گرفته است که در صورت درست بودن یک بازگشت دیگر است. سیلوستری سابقه درخشانی در دنیای سینمایی مارول دارد و کار خود را با ساخت موسیقی متن فیلم Captain America: The First Avenger آغاز کرد و سپس موسیقی متن فیلم The Avengers، فیلم Avengers: Infinity War و فیلم Avengers: Endgame را ساخته است و او همچنین خالق موسیقی متن تیم انتقام‌جویان است." },
      { paragraphId: 3, text: "بازگشت او می‌تواند باعث هیجان بسیاری شود. پیش از این بازگشت جو و آنتونی روسو ملقب به برادران روسو، کارگردان آثاری چون فیلم Captain America: The Winter Soldier، فیلم Captain America: Civil War، فیلم Avengers: Infinity War و فیلم Avengers: Endgame برای کارگردانی فیلم Avengers: Doomsday و فیلم Avengers: Secret Wars تایید و اعلام شده بود. رابرت داونی جونیور، بازیگر نقش آیرون من هم قرار است برای نقش دکتر دووم به دنیای سینمایی مارول بازگردد." },
      { paragraphId: 4, text: "همچنین استیون مک‌فیلی، نویسنده سه‌گانه فیلم کاپیتان آمریکا، فیلم Thor: The Dark World، فیلم Avengers: Infinity War و فیلم Avengers: Endgame برای نوشتن فیلمنامه فیلم Avengers 5 و فیلم Avengers 6 بازگشته است. علاوه‌براین کریستوفر مارکوس، همکار او به‌علت مشکلات خانوادگی در این پروژه حضور ندارد. همچنین آلن سیلوستری پیش از این برای ساخت موسیقی متن فیلم Forrest Gump و فیلم The Polar Express نامزد دریافت ۲ جایزه اسکار شده است" },
      { paragraphId: 5, text: "فیلم Avengers: Doomsday برای اکران در تاریخ ۱ می ۲۰۲۶ (۱۱ اردیبهشت ۱۴۰۵) و فیلم Avengers: Secret Wars برای اکران در تاریخ ۷ می ۲۰۲۷ (۱۷ اردیبهشت ۱۴۰۶) ‌برنامه‌ریزی شده‌اند" },
      { paragraphId: 6, text: "" }
    ]
  },
  {
    "id": 9,
    "title": "تاریخ پخش انیمیشن Spellbound نتفلیکس با انتشار اولین پوستر مشخص شد",
    "articleImg": "https://cdn.zoomg.ir/2023/10/spellbound-animated-new-image.jpeg?w=768",
    "summary": "شبکه نتفلیکس با انتشار یک پوستر تاریخ پخش انیمیشن Spellbound با صداپیشگی نیکول کیدمن را تایید و اعلام کرد",
    "articleImg_2": "https://cdn.zoomg.ir/2024/7/spellbound-animated-first-poster.jpg",
    "publishDate": " ۸ مرداد ۱۴۰۳",
    "authorName": "هانیه رضایی",
    "authorImage": "https://randomuser.me/api/portraits/women/43.jpg",
    "tags": ["انیمیشن ", "بازیگران", "نتفلیکس"],
    "fullText": [
      { paragraphId: 1, text: "در تازه‌ترین اخبار سینما و تلویزیون، زمان پخش انیمیشن طلسم‌شده مشخص و اعلام شده است. شبکه نتفلیکس با انتشار یک پوستر اعلام کرد که انیمیشن Spellbound در تاریخ ۲۲ نوامبر ۲۰۲۴ (۲ آذر ۱۴۰۳) از این سرویس استریم پخش خواهد شد. در ادامه می‌توانید اولین پوستر این انیمیشن موزیکال و ماجراجویی را مشاهده کنید:" },
      { paragraphId: 2, text: "ریچل زگلر، نیکول کیدمن، خاویر باردم، جان لیسگو، جنیفر لوئیس و ناتان لین از جمله بازیگرانی هستند که به‌عنوان صداپیشه در انیمیشن Spellbound حضور دارند و به صداپیشگی پرداخته‌اند. ویکی جنسون وظیفه کارگردانی این انیمیشن موزیکال را براساس فیلمنامه‌ای از لیندا وولورتون، لورن هاینک و الیزابت مارتین بر عهده دارد. وظیفه ساخت موسیقی متن انیمیشن طلسم‌شده نیز بر عهده آلن منکن، آهنگساز و ترانه‌سرا انیمیشن The Little Mermaid، انیمیشن Beauty and the Beast و انیمیشن Aladdin است." },
      { paragraphId: 3, text: "داستان انیمیشن Spellbound در دنیای جادویی لومبریا رخ می‌دهد که دختر جوانی به‌نام پرنسس الیان باید طلسمی را بشکند که پادشاهی او را به دو نیم تقسیم کرده‌ است. همچنین انیمیشن Pookoo دومین اثر اسکای‌دنس انیمیشن است که در سال ۲۰۲۵ قرار است از نتفلیکس پخش شود. ناتان گرنو، دستیار کارگردان انیمیشن Tangled وظیفه کارگردانی این انیمیشن را بر عهده دارد." },
      { paragraphId: 4, text: "استودیو اسکای‌دنس انیمیشن به ریاست جان لستر، کارگردان انیمیشن Toy Story و مدیر سابق پیکسار برنامه گسترده‌تری هم دارد و این استودیو با همکاری نتفلیکس در آینده قرار است انیمیشن Ray Gunn به کارگردانی برد برد با سابقه کارگردانی انیمیشن The Incredibles، انیمیشن Incredibles 2، انیمیشن Ratatouille، انیمیشن The Iron Giant و فیلم Mission: Impossible – Ghost Protocol به‌همراه انیمیشن جدید ریچ مور، کارگردان انیمیشن Wreck-It Ralph، انیمیشن Ralph Breaks the Internet و انیمیشن Zootopia براساس داستان جک و لوبیای سحرآمیز را تولید و پخش کند." }
    ]
  },
  {
    "id": 10,
    "title": "تصویر فصل پنجم سریال You سرنوشت جو را نشان می‌دهد",
    "articleImg": "https://cdn.zoomg.ir/2022/12/you-season-4-main-character.jpg?w=768",
    "summary": "تصویر جدیدی از پشت صحنه فیلم‌برداری سریال You منتشر شد که سرنوشت جو گلدبرگ در فصل پایانی را نشان می‌دهد.",
    "articleImg_2": "https://cdn.zoomg.ir/2024/7/you-season-5-set-photo.jpg",
    "publishDate": "۹ مرداد ۱۴۰۳ ",
    "authorName": "امیر حسینی",
    "authorImage": "https://randomuser.me/api/portraits/men/34.jpg",
    "tags": ["جدید", "فیلم", "اکشن"],
    "fullText": [
      { paragraphId: 1, text: "در میان تازه‌ترین اخبار سینما و تلویزیون مطلع شدیم که تصویر جدیدی از پشت صحنه فیلم‌برداری فصل پنجم سریال You (تو) شبکه نتفلیکس منتشر شده است. این تصویر جو گلدبرگ را با دستبندی در حال خروج از یک ساختمان نشان می‌دهد؛ درحالی‌که رسانه‌ها خبر دستگیری این قاتل زنجیره‌ای را پوشش می‌دهند. به‌نظر می‌رسد که سرانجام جو گلدبرگ در فصل پایانی به‌خاطر جنایت‌های قبلی نظیر مزاحمت، آدم‌ربایی و قتل معشوقه‌هایش دستگیر می‌شود." },
      { paragraphId: 2, text: "در خلاصه داستان سریال You می‌خوانیم: «وقتی جو گلدبرگ، مدیر باهوش کتاب‌فروشی به‌طور تصادفی با نویسنده‌ای بلندپرواز دیدار می‌کند، با تمام وجود عاشقش می‌شود. جو از اینترنت و رسانه‌های اجتماعی به‌عنوان ابزاری برای جمع‌آوری محرمانه‌ترین جزئیات و نزدیک شدن به این نویسنده استفاده می‌کند؛ طوری‌که یک خاطرخواهی خوشایند و جذاب به‌سرعت به وسواسی فکری بدل می‌شود و جو بی‌سروصدا و هدفمندانه هر مانع و شخصی را از سر راه برمی‌دارد.»" },
      { paragraphId: 3, text: "سریال You براساس رمانی با همین نام از کارولین کپ‌نس ساخته شده است و ماجراهای جو گلدبرگ را دنبال می‌کند که به‌طور افراطی نسبت‌به هر دختری که عاشقش می‌شود، وسواس فکری پیدا می‌کند. گرگ برلانتی، سرا گمبل، سارا شکتر، لزلی مورگنشتاین، جینا جیرولامو و مارکوس سیگا مدیر تولید اجرایی این سریال هستند. شبکه نتفلیکس هنوز تاریخ پخش فصل پنجم سریال تو را اعلام نکرده است و نمی‌دانیم که چه زمانی باید منتظر بازگشت جو گلدبرگ باشیم." },
      { paragraphId: 4, text: "" },
      { paragraphId: 5, text: "" },
      { paragraphId: 6, text: "" }
    ]
  }
]





export const faqList = [
  {
    id: 1,
    question: "چطور می‌تونم عضو سایت فیلم فولیو بشم؟",
    answer: "برای عضویت در فیلم فولیو، روی دکمه 'ثبت نام' در بالای صفحه کلیک کنید و فرم مربوطه رو پر کنید. بعد از ثبت اطلاعات، ایمیلی برای تأیید حساب به شما ارسال میشه."
  },
  {
    id: 2,
    question: "چطور می‌تونم لیست فیلم‌هایی که دیدم رو اضافه کنم؟",
    answer: "بعد از ورود به حساب کاربری، به بخش 'داشبورد' برید و روی گزینه 'افزودن فیلم' کلیک کنید. می‌تونید نام فیلم، تاریخ مشاهده و نظرتون رو درباره فیلم وارد کنید."
  },
  {
    id: 3,
    question: "چطور می‌تونم نظرات دیگران رو درباره یک فیلم ببینم؟",
    answer: "به صفحه فیلم مورد نظر برید. در بخش نظرات، می‌تونید همه نظرات کاربران دیگر را مشاهده کنید و حتی به آنها پاسخ دهید"
  },
  {
    id: 4,
    question: "آیا می‌تونم نظر خودمو درباره یک فیلم ویرایش کنم؟",
    answer: "بله، بعد از ورود به حساب کاربری، به داشبورد خود برید و روی فیلمی که می‌خواید نظرش رو ویرایش کنید کلیک کنید. سپس می‌تونید نظرتون رو ویرایش و ذخیره کنید."
  },
  {
    id: 5,
    question: "چطور می‌تونم فیلم‌های مورد علاقه‌ام رو دسته‌بندی کنم؟",
    answer: "در داشبورد خود، می‌تونید لیست‌های جداگانه‌ای برای فیلم‌های مورد علاقه‌تون ایجاد کنید و فیلم‌ها رو به لیست‌های مختلف اضافه کنید."
  },
  {
    id: 6,
    question: "آیا می‌تونم فیلم‌هایی رو که هنوز ندیدم به لیست تماشای آینده اضافه کنم؟",
    answer: "بله، شما می‌تونید فیلم‌هایی که قصد دیدنشون رو دارید به لیست ' تماشای آینده' اضافه کنید تا بعداً راحت‌تر به اونا دسترسی داشته باشید."
  },
  {
    id: 7,
    question: "چطور می‌تونم از جدیدترین فیلم‌ها و نظرات کاربران مطلع بشم؟",
    answer: "در صفحه اصلی و بخش 'برترین‌ها' می‌تونید جدیدترین فیلم‌ها و نظرات کاربران رو مشاهده کنید. همچنین می‌تونید از گزینه 'جستجو' برای پیدا کردن فیلم‌های جدید استفاده کنید."
  },
  {
    id: 8,
    question: "چطور می‌تونم به پشتیبانی سایت پیام بدم؟",
    answer: "در صفحه 'تماس با ما'، فرم تماس با پشتیبانی قرار داره. می‌تونید پیام خودتون رو وارد کنید و تیم پشتیبانی در اسرع وقت به شما پاسخ خواهد داد."
  }
]




export const miniAdsSec = [
  {
    title: "هر فیلم یک داستان، هر نقد یک تجربه!",
    text: "نظراتت رو با دیگران به اشتراک بگذار",
    textBtn: "شروع نقد",
    imgUrl: "https://i.postimg.cc/wjqgwf2h/mini-ads-1.jpg"
  },
  {
    title: "فیلم‌های مورد علاقه‌ات رو لیست کن!",
    text: "با دوستانت به اشتراک بگذار و لذت ببر",
    textBtn: "ایجاد لیست",
    imgUrl: "https://i.postimg.cc/xTy9yDvf/mini-ads-2.jpg"
  },
  {
    title: "محبوب‌ترین فیلم‌های این ماه",
    text: "ببین بقیه کاربران چه فیلم‌هایی رو دوست دارن",
    textBtn: "مشاهده",
    imgUrl: "https://i.postimg.cc/x16YhvpB/mini-ads-3.jpg"
  },
]



export const theBestSec = [
  { text: "برترین کاربران", imgUrl: "https://svgshare.com/i/190S.svg", linkUrl: "/the-best/users" },
  { text: "برترین نظرات", imgUrl: "https://svgshare.com/i/190T.svg", linkUrl: "/the-best/critics" },
  { text: "برترین فیلم ها", imgUrl: "https://svgshare.com/i/18z_.svg", linkUrl: "/the-best/movies" }
]


export const moviesSec = [
  { title: "اعلان های ویژه", svgUrl: "https://svgshare.com/i/192V.svg", linkUrl: "" },
  { title: "محبوب ترین ها", svgUrl: "https://svgshare.com/i/191_.svg", linkUrl: "" },
  { title: "جدید ترین ها", svgUrl: "https://svgshare.com/i/192J.svg", linkUrl: "" },
  { title: "دسته بندی ها", svgUrl: "https://svgshare.com/i/190u.svg", linkUrl: "" }
]




export const aboutUsSec = [
  {
    title: "درباره ما",
    text: "خوش اومدید به فیلم فولیو! اینجا جاییه برای همه عاشقان فیلم و سریال. می‌تونید لیست فیلم‌هایی که دیدید رو ثبت کنید و نظراتتون رو با بقیه به اشتراک بذارید. هدف ما ایجاد یه فضای دوستانه‌ست که توش بتونید تجربه‌ها و نظراتتون رو در مورد فیلم‌ها بگید و از نظرات دیگران هم بهره‌مند بشید"
  },
  {
    title: "ماموریت ما",
    text:
      "ماموریت ما فراهم کردن بستری برای علاقه‌مندان به فیلمه تا بتونن به راحتی فیلم‌ های مورد علاقه خودشون رو پیدا کنن ، نظراتشون رو به اشتراک بگذارن و از نقدهای دیگر کاربران استفاده کنن. ما معتقدیم که نقدهای صادقانه و بحث‌های سازنده ، می‌تونن به بهبود تجربه تماشای فیلم کمک کنن."
  },
  {
    title: "چشم‌انداز ما",
    text: "چشم‌انداز ما تبدیل شدن به مرجع اصلی نقد و بررسی فیلم‌ها تو فضای مجازیه. ما به دنبال ایجاد یک پایگاه داده گسترده از فیلم‌ها و نقدهای متنوع هستیم که بتونه به علاقه‌مندان به فیلم و سریال در انتخاب فیلم‌های بعدیشون کمک کنه."
  },
]