import { Link } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";

const features = [
  { title: "Prayer in the Home", text: "Create simple, powerful moments of prayer that invite God's presence into everyday family life." },
  { title: "Bless Your Family", text: "Speak Scripture, encouragement, and faith-filled blessing over your household." },
  { title: "Raise Kingdom Children", text: "Help children grow in identity, love, courage, obedience, and confidence in Christ." },
  { title: "Build Legacy", text: "What you build in the home can echo through generations." },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <PageBackground
        desktopImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/6f5a743fd_home-desktop.png"
        mobileImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/42b7f6171_home-mobile.png"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4 pb-16">
        <HeroSection title="Kingdom Family Altar" subtitle="Build the altar. Bless the home. Raise a Kingdom family." />

        <GlassCard className="max-w-3xl mx-auto mb-10">
          <p className="font-lora text-yellow-100/90 text-base md:text-lg leading-relaxed text-center">
            Kingdom Family Altar helps families gather around the Word of God, pray together, speak blessing over the home, and build a legacy of faith. Revival does not only belong in church buildings — it belongs in homes, hearts, marriages, children, and generations.
          </p>
        </GlassCard>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Link to="/daily" className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-black font-cinzel font-bold rounded-lg transition-colors shadow-lg shadow-yellow-900/30">Start Today</Link>
          <Link to="/altar" className="px-6 py-3 bg-red-800 hover:bg-red-700 text-yellow-100 font-cinzel font-bold rounded-lg transition-colors border border-yellow-600/30">Build the Altar</Link>
          <Link to="/journal" className="px-6 py-3 bg-red-800 hover:bg-red-700 text-yellow-100 font-cinzel font-bold rounded-lg transition-colors border border-yellow-600/30">Family Journal</Link>
          <a href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-black font-cinzel font-bold rounded-lg transition-colors shadow-lg shadow-yellow-900/30">Partner / Sow</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map(f => (
            <GlassCard key={f.title}>
              <h3 className="font-cinzel font-bold text-yellow-300 text-lg mb-2">{f.title}</h3>
              <p className="font-lora text-yellow-100/80 text-sm leading-relaxed">{f.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}