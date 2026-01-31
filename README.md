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