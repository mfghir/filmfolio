// import { cookies } from "next/headers";

// export const getPrefLangCookie = () => {
//   return cookies().get("googtrans")?.value ?? "en";
// };




// utilities/cookies.ts
import { cookies } from "next/headers";

export const getPrefLangCookie = () => {
  const cookie = cookies().get("prefLangCookie");
  return cookie ? decodeURIComponent(cookie.value) : "fa"; // Default to Persian
};



