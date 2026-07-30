import { Link, useNavigate, NavLink } from "react-router-dom";
import { useLoginModal } from "./LoginModal";
import { useFakeAuth } from "@/lib/useFakeAuth";
import logoZapopan from "@/assets/logo-zapopan.png";

const NAV_LINKS = [
  { to: "/", label: "Inicio", exact: true },
  { to: "/alumni", label: "Alumni" },
  { to: "/mentores", label: "Mentores" },
  { to: "/perks", label: "Perks" },
  { to: "/recursos", label: "Recursos" },
  { to: "/calendario", label: "Calendario" },
];

export default function Navbar() {
  const { open } = useLoginModal();
  const { isLoggedIn, logout } = useFakeAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md shadow-[0_2px_20px_rgba(230,24,118,0.07)] transition-all duration-300">
      <div className="flex justify-between items-center px-6 lg:px-10 h-20 max-w-screen-xl mx-auto">
        <Link to={isLoggedIn ? "/hub" : "/"} className="flex items-center gap-3">
          <img src={logoZapopan} alt="Zapopan" className="h-11 w-auto" />
          <div className="w-px h-7 bg-slate-200" />
          <span className="text-lg font-black tracking-tighter text-slate-700">RZ Hub</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 font-semibold text-sm">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact}
              className={({ isActive }) =>
                `transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-slate-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            <Link
              to="/perfil"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary-dim hover:scale-105 transition-all shadow-md shadow-primary/20"
            >
              Mi perfil
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              title="Salir"
              className="w-10 h-10 rounded-full border border-slate-200 text-slate-500 hover:text-primary hover:border-primary transition-colors flex items-center justify-center"
              aria-label="Salir"
            >
              <span className="material-symbols-outlined text-lg">logout</span>
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={open}
            className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary-dim hover:scale-105 transition-all shadow-md shadow-primary/20"
          >
            Ingresar
          </button>
        )}
      </div>
    </nav>
  );
}
