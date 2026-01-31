# CSA Hub - Climate Smart Agriculture Nexus

CSA Hub is a modern, data-driven platform designed to empower farmers with climate intelligence.

## Architecture

This project is a Monorepo managed by **TurboRepo**.

- **Web App**: `apps/web` (Next.js 14)
- **Mobile App**: `apps/mobile` (Expo SDK 50)
- **Shared UI**: `packages/ui` (NativeWind + TailwindCSS)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

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

## Verification

To run TypeScript type checking across the entire monorepo:

```bash
npx turbo run check-types
```

## Features Implemented (Phase 1-4)

- **One Codebase**: Shared UI components (`Button`, `Card`, `Typography`, `WeatherCard`) work on both Web and Mobile.
- **Landing Page**: Responsive web landing page.
- **Onboarding**: Interactive mobile onboarding flow.
- **Dashboard**: Unified dashboard with Weather, News, and Quick Stats.
- **Knowledge Hub**: Agricultural tips and guides.
- **Personalization**: Role switching (Farmer, Extension Officer, etc.) dynamically updates the UI.

## License

Private Project Nexus.