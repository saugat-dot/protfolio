"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillsData: Record<string, string[]> = {
  "Programming": ["C", "C++", "JavaScript", "TypeScript", "Python"],
  "Frontend": ["HTML", "CSS", "Tailwind CSS", "React", "Next.js"],
  "Backend Basics": ["Firebase", "PHP", "SQL"],
  "Tools": ["Git", "GitHub", "VS Code"],
  "AI & Tools": ["ChatGPT", "Claude", "Gemini", "Prompt Engineering"],
};

const categoryColors: Record<string, string> = {
  "Programming": "hsl(220,100%,65%)",
  "Frontend": "hsl(160,80%,50%)",
  "Backend Basics": "hsl(30,90%,60%)",
  "Tools": "hsl(280,70%,65%)",
  "AI & Tools": "hsl(340,80%,60%)",
};

const categoryBg: Record<string, string> = {
  "Programming": "hsl(220,100%,65%,0.08)",
  "Frontend": "hsl(160,80%,50%,0.08)",
  "Backend Basics": "hsl(30,90%,60%,0.08)",
  "Tools": "hsl(280,70%,65%,0.08)",
  "AI & Tools": "hsl(340,80%,60%,0.08)",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Label */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="mb-4"
        >
          <span className="text-xs font-mono text-[hsl(220,100%,60%)] tracking-widest uppercase">
            02 / Skills
          </span>
        </motion.div>

        <motion.h2
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          My Tech Stack
        </motion.h2>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }}
          className="text-[hsl(0,0%,55%)] mb-12 max-w-xl"
        >
          Technologies and tools I work with across the full development stack.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skillsData).map(([category, skills], catIdx) => (
            <motion.div
              key={category}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: catIdx * 0.08 } },
              }}
              className="p-5 rounded-2xl border border-[hsl(0,0%,12%)] bg-[hsl(0,0%,6%)] card-glow"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: categoryColors[category] }}
                />
                <h3 className="text-sm font-semibold text-[hsl(0,0%,80%)]">{category}</h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors"
                    style={{
                      background: categoryBg[category],
                      color: categoryColors[category],
                      border: `1px solid ${categoryColors[category]}20`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Summary card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
            }}
            className="md:col-span-2 lg:col-span-1 p-5 rounded-2xl border border-[hsl(220,100%,60%,0.15)] bg-gradient-to-br from-[hsl(220,100%,60%,0.05)] to-transparent flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-mono text-[hsl(220,100%,65%)] mb-3 tracking-widest uppercase">
                Always Learning
              </p>
              <p className="text-[hsl(0,0%,60%)] text-sm leading-relaxed">
                Continuously expanding my knowledge in AI, modern web frameworks, and software engineering best practices through hands-on projects and self-study.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-[hsl(0,0%,40%)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Currently exploring: AI/ML & TypeScript advanced patterns
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
