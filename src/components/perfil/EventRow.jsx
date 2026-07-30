const MONTHS = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

function fmtDay(iso) {
  const d = new Date(iso);
  return { month: MONTHS[d.getMonth()], day: String(d.getDate()).padStart(2, "0") };
}

function fmtTime(iso) {
  const d = new Date(iso);
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${m} ${ampm}`;
}

const statusStyles = {
  Confirmado: "bg-success-container text-success",
  Registrado: "bg-secondary-container text-on-secondary-container",
};

export default function EventRow({ event, variant = "upcoming" }) {
  if (variant === "history") {
    return (
      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 opacity-70">
        <span className="material-symbols-outlined text-slate-500 text-[20px]">event_available</span>
        <div className="flex-1 text-sm font-semibold text-slate-500">
          {event.title} · {fmtDay(event.startDatetime).month} {fmtDay(event.startDatetime).day},{" "}
          {new Date(event.startDatetime).getFullYear()}
        </div>
        <span className="text-[10px] font-semibold text-slate-500">
          {event.attendanceStatus || "Asistido"}
        </span>
      </div>
    );
  }

  const { month, day } = fmtDay(event.startDatetime);
  const isConfirmed = event.registrationStatus === "Confirmado";
  const statusClass = statusStyles[event.registrationStatus] || "bg-slate-100 text-slate-600";

  return (
    <div
      className={
        isConfirmed
          ? "flex items-center gap-4 p-4 rounded-2xl border-2 border-primary/20 bg-primary-container/20"
          : "flex items-center gap-4 p-4 rounded-2xl border border-slate-200 bg-slate-50"
      }
    >
      <div
        className={
          isConfirmed
            ? "w-12 h-12 bg-primary rounded-xl flex flex-col items-center justify-center shrink-0 text-white"
            : "w-12 h-12 bg-secondary-container rounded-xl flex flex-col items-center justify-center shrink-0 text-on-secondary-container"
        }
      >
        <span className="text-[9px] font-black uppercase leading-none">{month}</span>
        <span className="text-lg font-black leading-none">{day}</span>
      </div>
      <div className="flex-1">
        <div className="font-bold text-sm text-slate-800">{event.title}</div>
        <div className="text-xs text-slate-500">
          {fmtTime(event.startDatetime)} · {event.location || event.modality}
        </div>
      </div>
      <span
        className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shrink-0 ${statusClass}`}
      >
        {isConfirmed ? "" : ""}
        {event.registrationStatus || "Registrado"}
      </span>
    </div>
  );
}
