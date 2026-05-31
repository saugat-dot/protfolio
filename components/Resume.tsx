"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, Maximize2, FileText } from "lucide-react";

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <section id="resume" className="section-padding max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Label */}
        <div className="mb-4">
          <span className="text-xs font-mono text-[hsl(220,100%,60%)] tracking-widest uppercase">
            05 / Resume
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            My Resume
          </h2>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setFullscreen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[hsl(0,0%,15%)] hover:border-[hsl(0,0%,25%)] text-[hsl(0,0%,60%)] hover:text-white text-sm transition-all"
            >
              <Maximize2 size={14} />
              Fullscreen
            </button>
            <a
              href="/saugat_resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[hsl(220,100%,60%)] hover:bg-[hsl(220,100%,55%)] text-white text-sm font-semibold transition-all shadow-[0_0_20px_hsl(220,100%,60%,0.25)]"
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>
        </div>

        {/* Preview */}
        <div className="relative rounded-2xl border border-[hsl(0,0%,12%)] overflow-hidden bg-[hsl(0,0%,6%)]">
          {/* Header bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[hsl(0,0%,10%)]">
            <div className="flex items-center gap-2 text-sm text-[hsl(0,0%,45%)]">
              <FileText size={14} />
              <span>saugat_resume.pdf</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0,0%,18%)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0,0%,18%)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0,0%,18%)]" />
            </div>
          </div>

          <div className="w-full h-[600px] md:h-[750px]">
            <iframe
              src="/saugat_resume.pdf"
              className="w-full h-full"
              title="Saugat Rauniyar Resume"
            />
          </div>
        </div>

        {/* Fallback notice */}
        <p className="mt-3 text-xs text-[hsl(0,0%,35%)] text-center">
          If the preview does not load,{" "}
          <a
            href="/saugat_resume.pdf"
            download
            className="text-[hsl(220,100%,60%)] hover:underline"
          >
            download the PDF directly
          </a>
          .
        </p>
      </motion.div>

      {/* Fullscreen modal */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex flex-col"
          onClick={() => setFullscreen(false)}
        >
          <div
            className="flex items-center justify-between px-6 py-4 border-b border-[hsl(0,0%,12%)]"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-sm text-[hsl(0,0%,60%)]">saugat_resume.pdf</span>
            <div className="flex items-center gap-3">
              <a
                href="/saugat_resume.pdf"
                download
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[hsl(220,100%,60%)] text-white text-xs font-medium"
              >
                <Download size={12} />
                Download
              </a>
              <button
                onClick={() => setFullscreen(false)}
                className="text-[hsl(0,0%,55%)] hover:text-white text-xs px-3 py-1.5 rounded-lg border border-[hsl(0,0%,15%)]"
              >
                Close
              </button>
            </div>
          </div>
          <div
            className="flex-1 p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="/saugat_resume.pdf"
              className="w-full h-full rounded-xl"
              title="Saugat Rauniyar Resume Fullscreen"
            />
          </div>
        </div>
      )}
    </section>
  );
}
