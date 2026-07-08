import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useFakeAuth } from "@/lib/useFakeAuth";

const LoginModalContext = createContext(null);

export function LoginModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <LoginModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      <LoginModal open={isOpen} onClose={close} />
    </LoginModalContext.Provider>
  );
}

export function useLoginModal() {
  const ctx = useContext(LoginModalContext);
  if (!ctx) throw new Error("useLoginModal must be used inside <LoginModalProvider>");
  return ctx;
}

export default function LoginModal({ open, onClose }) {
  const { login } = useFakeAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    onClose?.();
    navigate({ to: "/hub" });
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 overflow-hidden transform transition-all scale-100">
        <div className="bg-primary p-8 text-center relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
          <div className="h-10 mx-auto mb-3 flex items-center justify-center">
            <span className="text-white font-black text-lg tracking-tight">RZ Hub</span>
          </div>
          <h3 className="text-2xl font-black text-white mb-1">Bienvenido de regreso</h3>
          <p className="text-white/80 text-sm font-medium">Ingresa a tu cuenta de RZ Hub</p>
        </div>
        <form className="p-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="tu@correo.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm font-medium transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm font-medium transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-black py-3.5 rounded-xl hover:bg-primary-dim hover:scale-[1.02] transition-all shadow-lg shadow-primary/25 text-base"
          >
            Ingresar al Hub
          </button>
          <div className="text-center">
            <p className="text-xs text-slate-400 font-medium">
              ¿Aún no tienes acceso?{" "}
              <a
                href="mailto:retozapopan@zapopan.gob.mx"
                className="text-primary font-bold hover:underline"
              >
                Solicítalo aquí
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
