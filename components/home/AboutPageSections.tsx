"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, BookOpen, Target, Lightbulb } from "lucide-react";

export function AboutHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg text-yellow-400 font-semibold mb-6"
        >
          Transforming Lives Through Education
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
        >
          About <span className="text-yellow-400">Shri Babulal College</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-200 max-w-3xl mx-auto"
        >
          A premier institution dedicated to academic excellence, innovation, and fostering the
          leaders of tomorrow through quality education and holistic development.
        </motion.p>
      </div>
    </section>
  );
}

export function MissionVisionSection() {
  const items = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide quality education that empowers students with knowledge, skills, and values necessary to succeed in a rapidly changing world and contribute meaningfully to society.",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description:
        "To be a leading institution recognized for academic excellence, innovation, research, and producing graduates who are thoughtful leaders and responsible global citizens.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
            Foundation
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">
            Mission & Vision
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-10"
              >
                <Icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-slate-950 mb-4">{item.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HistoryTimelineSection() {
  const timeline = [
    {
      year: "1998",
      title: "Foundation",
      description: "Shri Babulal College was established with a vision to provide quality education.",
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Campus expanded with state-of-the-art science and computer labs.",
    },
    {
      year: "2012",
      title: "Recognition",
      description: "Achieved ISO certification and received NAAC accreditation.",
    },
    {
      year: "2018",
      title: "Digital Initiative",
      description: "Launched digital learning platform and modernized infrastructure.",
    },
    {
      year: "2023",
      title: "Excellence Award",
      description: "Received National Education Excellence Award for innovation.",
    },
    {
      year: "2026",
      title: "Digital Campus",
      description: "Launched comprehensive digital campus platform for enhanced learning.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
            Timeline
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">
            Our Journey
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 hidden md:block transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className="flex-1 md:text-right md:pr-12">
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <p className="text-2xl font-bold text-blue-600 mb-2">{item.year}</p>
                    <h3 className="text-xl font-bold text-slate-950 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex justify-center">
                  <div className="h-4 w-4 rounded-full bg-blue-600 ring-4 ring-blue-100 mt-8"></div>
                </div>

                {/* Spacer for mobile */}
                <div className="flex-1 md:hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      stat: "50+",
      label: "National Awards",
      description: "Recognition for academic excellence and innovation",
    },
    {
      icon: Users,
      stat: "10,000+",
      label: "Alumni",
      description: "Successful graduates across various fields",
    },
    {
      icon: BookOpen,
      stat: "100+",
      label: "Courses",
      description: "Diverse academic programs and specializations",
    },
    {
      icon: CheckCircle,
      stat: "95%",
      label: "Placement Rate",
      description: "Graduates employed within 6 months",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950">
            Milestones & Recognition
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-8 text-center hover:shadow-lg transition"
              >
                <Icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <p className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</p>
                <p className="text-lg font-semibold text-slate-950 mb-2">{item.label}</p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function LeadershipTeamSection() {
  const leaders = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Principal",
      specialization: "Computer Science & Education",
      image: "🎓",
    },
    {
      name: "Prof. Anjali Verma",
      role: "Vice Principal - Academics",
      specialization: "Mathematics & Curriculum",
      image: "👨‍🏫",
    },
    {
      name: "Dr. Vikram Singh",
      role: "Dean - Research & Development",
      specialization: "Physics & Innovation",
      image: "👩‍🏫",
    },
    {
      name: "Ms. Priya Sharma",
      role: "Director - Student Affairs",
      specialization: "Student Development",
      image: "👩‍💼",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
            Leadership
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950">
            Our Leadership Team
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition"
            >
              <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl">
                {leader.image}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-950 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">{leader.role}</p>
                <p className="text-slate-600 text-sm">{leader.specialization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
