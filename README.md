# TraveLens

TraveLens es una aplicación web interactiva que te permite buscar destinos populares usando una arquitectura moderna basada en Next.js. Simula la generación de itinerarios de viaje potenciados por IA, presentándolos en una interfaz fluida e intuitiva con efectos "glassmorphism".

## Requisitos y Tecnologías Usadas
- **Next.js 14+** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS v4**
- **Shadcn UI** (Componentes de Accesibilidad Radix UI)
- **Vitest** + **Testing Library** + **jsdom** (QA y Pruebas Unitarias)
- **Unsplash API** (Imágenes remotas placeholder)

## Instrucciones de Instalación
1. Clona el repositorio e instala las dependencias:
```bash
npm install
```

## Instrucciones de Ejecución
Para arrancar el servidor de desarrollo en http://localhost:3000:
```bash
npm run dev
```

## Pruebas (Test)
Se han integrado configuraciones para ejecutar pruebas automatizadas verificando:
- *HomePage*: Renderizado y layout principales.
- *SearchBar*: Integración con actualización de parámetros URL en Next.js (`useSearchParams`).
- *Itinerary*: Interacción de la tarjeta Destino con el Modal (Sidebar) interactivo AI.

Para correr las suites de test, ejecuta:
```bash
npm run test
```

## Estructura
- `src/app/`: Página principal (App Router).
- `src/components/`: Componentes reutilizables (Masonry Grid, Cards, Modals).
- `src/lib/` y `src/services/`: Capa de datos simuladores de IA.
- `src/__tests__/`: Archivos de testing e integración para Vitest.

---
*Desarrollado en AI-Driven SDLC usando Role-based Prompts.*
