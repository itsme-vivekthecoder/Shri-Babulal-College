"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  year: string;
  program: string;
  image: string;
  text: string;
  rating: number;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Patel",
    year: "2023",
    program: "B.Tech Computer Science",
    image: "👨‍🎓",
    text: "Shri Babulal College transformed my life. The faculty's mentorship and practical exposure prepared me perfectly for my role as a Software Engineer at Google. I'm grateful for the foundation built here.",
    rating: 5,
    role: "Software Engineer, Google",
  },
  {
    id: 2,
    name: "Neha Sharma",
    year: "2022",
    program: "M.B.A",
    image: "👩‍💼",
    text: "The MBA program is incredibly rigorous and relevant. The corporate partnerships and real-world case studies gave me the confidence to lead teams. Now I'm a Product Manager at a leading fintech startup.",
    rating: 5,
    role: "Product Manager, FinTech Co.",
  },
  {
    id: 3,
    name: "Rohan Verma",
    year: "2023",
    program: "B.Sc Physics",
    image: "👨‍🔬",
    text: "The research opportunities at SBLC are unmatched. I published two papers during my undergrad and now I'm pursuing PhD at IIT Delhi. The labs and faculty support were instrumental.",
    rating: 5,
    role: "PhD Scholar, IIT Delhi",
  },
  {
    id: 4,
    name: "Priya Mishra",
    year: "2021",
    program: "B.Com",
    image: "👩‍💻",
    text: "I cleared my CA exams with top marks, thanks to the comprehensive coaching and support from SBLC. The faculty's experience in accounting was invaluable for my preparation.",
    rating: 5,
    role: "Chartered Accountant",
  },
  {
    id: 5,
    name: "Vikram Singh",
    year: "2022",
    program: "B.C.A",
    image: "👨‍💻",
    text: "The BCA program's project-based learning approach helped me secure an internship at Microsoft before graduation. Now I'm a Senior Developer, and I owe much to my time at SBLC.",
    rating: 5,
    role: "Senior Developer, Microsoft",
  },
  {
    id: 6,
    name: "Anjali Desai",
    year: "2021",
    program: "M.Sc Chemistry",
    image: "👩‍🔬",
    text: "The research facilities and thesis guidance at SBLC were exceptional. I'm now working as a Research Scientist at a pharmaceutical company, developing new drugs. Best decision ever!",
    rating: 5,
    role: "Research Scientist, Pharma Co.",
  },
  {
    id: 7,
    name: "Arjun Kumar",
    year: "2023",
    program: "B.A English",
    image: "👨‍🎓",
    text: "SBLC fostered my passion for writing and journalism. With faculty mentorship, I've published articles in national magazines and now work as a Content Editor at a leading media house.",
    rating: 5,
    role: "Content Editor, Media House",
  },
  {
    id: 8,
    name: "Divya Nair",
    year: "2022",
    program: "Web Development Certificate",
    image: "👩‍💻",
    text: "The certificate program was intensive and practical. Within 3 months, I landed a job as a junior web developer. The placement support from SBLC was fantastic!",
    rating: 5,
    role: "Full Stack Developer",
  },
];

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedFilter, setSelectedFilter] = React.useState<string>("all");

  const uniqueYears = ["all", ...Array.from(new Set(testimonials.map((t) => t.year)))];

  const filteredTestimonials =
    selectedFilter === "all"
      ? testimonials
      : testimonials.filter((t) => t.year === selectedFilter);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

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
            <Quote className="inline-block w-12 h-12 mr-4 text-yellow-400" />
            Student Success Stories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-200 max-w-3xl mx-auto"
          >
            Hear from our accomplished alumni and current students about their transformative
            experiences at Shri Babulal College.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-12 sticky top-20 z-40 shadow-md">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-slate-600 font-semibold mb-4">Filter by Graduation Year:</p>
          <div className="flex flex-wrap gap-3">
            {uniqueYears.map((year) => (
              <button
                key={year}
                onClick={() => {
                  setSelectedFilter(year);
                  setCurrentIndex(0);
                }}
                className={`px-5 py-2 rounded-full font-semibold transition ${
                  selectedFilter === year
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {year === "all" ? "All Years" : year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden shadow-2xl"
              >
                <div className="grid md:grid-cols-2 gap-8 p-10 md:p-12">
                  {/* Left: Avatar & Info */}
                  <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <div className="text-8xl mb-6">
                      {filteredTestimonials[currentIndex].image}
                    </div>
                    <h3 className="text-3xl font-bold mb-2">
                      {filteredTestimonials[currentIndex].name}
                    </h3>
                    <p className="text-yellow-400 font-semibold mb-2">
                      {filteredTestimonials[currentIndex].role}
                    </p>
                    <p className="text-slate-300 text-sm mb-4">
                      {filteredTestimonials[currentIndex].program} • Class of{" "}
                      {filteredTestimonials[currentIndex].year}
                    </p>

                    {/* Rating */}
                    <div className="flex justify-center md:justify-start gap-1">
                      {Array.from({
                        length: filteredTestimonials[currentIndex].rating,
                      }).map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right: Quote */}
                  <div className="flex flex-col justify-center">
                    <Quote className="w-12 h-12 text-yellow-400 mb-4" />
                    <p className="text-lg leading-relaxed text-slate-200 mb-6 italic">
                      "{filteredTestimonials[currentIndex].text}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="rounded-full bg-blue-600 p-3 text-white hover:bg-blue-700 transition hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex items-center gap-2">
                {filteredTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-3 rounded-full transition ${
                      idx === currentIndex ? "bg-blue-600 w-8" : "bg-slate-300 w-3"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="rounded-full bg-blue-600 p-3 text-white hover:bg-blue-700 transition hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Testimonial Counter */}
            <p className="text-center mt-8 text-slate-600 font-semibold">
              {currentIndex + 1} of {filteredTestimonials.length}
            </p>
          </div>
        </div>
      </section>

      {/* Grid View */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-center text-slate-950 mb-12">
            All {filteredTestimonials.length} Success Stories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 hover:shadow-lg transition hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <p className="text-5xl">{testimonial.image}</p>
                    <div>
                      <h3 className="font-bold text-slate-950">{testimonial.name}</h3>
                      <p className="text-sm text-blue-600 font-semibold">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-slate-600">Class of {testimonial.year}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  "{testimonial.text}"
                </p>

                <p className="text-xs text-slate-500 font-semibold">
                  {testimonial.program}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join Shri Babulal College and be part of our thriving community of achievers.
          </p>
          <button className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-lg font-semibold text-blue-600 hover:bg-blue-50 transition">
            Apply Now
          </button>
        </div>
      </section>
    </main>
  );
}
