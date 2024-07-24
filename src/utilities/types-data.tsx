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
  { title: "", text: "" }
]



