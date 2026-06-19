import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdmissionsPage from "@/components/home/AdmissionsPage";

export const metadata: Metadata = {
  title: "Admissions | Shri Babulal College",
  description: "Apply now to Shri Babulal College. Learn about eligibility, application process, and admission requirements.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <AdmissionsPage />
      <Footer />
    </main>
  );
}
