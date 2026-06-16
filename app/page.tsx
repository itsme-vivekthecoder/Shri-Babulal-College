"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import { ArrowRight, BookOpen, Building2, GraduationCap, Library, Users, Star, Award, Users2, Zap } from "lucide-react";

export default function Home() {
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

  const facilities = [
    {
      icon: BookOpen,
      title: "Modern Library",
      description: "50,000+ books and online resources",
    },
    {
      icon: Building2,
      title: "State-of-art Labs",
      description: "Fully equipped science and computer labs",
    },
    {
      icon: Users2,
      title: "Sports Complex",
      description: "Cricket, basketball, badminton courts",
    },
    {
      icon: Zap,
      title: "Tech Infrastructure",
      description: "High-speed WiFi across campus",
    },
  ];

  const faculty = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Principal",
      specialization: "Computer Science",
      image: "🎓",
    },
    {
      name: "Prof. Anjali Verma",
      role: "Vice Principal",
      specialization: "Mathematics",
      image: "👨‍🏫",
    },
    {
      name: "Dr. Vikram Singh",
      role: "Department Head",
      specialization: "Physics",
      image: "👩‍🏫",
    },
    {
      name: "Prof. Neha Gupta",
      role: "Faculty Member",
      specialization: "Chemistry",
      image: "🧑‍🏫",
    },
  ];

  const testimonials = [
    {
      name: "Priya Patel",
      year: "2024 Graduate",
      text: "SBLM provided me with excellent academic guidance and infrastructure. The faculty is supportive and the campus environment is inspiring.",
      rating: 5,
    },
    {
      name: "Arjun Kapoor",
      year: "2024 Graduate",
      text: "Great campus, amazing teachers, and perfect for personal development. I made lifelong friends here.",
      rating: 5,
    },
    {
      name: "Divya Singh",
      year: "2025 Graduate",
      text: "The college provides a perfect blend of academics and extracurriculars. Highly recommended for anyone seeking quality education.",
      rating: 5,
    },
  ];

  const news = [
    {
      date: "June 15, 2026",
      title: "Annual Sports Day Celebration",
      description: "Exciting competitions and performances from students across all departments.",
    },
    {
      date: "June 10, 2026",
      title: "Tech Fest 2026 Registration Open",
      description: "Participate in coding competitions, hackathons, and tech exhibitions.",
    },
    {
      date: "June 5, 2026",
      title: "Admissions 2026-27 Session Started",
      description: "Applications for undergraduate programs are now open. Apply before June 30th.",
    },
  ];

  const admissionSteps = [
    "Visit the campus or contact the admission office.",
    "Choose your preferred program and check eligibility.",
    "Submit the application form with required documents.",
    "Confirm admission after counselling and fee submission.",
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* ABOUT SECTION */}
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
              The project presents a modern college website for admissions, academics, campus facilities, announcements, and student support. It is ready to grow into a full digital campus platform.
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

      {/* ACADEMICS SECTION */}
      <section id="academics" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
                Academics
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-5xl">
                Programs and learning support for every student.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {programs.map((program, idx) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="rounded-lg border border-slate-700 bg-slate-900/50 p-8"
                >
                  <Icon className="h-12 w-12 text-amber-300" />
                  <h3 className="mt-4 text-xl font-bold">{program.title}</h3>
                  <p className="mt-2 text-slate-400">{program.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADMISSIONS SECTION */}
      <section id="admissions" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Admissions Process
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-slate-950 md:text-5xl">
            Simple steps to join our community.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {admissionSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-lg border-2 border-teal-200 bg-teal-50 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 text-white font-bold">
                  {idx + 1}
                </div>
                <p className="text-slate-700">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-950 py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Ready to Transform Your Future?
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            Join Shri Babulal College and be part of a thriving academic community.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-semibold text-slate-900 shadow-xl transition hover:scale-105">
            Start Your Journey <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </>
  );
}