import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";
import { LOGO } from "../components/PageWrapper";

export default function About() {
  const scrollToInstall = () => {
    const el = document.getElementById('install-section');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <PageWrapper pageKey="about">
      <div className="min-h-screen flex items-center justify-center px-4 py-16 md:py-20">
        <div className="max-w-3xl w-full">
          <PageHeader
            title="About Kingdom Freedom"
            subtitle="The flagship freedom companion from Kingdom Mandate Ministry."
          />

          <GlassCard className="mb-6">
            <p className="font-lora text-base text-yellow-50/90 leading-relaxed mb-4">
              Kingdom Freedom was created to help believers break chains, renew their minds, pray with faith,
              walk in healing, stand in truth, and live free in Christ. This app is not about fear or heaviness.
              It is about the victory of Jesus, the power of God's Word, the guidance of the Holy Spirit,
              and the freedom that belongs to every believer.
            </p>
            <p className="font-lora text-base text-yellow-50/90 leading-relaxed">
              Every devotional, prayer, declaration, and resource in this app is rooted in Scripture and designed
              to lead you deeper into the freedom Christ has already purchased for you. Whether you are taking
              your first step toward freedom or standing guard over ground already won — this app is for you.
            </p>
          </GlassCard>

          <GlassCard gold className="mb-6">
            <div className="text-center">
              <img
                src={LOGO}
                alt="Kingdom Mandate Ministry"
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 shadow-[0_0_20px_rgba(200,160,40,0.5)]"
              />
              <h2 className="font-cinzel text-xl font-bold text-yellow-200 mb-3">
                Kingdom Mandate Ministry
              </h2>
              <p className="font-lora text-sm text-yellow-50/90 leading-relaxed max-w-xl mx-auto">
                Kingdom Mandate Ministry exists to awaken believers, stir the fire of revival,
                and equip the Body of Christ to walk in purpose, power, healing, and truth.
              </p>
            </div>
          </GlassCard>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button
              onClick={scrollToInstall}
              className="px-5 py-2.5 font-cinzel text-sm font-semibold rounded-lg bg-gradient-to-r from-yellow-600/80 to-yellow-500/80 text-yellow-50 border border-yellow-400/40 hover:from-yellow-500/90 hover:to-yellow-400/90 transition-all shadow-[0_0_15px_rgba(200,160,40,0.2)]"
            >
              Install / Add to Home Screen
            </button>
            <a
              href="https://kingdommandateministry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 font-cinzel text-sm font-semibold rounded-lg bg-gradient-to-r from-yellow-600/80 to-yellow-500/80 text-yellow-50 border border-yellow-400/40 hover:from-yellow-500/90 hover:to-yellow-400/90 transition-all shadow-[0_0_15px_rgba(200,160,40,0.2)]"
            >
              Visit Ministry Site
            </a>
            <a
              href="https://www.youtube.com/@KingdomMandateMinistry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 font-cinzel text-sm font-semibold rounded-lg bg-red-950/50 text-yellow-200 border border-yellow-600/30 hover:bg-red-900/60 transition-all"
            >
              YouTube Channel
            </a>
            <a
              href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 font-cinzel text-sm font-semibold rounded-lg bg-gradient-to-r from-red-800/80 to-red-700/80 text-yellow-100 border border-yellow-500/30 hover:from-red-700/90 hover:to-red-600/90 transition-all"
            >
              Partner / Sow
            </a>
            <a
              href="mailto:kingdommm.chris@gmail.com"
              className="px-5 py-2.5 font-cinzel text-sm font-semibold rounded-lg bg-red-950/50 text-yellow-200 border border-yellow-600/30 hover:bg-red-900/60 transition-all"
            >
              Contact
            </a>
          </div>

          <GlassCard id="install-section" className="bg-yellow-900/20 border-yellow-500/40">
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
                <p className="font-lora text-xs text-yellow-50/70">Look for ⋮ (three dots) or ☰ (hamburger menu) at the top or bottom.</p>
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