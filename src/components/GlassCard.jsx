export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`bg-red-950/30 backdrop-blur-sm border border-yellow-500/40 rounded-xl p-6 shadow-lg shadow-red-900/20 ${className}`}>
      {children}
    </div>
  );
}