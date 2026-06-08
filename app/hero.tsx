export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <h1 className="text-6xl font-bold">
        SBLM Digital Campus
      </h1>
    </section>
  );
}
export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <h1 className="text-6xl font-bold">
        SBLM Digital Campus
      </h1>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">

      {/* Background Blur */}

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

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
          Building future leaders with quality education,
          modern infrastructure, experienced faculty,
          and a commitment to academic excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <button className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-slate-900 shadow-xl transition hover:scale-105">
            Explore Programs
          </button>

          <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
            Virtual Campus Tour
          </button>
        </motion.div>
      </div>
    </section>
  );
}