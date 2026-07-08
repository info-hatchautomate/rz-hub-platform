const formatIcons = {
  PDF: "picture_as_pdf",
  XLSX: "table_chart",
  DOCX: "description",
};

export default function UploadedResourceRow({ resource }) {
  const icon = formatIcons[resource.format] || "description";
  return (
    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/30 transition-all">
      <div className="w-10 h-10 bg-secondary-container rounded-xl flex items-center justify-center text-on-secondary-container shrink-0">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-sm text-slate-800 truncate">{resource.title}</div>
        <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest">
          {resource.format} · {resource.fileSize} · {resource.category}
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-success shrink-0">
        <span className="material-symbols-outlined text-[18px]">download_done</span>
        <span className="text-xs font-bold">{resource.downloadCount?.toLocaleString()}</span>
      </div>
    </div>
  );
}
