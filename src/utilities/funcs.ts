
export const convertToPersianNumbers = (input: string | number): string => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return input.toString().split('').map((char: string) => {
    return persianDigits[parseInt(char, 10)] || char;
  }).join('');
};








export const gregorianToPersian = (gregorianDate: Date): string => {
  // This is a simplified approach for converting Gregorian dates to Persian dates
  // In a real scenario, you may need a more accurate conversion

  // Define the Persian months and days
  const persianMonths = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
  
  // A simplified dummy conversion (you may need to adjust this with a real conversion function)
  const year = 1400; // Example static year
  const month = persianMonths[Math.floor(Math.random() * 12)]; // Example random month
  const day = Math.floor(Math.random() * 30) + 1; // Example random day

  return `${day} ${month} ${year}`;
};

















