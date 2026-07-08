export default function ContactCard({ user }) {
  const items = [
    user.email && { icon: "mail", value: user.email, primary: false },
    user.website && { icon: "language", value: user.website, primary: true },
    user.linkedin && { icon: "work", value: user.linkedin, primary: false },
  ].filter(Boolean);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <h3 className="text-sm font-black text-slate-800 mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-[20px]">contacts</span>
        Contacto
      </h3>
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="material-symbols-outlined text-slate-500 text-[20px]">{it.icon}</span>
            <span
              className={
                it.primary
                  ? "text-sm text-primary font-bold"
                  : "text-sm text-slate-800 font-medium"
              }
            >
              {it.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
