import { useState } from "react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";

const days = [
  {
    theme: "God's Presence in the Home",
    scripture: "\"For where two or three gather in my name, there am I with them.\" — Matthew 18:20",
    encouragement: "When your family gathers to pray, even briefly, God's presence fills the room. You don't need perfection — you need faithfulness.",
    prayer: "Father, let Your presence fill our home today. Let every room, every conversation, and every moment be touched by Your Spirit. We invite You in, Lord.",
    declaration: "Our home is a dwelling place of God's presence. The Holy Spirit lives here.",
    action: "Gather your family for 5 minutes of prayer before or after a meal today.",
    question: "Where have you felt God's presence most in our home lately?"
  },
  {
    theme: "Love and Unity",
    scripture: "\"Above all, put on love, which binds everything together in perfect harmony.\" — Colossians 3:14",
    encouragement: "Love is not just a feeling — it's a daily choice. Unity in the home starts with humility, patience, and grace.",
    prayer: "Lord, bind our family together in love. Remove division, offense, and pride. Let us walk in unity and grace with one another.",
    declaration: "We are a family of love. We choose unity. We walk in grace.",
    action: "Each family member tells another one thing they appreciate about them.",
    question: "Is there anything between us that we need to forgive or release today?"
  },
  {
    theme: "Peace Over the Household",
    scripture: "\"Peace I leave with you; my peace I give you.\" — John 14:27",
    encouragement: "The peace of Christ is not the absence of trouble — it is the presence of God in the middle of it. Speak peace over your home.",
    prayer: "Prince of Peace, we invite Your shalom into our home. Calm every anxious heart. Still every storm. Let peace reign here.",
    declaration: "Peace rules in our home. Anxiety has no authority here. We rest in the peace of Christ.",
    action: "Play worship music softly in your home for 15 minutes and let it shift the atmosphere.",
    question: "What is stealing our peace right now, and how can we give it to God?"
  },
  {
    theme: "Raising Children in Truth",
    scripture: "\"Train up a child in the way he should go; even when he is old he will not depart from it.\" — Proverbs 22:6",
    encouragement: "Your children are watching. What you model matters more than what you lecture. Let them see your faith, not just hear it.",
    prayer: "God, give us wisdom to raise our children in truth and love. Protect their hearts. Let them know You from a young age.",
    declaration: "Our children are mighty in God. They will love truth, walk in purpose, and follow Christ all their days.",
    action: "Share one Bible story or truth with your children at bedtime tonight.",
    question: "What is one truth we want our children to carry with them for life?"
  },
  {
    theme: "Forgiveness and Grace",
    scripture: "\"Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.\" — Ephesians 4:32",
    encouragement: "No family is perfect. Forgiveness is the glue that holds homes together. Let grace be louder than grievance.",
    prayer: "Lord, teach us to forgive quickly and love deeply. Heal any hurt between us. Let our home be a place of grace.",
    declaration: "We are a family of forgiveness. We release every offense. Grace covers this home.",
    action: "If there is any unresolved conflict, take a moment to apologize and forgive — even if it's small.",
    question: "Is there something we've been holding onto that we need to release?"
  },
  {
    theme: "Courage and Faith",
    scripture: "\"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.\" — Joshua 1:9",
    encouragement: "Your family was not made for fear. God has given you courage, boldness, and faith to face anything together.",
    prayer: "God, fill our family with boldness. When fear comes, remind us that You are with us. We will not shrink back.",
    declaration: "We are a courageous family. We do not live in fear. The Lord is with us.",
    action: "Share one area where you need courage and pray together over it.",
    question: "What is one bold step of faith God might be calling our family to take?"
  },
  {
    theme: "Family Legacy",
    scripture: "\"A good man leaves an inheritance to his children's children.\" — Proverbs 13:22",
    encouragement: "Legacy is not just what you leave behind — it's what you build every day. Every prayer, every act of love, every moment of faith is part of your family's legacy.",
    prayer: "Lord, help us build a legacy that outlasts us. Let our faith, love, and devotion echo for generations to come.",
    declaration: "We are building a Kingdom legacy. What we plant today will bless generations after us.",
    action: "Write down one value or truth your family wants to be known for.",
    question: "What do we want our grandchildren to say about the faith of this family?"
  }
];

export default function Daily() {
  const dayIndex = new Date().getDay();
  const [selected, setSelected] = useState(dayIndex);
  const day = days[selected];

  return (
    <div className="relative min-h-screen">
      <PageBackground
        desktopImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/18118a0da_daily-desktop.png"
        mobileImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/a36c79b03_daily-mobile.png"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-16">
        <HeroSection title="Today's Family Word" subtitle="One day at a time. Pray together. Grow together." />

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d, i) => (
            <button key={d} onClick={() => setSelected(i)}
              className={`px-3 py-1.5 rounded font-cinzel text-xs font-bold transition-colors ${selected === i ? "bg-yellow-600 text-black" : "bg-red-900/50 text-yellow-200 border border-yellow-600/30 hover:bg-red-800/60"}`}>
              {d}
            </button>
          ))}
        </div>

        <GlassCard className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-cinzel font-bold text-yellow-300 text-2xl text-center">{day.theme}</h2>
          <p className="font-lora italic text-yellow-200/90 text-center text-sm">{day.scripture}</p>

          <div>
            <h4 className="font-cinzel text-yellow-400 font-bold text-sm mb-1">Family Encouragement</h4>
            <p className="font-lora text-yellow-100/80 text-sm leading-relaxed">{day.encouragement}</p>
          </div>
          <div>
            <h4 className="font-cinzel text-yellow-400 font-bold text-sm mb-1">Family Prayer</h4>
            <p className="font-lora text-yellow-100/80 text-sm leading-relaxed">{day.prayer}</p>
          </div>
          <div>
            <h4 className="font-cinzel text-yellow-400 font-bold text-sm mb-1">Family Declaration</h4>
            <p className="font-lora text-yellow-100 font-semibold text-sm leading-relaxed">{day.declaration}</p>
          </div>
          <div>
            <h4 className="font-cinzel text-yellow-400 font-bold text-sm mb-1">Action Step</h4>
            <p className="font-lora text-yellow-100/80 text-sm leading-relaxed">{day.action}</p>
          </div>
          <div>
            <h4 className="font-cinzel text-yellow-400 font-bold text-sm mb-1">Conversation Question</h4>
            <p className="font-lora italic text-yellow-200/90 text-sm leading-relaxed">{day.question}</p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}