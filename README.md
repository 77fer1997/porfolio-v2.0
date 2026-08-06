# KUROKI Landing

Landing corporativa para KUROKI construida con Astro, Tailwind CSS 4 y una arquitectura modular por slices.

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds production site to `./dist/` |
| `npm run preview` | Previews the build locally |
| `npm run astro -- --help` | Shows Astro CLI help |

## Estructura

```text
src/
  features/landing/
  shared/config/
  shared/seo/
  shared/ui/
  content/projects/
  layouts/
  pages/
```

## Contenido que debe reemplazarse antes de produccion

Antes de un despliegue real, revisar y reemplazar o eliminar todo registro con `isDemo: true` o `isPlaceholder: true`.

- Dominio, logo oficial, imagen Open Graph y `site` de Astro: `src/shared/config/site.config.ts`, `astro.config.mjs`, `public/og-kuroki.svg`.
- Correo, WhatsApp, LinkedIn y endpoint de formulario: `src/shared/config/contact.config.ts`.
- Integrantes del equipo, roles y biografias: `src/features/landing/about/team.data.ts`.
- Fotografias y avatares provisionales: `public/images/team/`.
- Proyectos destacados provisionales: `src/features/landing/projects/projects.data.ts`.
- Casos de proyecto y metadatos SEO: `src/content/projects/`.
- Capturas y mockups provisionales: `public/images/projects/`.
- Enlaces de navegacion y footer: `src/features/landing/header/navigation.data.ts`, `src/features/landing/footer/footer.data.ts`.
- Datos estructurados: `src/shared/seo/structured-data.ts`.
- Configuracion del formulario: `src/features/landing/contact/ContactSection.astro` y `src/shared/config/contact.config.ts`.
