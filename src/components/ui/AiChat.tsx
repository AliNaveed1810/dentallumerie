"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, Send, X } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

const demoReplies: Record<string, string> = {
  hours: `We're open Monday–Friday 08:00–19:00 and Saturday 09:00–14:00. Sunday we are closed.`,
  location: `You'll find us at ${siteConfig.location.address}, ${siteConfig.location.city} ${siteConfig.location.postcode}.`,
  book: `I can guide you to our appointment enquiry form. A member of the reception team will confirm your visit — this demo assistant cannot book clinically.`,
  default: `I'm an integration-ready receptionist demo. I can help with opening hours, location and booking next steps. For clinical questions, please speak with our team.`,
};

function replyFor(message: string) {
  const value = message.toLowerCase();
  if (value.includes("hour") || value.includes("open")) return demoReplies.hours;
  if (value.includes("where") || value.includes("address") || value.includes("location")) {
    return demoReplies.location;
  }
  if (value.includes("book") || value.includes("appoint")) return demoReplies.book;
  return demoReplies.default;
}

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

export function AiChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello — I'm the LUMIÈRE receptionist assistant (demo). Ask about hours, location or how to request an appointment.",
    },
  ]);
  const prefersReducedMotion = useReducedMotion();

  function handleSend(event: React.FormEvent) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };
    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now()}`,
      role: "assistant",
      content: replyFor(trimmed),
    };

    setMessages((current) => [...current, userMessage, assistantMessage]);
    setInput("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open AI receptionist"
        className="fixed bottom-24 left-5 z-40 flex h-14 items-center gap-2 rounded-full border border-[var(--color-forest)]/15 bg-[var(--color-ink)] px-4 text-sm font-medium text-[var(--color-cream)] shadow-[0_12px_30px_rgba(37,61,52,0.2)] transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-sage)] focus-visible:ring-offset-2 md:bottom-8 md:left-8"
      >
        <Bot className="h-5 w-5" strokeWidth={1.75} />
        <span className="pr-1">Ask LUMIÈRE</span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-40 left-5 z-50 flex h-[min(28rem,70vh)] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-[var(--color-forest)]/10 bg-[var(--color-cream)] shadow-[0_24px_60px_rgba(37,42,39,0.18)] md:bottom-28 md:left-8"
            role="dialog"
            aria-label="AI receptionist chat"
          >
            <div className="flex items-center justify-between border-b border-[var(--color-forest)]/10 bg-[var(--color-forest)] px-4 py-3 text-[var(--color-cream)]">
              <div>
                <p className="font-[family-name:var(--font-manrope)] text-sm font-medium">
                  AI Receptionist
                </p>
                <p className="text-xs text-[var(--color-cream)]/70">
                  Demo integration placeholder
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-md p-1 transition-colors hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={
                    message.role === "user"
                      ? "ml-8 rounded-2xl rounded-br-md bg-[var(--color-forest)] px-3 py-2 text-sm text-[var(--color-cream)]"
                      : "mr-8 rounded-2xl rounded-bl-md bg-[var(--color-stone)]/60 px-3 py-2 text-sm text-[var(--color-ink)]"
                  }
                >
                  {message.content}
                </div>
              ))}
              <p className="text-xs leading-relaxed text-[var(--color-forest)]/60">
                Ready for WhatsApp or automation handoff.{" "}
                <Link
                  href="/book-appointment"
                  className="underline underline-offset-2 hover:text-[var(--color-forest)]"
                >
                  Request an appointment
                </Link>
                .
              </p>
            </div>

            <form
              onSubmit={handleSend}
              className="flex gap-2 border-t border-[var(--color-forest)]/10 p-3"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about hours or booking…"
                className="flex-1 rounded-md border border-[var(--color-forest)]/15 bg-white px-3 py-2 text-sm text-[var(--color-ink)] outline-none placeholder:text-[var(--color-forest)]/40 focus:border-[var(--color-sage)]"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="rounded-md bg-[var(--color-forest)] px-3 text-[var(--color-cream)] transition-colors hover:bg-[var(--color-ink)]"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
