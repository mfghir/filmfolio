"use client"

import { useTheme } from "next-themes";

const CustomShape = () => {
  const { theme } = useTheme()


  return (
    <svg 
    className="w-[280px] h-[204px] lg:w-[405px] lg:h-[368px]"
    width="405" height="368" viewBox="0 0 405 368" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M405 16C405 7.16344 397.837 0 389 0H215C206.163 0 199 7.16344 199 16V32C199 40.8366 191.837 48 183 48H16C7.16344 48 0 55.1634 0 64V352C0 360.837 7.16345 368 16 368H389C397.837 368 405 360.837 405 352V320V48V16Z"
        fill={theme === 'light' ? "#e5e7eb" : "#1f2937"}
      />
    </svg>
  );
};

export default CustomShape;
