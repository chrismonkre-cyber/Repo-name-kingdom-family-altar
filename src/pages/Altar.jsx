import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";

const sections = [
  { title: "Morning Family Prayer", desc: "Begin each day by inviting God into your home.", scripture: "Psalm 5:3 — \"In the morning, Lord, you hear my voice; in the morning I lay my requests before you and wait expectantly.\"", prayer: "Father, we dedicate this day to You. Order our steps, guard our hearts, and let Your glory fill this home from morning to night.", declaration: "This day belongs to the Lord. We walk in favor, protection, and purpose.", action: "Gather before breakfast and pray together for 3–5 minutes." },
  { title: "Evening Blessing", desc: "Close the day by speaking blessing and peace over your family.", scripture: "Numbers 6:24–26 — \"The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.\"", prayer: "Lord, as this day ends, we thank You for Your faithfulness. Cover our home tonight. Let every family member rest in Your peace.", declaration: "We are blessed. Our home is covered. We rest under the shadow of the Almighty.", action: "Before bed, speak a blessing over each family member by name." },
  { title: "Prayer for Children", desc: "Cover your children in prayer, identity, and purpose.", scripture: "Isaiah 54:13 — \"All your children shall be taught by the Lord, and great shall be the peace of your children.\"", prayer: "God, protect our children. Fill them with wisdom, courage, and Your Spirit. Let them know who they are in You.", declaration: "Our children are mighty in God. They are loved, called, and protected.", action: "Pray over your children by placing your hand on their head or shoulder." },
  { title: "Prayer for Marriage", desc: "Strengthen the covenant bond between husband and wife.", scripture: "Ecclesiastes 4:12 — \"A cord of three strands is not quickly broken.\"", prayer: "Lord, strengthen our marriage. Let love, trust, and respect grow. Keep us united in purpose and faith.", declaration: "Our marriage is strong. God is at the center. Nothing shall divide us.", action: "Husband and wife pray together for 5 minutes, holding hands." },
  { title: "Peace in the Home", desc: "Declare God's shalom over every room and relationship.", scripture: "John 14:27 — \"Peace I leave with you; my peace I give you.\"", prayer: "Prince of Peace, we invite Your shalom. Remove strife, tension, and anxiety from this home.", declaration: "Peace rules in our home. No weapon formed against us shall prosper.", action: "Walk through your home and speak peace over every room." },
  { title: "Family Forgiveness", desc: "Let grace be louder than grievance in your home.", scripture: "Ephesians 4:32 — \"Be kind to one another, tenderhearted, forgiving one another.\"", prayer: "Lord, help us forgive quickly and deeply. Heal wounds. Restore trust. Let grace overflow.", declaration: "We are a family of grace. We forgive as Christ forgave us.", action: "If there is any unresolved offense, address it with love today." },
  { title: "Protection & Covering", desc: "Plead the blood of Jesus over your family and home.", scripture: "Psalm 91:1 — \"Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.\"", prayer: "Father, we plead the blood of Jesus over our home, our children, our marriage, and our future. No evil shall come near.", declaration: "We are covered by the blood of Jesus. Our home is protected. Angels surround us.", action: "Pray Psalm 91 aloud over your household." },
  { title: "Healing in the Family", desc: "Pray for physical, emotional, and relational healing.", scripture: "Jeremiah 30:17 — \"'But I will restore you to health and heal your wounds,' declares the Lord.\"", prayer: "Healer, touch our family. Heal bodies, mend hearts, restore what is broken. Let wholeness come.", declaration: "By the stripes of Jesus, we are healed — body, mind, and spirit.", action: "Lay hands on anyone in the family who needs healing and pray specifically." },
  { title: "Family Worship", desc: "Create an atmosphere of worship and praise in your home.", scripture: "Psalm 100:2 — \"Worship the Lord with gladness; come before him with joyful songs.\"", prayer: "God, we worship You as a family. You are worthy of all praise. Let our home be a house of worship.", declaration: "Our home is filled with worship. God's presence is welcome here.", action: "Play a worship song and sing together as a family." },
  { title: "Kingdom Legacy", desc: "Build a faith heritage that outlasts your lifetime.", scripture: "Proverbs 13:22 — \"A good man leaves an inheritance to his children's children.\"", prayer: "Lord, help us build a legacy of faith, love, and truth. Let what we plant today bless generations.", declaration: "We are building a Kingdom legacy. Our family will be known for faith and love.", action: "Write down one legacy value your family wants to be remembered for." },
  { title: "Children's Declarations", desc: "Teach your children to speak God's truth over their lives.", scripture: "Psalm 8:2 — \"Through the praise of children and infants you have established a stronghold.\"", prayer: "God, put Your words in our children's mouths. Let them declare Your truth boldly.", declaration: "I am a child of God. I am loved. I am brave. I am called. I have a purpose.", action: "Have your children repeat the declaration aloud together." },
  { title: "Household Dedication", desc: "Consecrate your home to the Lord.", scripture: "Joshua 24:15 — \"But as for me and my household, we will serve the Lord.\"", prayer: "Lord, we dedicate this home to You. Every room, every wall, every conversation — it all belongs to You.", declaration: "As for us and our house, we will serve the Lord. This home is consecrated.", action: "Stand in the center of your home and pray a dedication prayer together." },
];

export default function Altar() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="relative min-h-screen">
      <PageBackground
        desktopImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/5800c94f8_altar-desktop.png"
        mobileImg="https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/44ea8a46d_altar-mobile.png"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-16">
        <HeroSection title="Family Altar" subtitle="Gather. Pray. Bless. Build." />

        <div className="space-y-3">
          {sections.map((s, i) => (
            <div key={i} className="bg-red-950/40 backdrop-blur-sm border border-yellow-600/30 rounded-xl overflow-hidden shadow-lg">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
              >
                <span className="font-cinzel font-bold text-yellow-300 text-base md:text-lg">{s.title}</span>
                <ChevronDown className={`text-yellow-400 flex-shrink-0 transition-transform duration-200 ${openIdx === i ? "rotate-180" : ""}`} size={20} />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5 space-y-4 border-t border-yellow-700/20 pt-4">
                  <p className="font-lora text-yellow-100/80 text-sm">{s.desc}</p>
                  <p className="font-lora italic text-yellow-200/90 text-sm">{s.scripture}</p>
                  <div>
                    <h4 className="font-cinzel text-yellow-400 font-bold text-xs mb-1">Family Prayer</h4>
                    <p className="font-lora text-yellow-100/80 text-sm">{s.prayer}</p>
                  </div>
                  <div>
                    <h4 className="font-cinzel text-yellow-400 font-bold text-xs mb-1">Declaration</h4>
                    <p className="font-lora text-yellow-100 font-semibold text-sm">{s.declaration}</p>
                  </div>
                  <div>
                    <h4 className="font-cinzel text-yellow-400 font-bold text-xs mb-1">Action Step</h4>
                    <p className="font-lora text-yellow-100/80 text-sm">{s.action}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}