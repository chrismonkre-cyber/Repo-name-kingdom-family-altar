import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/be33c09ce_newlogo.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/daily", label: "Daily" },
  { to: "/altar", label: "Family Altar" },
  { to: "/journal", label: "Journal" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md border-b border-yellow-700/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={LOGO} alt="Kingdom Mandate Ministry" className="h-10 md:h-12 w-auto rounded-full" />
          <span className="hidden sm:inline font-cinzel text-yellow-300 font-bold text-sm md:text-base tracking-wide">Kingdom Family Altar</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-1">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`px-3 py-1.5 rounded text-sm font-cinzel tracking-wide transition-colors ${pathname === l.to ? "bg-yellow-600/30 text-yellow-200" : "text-yellow-100/80 hover:text-yellow-200 hover:bg-yellow-600/20"}`}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-yellow-200 p-2">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-yellow-700/30">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              className={`block px-6 py-3 font-cinzel text-sm tracking-wide border-b border-yellow-900/20 ${pathname === l.to ? "bg-yellow-600/20 text-yellow-200" : "text-yellow-100/80"}`}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}