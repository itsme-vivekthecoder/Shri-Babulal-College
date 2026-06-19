import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsEventsPage from "@/components/home/NewsEventsPage";

export const metadata: Metadata = {
  title: "News & Events | Shri Babulal College",
  description: "Stay updated with latest news, events, and announcements from Shri Babulal College.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <NewsEventsPage />
      <Footer />
    </main>
  );
}
