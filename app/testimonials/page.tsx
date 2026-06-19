import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestimonialsPage from "@/components/home/TestimonialsPage";

export const metadata: Metadata = {
  title: "Student Testimonials | Shri Babulal College",
  description: "Read inspiring success stories from our alumni and current students.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <TestimonialsPage />
      <Footer />
    </main>
  );
}
