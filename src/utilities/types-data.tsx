import { IconBulb, IconUsers } from "@tabler/icons-react";
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


export const ourValues = [
  {
    title: "کیفیت بالا",
    text: "برای ما کیفیت همیشه در اولویته. چه از نظر محتوای نوشته‌ها، چه از نظر طراحی سایت، تلاش می‌کنیم بهترین‌ها رو به شما ارائه کنیم تا تجربه‌ای بی‌نظیر از دنیای سینما داشته باشید.",
    icon: ""
  },
  {
    title: "احترام به تنوع",
    text: "ما به همه سلیقه‌ها و ژانرهای سینمایی احترام می‌ذاریم. تلاش می‌کنیم به فیلم‌های مختلف با نگاه باز و متنوع نگاه کنیم و به هر اثر فرصتی برای درخشش بدیم.",
    icon: ""
  },
  {
    title: " تعامل با مخاطب",
    text: "ارتباط با شما برای ما خیلی مهمه. نظرات، پیشنهادات و انتقادات شما رو با روی باز می‌پذیریم و همیشه دنبال اینیم که با شما در تعامل باشیم و نیازهای شما رو بهتر درک کنیم.",
    icon: <IconUsers stroke={1.5} />
  },
  {
    title: "خلاقیت و نوآوری",
    text: "ما به دنبال ایده‌های جدید و نوآورانه هستیم. توی نقد و بررسی‌ها و محتواهای سایت، همیشه سعی می‌کنیم با رویکردهای خلاقانه و متفاوت به شما خدمت کنیم.",
    icon: <IconBulb stroke={1.5} />
  },
]