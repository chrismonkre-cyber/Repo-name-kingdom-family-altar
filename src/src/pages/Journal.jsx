import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";

const prompts = [
  "What is God speaking to our family this week?",
  "Where do we need more peace, unity, or forgiveness?",
  "What blessing do we need to speak over our children?",
  "What answered prayer should we remember?",
  "How can our home carry God's presence more intentionally?",
  "What legacy are we building as a family?",
];

const STORAGE_KEY = "kingdom-family-altar-journal";

export default function Journal() {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const save = () => {
    if (!title.trim() && !content.trim()) return;
    setEntries([{ id: Date.now(), title: title.trim(), content: content.trim(), date: new Date().toLocaleDateString() }, ...entries]);
    setTitle("");
    setContent("");
  };

  const remove = (id) => setEntries(entries.filter(e => e.id !== id));

  return (
    <div className="relative min-h-screen">
      <PageBackground
        desktopImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/bda99e3bd_journal-desktop.png"
        mobileImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/7747c3f07_journal-mobile.png"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-16">
        <HeroSection title="Family Journal" subtitle="Write what God is doing in your home." />

        <GlassCard className="max-w-2xl mx-auto mb-8">
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Journal title..."
            className="w-full bg-black/30 border border-yellow-600/30 rounded-lg px-4 py-2.5 text-yellow-100 placeholder-yellow-100/40 font-lora text-sm mb-3 focus:outline-none focus:border-yellow-500" />
          <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Write your thoughts, prayers, and reflections..."
            rows={5} className="w-full bg-black/30 border border-yellow-600/30 rounded-lg px-4 py-2.5 text-yellow-100 placeholder-yellow-100/40 font-lora text-sm mb-3 focus:outline-none focus:border-yellow-500 resize-none" />
          <button onClick={save} className="px-6 py-2.5 bg-yellow-600 hover:bg-yellow-500 text-black font-cinzel font-bold rounded-lg transition-colors text-sm">
            Save Entry
          </button>
        </GlassCard>

        {/* Prompts */}
        <GlassCard className="max-w-2xl mx-auto mb-8">
          <h3 className="font-cinzel font-bold text-yellow-300 text-base mb-3">Journal Prompts</h3>
          <ul className="space-y-2">
            {prompts.map((p, i) => (
              <li key={i} className="font-lora text-yellow-100/80 text-sm italic">• {p}</li>
            ))}
          </ul>
        </GlassCard>

        {/* Saved entries */}
        {entries.length > 0 && (
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="font-cinzel font-bold text-yellow-300 text-lg text-center mb-2">Saved Entries</h3>
            {entries.map(e => (
              <GlassCard key={e.id} className="relative">
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1">
                    <h4 className="font-cinzel font-bold text-yellow-300 text-sm">{e.title || "Untitled"}</h4>
                    <p className="font-lora text-yellow-100/60 text-xs mb-1">{e.date}</p>
                    <p className="font-lora text-yellow-100/80 text-sm whitespace-pre-wrap">{e.content}</p>
                  </div>
                  <button onClick={() => remove(e.id)} className="text-red-400 hover:text-red-300 p-1 flex-shrink-0">
                    <Trash2 size={16} />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}