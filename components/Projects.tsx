"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Globe, Star, Tag } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  liveDemo: string | null;
  repository: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ShubhLabh Construction Website",
    description:
      "A real working responsive business website built for ShubhLabh Construction featuring company profile, services, project showcase, and contact section with clean modern UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    liveDemo: "https://saugat2737.github.io/shubhlabhconstruction/",
    repository: "https://github.com/saugat-dot",
    featured: true,
  },
  {
    id: 2,
    title: "ATM Management System",
    description:
      "Console-based ATM system with authentication, deposits, withdrawals, balance inquiry, and file handling for persistent data storage.",
    tech: ["C", "File Handling"],
    category: "Software",
    liveDemo: null,
    repository: "https://github.com/saugat-dot",
    featured: false,
  },
  {
    id: 3,
    title: "AI Text to Quiz Generator",
    description:
      "Hackathon project that converts study text into quiz questions automatically using prompt engineering and intelligent content processing.",
    tech: ["JavaScript", "AI Prompt Engineering"],
    category: "AI",
    liveDemo: null,
    repository: "https://github.com/saugat-dot",
    featured: true,
  },
  {
    id: 4,
    title: "Obstacle Avoiding Robot",
    description:
      "Autonomous robot that detects obstacles and changes direction using ultrasonic sensors and embedded logic control.",
    tech: ["Arduino", "Sensors", "Embedded Systems"],
    category: "Hardware",
    liveDemo: null,
    repository: "https://github.com/saugat-dot",
    featured: false,
  },
  {
    id: 5,
    title: "Student Portfolio Dashboard",
    description:
      "Modern responsive dashboard for managing academic profile, project showcase, and achievements with clean interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web",
    liveDemo: null,
    repository: "https://github.com/saugat-dot",
    featured: false,
  },
];

const filters = ["All", "Web", "AI", "Software", "Hardware"];

const categoryColor: Record<string, string> = {
  Web: "hsl(160,80%,50%)",
  AI: "hsl(220,100%,65%)",
  Software: "hsl(30,90%,60%)",
  Hardware: "hsl(340,80%,60%)",
};

// Gradient placeholder thumbnails per category
const thumbnailBg: Record<string, string> = {
  Web: "linear-gradient(135deg, hsl(160,80%,15%) 0%, hsl(220,100%,15%) 100%)",
  AI: "linear-gradient(135deg, hsl(220,100%,15%) 0%, hsl(260,80%,15%) 100%)",
  Software: "linear-gradient(135deg, hsl(30,90%,15%) 0%, hsl(20,80%,12%) 100%)",
  Hardware: "linear-gradient(135deg, hsl(340,80%,15%) 0%, hsl(280,70%,15%) 100%)",
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Label */}
        <div className="mb-4">
          <span className="text-xs font-mono text-[hsl(220,100%,60%)] tracking-widest uppercase">
            03 / Projects
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What I&apos;ve Built
          </h2>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  activeFilter === f
                    ? "bg-[hsl(220,100%,60%)] border-[hsl(220,100%,60%)] text-white"
                    : "border-[hsl(0,0%,15%)] text-[hsl(0,0%,55%)] hover:border-[hsl(0,0%,25%)] hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group flex flex-col rounded-2xl border border-[hsl(0,0%,12%)] bg-[hsl(0,0%,6%)] overflow-hidden card-glow"
              >
                {/* Thumbnail */}
                <div
                  className="relative h-40 flex items-center justify-center overflow-hidden"
                  style={{ background: thumbnailBg[project.category] || thumbnailBg.Web }}
                >
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 30% 50%, ${categoryColor[project.category] || "#4a9eff"}22 0%, transparent 60%)`,
                      }}
                    />
                  </div>
                  <div className="relative flex flex-col items-center gap-2">
                    <span
                      className="text-3xl font-bold opacity-20"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: categoryColor[project.category],
                      }}
                    >
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[hsl(0,0%,4%)]/80 border border-[hsl(0,0%,15%)] text-[10px] text-[hsl(40,90%,60%)]">
                      <Star size={9} fill="currentColor" />
                      Featured
                    </div>
                  )}
                  <div
                    className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium"
                    style={{
                      background: `${categoryColor[project.category]}15`,
                      color: categoryColor[project.category],
                      border: `1px solid ${categoryColor[project.category]}30`,
                    }}
                  >
                    <Tag size={9} />
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3
                    className="font-semibold text-[hsl(0,0%,90%)] leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-[hsl(0,0%,55%)] leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[10px] bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,14%)] text-[hsl(0,0%,50%)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-1">
                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[hsl(220,100%,60%)] hover:bg-[hsl(220,100%,55%)] text-white text-xs font-semibold transition-all active:scale-95"
                      >
                        <Globe size={12} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[hsl(0,0%,9%)] border border-[hsl(0,0%,12%)] text-[hsl(0,0%,35%)] text-xs cursor-not-allowed">
                        <Globe size={12} />
                        No Demo
                      </span>
                    )}
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[hsl(0,0%,15%)] hover:border-[hsl(0,0%,25%)] text-[hsl(0,0%,60%)] hover:text-white text-xs font-medium transition-all active:scale-95"
                    >
                      <Github size={12} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/saugat-dot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[hsl(0,0%,15%)] hover:border-[hsl(0,0%,25%)] text-[hsl(0,0%,55%)] hover:text-white text-sm transition-all"
          >
            <Github size={15} />
            View all projects on GitHub
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
