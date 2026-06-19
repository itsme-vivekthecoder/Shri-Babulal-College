import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CoursesPage from "@/components/home/CoursesPage";

export const metadata: Metadata = {
  title: "Courses & Programs | Shri Babulal College",
  description: "Explore our diverse undergraduate and postgraduate programs designed for your success.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <CoursesPage />
      <Footer />
    </main>
  );
}
