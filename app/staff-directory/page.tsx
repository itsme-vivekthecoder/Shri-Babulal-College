import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StaffDirectoryPage from "@/components/home/StaffDirectoryPage";

export const metadata: Metadata = {
  title: "Staff Directory | Shri Babulal College",
  description: "Find contact information and details of faculty and staff members at Shri Babulal College.",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <StaffDirectoryPage />
      <Footer />
    </main>
  );
}
