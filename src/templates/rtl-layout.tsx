"use client"

import { useGoogleTranslate } from "@/utilities/google-translate";
import React from "react";

const RtlLayout = ({ children }: { children: React.ReactNode }) => {
  const { language } = useGoogleTranslate();

  return (
    <div className={language === "fa" ? "rtl" : "ltr"} >
      {children}
    </div>
  )
}

export default RtlLayout