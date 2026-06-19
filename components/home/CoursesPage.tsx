"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  Users,
  Award,
  ArrowRight,
  Filter,
  ChevronDown,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: "undergraduate" | "postgraduate" | "certificate";
  duration: string;
  students: number;
  description: string;
  highlights: string[];
  eligibility: string;
  careerPath: string;
  icon: string;
}

const allCourses: Course[] = [
  {
    id: "bca",
    title: "Bachelor of Computer Applications (BCA)",
    category: "undergraduate",
    duration: "3 Years",
    students: 450,
    description: "A comprehensive program covering software development, web technologies, and database management.",
    highlights: [
      "Hands-on programming experience",
      "Industry partnerships",
      "Internship opportunities",
      "Project-based learning",
    ],
    eligibility: "12th Pass with Mathematics",
    careerPath: "Software Developer, Web Developer, IT Consultant",
    icon: "💻",
  },
  {
    id: "bsc",
    title: "Bachelor of Science (Physics, Chemistry, Biology)",
    category: "undergraduate",
    duration: "3 Years",
    students: 380,
    description: "Rigorous science program with practical lab work and research opportunities.",
    highlights: [
      "State-of-the-art laboratories",
      "Research projects",
      "Expert faculty",
      "Field trips & experiments",
    ],
    eligibility: "12th Pass with Science",
    careerPath: "Scientist, Researcher, Doctor, Engineer",
    icon: "🔬",
  },
  {
    id: "bcom",
    title: "Bachelor of Commerce (B.Com)",
    category: "undergraduate",
    duration: "3 Years",
    students: 320,
    description: "Business and commerce education focusing on accounting, finance, and economics.",
    highlights: [
      "CA coaching support",
      "Industry internships",
      "Finance lab",
      "Guest lectures",
    ],
    eligibility: "12th Pass with Commerce",
    careerPath: "Chartered Accountant, Banker, Auditor, Entrepreneur",
    icon: "📊",
  },
  {
    id: "ba",
    title: "Bachelor of Arts (BA)",
    category: "undergraduate",
    duration: "3 Years",
    students: 280,
    description: "Liberal arts education with focus on humanities, social sciences, and languages.",
    highlights: [
      "Multiple specializations",
      "Debate competitions",
      "Cultural programs",
      "Guest speakers",
    ],
    eligibility: "12th Pass",
    careerPath: "Journalist, Teacher, Lawyer, Civil Servant",
    icon: "📚",
  },
  {
    id: "mca",
    title: "Master of Computer Applications (MCA)",
    category: "postgraduate",
    duration: "2 Years",
    students: 200,
    description: "Advanced computing program with focus on cutting-edge technologies and research.",
    highlights: [
      "AI/ML specialization",
      "Industry projects",
      "Placement assistance",
      "Research publications",
    ],
    eligibility: "Bachelor's degree in any stream",
    careerPath: "Senior Developer, Tech Lead, Data Scientist, AI Engineer",
    icon: "🤖",
  },
  {
    id: "mba",
    title: "Master of Business Administration (MBA)",
    category: "postgraduate",
    duration: "2 Years",
    students: 150,
    description: "Business management program with focus on strategy, finance, and operations.",
    highlights: [
      "Corporate collaborations",
      "Case study methods",
      "Internships",
      "Leadership development",
    ],
    eligibility: "Bachelor's degree with 3 years work experience preferred",
    careerPath: "Business Manager, Consultant, Entrepreneur, CFO",
    icon: "💼",
  },
  {
    id: "msc",
    title: "Master of Science (M.Sc)",
    category: "postgraduate",
    duration: "2 Years",
    students: 120,
    description: "Advanced science program with research focus and specializations.",
    highlights: [
      "Research opportunities",
      "Lab facilities",
      "Thesis supervision",
      "Publications",
    ],
    eligibility: "Bachelor's in Science",
    careerPath: "Researcher, Scientist, Professor, Industry Scientist",
    icon: "🧪",
  },
  {
    id: "cert-web",
    title: "Web Development Certificate",
    category: "certificate",
    duration: "6 Months",
    students: 300,
    description: "Practical certification in modern web technologies and frameworks.",
    highlights: [
      "Real-world projects",
      "Industry mentors",
      "Job placement",
      "Portfolio building",
    ],
    eligibility: "12th Pass or equivalent",
    careerPath: "Web Developer, Frontend Developer, Full Stack Developer",
    icon: "🌐",
  },
  {
    id: "cert-data",
    title: "Data Science Certificate",
    category: "certificate",
    duration: "4 Months",
    students: 250,
    description: "Intensive program in data analysis, visualization, and machine learning.",
    highlights: [
      "Hands-on projects",
      "Tools training (Python, R)",
      "Real datasets",
      "Certificate awarded",
    ],
    eligibility: "Bachelor's degree",
    careerPath: "Data Analyst, Data Scientist, Business Analyst",
    icon: "📈",
  },
];

const categoryOptions = [
  { value: "all", label: "All Programs" },
  { value: "undergraduate", label: "Undergraduate" },
  { value: "postgraduate", label: "Postgraduate" },
  { value: "certificate", label: "Certificates" },
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const filteredCourses =
    selectedCategory === "all"
      ? allCourses
      : allCourses.filter((course) => course.category === selectedCategory);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            <BookOpen className="inline-block w-12 h-12 mr-4 text-yellow-400" />
            Courses & Programs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-200 max-w-3xl mx-auto"
          >
            Explore our diverse range of undergraduate, postgraduate, and certification programs
            designed to shape your future career.
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white sticky top-20 z-40 py-6 shadow-md">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 font-semibold">
              Showing {filteredCourses.length} programs
            </p>

            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 rounded-lg border border-blue-300 bg-blue-50 px-4 py-2 text-blue-700 hover:bg-blue-100 transition"
              >
                <Filter className="h-4 w-4" />
                Filter by Category
                <ChevronDown
                  className={`h-4 w-4 transition ${isFilterOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-12 right-0 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden z-50"
                >
                  {categoryOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSelectedCategory(option.value);
                        setIsFilterOpen(false);
                      }}
                      className={`block w-full text-left px-6 py-3 hover:bg-blue-50 transition ${
                        selectedCategory === option.value
                          ? "bg-blue-100 text-blue-700 font-semibold"
                          : "text-slate-700"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition group"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 flex items-center justify-between">
                  <p className="text-5xl">{course.icon}</p>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-100 bg-blue-700/50 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-blue-600 transition">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{course.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-xs text-slate-500">Duration</p>
                        <p className="text-sm font-semibold text-slate-950">{course.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-xs text-slate-500">Students</p>
                        <p className="text-sm font-semibold text-slate-950">{course.students}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Key Highlights
                    </p>
                    <ul className="space-y-1">
                      {course.highlights.slice(0, 2).map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 flex items-start gap-2"
                        >
                          <span className="text-blue-600 mt-1">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Details */}
                  <div className="mb-6 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                        Eligibility
                      </p>
                      <p className="text-sm text-slate-600">{course.eligibility}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                        Career Path
                      </p>
                      <p className="text-sm text-slate-600">{course.careerPath}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700 transition flex items-center justify-center gap-2 group/btn">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">No programs found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in a Program?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Connect with our admissions team to get more information.
          </p>
          <button className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-lg font-semibold text-blue-600 hover:bg-blue-50 transition">
            Contact Admissions
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
