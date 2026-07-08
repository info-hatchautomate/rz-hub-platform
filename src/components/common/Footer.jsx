import logoZapopan from "@/assets/logo-zapopan.png";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center px-10 py-10 max-w-screen-xl mx-auto gap-6">
        <div className="flex items-center gap-3">
          <img src={logoZapopan} alt="Zapopan" className="h-10 w-auto" />
          <span className="text-sm font-bold text-slate-500">RZ Hub</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-slate-500 text-sm hover:text-primary transition-colors font-medium" href="#">
            Privacidad
          </a>
          <a className="text-slate-500 text-sm hover:text-primary transition-colors font-medium" href="#">
            Términos
          </a>
          <a className="text-slate-500 text-sm hover:text-primary transition-colors font-medium" href="#">
            Contacto
          </a>
          <a className="text-slate-500 text-sm hover:text-primary transition-colors font-medium" href="#">
            Gobierno de Zapopan
          </a>
        </div>
        <div className="text-slate-400 text-sm">© 2026 Gobierno de Zapopan.</div>
      </div>
    </footer>
  );
}
