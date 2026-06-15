import { ExternalLink } from "lucide-react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";

const resources = [
  { name: "Kingdom Mandate Ministry", href: "https://kingdommandateministry.com" },
  { name: "The Bible Companion", href: "https://thebiblecompanion.online" },
  { name: "Kingdom Prayer Wall", href: "https://prayer.kingdommandateministry.com" },
  { name: "Kingdom Fire Companion", href: "https://fire.kingdommandateministry.com" },
  { name: "Kingdom Pathway", href: "https://pathway.kingdommandateministry.com" },
  { name: "Kingdom Declarations", href: "https://declarations.kingdommandateministry.com" },
  { name: "Kingdom Healing Room", href: "https://healing.kingdommandateministry.com" },
  { name: "Kingdom Purpose Finder", href: "https://purpose.kingdommandateministry.com" },
  { name: "Kingdom Identity", href: "https://identity.kingdommandateministry.com" },
  { name: "Kingdom Gift Finder", href: "https://gifts.kingdommandateministry.com" },
  { name: "Kingdom Battle Plan", href: "https://battle.kingdommandateministry.com" },
  { name: "Kingdom Grace Vault", href: "https://grace.kingdommandateministry.com" },
  { name: "Kingdom Revival Fire", href: "https://revival.kingdommandateministry.com" },
  { name: "Kingdom Family Altar", href: "https://family.kingdommandateministry.com" },
  { name: "Kingdom Marketplace Mandate", href: "https://marketplace.kingdommandateministry.com" },
  { name: "Kingdom Freedom", href: "https://freedom.kingdommandateministry.com" },
  { name: "YouTube Channel", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { name: "Contact", href: "mailto:kingdommm.chris@gmail.com" },
  { name: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {resources.map(r => (
            <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer">
              <GlassCard className="hover:bg-red-900/50 transition-colors cursor-pointer flex items-center justify-between gap-3">
                <span className="font-cinzel font-bold text-yellow-200 text-sm">{r.name}</span>
                <ExternalLink size={16} className="text-yellow-300 flex-shrink-0" />
              </GlassCard>
            </a>
          ))}
        </div>

        {/* Install This App */}
        <GlassCard className="mb-8">
          <h2 className="font-cinzel font-bold text-yellow-200 text-xl mb-3">📲 Install This Free Kingdom App</h2>
          <p className="font-lora text-yellow-50 text-sm md:text-base mb-4">
            You can install Kingdom Family Altar on your phone, tablet, or computer without using an app store.
          </p>
          <ol className="font-lora text-yellow-50 text-sm md:text-base space-y-2 list-decimal list-inside">
            <li>Open this app in your browser.</li>
            <li>Tap your browser menu (the three dots or share icon).</li>
            <li>Choose <strong className="text-yellow-200">"Add to Home Screen"</strong> or <strong className="text-yellow-200">"Install App"</strong>.</li>
            <li>Open it anytime like a normal app — no app store needed.</li>
          </ol>
        </GlassCard>
      </div>
    </div>
  );
}