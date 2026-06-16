import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarCheck,
  GraduationCap,
  Library,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

const programs = [
  {
    title: "Undergraduate Programs",
    description: "Career-focused courses with strong academic foundations and practical learning.",
    icon: GraduationCap,
  },
  {
    title: "Library & Learning",
    description: "Quiet study spaces, reference support, and digital resources for daily learning.",
    icon: Library,
  },
  {
    title: "Student Activities",
    description: "Clubs, events, seminars, and cultural programs that build confidence beyond class.",
    icon: Users,
  },
];

const admissionSteps = [
  "Visit the campus or contact the admission office.",
  "Choose your preferred program and check eligibility.",
  "Submit the application form with required documents.",
  "Confirm admission after counselling and fee submission.",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <section id="about" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                About The College
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold text-slate-950 md:text-5xl">
                Shri Babulal College is building a smarter digital campus.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                The project presents a modern college website for admissions,
                academics, campus facilities, announcements, and student support.
                It is ready to grow into a full digital campus platform.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["2026-27", "Admissions year"],
                ["20+", "Academic activities"],
                ["1000+", "Students served"],
                ["24/7", "Digital access"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-6"
                >
                  <p className="text-3xl font-bold text-slate-950">{value}</p>
                  <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="academics" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
                  Academics
                </p>
                <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-5xl">
                  Programs and learning support for every student.