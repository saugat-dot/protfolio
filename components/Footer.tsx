"use client";

import { Github, Linkedin, Mail, Code2, ArrowUp } from "lucide-react";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[hsl(0,0%,10%)] bg-[hsl(0,0%,3%)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[hsl(220,100%,60%)] flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span
                className="font-bold text-[15px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Saugat<span className="text-[hsl(220,100%,60%)]">.</span>
              </span>
            </div>
            <p className="text-[hsl(0,0%,45%)] text-sm leading-relaxed max-w-xs">
              Building practical software and intelligent digital solutions. CSE Student & Developer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[hsl(0,0%,40%)] mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="text-sm text-[hsl(0,0%,50%)] hover:text-white transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[hsl(0,0%,40%)] mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:saugat.rauniyar.work@gmail.com"
                className="flex items-center gap-2 text-sm text-[hsl(0,0%,50%)] hover:text-white transition-colors"
              >
                <Mail size={14} />
                saugat.rauniyar.work@gmail.com
              </a>
              <a
                href="https://github.com/saugat-dot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(0,0%,50%)] hover:text-white transition-colors"
              >
                <Github size={14} />
                github.com/saugat-dot
              </a>
              <a
                href="https://www.linkedin.com/in/saugat-rauniyar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(0,0%,50%)] hover:text-white transition-colors"
              >
                <Linkedin size={14} />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[hsl(0,0%,10%)]">
          <p className="text-xs text-[hsl(0,0%,35%)]">
            © {new Date().getFullYear()} Saugat Rauniyar. All rights reserved.
          </p>
          <p className="text-xs text-[hsl(0,0%,30%)]">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-1.5 text-xs text-[hsl(0,0%,40%)] hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
