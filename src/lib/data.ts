
export const labels = [
  { value: "mini", label: "مینی" },
  { value: "usual", label: "معمولی" },
  { value: "long", label: "طولانی" },
];

export const sorts = [
  { value: "anime", label: "انیمه" },
  { value: "animation", label: "انیمیشن" },
  { value: "cinema", label: "سینمایی" },
  { value: "documentary", label: "مستند" },
  { value: "kdrama", label: "کیدراما" },
  { value: "mini-series", label: "مینی‌ سریال" },
  { value: "reality-show", label: "ریلیتی شو" },
  { value: "serial", label: "سریال" },
  { value: "short-film", label: "فیلم کوتاه" },
  { value: "tv-show", label: "برنامه تلویزیونی" },
  { value: "web-drama", label: "وب‌ دراما" },
];

export const statuses = [
  { value: "fav", label: "خیلی دوسش داشتم" }, // Loved it
  { value: "good", label: "خوب بود" }, // Good
  { value: "1time", label: "ارزش یک بار دیدن رو داره" }, // Worth watching once
  { value: "normal", label: "معمولی بود" }, // Average
  { value: "meh", label: "نه خوب نه بد" }, // Didn't impress
  { value: "dis", label: "خوشم نیومد" }, // Disliked it
  { value: "awful", label: "واقعا بد بود" }, // Awful
];

export const genres = [
  { label: "اکشن", value: "action" },
  { label: "انیمیشن", value: "animation" },
  { label: "تاریخی", value: "historical" },
  { label: "ترسناک", value: "horror" },
  { label: "جنایی", value: "crime" },
  { label: "درام", value: "drama" },
  { label: "ماجراجویی", value: "adventure" },
  { label: "مدرسه‌ای", value: "schoolish" },
  { label: "معمایی", value: "mystery" },
  { label: "مستند", value: "documentary" },
  { label: "موزیکال", value: "musical" },
  { label: "عاشقانه", value: "romance" },
  { label: "علمی-تخیلی", value: "sci-fi" },
  { label: "فانتزی", value: "fantasy" },
  { label: "کاراگاهی", value: "detective" },
  { label: "کمدی", value: "comedy" },
  { label: "هیجانی", value: "thriller" },
];

export const nationalities = [
  { label: "آمریکایی", value: "american" },
  { label: "آلمانی", value: "german" },
  { label: "استرالیایی", value: "australian" },
  { label: "اسپانیایی", value: "spanish" },
  { label: "انگلیسی", value: "british" },
  { label: "ایتالیایی", value: "italian" },
  { label: "ایرلندی", value: "irish" },
  { label: "ایرانی", value: "iranian" },
  { label: "برزیلی", value: "brazilian" },
  { label: "ترکیه‌ای", value: "turkish" },
  { label: "تایوانی", value: "taiwanese" },
  { label: "تایلندی", value: "thai" },
  { label: "چینی", value: "chinese" },
  { label: "ژاپنی", value: "japanese" },
  { label: "فرانسوی", value: "french" },
  { label: "کانادایی", value: "canadian" },
  { label: "کره‌ای", value: "korean" },
  { label: "مکزیکی", value: "mexican" },
  { label: "هندی", value: "indian" },
  { label: "روسی", value: "russian" },
];











export const chartData = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export type Notification = {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  createdAt: string;
};

export type MovieList = {
  _id(arg0: string, _id: any): unknown;
  id: string | object;
  title: string;
  status: string;
  label: string;
  genre: string;
};

export const userNotifs: Notification[] = [
  {
    id: "1",
    emoji: "🚀",
    title: "Dashboard",
    desc: "Dashboard, cards, authentication. Some examples built using the components. Use this as a guide to build your own.",
    createdAt: "12/01/2024",
  },
  {
    id: "2",
    emoji: "🌐",
    title: "web",
    desc: "WebNow, a request to /api/post/a/b/c will respond with the text: Post: a, b, c. Optional catch all API routes. Catch all routes can be made optional by including the parameter in double …",
    createdAt: "15/01/2024",
  },
  {
    id: "3",
    emoji: "🔄",
    title: "Bing",
    desc: "Certainly! Below is an example of a PUT request implementation using the Fetch API in Next.js:",
    createdAt: "24/01/2024",
  },
  {
    id: "4",
    emoji: "🌟",
    title: "Nextjs",
    desc: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation. React documen…",
    createdAt: "02/02/2024",
  },
];

export interface UserInfo {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
  imgUrl?: string;
  __v?: number;
}

// export const factCategories: string[] = [
//   "beauty",
//   "communication",
//   "education",
//   "family",
//   "life",
//   "love",
//   "movies",
//   "success",
// ];
