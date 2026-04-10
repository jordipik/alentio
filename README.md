# ALENTIO Landing

Landing page premium y responsive para ALENTIO, creada con Next.js, Tailwind CSS y Framer Motion.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- Framer Motion

## Arranque rápido

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en desarrollo:

```bash
npm run dev
```

3. Abrir en navegador:

```text
http://localhost:3000
```

## Build de producción

```bash
npm run build
npm run start
```

## Logo

Para usar el logo corporativo real, coloca el archivo en:

```text
public/logo-alentio.png
```

La landing incluye un fallback visual si el archivo todavía no está disponible.

## Estructura principal

- `src/components/landing`: componentes visuales de la landing
- `src/lib/translations.ts`: textos en ES, CA y EN
- `src/app/page.tsx`: punto de entrada principal
