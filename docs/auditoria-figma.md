# Auditoría de Diseño — Landing Corporación GACALVI

**Fuente:** Figma — `naming-soft-12263644.figma.site` (archivo `wIJ2UdGcfQz21nkcxL1LUb`, nodo raíz `1:426`)
**Frame maestro:** `1:41` "1920w light" — 1920×4123px
**Stack objetivo:** React + Vite + TypeScript + Tailwind CSS
**Fase:** 1 — versión base fiel al diseño, sin animaciones avanzadas (Motion se integra en fase 2)

---

## 1. Orden de secciones

| # | Nombre del frame/nodo en Figma | Rol | Nodo | Alto (px) |
|---|---|---|---|---|
| 0 | `aside.fixed` | Sidebar de navegación lateral (fija) | `1:381` | 4123 (full) |
| 1 | `section#inicio` | Hero | `1:43` | 720 |
| 2 | `section#sobre-nosotros` | Sobre nosotros + stats | `1:96` | 841 |
| 3 | `section#servicios` | Servicios | `1:142` | 725 |
| 4 | `section#menciones` | Menciones / prensa (3 cards) | `1:212` | 675 |
| 5 | `section#testimonios` | Testimonios (carrusel) | `1:249` | 670 |
| 6 | `footer#contacto` | Footer 4 columnas + copyright | `1:293` | 461 |

> **Layout desktop:** sidebar fijo de 220px a la izquierda; el contenido (1700px) está desplazado a `x≈220`.

---

## 2. Auditoría por sección

### 2.0 `aside.fixed` — Sidebar
- **Elementos:** logo (caja 36×36 `#BCBBBA`, radius 2px, icono 18px) + wordmark "Corporación / GACALVI" (11.5px Black, tracking 1.725); nav con 4 items (Inicio, Sobre Nosotros, Servicios, Menciones) en 10.5px SemiBold uppercase, tracking 1.89, `rgba(255,255,255,0.45)`; indicador activo (barra 2px vertical); pie "Arquitectura / Ingeniería / Diseño" (9px, tracking 1.98); borde derecho `rgba(188,187,186,0.16)`.
- **Estados:** item activo con barra lateral + color blanco.
- **Comportamiento:** navegación por anclas; scrollspy por estado (sin animación).

### 2.1 `section#inicio` — Hero
- **Fondo:** imagen nocturna a 26% de opacidad + `#050A11` + gradiente diagonal `#050A11 86.7% → 33.3% → 0%`.
- **Kicker:** "ARQUITECTURA · INGENIERÍA · DISEÑO" (9.5px SemiBold, tracking 3.04, `rgba(255,255,255,0.5)`) con 2 líneas de 32px `rgba(188,187,186,0.38)`.
- **Título:** "CORPORACIÓN" (blanco) / "GACALVI" (`#BCBBBA`) — Montserrat Black 60px, lh 63, tracking 8.4, uppercase.
- **Subtítulo:** "Sé parte de nuestra historia" (22px Medium, `rgba(255,255,255,0.8)`, tracking 1.76).
- **CTA:** "VER PROYECTOS" (11px Bold, tracking 2.2) + flecha SVG; fondo `#BCBBBA`, texto `#050A11`, radius 2px, sombra `0 4px 14px rgba(188,187,186,0.27)`.
- **Comportamiento:** enlaza a `#menciones` (no existe sección Proyectos; decisión aprobada).

### 2.2 `section#sobre-nosotros`
- **Fondo:** imagen full-bleed + overlay `#050A11` al 43%.
- **Título:** "SOBRE NOSOTROS" (32px Bold, tracking 5.04, `#E0E0E0`) arriba-derecha.
- **Cuerpo:** 3 párrafos blancos (13.5px Regular, lh 25); "Corporación Gacalvi" en ExtraBold.
- **Stats (abajo-derecha):** "100+ PROYECTOS EJECUTADOS" y "20+ AÑOS EN EL MERCADO". Número 24px Black `#050A11` sobre óvalo 70px `#D9D9D9`; etiqueta 10px Bold uppercase blanco, tracking 1.9.

### 2.3 `section#servicios`
- **Fondo:** sólido `#050A11`.
- **Elementos (solo los que existen en el archivo):** título "NUESTROS SERVICIOS" (28px Bold, tracking 5.04, blanco); párrafo (13.5px, `#E0E0E0`, lh 24.03); CTA "¡Súmate a la experiencia Gacalvi!" (16px Black, blanco).
- **Decisión aprobada:** se implementa solo lo que hay en Figma (el resto del área queda vacía).

### 2.4 `section#menciones`
- **Fondo:** blanco. Título "MENCIONES" centrado (28px Bold, tracking 5.04, `#222`) + divisor 56×2px `#BCBBBA`.
- **3 cards:** imagen arriba + título (11.5px ExtraBold uppercase, tracking 1.38, `#222`) con borde superior 3px `#BCBBBA`; la primera incluye párrafo (13.5px, `#555`, lh 24.03) con cita en SemiBold.

### 2.5 `section#testimonios`
- **Fondo:** `#050A11` + imagen a 64% opacidad. Título centrado + divisor.
- **Carrusel:** card 290px (`rgba(5,10,17,0.39)`, borde `rgba(255,255,255,0.08)`); comilla Georgia 250px al 20%; cita (15.5px SemiBold, `rgba(255,255,255,0.8)`, lh 30.23); divisor 40×1.5px; nombre (10.5px Bold uppercase, tracking 1.89); rol (11px Bold, `rgba(255,255,255,0.7)`).
- **Controles:** flechas 44px (borde `rgba(255,255,255,0.16)`, radius 22), dots 8px (activo `#BCBBBA`, inactivos `rgba(255,255,255,0.2)`).
- **Comportamiento funcional (fase 1, sin animación):** carrusel controlado por estado; flechas y dots; `role="region"`, `aria-live`. **Solo existe 1 testimonio** (Alexandra Ponce); el array queda tipado para N slides.

### 2.6 `footer#contacto`
- **Fondo:** `#050A11`. **4 columnas:** marca (logo + wordmark + divisor + descripción), Navegación (6 enlaces), Contacto (dirección, `tel:`, `mailto:`), Redes Sociales (3 handles + 3 marcas con icono).
- **Barra inferior:** borde `rgba(255,255,255,0.05)`; copyright 11px `rgba(255,255,255,0.5)`.
- **FAB "Volver al inicio":** círculo 48px `#BCBBBA`, radius 24, sombra combinada, flecha up; scrollTo top.

---

## 3. Breakpoints

| Variante | ¿Diseñada en Figma? |
|---|---|
| Desktop 1920px | ✅ Única variante ("1920w light") |
| Tablet / Mobile | ❌ No existen |

**Estrategia (aprobada):** mobile-first con supuestos — sidebar colapsa a menú hamburguesa (<1024px), grids apilados; desktop replica Figma (sidebar 220px, contenido 1700px).

---

## 4. Design tokens extraídos

### 4.1 Colores
| Token Figma | Valor | Uso |
|---|---|---|
| `Ebony` / `color/azure/4` | `#050A11` | Fondos oscuros |
| `Cloud` / `color/grey/73` | `#BCBBBA` | Acentos (botones, divisores, dots, logo) |
| `Alto` / `color/grey/88` | `#E0E0E0` | Título Sobre Nosotros, texto Servicios |
| `Emperor` / `color/grey/33` | `#555555` | Párrafos Menciones |
| `Mine Shaft` / `sidebar/foreground` | `#222222` | Títulos Menciones |
| `card` / `primary-foreground` | `#ffffff` | Blanco base |
| Blancos con opacidad | `#ffffff0d`…`#ffffffcc` (5/7/8/10/16/20/38/40/45/50/70/80%) | Textos sobre oscuro |
| Cloud con opacidad | 9.4% / 15.7% / 37.6% | Bordes, divisores |
| `azure/4 86.7/33.3/0%` | `#050a11dd/55/00` | Gradiente hero |

### 4.2 Tipografía
- **Montserrat** (Font 1): Regular 400 · Medium 500 · SemiBold 600 · Bold 700 · ExtraBold 800 · Black 900
- **Georgia** (Font 2): Bold (comilla decorativa del testimonio, 250px)

**Escala (px):** 9, 9.5, 10.5, 11, 11.5, 12, 12.5, 13.5, 15.5, 16, 22, 24, 28, 32, 60
**Line-heights (px):** 14.25, 14.63, 15.75, 15.81, 16.5, 18, 23.13, 24.03, 25, 28, 30.23, 33, 63
**Letter-spacing (px):** 0.48, 0.55, 0.6, 1.38, 1.44, 1.73, 1.76, 1.89, 1.9, 1.98, 2.2, 3.04, 5.04, 8.4

### 4.3 Radios, sombras y trazos
- **Radios:** 2px · 22px (flechas carrusel) · 24px (FAB) · 99px (dots) · pill (divisores)
- **Sombras:** `0 4px 14px rgba(188,187,186,0.27)` (botón); `0 4px 20px rgba(0,0,0,0.28), 0 2px 12px rgba(188,187,186,0.27)` (FAB)
- **Trazos:** 1px · 1.5px · 3px

---

## 5. Assets exportados

| Asset | Archivo | Formato |
|---|---|---|
| Hero background | `src/assets/photos/hero-bg.webp` | WebP (75 KB) |
| Sobre nosotros background | `src/assets/photos/sobre-nosotros-bg.webp` | WebP (42 KB) |
| Menciones ×3 | `src/assets/photos/mencion-{1,2,3}.webp` | WebP (67–83 KB) |
| Testimonios background | `src/assets/photos/testimonios-bg.webp` | WebP (63 KB) |
| Logo mark, flechas, chevrons, iconos de contacto/redes, óvalos | inline en `src/components/icons/index.tsx` | SVG |

> Las fotos se optimizaron con `scripts/optimize-assets.mjs` (sharp → WebP q82, redimensionado). El hero se carga con `eager`; el resto con `loading="lazy"`.

---

## 6. Gaps de fidelidad y decisiones

1. **Servicios sin contenido** → implementar solo lo que hay en Figma (3 textos). ✅
2. **Carrusel con 1 solo testimonio** → lógica funcional tipada para N slides. ✅
3. **CTA "Ver Proyectos"** → ancla a `#menciones`. ✅
4. **Sidebar con 4 items** (footer con 6) → se respeta cada uno en su contexto. ✅
5. **Un solo breakpoint (1920px)** → mobile-first con supuestos. ✅
6. **Fase 2 — altos de sección (decisión aprobada):** Sobre Nosotros (841), Servicios (725), Menciones (675) y Testimonios (670) tienen altura fija en Figma, pero se aplicó `min-h-svh` (igual que la Hero) para que ninguna sección muestre el borde de la siguiente hasta scrollear explícitamente. El Footer conserva su alto natural (fin de página). ✅
