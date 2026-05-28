import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";

export default function About() {
  return (
    <div className="relative min-h-screen">
      <PageBackground
        desktopImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/6f5a743fd_home-desktop.png"
        mobileImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/42b7f6171_home-mobile.png"
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 pb-16">
        <HeroSection title="About Kingdom Family Altar" subtitle="Helping families build homes of prayer, blessing, and Kingdom legacy." />

        <GlassCard className="mb-8">
          <p className="font-lora text-yellow-100/90 text-sm md:text-base leading-relaxed mb-4">
            Kingdom Family Altar exists to help families create simple, Spirit-filled moments of prayer, Scripture, blessing, and worship in the home. This app is not about perfection; it is about building a daily altar where God is honored, families are strengthened, children are blessed, and faith becomes part of everyday life.
          </p>
          <p className="font-lora text-yellow-100/90 text-sm md:text-base leading-relaxed">
            Kingdom Mandate Ministry exists to awaken believers, stir the fire of revival, and equip the Body of Christ to walk in purpose, power, and truth.
          </p>
        </GlassCard>

        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://kingdommandateministry.com" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-black font-cinzel font-bold rounded-lg transition-colors shadow-lg">
            Visit Kingdom Mandate Ministry
          </a>
          <a href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-red-800 hover:bg-red-700 text-yellow-100 font-cinzel font-bold rounded-lg transition-colors border border-yellow-600/30">
            Partner / Sow
          </a>
        </div>
      </div>
    </div>
  );
}