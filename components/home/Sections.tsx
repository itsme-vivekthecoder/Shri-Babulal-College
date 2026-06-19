"use client";

import React, { type ComponentProps } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarDays,
  ChevronDown,
  GraduationCap,
  HelpCircle,
  Library,
  Users,
  Star,
  Users2,
  Zap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { ContactForm } from "./ContactForm";

export function AboutSection() {
  return (
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
  );
}

export function AcademicsSection({ programs }: { programs: Array<{ title: string; description: string; icon: React.ComponentType<ComponentProps<'svg'>>; }> }) {
  return (
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
  );
}

export function CampusLifeSection({ highlights }: { highlights: Array<{ title: string; description: string; icon: React.ComponentType<ComponentProps<'svg'>>; }> }) {
  return (
    <section id="campus-life" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Campus Life
          </p>
          <h2 className="mt-3 max-w-2xl mx-auto text-3xl font-bold text-slate-950 md:text-5xl">
            A vibrant campus experience beyond the classroom.
          </h2>
          <p className="mt-4 text-slate-600">
            Explore student clubs, modern amenities, and a community designed to help you thrive.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((highlight, idx) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm hover:shadow-lg transition"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{highlight.title}</h3>
                <p className="mt-3 text-slate-600">{highlight.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AdmissionsSection({ admissionSteps }: { admissionSteps: string[] }) {
  return (
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
  );
}

export function FacilitiesSection({ facilities }: { facilities: Array<{ icon: React.ComponentType<ComponentProps<'svg'>>; title: string; description: string; }> }) {
  return (
    <section id="facilities" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Campus Facilities
          </p>
          <h2 className="mt-3 max-w-2xl mx-auto text-3xl font-bold text-slate-950 md:text-5xl">
            World-class facilities for holistic development.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, idx) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-lg border border-slate-200 bg-white p-8 text-center hover:shadow-lg transition"
              >
                <Icon className="mx-auto h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-950">{facility.title}</h3>
                <p className="mt-2 text-slate-600">{facility.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FacultySection({ faculty }: { faculty: Array<{ name: string; role: string; specialization: string; image: string; }> }) {
  return (
    <section id="faculty" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Our Faculty
          </p>
          <h2 className="mt-3 max-w-2xl mx-auto text-3xl font-bold text-slate-950 md:text-5xl">
            Experienced educators dedicated to your success.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {faculty.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-lg border border-slate-200 bg-slate-50 overflow-hidden hover:shadow-lg transition"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 text-6xl">
                {member.image}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-950">{member.name}</h3>
                <p className="text-sm text-blue-600 font-semibold">{member.role}</p>
                <p className="mt-2 text-sm text-slate-600">{member.specialization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ testimonials }: { testimonials: Array<{ name: string; year: string; text: string; rating: number; }> }) {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-yellow-400">
            Student Success Stories
          </p>
          <h2 className="mt-3 max-w-2xl mx-auto text-3xl font-bold md:text-5xl">
            What our students say about us.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-lg border border-white/20 bg-white/10 p-8 backdrop-blur-md"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-200 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-slate-300">{testimonial.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsSection({ news }: { news: Array<{ date: string; title: string; description: string; }> }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Latest Updates
          </p>
          <h2 className="mt-3 max-w-2xl mx-auto text-3xl font-bold text-slate-950 md:text-5xl">
            News and announcements.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-lg border border-slate-200 bg-white p-8 hover:shadow-lg transition"
            >
              <p className="text-sm font-semibold text-blue-600">{item.date}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition">
                Read More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventsSection({ events }: { events: Array<{ date: string; title: string; location: string; description: string; }> }) {
  return (
    <section id="events" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Campus Events
          </p>
          <h2 className="mt-3 max-w-2xl mx-auto text-3xl font-bold text-slate-950 md:text-5xl">
            Upcoming activities on campus.
          </h2>
          <p className="mt-4 text-slate-600">
            Stay connected with seminars, workshops, and student-led events throughout the semester.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-600 text-white">
                <CalendarDays className="h-7 w-7" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-blue-600">{event.date}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{event.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{event.location}</p>
              <p className="mt-4 text-slate-600">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ faqs }: { faqs: Array<{ question: string; answer: string; }> }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
            <HelpCircle className="h-7 w-7" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            FAQ
          </p>
          <h2 className="mt-3 max-w-2xl mx-auto text-3xl font-bold text-slate-950 md:text-5xl">
            Frequently asked questions.
          </h2>
          <p className="mt-4 text-slate-600">
            Answers to the most common questions about admissions, campus life, and student support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-lg transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-8 py-6 text-left"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xl font-semibold text-slate-950">{faq.question}</span>
                    <ChevronDown
                      className={`h-6 w-6 text-blue-600 transition ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </div>
                </button>
                <div className={`px-8 pb-6 transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
                  <p className={`text-slate-600 ${isOpen ? "mt-2" : "hidden"}`}>{faq.answer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Get In Touch
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold text-slate-950 md:text-5xl">
              We'd love to hear from you.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              Have questions about admissions, programs, or campus life? Our team is here to help you get started.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-950">Address</p>
                  <p className="text-slate-600">Shri Babulal College, New Delhi, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-950">Phone</p>
                  <p className="text-slate-600">+91 (11) 1234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-950">Email</p>
                  <p className="text-slate-600">admissions@sblm.edu.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
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
  );
}
