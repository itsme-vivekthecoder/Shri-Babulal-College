"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-slate-200 backdrop-blur-md"
        >
          🎓 Admissions Open 2026-27
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold leading-tight text-white md:text-7xl"
        >
          Transforming
          <br />
          Education Through
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            {" "}
            Innovation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-3xl text-lg text-slate-300"
        >
          Building future leaders with quality education, modern infrastructure, experienced faculty, and a commitment to academic excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#academics"
            className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-slate-900 shadow-xl transition hover:scale-105"
          >
            Explore Programs
          </a>
          <a
            href="#events"
            className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Virtual Campus Tour
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <p className="text-sm text-slate-400">Scroll to explore</p>
          <div className="mx-auto mt-2 h-6 w-1 rounded-full bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
