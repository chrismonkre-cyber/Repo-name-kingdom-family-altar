import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";
import { ExternalLink } from "lucide-react";

const RESOURCES = [
  { name: "The Bible Companion", desc: "Scripture study, devotionals, and biblical tools", href: "https://thebiblecompanion.online" },
  { name: "Kingdom Pathway", desc: "A guided discipleship and spiritual growth journey", href: "https://pathway.kingdommandateministry.com" },
  { name: "Kingdom Declarations", desc: "Speak God's Word over every area of your life", href: "https://declarations.kingdommandateministry.com" },
  { name: "Kingdom Healing Room", desc: "Biblical prayers and resources for healing and wholeness", href: "https://healing.kingdommandateministry.com" },
  { name: "Kingdom Purpose Finder", desc: "Discover the unique purpose God has placed inside you", href: "https://purpose.kingdommandateministry.com" },
  { name: "Kingdom Identity", desc: "Understand who you truly are in Christ", href: "https://identity.kingdommandateministry.com" },
  { name: "Kingdom Gift Finder", desc: "Uncover your spiritual gifts and step into your calling", href: "https://gifts.kingdommandateministry.com" },
  { name: "Kingdom Battle Plan", desc: "Strategic spiritual warfare tools and prayers", href: "https://battle.kingdommandateministry.com" },
  { name: "Kingdom Grace Vault", desc: "A treasury of God's grace, promises, and encouragement", href: "https://grace.kingdommandateministry.com" },
  { name: "Kingdom Revival Fire", desc: "Stir the fire of revival in your life and community", href: "https://revival.kingdommandateministry.com" },
  { name: "Kingdom Family Altar", desc: "Build a strong spiritual foundation for your family", href: "https://family.kingdommandateministry.com" },
  { name: "Kingdom Marketplace Mandate", desc: "Faith-driven excellence in business and the marketplace", href: "https://marketplace.kingdommandateministry.com" },
  { name: "Kingdom Mandate Ministry", desc: "The main ministry site — awakening and equipping believers", href: "https://kingdommandateministry.com" },
  { name: "YouTube Channel", desc: "Watch teachings, worship, and ministry content", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { name: "Partner / Sow", desc: "Support the ministry through giving", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
  { name: "Contact", desc: "Reach out for prayer, partnership, or questions", href: "mailto:kingdommm.chris@gmail.com" },
];

export default function Resources() {
  const scrollToInstall = () => {
    const el = document.getElementById('install-section');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <PageWrapper pageKey="resources">
      <div className="min-h-screen px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <PageHeader
            title="Freedom Resources"
            subtitle="Continue the journey with the Kingdom Mandate Ministry ecosystem."
          />

          <div className="flex justify-center mb-6">
            <button
              onClick={scrollToInstall}
              className="px-5 py-2.5 font-cinzel text-sm font-semibold rounded-lg bg-gradient-to-r from-yellow-600/80 to-yellow-500/80 text-yellow-50 border border-yellow-400/40 hover:from-yellow-500/90 hover:to-yellow-400/90 transition-all shadow-[0_0_15px_rgba(200,160,40,0.2)]"
            >
              Install / Add to Home Screen
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RESOURCES.map((r) => (
              <a
                key={r.name}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <GlassCard className="h-full transition-all group-hover:bg-yellow-900/25 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_30px_rgba(200,160,40,0.25)]">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-cinzel text-sm font-bold text-yellow-200 group-hover:text-yellow-100 transition-colors mb-1">
                        {r.name}
                      </h3>
                      <p className="font-lora text-xs text-yellow-50/70 leading-relaxed">
                        {r.desc}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-yellow-400/50 group-hover:text-yellow-300 flex-shrink-0 mt-1 transition-colors" />
                  </div>
                </GlassCard>
              </a>
            ))}
            </div>

            <GlassCard id="install-section" className="mt-8 bg-yellow-900/20 border-yellow-500/40">
            <h3 className="font-cinzel text-2xl font-bold text-yellow-200 text-center mb-4">Install This Free Kingdom App</h3>
            <p className="font-lora text-base text-yellow-50/90 leading-relaxed text-center mb-6 max-w-xl mx-auto">
              You can install Kingdom Freedom on your phone, tablet, or computer without using an app store.
            </p>
            <div className="space-y-3 max-w-xl mx-auto">
              <div className="bg-red-950/40 border border-yellow-600/30 rounded-lg p-4">
                <p className="font-cinzel text-sm font-bold text-yellow-400 mb-1">1. Open this app in your browser</p>
                <p className="font-lora text-xs text-yellow-50/70">Visit Kingdom Freedom from Safari, Chrome, Firefox, or any browser.</p>
              </div>
              <div className="bg-red-950/40 border border-yellow-600/30 rounded-lg p-4">
                <p className="font-cinzel text-sm font-bold text-yellow-400 mb-1">2. Tap your browser menu</p>
                <p className="font-lora text-xs text-yellow-50/70">Look for ⋯ (three dots) or ☰ (hamburger menu) at the top or bottom.</p>
              </div>
              <div className="bg-red-950/40 border border-yellow-600/30 rounded-lg p-4">
                <p className="font-cinzel text-sm font-bold text-yellow-400 mb-1">3. Choose "Add to Home Screen" or "Install App"</p>
                <p className="font-lora text-xs text-yellow-50/70">The exact wording depends on your browser, but it's one of these options.</p>
              </div>
              <div className="bg-red-950/40 border border-yellow-600/30 rounded-lg p-4">
                <p className="font-cinzel text-sm font-bold text-yellow-400 mb-1">4. Open it anytime like a normal app</p>
                <p className="font-lora text-xs text-yellow-50/70">Kingdom Freedom will appear on your home screen and open instantly.</p>
              </div>
            </div>
            </GlassCard>
            </div>
            </div>
            </PageWrapper>
            );
}