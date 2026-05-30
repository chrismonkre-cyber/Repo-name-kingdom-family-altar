const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/be33c09ce_newlogo.png";

export default function HeroSection({ title, subtitle }) {
  return (
    <div className="text-center pt-10 pb-6 px-4">
      <img src={LOGO} alt="Kingdom Mandate Ministry" className="mx-auto h-16 md:h-24 w-16 md:w-24 object-cover rounded-full mb-4" style={{ filter: 'brightness(1.1) contrast(1.05)' }} />
      <h1 className="font-cinzel font-bold text-3xl md:text-5xl text-yellow-200 drop-shadow-lg mb-3" style={{ textShadow: "0 2px 12px rgba(200,150,0,0.5)" }}>
        {title}
      </h1>
      {subtitle && (
        <p className="font-lora italic text-yellow-50 text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}