"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, ChevronRight } from "lucide-react";
import profileData from "@/data/profile.json";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  typing?: boolean;
}

const suggestedQuestions = [
  "What technologies do you know?",
  "What is your CGPA?",
  "Are you open to internships?",
  "What projects have you built?",
  "How can I contact you?",
];

function getAnswer(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("technolog") || q.includes("skill") || q.includes("know")) {
    const skills = Object.entries(profileData.skills)
      .map(([cat, list]) => `${cat}: ${list.join(", ")}`)
      .join(" | ");
    return `Here's my tech stack — ${skills}. I'm continuously learning more!`;
  }

  if (q.includes("cgpa") || q.includes("gpa") || q.includes("grade") || q.includes("marks")) {
    return `My current CGPA at Siddaganga Institute of Technology is ${profileData.stats.cgpa}/10. I'm proud of it and aiming higher!`;
  }

  if (q.includes("intern") || q.includes("work") || q.includes("hire") || q.includes("opportunit")) {
    return `Yes, absolutely! I'm actively looking for internship opportunities in full stack development, AI/ML, or web development. Feel free to reach me at ${profileData.email}.`;
  }

  if (q.includes("project")) {
    const list = profileData.projects
      .map((p) => `• ${p.title} (${p.category})`)
      .join("\n");
    return `Here are my projects:\n${list}\n\nCheck them out in the Projects section above!`;
  }

  if (q.includes("contact") || q.includes("reach") || q.includes("email") || q.includes("phone")) {
    return `You can reach me at:\n📧 ${profileData.email}\n📱 ${profileData.phone}\n💼 LinkedIn: ${profileData.linkedin}\n🐙 GitHub: ${profileData.github}`;
  }

  if (q.includes("name") || q.includes("who")) {
    return `I'm ${profileData.name} — ${profileData.title}. ${profileData.bio}`;
  }

  if (q.includes("where") || q.includes("location") || q.includes("college") || q.includes("university") || q.includes("study") || q.includes("studying")) {
    const edu = profileData.education[0];
    return `I'm currently studying ${edu.degree} in ${edu.branch} at ${edu.institution}, ${edu.location} (${edu.duration}).`;
  }

  if (q.includes("education") || q.includes("school")) {
    const list = profileData.education
      .map((e) => `• ${e.institution}, ${e.location} – ${e.gpa} (${e.duration})`)
      .join("\n");
    return `My educational background:\n${list}`;
  }

  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return `Hey there! 👋 I'm a bot that knows all about ${profileData.name}. Ask me anything — skills, projects, education, or how to get in touch!`;
  }

  // FAQs
  for (const faq of profileData.faqs) {
    const keywords = faq.question.toLowerCase().split(" ").filter((w) => w.length > 3);
    if (keywords.some((kw) => q.includes(kw))) {
      return faq.answer;
    }
  }

  return `Great question! I'm not 100% sure about that, but you can reach ${profileData.name} directly at ${profileData.email} or check out the sections above for more info.`;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      role: "assistant",
      content: `Hi! 👋 I'm Saugat's portfolio assistant. Ask me anything about his skills, projects, education, or how to get in touch!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 600));

    const answer = getAnswer(text);
    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: answer,
    };

    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[hsl(220,100%,60%)] text-white text-sm font-semibold shadow-[0_4px_24px_hsl(220,100%,60%,0.4)] hover:shadow-[0_4px_32px_hsl(220,100%,60%,0.5)] transition-shadow"
              aria-label="Open chat"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">Ask me anything</span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="w-[min(360px,calc(100vw-24px))] h-[min(520px,calc(100dvh-100px))] flex flex-col rounded-2xl border border-[hsl(0,0%,15%)] bg-[hsl(0,0%,5%)] shadow-2xl overflow-hidden"
              style={{ transformOrigin: "bottom right" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-[hsl(0,0%,12%)] bg-[hsl(0,0%,7%)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[hsl(220,100%,60%)] flex items-center justify-center">
                    <Bot size={15} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-none" style={{ fontFamily: "var(--font-display)" }}>
                      Saugat&apos;s Assistant
                    </p>
                    <p className="text-[10px] text-[hsl(0,0%,45%)] mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Online · Instant answers
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-[hsl(0,0%,50%)] hover:text-white hover:bg-[hsl(0,0%,12%)] transition-colors"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-0.5 ${
                        msg.role === "assistant"
                          ? "bg-[hsl(220,100%,60%,0.15)] border border-[hsl(220,100%,60%,0.2)]"
                          : "bg-[hsl(0,0%,12%)] border border-[hsl(0,0%,18%)]"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <Bot size={12} className="text-[hsl(220,100%,65%)]" />
                      ) : (
                        <User size={12} className="text-[hsl(0,0%,55%)]" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed whitespace-pre-line ${
                        msg.role === "user"
                          ? "bg-[hsl(220,100%,60%)] text-white rounded-tr-sm"
                          : "bg-[hsl(0,0%,9%)] border border-[hsl(0,0%,13%)] text-[hsl(0,0%,75%)] rounded-tl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-[hsl(220,100%,60%,0.15)] border border-[hsl(220,100%,60%,0.2)] flex items-center justify-center">
                      <Bot size={12} className="text-[hsl(220,100%,65%)]" />
                    </div>
                    <div className="px-3 py-2.5 rounded-xl bg-[hsl(0,0%,9%)] border border-[hsl(0,0%,13%)] flex items-center gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-[hsl(0,0%,40%)]"
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggested questions (only at start) */}
                {messages.length === 1 && !isTyping && (
                  <div className="flex flex-col gap-1.5 mt-1">
                    <p className="text-[10px] text-[hsl(0,0%,35%)] ml-8">Suggested questions:</p>
                    {suggestedQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="ml-8 flex items-center gap-1.5 text-left text-xs text-[hsl(220,100%,65%)] hover:text-white bg-[hsl(220,100%,60%,0.06)] hover:bg-[hsl(220,100%,60%,0.12)] border border-[hsl(220,100%,60%,0.15)] rounded-lg px-2.5 py-1.5 transition-all"
                      >
                        <ChevronRight size={11} />
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-[hsl(0,0%,12%)]">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask anything..."
                    disabled={isTyping}
                    className="flex-1 px-3 py-2 rounded-xl bg-[hsl(0,0%,9%)] border border-[hsl(0,0%,14%)] text-white text-xs placeholder-[hsl(0,0%,35%)] focus:outline-none focus:border-[hsl(220,100%,60%,0.4)] disabled:opacity-60 transition-colors"
                  />
                  <button
                    onClick={() => sendMessage(input)}
                    disabled={!input.trim() || isTyping}
                    className="w-9 h-9 rounded-xl bg-[hsl(220,100%,60%)] hover:bg-[hsl(220,100%,55%)] disabled:opacity-40 flex items-center justify-center text-white transition-all active:scale-95 shrink-0"
                  >
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
