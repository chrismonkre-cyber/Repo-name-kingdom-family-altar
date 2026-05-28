import { ExternalLink } from "lucide-react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";

const resources = [
  { name: "The Bible Companion", href: "https://thebiblecompanion.online" },
  { name: "Kingdom Pathway", href: "https://pathway.kingdommandateministry.com" },
  { name: "Kingdom Declarations", href: "https://declarations.kingdommandateministry.com" },
  { name: "Kingdom Healing Room", href: "https://healing.kingdommandateministry.com" },
  { name: "Kingdom Purpose Finder", href: "https://purpose.kingdommandateministry.com" },
  { name: "Kingdom Identity", href: "https://identity.kingdommandateministry.com" },
  { name: "Kingdom Gift Finder", href: "https://gifts.kingdommandateministry.com" },
  { name: "Kingdom Battle Plan", href: "https://battle.kingdommandateministry.com" },
  { name: "Kingdom Grace Vault", href: "https://grace.kingdommandateministry.com" },
  { name: "Kingdom Revival Fire", href: "https://revival.kingdommandateministry.com" },
  { name: "Kingdom Mandate Ministry", href: "https://kingdommandateministry.com" },
  { name: "YouTube Channel", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { name: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
  { name: "Contact", href: "mailto:kingdommm.chris@gmail.com" },
];

export default function Resources() {
  return (
    <div className="relative min-h-screen">
      <PageBackground
        desktopImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/f49ab1897_resources-desktop.png"
        mobileImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/544462222_resources-mobile.png"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4 pb-16">
        <HeroSection title="Kingdom Family Resources" subtitle="Continue the journey with the Kingdom Mandate Ministry ecosystem." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map(r => (
            <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer">
              <GlassCard className="hover:bg-red-900/50 transition-colors cursor-pointer flex items-center justify-between gap-3">
                <span className="font-cinzel font-bold text-yellow-300 text-sm">{r.name}</span>
                <ExternalLink size={16} className="text-yellow-400 flex-shrink-0" />
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}