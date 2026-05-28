export default function PageBackground({ desktopImg, mobileImg }) {
  return (
    <div className="fixed inset-0 -z-10">
      <img src={desktopImg} alt="" className="hidden md:block w-full h-full object-cover" />
      <img src={mobileImg} alt="" className="md:hidden w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
    </div>
  );
}