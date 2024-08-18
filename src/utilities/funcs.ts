
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









// export const fetchMovieList = async () => {
//   try {
//     const response = await fetch(process.env.TMDB_API_KEY!);
//     if (!response.ok) {
//       throw new Error('خطا در دریافت داده‌ها از API');
//     }
//     const data = await response.json();
    
//     console.log('data film ---------->' ,data)
//     return data;
//   } catch (error) {
//     console.error('خطا در دریافت داده‌ها از API:', error);
//     throw error;
//   }
// };




export const fetchMovieList = async () => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!apiKey) {
    throw new Error('API key is not defined');
  }

  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=9a1d69b282ef19783b7037faaf4a8660&language=en-US&page=1`;
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error fetching data from the API');
    }

    const data = await response.json();
    console.log('Movie data:', data.results);
    return data.results ;
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    throw error;
  }
};
