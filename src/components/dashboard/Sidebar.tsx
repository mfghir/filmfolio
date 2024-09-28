"use client"

import { UserInfo } from "@/lib/data";
import DashboardNav from "./DashboardNav";
import { useGoogleTranslate } from "@/utilities/google-translate";


const Sidebar = ({ setOpen, userInfo }: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: UserInfo
}) => {
  const { language } = useGoogleTranslate();



  return (
    <nav className={`relative hidden h-auto pt-16 lg:block w-72 ${language === "fa" ? "border-l" : "border-r"}`}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-6">
          <div className="space-y-2">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2>

            <DashboardNav setOpen={setOpen} userInfo={{...userInfo, username: userInfo.name}} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar