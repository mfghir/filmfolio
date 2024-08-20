import TopUsersPage from "@/components/pages/TopUsersPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Top Users',
}


const Faq = () => {
  return <TopUsersPage />;
};

export default Faq;