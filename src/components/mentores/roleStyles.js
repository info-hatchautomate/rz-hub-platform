/**
 * Estilos por roleType, siguiendo exactamente las clases del mock.
 * (Los comentarios "Yellow/Orange/Turquoise" del HTML original son etiquetas
 * descriptivas; los tokens reales de Tailwind son los que se usan aquí.)
 */
export const ROLE_STYLES = {
  Mentor: {
    badge: "bg-tertiary-container text-on-tertiary-container",
    accent: "text-tertiary",
    accentBg: "bg-tertiary/10",
    accentBorder: "border-tertiary",
    hoverBorder: "hover:border-tertiary-fixed",
    backPanel: "bg-tertiary text-white",
  },
  Aliado: {
    badge: "bg-[#2563eb] text-white",
    accent: "text-blue-600",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500",
    hoverBorder: "hover:border-blue-500",
    backPanel: "bg-blue-600 text-white",
  },
  Tallerista: {
    badge: "bg-secondary-container text-on-secondary-container",
    accent: "text-secondary",
    accentBg: "bg-secondary/10",
    accentBorder: "border-secondary",
    hoverBorder: "hover:border-secondary",
    backPanel: "bg-secondary text-white",
  },
};

export const ROLE_ORDER = ["Mentor", "Tallerista", "Aliado"];

export function styleFor(role) {
  return ROLE_STYLES[role] ?? ROLE_STYLES.Mentor;
}
