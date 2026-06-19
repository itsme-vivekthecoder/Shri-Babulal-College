"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  FileText,
  GraduationCap,
  ArrowRight,
  ChevronDown,
  Download,
  HelpCircle,
} from "lucide-react";

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const admissionSteps = [
    {
      step: 1,
      title: "Online Registration",
      description: "Register on our portal and fill in your basic information.",
      icon: "📝",
      time: "5 minutes",
    },
    {
      step: 2,
      title: "Upload Documents",
      description: "Upload your 12th marksheet, birth certificate, and other required documents.",
      icon: "📄",
      time: "10 minutes",
    },
    {
      step: 3,
      title: "Merit List Released",
      description: "Merit list published based on your eligibility and marks.",
      icon: "📊",
      time: "7 days",
    },
    {
      step: 4,
      title: "Counseling & Selection",
      description: "Attend counseling session and select your preferred program.",
      icon: "💬",
      time: "1 hour",
    },
    {
      step: 5,
      title: "Document Verification",
      description: "Physical verification of submitted documents on campus.",
      icon: "✅",
      time: "30 minutes",
    },
    {
      step: 6,
      title: "Fee Payment & Admission",
      description: "Complete fee payment and receive your admission letter.",
      icon: "💳",
      time: "Online",
    },
  ];

  const eligibilityData = [
    {
      program: "B.A / B.Sc / B.Com",
      requirements: [
        "Passed 12th/HSC from any recognized board",
        "Minimum 50% aggregate marks (45% for reserved categories)",
        "No specific subject requirements for B.A",
        "Science for B.Sc, Commerce for B.Com",
      ],
    },
    {
      program: "B.C.A",
      requirements: [
        "Passed 12th/HSC with Mathematics",
        "Minimum 50% aggregate marks",
        "Basic knowledge of computers preferred",
        "English language proficiency",
      ],
    },
    {
      program: "M.B.A",
      requirements: [
        "Bachelor's degree in any stream",
        "Minimum 50% marks in graduation",
        "3 years work experience (preferred)",
        "GMAT/CAT score (for some candidates)",
      ],
    },
    {
      program: "M.C.A",
      requirements: [
        "Bachelor's degree in Computer Science/IT or related field",
        "Minimum 50% marks",
        "Strong programming background",
        "Entrance exam (if applicable)",
      ],
    },
  ];

  const documents = [
    "10th marksheet",
    "12th marksheet",
    "Birth certificate",
    "Aadhar card",
    "Address proof (utility bill/passport)",
    "Transfer certificate",
    "Character certificate",
    "Caste certificate (if applicable)",
    "Photo (4x4 cm)",
  ];

  const faqs = [
    {
      question: "What is the application deadline?",
      answer:
        "The application deadline for 2026-27 academic year is June 30, 2026. However, admissions are on rolling basis, so we encourage early applications.",
    },
    {
      question: "Is there a registration fee for applying?",
      answer: "No, the application process is completely free. We don't charge any registration or application fees.",
    },
    {
      question: "Can I change my program after admission?",
      answer:
        "Program changes are allowed only within 2 weeks of admission and subject to availability of seats and meeting eligibility criteria.",
    },
    {
      question: "What is the fee structure?",
      answer:
        "Fee varies by program. Undergraduate programs range from ₹80,000-₹2,00,000 per year, while postgraduate programs range from ₹1,50,000-₹3,00,000 per year. Scholarships available for merit students.",
    },
    {
      question: "Are scholarships available?",
      answer:
        "Yes! We offer merit scholarships, need-based scholarships, and category-specific scholarships. Students scoring above 80% in class 12 are automatically eligible for 25% tuition waiver.",
    },
    {
      question: "What are the hostel facilities?",
      answer:
        "We have modern hostels for both boys and girls with all amenities. Annual fee is ₹80,000 for hostels. Limited hostel seats available on first-come-first-serve basis.",
    },
    {
      question: "How can I contact the admissions office?",
      answer:
        "You can reach us at admissions@sblm.edu.in, +91 (11) 1234-5678, or visit our campus during office hours (9 AM - 5 PM, Monday to Friday).",
    },
    {
      question: "Is there a minimum attendance requirement?",
      answer:
        "Yes, students must maintain at least 75% attendance to be eligible for final exams. Medical or authorized absences can be considered with proper documentation.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-yellow-400 font-semibold mb-4"
          >
            Admissions Open 2026-27
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-8"
          >
            Join Our Community
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-200 max-w-3xl mx-auto mb-8"
          >
            Simple and transparent admission process. Apply now and start your journey to success.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-yellow-400 text-slate-950 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Apply Now <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      </section>

      {/* Admission Timeline */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">
              Simple 6-Step Process
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Get admitted in 6 simple steps. The process is transparent, quick, and hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{item.icon}</span>
                  <span className="text-4xl font-bold text-blue-600">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  <Clock className="h-4 w-4" />
                  {item.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-center text-slate-950 mb-16">
            Eligibility Criteria
          </h2>

          <div className="space-y-6">
            {eligibilityData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-white border-2 border-slate-200 p-8 hover:border-blue-300 transition"
              >
                <h3 className="text-2xl font-bold text-slate-950 mb-4 flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                  {item.program}
                </h3>
                <ul className="space-y-3">
                  {item.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-center text-slate-950 mb-4">Required Documents</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Please have these documents ready before starting your application.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {documents.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-4 rounded-lg border-2 border-blue-200 bg-blue-50 p-4 hover:bg-blue-100 transition"
              >
                <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-slate-950">{doc}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              <Download className="h-5 w-5" />
              Download Document Checklist
            </button>
          </div>
        </div>
      </section>

      {/* Fee & Scholarships */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-white border-2 border-blue-200 p-8"
            >
              <h3 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Fee Structure
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                  <span className="font-semibold text-slate-950">Undergraduate</span>
                  <span className="text-blue-600 font-bold">₹80K - ₹2L/year</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                  <span className="font-semibold text-slate-950">Postgraduate</span>
                  <span className="text-blue-600 font-bold">₹1.5L - ₹3L/year</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                  <span className="font-semibold text-slate-950">Certificate Programs</span>
                  <span className="text-blue-600 font-bold">₹30K - ₹50K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-950">Hostel (Optional)</span>
                  <span className="text-blue-600 font-bold">₹80K/year</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-white border-2 border-green-200 p-8"
            >
              <h3 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Scholarships
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="font-semibold text-slate-950">Merit Scholarship</p>
                  <p className="text-sm text-slate-600">25-50% tuition waiver for scorers above 80%</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="font-semibold text-slate-950">Need-Based Scholarship</p>
                  <p className="text-sm text-slate-600">Up to 100% for financially challenged students</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="font-semibold text-slate-950">Category Scholarship</p>
                  <p className="text-sm text-slate-600">Special provisions for SC/ST/OBC categories</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Sports Scholarship</p>
                  <p className="text-sm text-slate-600">For talented sports persons and athletes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-bold text-center text-slate-950 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 bg-slate-50 hover:bg-slate-100 transition flex items-center justify-between"
                  >
                    <span className="text-lg font-semibold text-slate-950 text-left">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-blue-600 transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 py-4 border-t border-slate-200 bg-white"
                    >
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your application today and join thousands of successful students at Shri Babulal
            College.
          </p>
          <button className="inline-flex items-center gap-2 bg-yellow-400 text-slate-950 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Apply Now <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-slate-600 font-semibold mb-8">
            Questions? Contact Our Admissions Team
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-2xl mb-2">📧</p>
              <p className="font-semibold text-slate-950">Email</p>
              <p className="text-slate-600 text-sm">admissions@sblm.edu.in</p>
            </div>
            <div className="text-center">
              <p className="text-2xl mb-2">📞</p>
              <p className="font-semibold text-slate-950">Phone</p>
              <p className="text-slate-600 text-sm">+91 (11) 1234-5678</p>
            </div>
            <div className="text-center">
              <p className="text-2xl mb-2">🕒</p>
              <p className="font-semibold text-slate-950">Office Hours</p>
              <p className="text-slate-600 text-sm">9 AM - 5 PM (Mon-Fri)</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
