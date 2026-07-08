import { useState, useEffect } from "react";

export default function PerkDetailModal({ perk, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!perk) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [perk, onClose]);

  if (!perk) return null;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(perk.redemptionCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[320px,1fr] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-all"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Banner */}
        <div className="bg-slate-900 p-10 flex flex-col items-center justify-center text-center relative overflow-hidden h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-2xl mx-auto">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ color: perk.iconColor }}
              >
                {perk.icon}
              </span>
            </div>
            <h3 className="text-white text-2xl font-black mb-2">{perk.name}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{perk.bannerDesc}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-3xl font-black text-slate-800 mb-2">{perk.modalTitle}</h3>
            <p className="text-slate-500 text-base leading-relaxed">{perk.modalDescription}</p>
          </div>

          {perk.activationSteps?.length > 0 && (
            <div className="space-y-6 mb-8">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Cómo activar tu beneficio:
              </h4>
              <ul className="space-y-4">
                {perk.activationSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-slate-600">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                      {i + 1}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: step }} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {perk.redemptionCode && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-8 flex items-center justify-between gap-4">
              <div>
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Tu Org ID / Código
                </div>
                <code className="text-lg font-mono font-bold text-slate-800">
                  {perk.redemptionCode}
                </code>
              </div>
              <button
                onClick={copyCode}
                className="bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-sm shrink-0"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {copied ? "check" : "content_copy"}
                </span>
                {copied ? "Copiado" : "Copiar"}
              </button>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-slate-100">
            {perk.finePrint && (
              <p className="text-[10px] text-slate-400 max-w-[240px] leading-relaxed italic">
                {perk.finePrint}
              </p>
            )}
            {perk.externalLink && (
              <a
                href={perk.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all shrink-0"
              >
                {perk.externalLinkText || "Ir al portal"}
                <span className="material-symbols-outlined text-[20px]">open_in_new</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
