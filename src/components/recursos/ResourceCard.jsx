const categoryStyles = {
  "Validación": { pill: "bg-warning-container text-on-warning-container", emoji: "" },
  "Crecimiento": { pill: "bg-secondary-container text-on-secondary-container", emoji: "" },
  "Escalamiento": { pill: "bg-purple-100 text-purple-700", emoji: "" },
};

const formatIcons = {
  PDF: "picture_as_pdf",
  XLSX: "table_chart",
  DOCX: "description",
  PPT: "slideshow",
  PPTX: "slideshow",
};

function initials(name = "") {
  return name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

import LockedTeaser from "../common/LockedTeaser.jsx";

export default function ResourceCard({ resource, onPreview, locked = false, onUnlock }) {
  if (locked) return <LockedTeaser variant="resource" onUnlock={onUnlock} />;
  const style = categoryStyles[resource.category] || categoryStyles["Crecimiento"];
  const icon = formatIcons[resource.format] || "description";
  const isAlumni = resource.contributorType === "alumni";

  return (
    <div className="bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm hover:shadow-xl transition-shadow flex flex-col group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform" />

      <div className="mb-4 flex justify-between items-start">
        <span className={`${style.pill} text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full`}>
          {style.emoji} {resource.category}
        </span>
        <span className="material-symbols-outlined text-slate-300 text-3xl">{icon}</span>
      </div>

      <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-primary transition-colors">
        {resource.title}
      </h3>
      <p className="text-slate-500 text-sm mb-6 flex-1">{resource.description}</p>

      <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl mb-6 border border-slate-100">
        {isAlumni ? (
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-bold">
            {initials(resource.contributorDisplayName)}
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
            RZ
          </div>
        )}
        <div>
          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            {isAlumni ? "Aportado por Alumni" : "Recurso Oficial"}
          </div>
          <div className="text-xs font-bold text-slate-800">{resource.contributorDisplayName}</div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex items-center gap-1.5 text-slate-500" title="Descargas">
          <span className="material-symbols-outlined text-lg text-success">download_done</span>
          <span className="text-xs font-bold">{resource.downloadCount.toLocaleString()}</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onPreview(resource)}
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
            title="Vista Previa"
          >
            <span className="material-symbols-outlined text-[20px]">visibility</span>
          </button>
          <a
            href={resource.fileUrl}
            download
            className="bg-slate-800 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-primary transition-colors flex items-center gap-2"
          >
            Descargar
          </a>
        </div>
      </div>
    </div>
  );
}
