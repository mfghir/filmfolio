import { TheBestPage } from "@/components/pages/TheBestPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'The Best',
}


const TheBest = () => {
  return <TheBestPage />;
};

export default TheBest;