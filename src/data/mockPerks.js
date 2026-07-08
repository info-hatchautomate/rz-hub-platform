export const mockPerkCategories = [
  { id: "cat_tech", name: "Tecnología & Cloud", icon: "cloud" },
  { id: "cat_growth", name: "Crecimiento & Marketing", icon: "trending_up" },
  { id: "cat_ops", name: "Operaciones & Productividad", icon: "forum" },
];

export const mockPerks = [
  {
    id: "aws",
    categoryId: "cat_tech",
    name: "AWS Activate",
    icon: "cloud",
    iconColor: "#FF9900",
    status: "Activo",
    shortOffer: "$5,000 USD",
    bannerDesc: "Créditos de infraestructura cloud para Startups de Reto Zapopan.",
    modalTitle: "$5,000 USD en créditos",
    modalDescription: "Potencia tu startup con créditos exclusivos para la red Alumni RZ. Válido por 1 año desde la activación.",
    activationSteps: [
      "Crea una cuenta en <strong>AWS Activate</strong> si aún no tienes una.",
      "Ingresa el <strong>Organization ID</strong> de Reto Zapopan que aparece abajo.",
      "Espera confirmación por correo de AWS en <strong>3-5 días hábiles</strong>.",
    ],
    redemptionCode: "RZ-AWS-START-2026",
    finePrint: "Válido para startups que no hayan recibido más de $10,000 USD previamente.",
    externalLink: "https://aws.amazon.com/activate/",
    externalLinkText: "Ir al portal de AWS",
  },
  // notion, figma, miro, stripe, slack, hubspot... mismo shape
];
