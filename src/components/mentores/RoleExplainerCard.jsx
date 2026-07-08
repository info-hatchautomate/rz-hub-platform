import { useState } from "react";
import { styleFor } from "./roleStyles.js";

/**
 * RoleExplainerCard — flip card 3D con explicación de un rol.
 * Recibe: { role, icon, tagline, backTitle, backDescription }
 */
export default function RoleExplainerCard({ role, icon, tagline, backTitle, backDescription }) {
  const [flipped, setFlipped] = useState(false);
  const s = styleFor(role);

  return (
    <div
      className="[perspective:1000px] h-[280px] cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center p-8 rounded-[2rem] bg-white shadow-xl border-b border-x border-slate-100 border-t-8 ${s.accentBorder} [backface-visibility:hidden]`}
        >
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${s.accentBg} ${s.accent}`}
          >
            <span className="material-symbols-outlined text-4xl">{icon}</span>
          </div>
          <h3 className="text-2xl font-black text-slate-800 mb-2">{role}</h3>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{tagline}</p>
          <div className="mt-6 text-primary text-xs font-bold flex items-center gap-1">
            Clic para saber más
            <span className="material-symbols-outlined text-sm">touch_app</span>
          </div>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center p-8 rounded-[2rem] shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] ${s.backPanel}`}
        >
          <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{backTitle}</h3>
          <p className="text-sm leading-relaxed opacity-90">{backDescription}</p>
        </div>
      </div>
    </div>
  );
}
