"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  MapPin,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "saugat.rauniyar.work@gmail.com",
    href: "mailto:saugat.rauniyar.work@gmail.com",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8050812045",
    href: "tel:+918050812045",
    copyable: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/saugat-dot",
    href: "https://github.com/saugat-dot",
    copyable: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/saugat-rauniyar",
    href: "https://www.linkedin.com/in/saugat-rauniyar/",
    copyable: false,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xykvapqj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }

    
    } catch {
  setStatus("error");
}

  };

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-4">
          <span className="text-xs font-mono text-[hsl(220,100%,60%)] tracking-widest uppercase">
            06 / Contact
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left */}
          <div className="flex-1">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(220,100%,65%)] to-[hsl(260,80%,65%)]">
                together
              </span>
            </h2>
            <p className="text-[hsl(0,0%,55%)] mb-8 max-w-sm">
              I&apos;m open to internships, collaborations, and freelance projects. Drop a message!
            </p>

            <div className="flex items-center gap-1.5 text-sm text-[hsl(0,0%,45%)] mb-8">
              <MapPin size={13} />
              Bengaluru, India
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
  {contactInfo.map(({ icon: Icon, label, value, href, copyable }) => (
    <div
      key={label}
      className="flex items-start gap-3 p-4 rounded-xl border border-[hsl(0,0%,12%)] bg-[hsl(0,0%,6%)] group hover:border-[hsl(0,0%,20%)] transition-colors"
    >
      <div className="w-8 h-8 rounded-lg bg-[hsl(220,100%,60%,0.1)] flex items-center justify-center shrink-0">
        <Icon size={15} className="text-[hsl(220,100%,65%)]" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-[hsl(0,0%,40%)] uppercase tracking-wider mb-0.5">
          {label}
        </p>

        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="text-xs text-[hsl(0,0%,70%)] hover:text-white transition-colors truncate block"
        >
          {value}
        </a>
      </div>

      {copyable && (
        <button
          onClick={() => handleCopy(value, label)}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-[hsl(0,0%,40%)] hover:text-white"
          aria-label={`Copy ${label}`}
        >
          {copied === label ? (
            <Check size={13} className="text-emerald-400" />
          ) : (
            <Copy size={13} />
          )}
        </button>
      )}
    </div>
  ))}
</div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 w-full">
            <div className="p-6 md:p-8 rounded-2xl border border-[hsl(0,0%,12%)] bg-[hsl(0,0%,6%)]">
              <h3
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send a message
              </h3>

              {status === "sent" ? (
                <div className="flex flex-col items-center gap-3 py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Check size={20} className="text-emerald-400" />
                  </div>
                  <p className="text-[hsl(0,0%,70%)]">
                    Message sent! I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-[hsl(220,100%,60%)] hover:underline mt-2"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs text-[hsl(0,0%,45%)] mb-1.5 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-[hsl(0,0%,14%)] bg-[hsl(0,0%,9%)] text-white text-sm placeholder-[hsl(0,0%,35%)] focus:outline-none focus:border-[hsl(220,100%,60%,0.5)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[hsl(0,0%,45%)] mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[hsl(0,0%,14%)] bg-[hsl(0,0%,9%)] text-white text-sm placeholder-[hsl(0,0%,35%)] focus:outline-none focus:border-[hsl(220,100%,60%,0.5)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[hsl(0,0%,45%)] mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[hsl(0,0%,14%)] bg-[hsl(0,0%,9%)] text-white text-sm placeholder-[hsl(0,0%,35%)] focus:outline-none focus:border-[hsl(220,100%,60%,0.5)] transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                      Something went wrong. Please email directly at saugat.rauniyar.work@gmail.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[hsl(220,100%,60%)] hover:bg-[hsl(220,100%,55%)] disabled:opacity-60 text-white text-sm font-semibold transition-all shadow-[0_0_20px_hsl(220,100%,60%,0.25)] active:scale-95"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
