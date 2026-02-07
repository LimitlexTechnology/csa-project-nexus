# CSA Hub - Climate Smart Agriculture Nexus

CSA Hub is a modern, data-driven platform designed to empower farmers with climate intelligence.

Live (Firebase Hosting): https://csa-app-4c6c6.web.app

## Architecture

This project is a Monorepo managed by **TurboRepo**.

- **Web App**: `apps/web` (Next.js 14)
- **Mobile App**: `apps/mobile` (Expo SDK 50)
- **Shared UI**: `packages/ui` (NativeWind + TailwindCSS)

## Getting Started

### Prerequisites

- Node.js 18+
- npm
 - Firebase CLI (for deploy): `npm install -g firebase-tools`

### Installation

```bash
npm install
```

### Running the Apps

To run both Web and Mobile simultaneously:

```bash
npm run dev
```

#### Run Specific Apps

- **Web Only**:
  ```bash
  npm run dev --filter=@repo/web
  ```
  Open [http://localhost:3000](http://localhost:3000)

- **Mobile Only**:
  ```bash
  npm run dev --filter=@repo/mobile
  ```
  Press `w` for Web preview, `a` for Android Emulator, or `i` for iOS Simulator.

### Live Demo

Visit the deployed web app at [https://csa-app-4c6c6.web.app](https://csa-app-4c6c6.web.app) or the Vercel mirror at [https://csa-project-nexus-web.vercel.app/](https://csa-project-nexus-web.vercel.app/)

## Environment Variables (Web)

Create `apps/web/.env.local` and set:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=csa-app-4c6c6
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

## Authentication Guard

- Protected pages are wrapped by `AuthGuard` to require sign-in (email/password via Firebase Auth).
- After login, users are redirected to their role dashboard.

## Internationalization

- Lightweight i18n provider at `apps/web/src/lib/i18n.tsx`
- Translations at `apps/web/src/i18n/translations/{en,fr,tw,ga,ee}.json`
- Usage:
  ```tsx
  import { useI18n } from '../lib/i18n';
  const { t } = useI18n();
  <span>{t('dashboard.title')}</span>
  ```
- Language selection page persists choice to `localStorage` and applies globally.

## Firebase Storage Upload

- Auth-protected upload page at `/storage-upload`
- Select a file and folder, upload with progress, then copy the download URL
- Storage initialized in `apps/web/src/lib/firebase.ts`

## Verification

To run TypeScript type checking across the entire monorepo:

```bash
npx turbo run check-types
```

## Deployments

### Firebase Hosting (apps/web)

Repo config:
- `.firebaserc` maps to project
- `firebase.json` hosting site: `csa-app-4c6c6`, source: `apps/web`

Deploy steps:
```bash
firebase login --no-localhost
firebase use csa-app-4c6c6
firebase experiments:enable webframeworks
firebase deploy --only hosting:csa-app-4c6c6
```

Notes:
- Dynamic routes `/news/[id]` and `/knowledge-hub/[id]` are statically generated (no Cloud Functions required).
- Live URL after deploy: https://csa-app-4c6c6.web.app

### Vercel (optional)

- Root directory should be `apps/web` (monorepo)
- Set environment variables in Vercel project (same keys as `.env.local`)
- Repo includes `vercel.json` to help route/build monorepo.
- CI workflows for Firebase Hosting preview and deploy are in `.github/workflows/firebase-hosting.yml` (requires `FIREBASE_TOKEN` secret).

## Features Implemented (Phase 1-4)

- **One Codebase**: Shared UI components (`Button`, `Card`, `Typography`, `WeatherCard`) work on both Web and Mobile.
- **Landing Page**: Responsive web landing page.
- **Onboarding**: Interactive mobile onboarding flow.
- **Dashboard**: Unified dashboard with Weather, News, and Quick Stats.
- **Knowledge Hub**: Agricultural tips and guides.
- **Personalization**: Role switching (Farmer, Extension Officer, etc.) dynamically updates the UI.
- **I18n**: English, French, Twi, Ga, and Ewe strings across key pages.
- **Storage**: Simple file uploads to Firebase Storage with progress and URL.
- **Hosting**: Deployed to Firebase Hosting
- **Logo**: Aspect ratio preserved and sizing controlled via `size` prop.

## Technical Journey & Challenges

### The Vision
Project Nexus was born from a need to bridge the gap between high-level climate data and the daily reality of smallholder farmers. Our goal was to create a "Single Source of Truth" for agricultural intelligence that is as intuitive as a social media app but as robust as a scientific tool.

### Key Challenges Overcome
1.  **Monorepo Synchronization**: Implementing a shared UI package (`packages/ui`) that works seamlessly across both Next.js (Web) and React Native (Mobile) using **NativeWind**. This required careful configuration of Tailwind and PostCSS.
2.  **State Management & Persistence**: Building a robust onboarding flow that persists user preferences (Language, Role) across sessions using local storage and optimized React hooks.
3.  **Visual Branding & Clarity**: Iterating on the UI to move from generic placeholders to high-impact, contextual imagery that accurately depicts climate challenges and farming solutions.
4.  **Version Control at Scale**: Managing complex merge conflicts arising from build artifacts and multiple feature branches, ultimately resulting in a cleaner, more professional Git history.

### Future Roadmap
- Integration of real-time IoT sensors for soil moisture.
- Offline-first capabilities for the mobile application.
- Multilingual AI voice support for non-literate farmers.

## License

Private Project Nexus.
