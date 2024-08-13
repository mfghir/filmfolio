
export const convertToPersianNumbers = (input: string | number): string => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return input.toString().split('').map((char: string) => {
    return persianDigits[parseInt(char, 10)] || char;
  }).join('');
};


