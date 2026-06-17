"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, Send, MessageCircle, ChevronDown } from "lucide-react";

type Message = { role: "user" | "orbi"; text: string };

const QUICK_PROMPTS = [
  "Get a product quote",
  "Find a chemical by name",
  "Technical data sheet",
  "Delivery to my country",
];

const AUTO_REPLIES: Record<string, string> = {
  quote:
    "I can connect you with our sales team for a tailored quote. Could you share the product name, approximate quantity needed, and your location? I'll make sure the right specialist follows up within 2 hours.",
  product:
    "We carry 1,000+ products across six divisions — industrial chemicals, food ingredients, pharmaceuticals, petroleum solvents, laboratory equipment, and food & beverage inputs. Which product or category are you looking for?",
  delivery:
    "We deliver across Kenya, Uganda, Tanzania, Rwanda, Ethiopia, and South Sudan. Lead times vary by product and location. Share your city and the product you need, and I'll give you an accurate timeline.",
  datasheet:
    "We provide Certificates of Analysis (COA), MSDS, and technical data sheets for all products. Just tell me the product name and I'll arrange for the documentation to be sent to your email.",
  default:
    "Thanks for reaching out! I'm Orbi, your Orbitron Sciechem assistant. I can help with product enquiries, quotes, delivery information, and technical support. How can I help you today?",
};

function getReply(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes("quote") || lower.includes("price") || lower.includes("cost"))
    return AUTO_REPLIES.quote;
  if (lower.includes("product") || lower.includes("chemical") || lower.includes("find"))
    return AUTO_REPLIES.product;
  if (lower.includes("deliver") || lower.includes("ship") || lower.includes("country"))
    return AUTO_REPLIES.delivery;
  if (lower.includes("data") || lower.includes("sheet") || lower.includes("coa") || lower.includes("msds"))
    return AUTO_REPLIES.datasheet;
  return AUTO_REPLIES.default;
}

export default function OrbiChat() {
  const [open, setOpen]       = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "orbi",
      text: "👋 Hi! I'm **Orbi**, your Orbitron Sciechem assistant. Ask me about products, quotes, delivery, or technical support.",
    },
  ]);
  const [input, setInput]     = useState("");
  const [typing, setTyping]   = useState(false);
  const bottomRef             = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: "orbi", text: getReply(text) }]);
    }, 900 + Math.random() * 600);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {open && (
        <div className="animate-chat-slide w-[360px] max-w-[calc(100vw-2.5rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: "linear-gradient(135deg, #001A4A 0%, #002B6E 100%)" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 ring-2 ring-acc-500/50">
                <Image src="/logo.png" alt="Orbi" width={28} height={28} className="object-contain" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white" />
              </div>
              <div>
                <p className="font-heading font-black text-white text-sm tracking-wide">Chat with Orbi</p>
                <p className="text-blue-300/70 text-[0.65rem] font-medium">
                  Orbitron AI · Usually replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              aria-label="Close chat"
            >
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 max-h-80 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "orbi" && (
                  <div className="w-7 h-7 rounded-full bg-navy-900 flex items-center justify-center mr-2 shrink-0 self-end mb-0.5">
                    <Image src="/logo.png" alt="" width={16} height={16} className="object-contain" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-navy-900 text-white rounded-br-sm"
                      : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-bl-sm"
                  }`}
                >
                  {msg.text.replace(/\*\*(.*?)\*\*/g, "$1")}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full bg-navy-900 flex items-center justify-center mr-2 shrink-0">
                  <Image src="/logo.png" alt="" width={16} height={16} className="object-contain" />
                </div>
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-gray-400"
                      style={{ animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick prompts */}
          {messages.length <= 1 && (
            <div className="px-4 pt-2 pb-1 flex flex-wrap gap-1.5 bg-gray-50 border-t border-gray-100">
              {QUICK_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="text-xs bg-white border border-gray-200 hover:border-acc-500 hover:text-acc-500 text-gray-600 rounded-full px-3 py-1.5 transition-colors font-medium"
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder="Ask Orbi anything..."
              className="flex-1 text-sm bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800/20 transition-colors"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              className="w-9 h-9 rounded-full bg-acc-500 hover:bg-acc-600 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex items-center gap-2 bg-navy-950 hover:bg-navy-800 text-white pl-4 pr-3 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)" }}
        aria-label="Chat with Orbi"
      >
        {open ? (
          <X size={18} />
        ) : (
          <>
            <MessageCircle size={18} className="text-acc-400" />
            <span className="font-heading font-bold text-sm tracking-wide pr-1">Chat with Orbi</span>
            {/* Pulse indicator */}
            <span className="relative flex w-2.5 h-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acc-500 opacity-75" />
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-acc-500" />
            </span>
          </>
        )}
      </button>
    </div>
  );
}
