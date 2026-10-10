import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import logoMark from "@/assets/logo-mark.png";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS: { emoji: string; text: string }[] = [
  { emoji: "👋", text: "What is ApexSales?" },
  { emoji: "💰", text: "How much does it cost?" },
  { emoji: "📊", text: "How is it better than Excel?" },
  { emoji: "🗓️", text: "How do I book a demo?" },
];

const GREETING =
  "Hey! 👋 I'm Apex — the ApexSales assistant. Ask me anything about the product, pricing, or setup. How can I help?";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to the newest message while the chat is open.
  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, loading]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;
    setError("");
    setInput("");
    const history: Msg[] = [...messages, { role: "user", content }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setLoading(true);
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal: ctrl.signal,
      });
      if (!res.ok || !res.body) {
        const j = await res.json().catch(() => ({}));
        throw new Error(
          res.status === 429
            ? "Too many requests — please wait a moment and try again."
            : res.status === 402
              ? "AI is temporarily unavailable. Please try again later."
              : j.error || "Something went wrong. Please try again.",
        );
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: acc }]);
      }
      if (!acc.trim()) {
        setMessages([
          ...history,
          { role: "assistant", content: "Sorry, I couldn't answer that right now. Please try again." },
        ]);
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") {
        setError((e as Error).message);
        setMessages(history);
      }
    } finally {
      setLoading(false);
    }
  }

  function toggle() {
    setOpen((o) => !o);
    setOpened(true);
  }

  const last = messages[messages.length - 1];

  return (
    <>
      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="ApexSales assistant chat"
          className="chat-pop fixed right-4 bottom-[5.75rem] z-50 flex h-[32rem] max-h-[calc(100dvh-7rem)] w-[min(92vw,23rem)] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10"
        >
          {/* Header */}
          <div className="relative flex items-center gap-3 bg-gradient-to-br from-forest via-forest to-moss px-4 py-3.5">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-8 size-24 rounded-full bg-vivid/25 blur-2xl"
            />
            <div className="relative rounded-xl bg-white/10 p-1 ring-1 ring-white/25">
              <img src={logoMark} alt="" width={28} height={28} className="size-7 rounded-lg" />
              <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-forest bg-vivid" />
            </div>
            <div className="relative flex-1">
              <p className="font-display text-sm font-bold tracking-tight text-paper">Apex</p>
              <p className="flex items-center gap-1.5 text-[11px] text-paper/70">
                {loading ? (
                  "typing…"
                ) : (
                  <>
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-vivid opacity-75" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-vivid" />
                    </span>
                    Online · replies instantly
                  </>
                )}
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 text-paper/80 transition-colors hover:bg-white/10 hover:text-paper"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="chat-scroll flex-1 space-y-3 overflow-y-auto bg-paper/60 px-4 py-4"
          >
            {/* Greeting card */}
            <div className="mr-6 rounded-2xl rounded-tl-md bg-white p-3.5 text-sm leading-relaxed text-forest ring-1 ring-black/5">
              <p className="whitespace-pre-wrap">{GREETING}</p>
            </div>
            {messages.map((m, i) =>
              m.role === "user" ? (
                <div
                  key={i}
                  className="chat-in ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-vivid px-3.5 py-2.5 text-sm font-medium leading-relaxed text-forest shadow-sm"
                >
                  <p className="whitespace-pre-wrap">{m.content}</p>
                </div>
              ) : (
                m.content && (
                  <div key={i} className="chat-in flex items-end gap-2">
                    <img
                      src={logoMark}
                      alt=""
                      width={22}
                      height={22}
                      className="mb-0.5 size-[22px] shrink-0 rounded-md ring-1 ring-black/10"
                    />
                    <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white px-3.5 py-2.5 text-sm leading-relaxed text-forest ring-1 ring-black/5">
                      <div className="space-y-2 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:leading-relaxed [&_p+&>strong]:text-forest [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-4">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                )
              ),
            )}
            {loading && (!last || !last.content) && (
              <div className="chat-in flex items-end gap-2">
                <img
                  src={logoMark}
                  alt=""
                  width={22}
                  height={22}
                  className="mb-0.5 size-[22px] shrink-0 rounded-md ring-1 ring-black/10"
                />
                <div className="flex w-fit items-center gap-1.5 rounded-2xl rounded-tl-md bg-white px-3.5 py-3 ring-1 ring-black/5">
                  <span className="size-1.5 animate-bounce rounded-full bg-moss [animation-delay:-0.3s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-moss [animation-delay:-0.15s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-moss" />
                </div>
              </div>
            )}
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.text}
                    onClick={() => send(s.text)}
                    className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-forest ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:ring-2 hover:ring-vivid hover:shadow-sm"
                  >
                    <span aria-hidden>{s.emoji}</span>
                    {s.text}
                  </button>
                ))}
              </div>
            )}
            {error && (
              <p className="rounded-lg bg-destructive/10 px-3 py-2 text-xs font-medium text-destructive">{error}</p>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-end gap-2 border-t border-black/5 bg-white p-3"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              rows={1}
              placeholder="Apex ko message bhejo…"
              className="max-h-24 flex-1 resize-none rounded-full bg-paper/80 px-4 py-2.5 text-sm text-forest ring-1 ring-black/5 outline-none transition-shadow placeholder:text-forest/40 focus:bg-white focus:ring-2 focus:ring-vivid"
            />
            {loading ? (
              <button
                type="button"
                onClick={() => abortRef.current?.abort()}
                className="rounded-full bg-mist px-3.5 py-2.5 text-xs font-semibold text-forest ring-1 ring-black/5 transition-colors hover:bg-mist/70"
              >
                Stop
              </button>
            ) : (
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-vivid text-forest shadow-sm ring-1 ring-forest/15 transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="size-4">
                  <path d="m5 12 14 0M12 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={toggle}
        aria-label={open ? "Close chat" : "Chat with ApexSales assistant"}
        className="fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-vivid text-forest shadow-xl ring-1 ring-forest/20 transition-transform hover:scale-105"
      >
        {!open && !opened && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-vivid/40 [animation-duration:2.5s]"
          />
        )}
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="size-6">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        )}
      </button>
    </>
  );
}
