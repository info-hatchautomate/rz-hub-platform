export const mockCurrentUser = {
  id: "usr_001",
  fullName: "Ana González Torres",
  email: "ana@urbanroots.mx",
  website: "urbanroots.mx",
  linkedin: "linkedin.com/in/anagonzalez",
  memberSince: "Enero 2024",
  startup: {
    name: "UrbanRoots",
    tagline: "Emprendedora social enfocada en agricultura urbana...",
    sectorTags: ["AgriTech", "Social Impact", "Fundraising", "B2B"],
    stage: "Pre-Seed", // Idea | Validación | Pre-Seed | Serie A
    stageProgressPercent: 40,
    generationYear: 2024,
    location: "Guadalajara, México",
  },
  stats: { resourcesUploaded: 3, perksActivated: 2 },
  activePerks: [
    { perkId: "aws", label: "AWS Activate", detail: "$5,000 USD créditos · Activo", activatedAt: null },
    { perkId: "legal", label: "Asesoría Legal", detail: "1 sesión gratis · Activado May 12", activatedAt: "2026-05-12" },
  ],
  recognition: {
    emoji: "",
    title: "Top Contribuidora",
    subtitle: "Generación 2024",
    description: "Reconocida por aportar los 3 recursos más descargados de la comunidad en 2024.",
  },
};
