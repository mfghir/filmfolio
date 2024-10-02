"use client"

import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useGoogleTranslate } from "./google-translate";
// import { useGoogleTranslate } from "@/path/to/your/googleTranslateHook"; // Adjust the path as necessary

// Define month names in both languages
const monthNames = {
  en: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
  fa: [
    "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
    "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
  ],
};

export function CalendarButton() {
  const { language } = useGoogleTranslate(); // Get the current language
  const [currentDate] = useState(new Date()); // Set current date
  const [calendarDate, setCalendarDate] = useState(currentDate); // State to manage displayed calendar date

  // Set the locale for the date formatting
  const dateLocale = language === "fa" ? "fa-IR" : "en-US";

  // Format the date string based on the selected language
  const formattedDate = currentDate.toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get the month name based on the selected language
  const monthName = language === "fa"
    ? monthNames.fa[calendarDate.getMonth()]
    : monthNames.en[calendarDate.getMonth()];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[240px] pl-3 text-left font-normal"
        >
          {formattedDate} {/* Show the current date based on language */}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        {/* Calendar Header */}
        <div className="flex justify-between p-2">
          <button onClick={() => setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1))}>{"<"}</button>
          <span>{monthName} {calendarDate.getFullYear()}</span>
          <button onClick={() => setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1))}>{">"}</button>
        </div>
        
        <Calendar
          mode="single"
          selected={currentDate}  // Display the current date in the calendar
          disabled={() => true}  // Disable all date selections
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
