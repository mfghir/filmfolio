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



