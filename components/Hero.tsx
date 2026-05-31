"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg mesh-bg"
    >
      {/* Background fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(0,0%,4%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 w-fit"
            >
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[hsl(0,0%,15%)] bg-[hsl(0,0%,7%)] text-xs text-[hsl(0,0%,60%)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Saugat{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(220,100%,65%)] to-[hsl(260,80%,65%)]">
                Rauniyar
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-[hsl(0,0%,55%)] text-base md:text-lg font-medium tracking-wide"
            >
              Full Stack Developer &nbsp;·&nbsp; AI Enthusiast &nbsp;·&nbsp; CSE Student
            </motion.p>

            {/* Bio */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-[hsl(0,0%,65%)] text-base leading-relaxed max-w-xl"
            >
              I am a Computer Science and Engineering student passionate about software development, artificial intelligence, and building practical digital products. I enjoy solving real-world problems through clean code, web technologies, and project-based learning.
            </motion.p>

            {/* Location */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex items-center gap-1.5 text-[hsl(0,0%,45%)] text-sm"
            >
              <MapPin size={13} />
              <span>Bengaluru, India</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-3 mt-2"
            >
              <button
                onClick={scrollToProjects}
                className="px-5 py-2.5 rounded-xl bg-[hsl(220,100%,60%)] hover:bg-[hsl(220,100%,55%)] text-white text-sm font-semibold transition-all shadow-[0_0_20px_hsl(220,100%,60%,0.3)] hover:shadow-[0_0_28px_hsl(220,100%,60%,0.4)] active:scale-95"
              >
                View Projects
              </button>
              <a
                href="/saugat_resume.pdf"
                download
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[hsl(0,0%,15%)] hover:border-[hsl(0,0%,25%)] bg-[hsl(0,0%,7%)] hover:bg-[hsl(0,0%,10%)] text-white text-sm font-semibold transition-all active:scale-95"
              >
                <Download size={14} />
                Download Resume
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex items-center gap-4 mt-1"
            >
              <a
                href="https://github.com/saugat-dot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[hsl(0,0%,45%)] hover:text-white transition-colors text-sm link-underline"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/saugat-rauniyar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[hsl(0,0%,45%)] hover:text-white transition-colors text-sm link-underline"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute -inset-3 rounded-full border border-[hsl(0,0%,12%)]" />
              {/* Inner ring */}
              <div className="absolute -inset-1 rounded-full border border-[hsl(0,0%,15%)]" />
              {/* Image */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-[hsl(0,0%,18%)] shadow-[0_20px_60px_hsl(0,0%,0%,0.6)]">
                <Image
                  src="/profile.png"
                  alt="Saugat Rauniyar"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 224px, 288px"
                />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(0,0%,8%)] border border-[hsl(0,0%,15%)] text-xs text-[hsl(0,0%,60%)] whitespace-nowrap shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                CSE @ SIT Tumakuru
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[hsl(0,0%,35%)]"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
