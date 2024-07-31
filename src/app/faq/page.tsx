import FaqPage from "@/components/pages/FaqPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Faq',
}


const Faq = () => {
  return <FaqPage />;
};

export default Faq;