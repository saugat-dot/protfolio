"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Trophy } from "lucide-react";

const education = [
  {
    institution: "Siddaganga Institute of Technology",
    location: "Tumakuru, India",
    degree: "Bachelor of Engineering – Computer Science & Engineering",
    duration: "2025 – 2029",
    gpa: "9.5 CGPA",
    current: true,
    desc: "Currently pursuing BE in Computer Science with focus on software development, algorithms, and AI fundamentals.",
  },
  {
    institution: "Shikshadeep Higher Secondary School",
    location: "Biratnagar, Nepal",
    degree: "+2 Science",
    duration: "2023 – 2025",
    gpa: "3.46 / 4.0 GPA",
    current: false,
    desc: "Completed higher secondary education with a strong foundation in Physics, Chemistry, and Mathematics.",
  },
  {
    institution: "DAV School",
    location: "Biratnagar, Nepal",
    degree: "Secondary Education (Grade 10)",
    duration: "Completed 2023",
    gpa: "3.14 / 4.0 GPA",
    current: false,
    desc: "Completed secondary education with broad grounding in science and mathematics.",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Label */}
        <div className="mb-4">
          <span className="text-xs font-mono text-[hsl(220,100%,60%)] tracking-widest uppercase">
            04 / Education
          </span>
        </div>

        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Academic Journey
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(220,100%,60%)] via-[hsl(0,0%,15%)] to-transparent" />

          <div className="flex flex-col gap-10">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-16 md:pl-20"
              >
                {/* Node */}
                <div
                  className={`absolute left-0 top-1 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 ${
                    edu.current
                      ? "border-[hsl(220,100%,60%)] bg-[hsl(220,100%,60%,0.12)]"
                      : "border-[hsl(0,0%,18%)] bg-[hsl(0,0%,7%)]"
                  }`}
                >
                  <GraduationCap
                    size={i === 0 ? 20 : 16}
                    className={edu.current ? "text-[hsl(220,100%,65%)]" : "text-[hsl(0,0%,40%)]"}
                  />
                </div>

                {/* Card */}
                <div
                  className={`p-5 md:p-6 rounded-2xl border card-glow ${
                    edu.current
                      ? "border-[hsl(220,100%,60%,0.2)] bg-gradient-to-br from-[hsl(220,100%,60%,0.06)] to-[hsl(0,0%,6%)]"
                      : "border-[hsl(0,0%,12%)] bg-[hsl(0,0%,6%)]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          className="font-semibold text-[hsl(0,0%,92%)] text-lg"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {edu.institution}
                        </h3>
                        {edu.current && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] bg-[hsl(220,100%,60%,0.15)] text-[hsl(220,100%,65%)] border border-[hsl(220,100%,60%,0.2)]">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[hsl(0,0%,55%)] mt-0.5">{edu.degree}</p>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1 text-xs text-[hsl(0,0%,45%)]">
                        <Calendar size={11} />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[hsl(0,0%,45%)]">
                        <MapPin size={11} />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-[hsl(0,0%,55%)] leading-relaxed">
                    {edu.desc}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5">
                    <Trophy size={12} className="text-[hsl(40,90%,55%)]" />
                    <span className="text-xs font-semibold text-[hsl(40,90%,55%)]">
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
