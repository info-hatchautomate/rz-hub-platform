import { useEffect } from "react";

export default function ResourcePreviewModal({ resource, onClose }) {
  useEffect(() => {
    if (!resource) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [resource, onClose]);

  if (!resource) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-5xl h-[85vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-slate-200 bg-slate-50 shrink-0 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">description</span>
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-800 leading-none mb-1">
                {resource.title}
              </h3>
              <div className="text-xs text-slate-500 font-medium">
                Aportado por: {resource.contributorDisplayName} · Formato: {resource.format}
                {resource.fileSize ? ` · ${resource.fileSize}` : ""}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={resource.fileUrl}
              download
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/30 hover:bg-primary-dim transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              Descargar
            </a>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>

        {/* Fake document viewer */}
        <div className="flex-1 bg-slate-100 p-4 md:p-8 overflow-y-auto flex justify-center">
          <div className="w-full max-w-3xl bg-white aspect-[1/1.4] shadow-md border border-slate-200 relative p-8 md:p-12">
            <div className="opacity-30">
              <div className="w-1/3 h-8 bg-slate-800 rounded mb-12" />
              <div className="w-full h-4 bg-slate-300 rounded mb-4" />
              <div className="w-5/6 h-4 bg-slate-300 rounded mb-4" />
              <div className="w-4/6 h-4 bg-slate-300 rounded mb-16" />
              <div className="grid grid-cols-2 gap-8">
                <div className="h-32 bg-slate-200 rounded" />
                <div className="h-32 bg-slate-200 rounded" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                Vista previa simulada
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
