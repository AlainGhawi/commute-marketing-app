# 🚗 Commute — Corporate Carpooling Platform

> *The corporate commute, reimagined.*

Commute is a B2B corporate carpooling platform that enables employees from the same company to share rides to and from work. The company is the customer; employees are the users.

---

## Table of Contents

- [Product Vision](#product-vision)
- [Product Roadmap](#product-roadmap)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development with Claude Code](#development-with-claude-code)
- [Angular MCP Server Setup](#angular-mcp-server-setup)
- [Recommended MCP Servers](#recommended-mcp-servers)
- [Architecture Decisions](#architecture-decisions)
- [API Contract & Mock Layer](#api-contract--mock-layer)
- [PWA Configuration](#pwa-configuration)
- [Coding Conventions](#coding-conventions)
- [Useful Commands](#useful-commands)

---

## Product Vision

Commute solves five pain points for companies with physical offices:

| Problem | How Commute Solves It |
|---|---|
| **Traffic congestion** | Fewer cars on the road = shorter commutes |
| **Parking costs** ($2,400–$6,000/spot/year) | Reduce demand by 30–40% |
| **ESG / Scope 3 compliance** | Automated Category 7 emissions reporting |
| **Team cohesion** | Organic bonding during shared commutes |
| **Corporate event safety** | Designated driver coordination |

---

## Product Roadmap

### Phase 1 — MVP Core (Months 1–4) `🔨 WE ARE HERE`

| Feature | Priority | Status |
|---|---|---|
| Employee onboarding & profile setup | P0 | 🔲 Not started |
| Home zone selection (privacy-safe, no exact address) | P0 | 🔲 Not started |
| Commute preferences (days, time windows, role: driver/rider/both) | P0 | 🔲 Not started |
| Next-day batch ride matching | P0 | 🔲 Not started |
| Ride confirmation / cancellation flow | P0 | 🔲 Not started |
| Real-time notifications (SignalR) | P0 | 🔲 Not started |
| Basic company admin dashboard | P1 | 🔲 Not started |
| Ride history & stats | P1 | 🔲 Not started |
| PWA with push notifications | P0 | 🔲 Not started |
| SSO / OIDC authentication (Microsoft Entra ID) | P0 | 🔲 Not started |

### Phase 2 — ESG & Events (Months 4–8)

| Feature | Priority | Status |
|---|---|---|
| ESG reporting dashboard (CO2 avoided, rides, distance) | P0 | 🔲 Planned |
| Scope 3 Category 7 audit-ready report export (PDF/CSV) | P1 | 🔲 Planned |
| Designated driver module for corporate events | P0 | 🔲 Planned |
| Event creation & DD volunteer sign-up | P1 | 🔲 Planned |
| Microsoft Teams integration | P1 | 🔲 Planned |
| Slack integration | P2 | 🔲 Planned |
| Gamification (points, streaks, leaderboards) | P2 | 🔲 Planned |

### Phase 3 — Enterprise Scale (Months 8–12)

| Feature | Priority | Status |
|---|---|---|
| Multi-location / multi-campus support | P0 | 🔲 Planned |
| HRIS integration (Workday, BambooHR, ADP) | P1 | 🔲 Planned |
| Advanced analytics & benchmarking dashboard | P1 | 🔲 Planned |
| Google Calendar / Outlook integration | P2 | 🔲 Planned |
| Ride payment / subsidy management | P2 | 🔲 Planned |
| White-label theming per company | P2 | 🔲 Planned |
| Native mobile apps (iOS + Android) | P2 | 🔲 Planned |

### Phase 4 — Platform (Year 2+)

| Feature | Priority | Status |
|---|---|---|
| Inter-company carpooling (shared office parks) | P2 | 🔲 Future |
| Multimodal: carpool + transit last-mile | P2 | 🔲 Future |
| ESG API for third-party platforms (Watershed, Persefoni) | P1 | 🔲 Future |
| AI-powered matching optimization | P2 | 🔲 Future |

---

## Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Frontend** | Angular 21 (standalone, signals) | Modern, scalable, great PWA support |
| **UI Library** | Angular Material | Maintained by Angular team, accessible |
| **State** | NgRx SignalStore (or services + signals for simple state) | Lightweight, signal-native |
| **Backend** (future) | .NET 10 (modular monolith) | Enterprise-grade, pairs with Angular |
| **Database** (future) | PostgreSQL + PostGIS | Geospatial queries for route matching |
| **Real-time** (future) | SignalR | Native .NET WebSockets |
| **Auth** (future) | Microsoft Entra ID / OIDC | Enterprise SSO, multi-tenant |
| **Maps** | Google Maps API or Mapbox | Geocoding, routing, display |
| **Hosting** | Azure Static Web Apps (frontend) | CDN-served, auto-deploy from GitHub |

---

## Project Structure

```
commute/
├── src/
│   ├── app/
│   │   ├── core/                    # Singleton services, guards, interceptors
│   │   │   ├── auth/                # Auth service, guards, OIDC config
│   │   │   ├── api/                 # HttpClient wrapper, base API service
│   │   │   ├── interceptors/        # Auth token, tenant header, error handling
│   │   │   └── services/            # App-wide services (notification, theme)
│   │   ├── shared/                  # Reusable components, pipes, directives
│   │   │   ├── components/          # Button, card, map, avatar, etc.
│   │   │   ├── pipes/               # Date formatting, distance, etc.
│   │   │   └── directives/          # Common directives
│   │   ├── features/                # Lazy-loaded feature modules
│   │   │   ├── onboarding/          # Profile setup, home zone picker
│   │   │   ├── rides/               # Matching, confirmation, history
│   │   │   │   ├── components/
│   │   │   │   ├── services/
│   │   │   │   └── rides.routes.ts
│   │   │   ├── dashboard/           # Company admin: metrics, adoption
│   │   │   ├── events/              # Corporate events, DD coordination
│   │   │   └── profile/             # User settings, preferences
│   │   ├── models/                  # TypeScript interfaces (API contracts)
│   │   │   ├── user.model.ts
│   │   │   ├── ride.model.ts
│   │   │   ├── match.model.ts
│   │   │   └── event.model.ts
│   │   ├── mock/                    # Mock data & interceptors for dev
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.ts           # → localhost:5000 (dev)
│   │   └── environment.prod.ts      # → api.commute.app (prod)
│   ├── styles/                      # Global SCSS/CSS, theme variables
│   ├── manifest.webmanifest         # PWA manifest
│   └── index.html
├── .vscode/
│   └── mcp.json                     # Angular MCP server config
├── .claude/
│   └── commands/                    # Custom Claude Code slash commands
│       ├── new-feature.md
│       └── review-component.md
├── CLAUDE.md                        # Claude Code project memory
├── angular.json
├── package.json
├── tsconfig.json
└── README.md                        # ← You are here
```

---

## Getting Started

### Prerequisites

- Node.js 22+
- npm 11+
- Angular CLI 21+: `npm install -g @angular/cli`

### Install & Run

```bash
# Clone the repo
git clone https://github.com/your-org/commute.git
cd commute

# Install dependencies
npm install

# Start dev server
ng serve

# App runs at http://localhost:4200
```

### Build for Production

```bash
ng build --configuration production

# Output: dist/commute/browser/
# Deploy these static files to your CDN / Azure Static Web Apps
```

### Run Tests

```bash
# Unit tests
ng test

# Unit tests (single run, CI mode)
ng test --no-watch --code-coverage

# Lint
ng lint
```


## Contributing

1. Create a feature branch: `git checkout -b feature/ride-matching-ui`
2. Follow the conventions in this README
3. Ensure `ng build` and `ng test` pass
4. Open a PR with a clear description of changes

---

## License

Proprietary — All rights reserved.

---

*Built with conviction. Drive together.* 🚗💚