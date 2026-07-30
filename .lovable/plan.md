# Plan: Esqueleto de RZ Hub

Stack: TanStack Start + TypeScript + Tailwind v4 (el que ya está configurado). Uso rutas file-based de TanStack (equivalente funcional a react-router-dom, con `<Link to>` type-safe). Nada de UI de contenido todavía — solo andamiaje.

## 1. Rutas (src/routes/)

Una por vista. Cada archivo es un `createFileRoute` con un componente placeholder mínimo (`<h1>` con el nombre de la vista) y `head()` propio con title/description específicos.

```
src/routes/
  __root.tsx        (ya existe — actualizo title/description a "RZ Hub" y cargo la fuente)
  index.tsx         → /            Landing (ya existe, lo vacío)
  hub.tsx           → /hub
  alumni.tsx        → /alumni
  mentores.tsx      → /mentores
  perks.tsx         → /perks
  recursos.tsx      → /recursos
  calendario.tsx    → /calendario
  perfil.tsx        → /perfil
```

Navegación entre vistas con `<Link to="/hub">` de `@tanstack/react-router` (no `react-router-dom`, que rompería el stack). La sensación desde el componente es idéntica.

## 2. Estructura de carpetas

```
src/
  data/                    (archivos .ts vacíos, listos para poblar en el próximo mensaje)
    alumni.ts
    mentores.ts
    perks.ts
    recursos.ts
    eventos.ts
    perfil.ts
  components/
    common/                (Button, Card wrapper, Navbar, etc. — vacío por ahora, solo .gitkeep)
    alumni/
    mentores/
    perks/
    recursos/
    calendario/
    perfil/
```

Cada carpeta de componentes queda con un `.gitkeep` para preservarla en git sin generar UI aún.

Nota sobre TS: cada archivo en `src/data/` exportará un array tipado (`export const alumni: Alumni[] = []`) con la interfaz declarada arriba del archivo. Las interfaces las defino cuando me pases los datos de ejemplo, para no inventar campos.

## 3. Paleta y tipografía (Tailwind v4)

Tailwind v4 en este stack se configura en `src/styles.css` con `@theme` — no hay `tailwind.config.js`. Añado tokens semánticos a los que ya existen:

```css
@theme {
  --color-primary: #E61876;      /* rosa RZ */
  --color-secondary: #1e40af;    /* azul */
  --color-surface: #F8FAFC;
  --color-surface-2: #E5E7EB;
  --color-ink: #1F2937;          /* texto principal */
  --font-sans: "Plus Jakarta Sans", system-ui, sans-serif;
}
```

Esto genera automáticamente `bg-primary`, `text-primary`, `bg-surface`, `text-ink`, `font-sans`, etc.

Fuente Plus Jakarta Sans vía `@fontsource-variable/plus-jakarta-sans` (instalado con bun e importado en `src/styles.css` — cumple la regla de no importar URLs remotas en CSS con Lightning CSS).

Nota: mantengo los tokens shadcn actuales (`--background`, `--foreground`, `--primary`, etc.) intactos porque los usa el layout de error/404 del root. Los tokens de RZ viven en paralelo con nombres propios (`--color-primary` mapea a rosa RZ, y los shadcn siguen apuntando a sus oklch originales bajo `--primary`). Cuando entremos a UI podemos decidir si unificamos.

## 4. `__root.tsx`

- Cambio `title: "Lovable App"` → `title: "RZ Hub"` y description a algo específico ("Comunidad de alumni, mentores y recursos de RZ").
- Añado navbar mínimo (solo enlaces de texto entre las 8 rutas) para poder navegar mientras construimos. Sin estilos elaborados.
- Mantengo `<Outlet />`, `QueryClientProvider`, boundaries de error y 404.

## 5. Lo que NO hago en este esqueleto

- Ningún componente de tarjeta (AlumniCard, MentorCard, etc.) — los creamos cuando llegue la data y los mocks HTML.
- Ninguna interfaz TS de datos — las defino con los campos reales que me pases, no inventadas.
- Ningún dato de ejemplo — los archivos `src/data/*.ts` quedan como `export const X: X[] = []` esperando tu próximo mensaje.
- Ningún estilo visual dentro de las páginas más allá del `<h1>` placeholder.

## Entregable

Al terminar: el dev server levanta, las 8 rutas navegan entre sí, la paleta y fuente están disponibles como utilidades Tailwind, y las carpetas están listas para recibir la data y los componentes en los siguientes mensajes.
