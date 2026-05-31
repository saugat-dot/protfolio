"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Layers, Award, Cpu } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "CGPA", value: "9.5", suffix: "/10" },
  { icon: Layers, label: "Projects", value: "5", suffix: "+" },
  { icon: Award, label: "Certifications", value: "3", suffix: "+" },
  { icon: Cpu, label: "Technologies", value: "15", suffix: "+" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* Label */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-xs font-mono text-[hsl(220,100%,60%)] tracking-widest uppercase">
            01 / About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Crafting code that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(220,100%,65%)] to-[hsl(260,80%,65%)]">
                matters
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[hsl(0,0%,60%)] leading-relaxed text-base"
            >
              I am currently pursuing Computer Science and Engineering at Siddaganga Institute of Technology with strong interest in software development, AI, and modern web technologies. Alongside academics, I actively build projects and continue improving through hands-on development and continuous learning.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
              {["Problem Solver", "Fast Learner", "Team Player", "Project Builder"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full border border-[hsl(0,0%,15%)] bg-[hsl(0,0%,7%)] text-[hsl(0,0%,60%)]"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Stats grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, label, value, suffix }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="p-5 rounded-2xl border border-[hsl(0,0%,12%)] bg-[hsl(0,0%,6%)] card-glow flex flex-col gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[hsl(220,100%,60%,0.1)] flex items-center justify-center">
                  <Icon size={18} className="text-[hsl(220,100%,65%)]" />
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    {value}
                    <span className="text-[hsl(0,0%,50%)] text-base font-normal ml-0.5">
                      {suffix}
                    </span>
                  </p>
                  <p className="text-xs text-[hsl(0,0%,45%)] mt-0.5">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
