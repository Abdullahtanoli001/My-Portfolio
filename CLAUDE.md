# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development commands

- Install dependencies: `npm install`
- Start the dev server: `npm run dev`
- Build for production: `npm run build`
- Start the production server: `npm run start`
- Run lint: `npm run lint`
- Run the full test suite: `npm test`
- Run Jest in watch mode: `npm run test:watch`
- Run test coverage: `npm run test:coverage`
- Run Prettier check: `npm run format:check`
- Fix formatting: `npm run format:fix`
- Generate sitemap/robots manually: `npm run sitemap`
- Run bundle analysis build: `npm run analyze`
- Run TypeScript without emitting: `npx tsc --noEmit`

### Single-test commands

- Run one test file: `npm test -- src/components/chat/__tests__/navigation-indicator.test.tsx`
- Run tests matching a name: `npm test -- -t "tool execution"`

## Environment and build notes

- Copy `.env.example` to `.env.local` for local development.
- The AI chat API expects `LLM_API_KEY`; `LLM_BASE_URL` is optional for OpenAI-compatible providers.
- Contact form email delivery uses `NODEMAILER_USER` and `NODEMAILER_PASS`.
- `npm run build` automatically triggers `postbuild`, which runs `npm run sitemap`.
- `next.config.js` sets `eslint.ignoreDuringBuilds = true`, so a successful production build does not guarantee lint is clean.
- `BUILD_STANDALONE=true` enables Next.js standalone output.
- `ANALYZE=true` enables the bundle analyzer.

## High-level architecture

This is a **Next.js 15 Pages Router** portfolio site with a strong emphasis on animation, SEO, and an AI-driven chat assistant that can trigger structured UI actions on the site.

### App shell and routing

- `src/pages/_app.tsx` is the main composition root.
  - Wraps the app in `AnimationGateProvider`, `ChatProvider`, and `ThemeProvider`.
  - Configures `DefaultSeo` from `src/data/siteMetaData.mjs`.
  - Mounts global route-transition motion and Vercel Analytics.
- `src/layout/main-layout.tsx` provides the shared shell: welcome overlay, navbar, footer, skip link, and floating chat button.
- Routes use the **Pages Router** under `src/pages/`, including API routes in `src/pages/api/`.

### AI chat and tool-action system

The most important non-standard architecture in this repo is the chat/tool pipeline.

- `src/pages/api/chat.ts` handles chat requests.
  - Builds a typed `ToolContext` from route/theme/user state.
  - Initializes the tool registry.
  - Calls the LLM through the `openai` SDK using `LLM_API_KEY` and optional `LLM_BASE_URL`.
  - Executes returned tool calls and then performs a follow-up model call so the assistant can respond naturally after tool execution.
  - Applies rate limiting before model execution.
- `src/types/tools.ts` defines the core contracts: `ToolContext`, `ToolAction`, `ToolResult`, `ToolCall`, and tool execution config/stats.
- `src/lib/tools/` contains the tool implementations and registry logic.
- `src/lib/tools/context-aware-tool-registry` is responsible for contextual tool availability and page detection.
- `src/components/chat/` contains the floating assistant UI, action indicators, feedback panels, and related chat interaction components.
- `src/config/ai.ts` contains model/system prompt configuration.
- `src/utility/ai-chat-responses.ts` contains fallback/response helpers referenced by the README and chat flow.

When extending chat behavior, preserve the typed action pipeline rather than adding ad hoc UI-side behavior.

### State, theming, and animation

- Theme switching is handled by `next-themes` with `attribute="class"`.
- Global styling lives in `src/styles/globals.css` and is based on Tailwind + CSS custom properties.
- Tailwind configuration lives in `tailwind.config.js`.
- Framer Motion is the primary animation system across page transitions, reveals, overlays, and chat interactions.
- Shared animation primitives live in `src/animation/`.
- `src/contexts/animation-gate.tsx` coordinates when animations should run during route transitions and welcome-screen flow.

### Content and data model

- Site content is largely **data-driven** through `src/data/` rather than hard-coded in page JSX.
- `src/data/siteMetaData.mjs` is the source of truth for site URL, SEO metadata, social links, and verification tags.
- Navigation structure is sourced from `src/data/navigationRoutes`.
- Projects, experience, skills, and similar portfolio content are organized as source data and rendered by components.

### SEO and generated artifacts

- SEO defaults are configured in `_app.tsx` via `next-seo` and `src/data/siteMetaData.mjs`.
- `src/scripts/generateSitemap.mjs` generates `sitemap.xml` and `robots.txt`.
- SEO generation is part of the normal production build through `postbuild`.

### API routes and backend behavior

- `src/pages/api/chat.ts` powers the AI assistant.
- `src/pages/api/sendmail.ts` handles contact-form email delivery.
- `src/utility/rate-limiter.ts` provides the in-memory/LRU-based rate limiter used by API routes.

### Testing setup

- Jest is configured through `jest.config.js` using `next/jest`.
- Tests run in `jest-environment-jsdom`.
- `jest.setup.js` loads `@testing-library/jest-dom`.
- The repo primarily uses **Jest + React Testing Library** for component and chat interaction tests.
- Tests are colocated using `__tests__` directories and `*.test.*` / `*.spec.*` naming.

## Repo-specific guidance for future Claude sessions

- Preserve the existing **typed tool/action architecture** when modifying the AI assistant.
- Prefer updating data in `src/data/` and config files over hard-coding portfolio content in components.
- Keep animation changes aligned with the existing Framer Motion + animation-gate structure instead of introducing parallel animation systems.
- If you change SEO-relevant routes or metadata, check whether sitemap generation or metadata files also need updates.
- When working on deployment or production behavior, remember that the GitHub workflow deploys to Vercel and the app is configured with Vercel-oriented assumptions.
- If you need a clean typecheck, run `npx tsc --noEmit` explicitly; the normal build path does not enforce lint cleanliness.
