import perfilGenerico from "@/assets/perfil-generico.svg";
import genericoHombre from "@/assets/generico-hombre.png";
import genericoMujer from "@/assets/generico-mujer.png";
import eventoStartups from "@/assets/evento-startups.png";
import stockVideo from "@/assets/stock-video.mp4";

export { perfilGenerico, genericoHombre, genericoMujer, eventoStartups };
export const stockVideoUrl = stockVideo;

const PLACEHOLDER_PHOTO_RE = /perfil_generico_card|placeholder/i;
const PLACEHOLDER_EVENT_RE = /evento_startups/i;

export function resolvePhoto(url) {
  if (!url || PLACEHOLDER_PHOTO_RE.test(url)) return perfilGenerico;
  return url;
}

export function resolveEventImage(url) {
  if (!url || PLACEHOLDER_EVENT_RE.test(url)) return eventoStartups;
  return url;
}
