import { styleFor } from "./roleStyles.js";
import LockedTeaser from "../common/LockedTeaser.jsx";
import { resolvePhoto } from "@/lib/assetFallbacks";

/**
 * MentorCard — recibe `mentor` y `onViewProfile(mentor)`.
 * Los colores del badge y del borde de hover dependen de `roleType`.
 */
export default function MentorCard({ mentor, onViewProfile, locked = false, onUnlock }) {
  if (locked) return <LockedTeaser variant="mentor" onUnlock={onUnlock} />;
  const {
    fullName,
    roleType,
    specialtyArea,
    institution,
    expertiseTags = [],
    photoUrl,
  } = mentor;

  const s = styleFor(roleType);

  return (
    <article
      className={`bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-surface-container-high ${s.hoverBorder} transition-all group`}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          alt={fullName}
          src={resolvePhoto(photoUrl)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div
          className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg ${s.badge}`}
        >
          {roleType}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-extrabold text-on-surface mb-1">{fullName}</h3>
        <p className="text-on-surface-variant text-sm font-medium mb-4">
          {institution} • {specialtyArea}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {expertiseTags.map((tag) => (
            <span
              key={tag}
              className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-surface-container">
          <button
            type="button"
            onClick={() => onViewProfile?.(mentor)}
            className="bg-primary text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-primary-dim transition-colors shadow-lg shadow-primary/20"
          >
            Ver Perfil
          </button>
          <div className="flex gap-2">
            <a
              href="#"
              aria-label={`Enviar correo a ${fullName}`}
              className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
            <a
              href="#"
              aria-label={`LinkedIn de ${fullName}`}
              className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">link</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
