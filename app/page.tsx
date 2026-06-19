"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import {
  AboutSection,
  AcademicsSection,
  CampusLifeSection,
  EventsSection,
  FAQSection,
  AdmissionsSection,
  FacilitiesSection,
  FacultySection,
  TestimonialsSection,
  NewsSection,
  ContactSection,
  CtaSection,
} from "@/components/home/Sections";
import { BookOpen, Building2, GraduationCap, Library, Users, Users2, Zap } from "lucide-react";

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

  const campusLifeHighlights = [
    {
      icon: Users,
      title: "Student Clubs",
      description: "Over 20 active clubs for arts, tech, sports, and culture.",
    },
    {
      icon: BookOpen,
      title: "Study Lounges",
      description: "Quiet spaces, group study zones, and digital resource centers.",
    },
    {
      icon: Zap,
      title: "Career Support",
      description: "Workshops, mentorship, and placement guidance for every student.",
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

  const events = [
    {
      date: "June 22, 2026",
      title: "Career Guidance Workshop",
      location: "Auditorium A",
      description: "Professional mentors will share tips on internships, resume building, and interview readiness.",
    },
    {
      date: "June 28, 2026",
      title: "Coding Bootcamp",
      location: "Computer Lab 3",
      description: "A one-day hands-on session covering web development tools and project workflows.",
    },
    {
      date: "July 5, 2026",
      title: "Cultural Evening",
      location: "Campus Lawn",
      description: "Music, dance, and student performances celebrating campus life and talent.",
    },
  ];

  const faqs = [
    {
      question: "How do I apply for an undergraduate program?",
      answer: "Submit your application through the admissions office or contact us directly to begin the process.",
    },
    {
      question: "What support services are available for students?",
      answer: "We offer academic advising, career counselling, library access, and student clubs for holistic development.",
    },
    {
      question: "When does the new academic year begin?",
      answer: "The 2026-27 academic session starts in August, with orientation and registration taking place in late July.",
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
      <AboutSection />
      <AcademicsSection programs={programs} />
      <CampusLifeSection highlights={campusLifeHighlights} />
      <AdmissionsSection admissionSteps={admissionSteps} />
      <FacilitiesSection facilities={facilities} />
      <FacultySection faculty={faculty} />
      <TestimonialsSection testimonials={testimonials} />
      <NewsSection news={news} />
      <EventsSection events={events} />
      <FAQSection faqs={faqs} />
      <ContactSection />
      <CtaSection />
      <Footer />
    </>
  );
}
