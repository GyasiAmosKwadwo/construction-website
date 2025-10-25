# Construction Website

A modern, responsive website for a construction company, built with React and Node.js. It showcases services, projects, team, and contact information, with a clean design using Tailwind CSS. The site includes a frontend client, backend server with API routes, and database schema management.

## Features
- Hero section with construction imagery
- Services overview (e.g., residential, commercial, renovations)
- Projects gallery with images
- About and team sections
- Contact form
- Theme toggle (light/dark mode)
- Responsive design for mobile and desktop
- Backend API for contact submissions and data handling

## Tech Stack
- **Frontend**: React, TypeScript, Vite (build tool), Tailwind CSS, shadcn/ui components
- **Backend**: Node.js, TypeScript, Express-like routing
- **Database**: Drizzle ORM (schema in `shared/schema.ts`)
- **Styling**: Tailwind CSS, PostCSS
- **Deployment**: Vercel (config in `vercel.json`)
- **Other**: Query client (TanStack Query), Toast notifications

## Project Structure
```
construction-website/
├── api/                 # API routes (e.g., contact.ts)
├── attached_assets/     # Generated images (projects, logo, etc.)
├── client/              # Frontend (React app)
│   ├── src/
│   │   ├── components/  # UI components (Header, Hero, Services, etc.)
│   │   ├── hooks/       # Custom hooks (e.g., use-mobile, use-toast)
│   │   ├── lib/         # Utilities (queryClient, utils)
│   │   └── pages/       # Page components (not-found)
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
├── server/              # Backend (Node.js)
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/              # Shared code (schema.ts for DB)
├── .gitignore
├── package.json         # Root dependencies (if monorepo)
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── README.md
```

## Prerequisites
- Node.js (v18+)
- npm or yarn
- (Optional) Database setup (e.g., PostgreSQL for Drizzle)

## Setup
1. Clone the repository:
   ```
   git clone <repo-url>
   cd construction-website
   ```

2. Install dependencies:
   - For client:
     ```
     cd client
     npm install
     cd ..
     ```
   - For server (if separate):
     ```
     cd server
     npm install
     cd ..
     ```
   - Root (if monorepo):
     ```
     npm install
     ```

3. Environment setup:
   - Copy `.env.example` to `.env` (create if needed) and add your variables (e.g., DB_URL for Drizzle).

4. Database setup (if using Drizzle):
   ```
   npx drizzle-kit generate
   npx drizzle-kit push  # or migrate
   ```

## Running the Project
- **Development**:
  - Client (frontend):
    ```
    cd client
    npm run dev
    ```
    Opens at `http://localhost:5173` (Vite default).

  - Server (backend):
    ```
    cd server
    npm run dev
    ```
    Runs on `http://localhost:3000` (adjust port if needed).

- **Build for Production**:
  - Client:
    ```
    cd client
    npm run build
    ```
    Output in `dist/`; serve with a static server.

  - Full build (if monorepo):
    ```
    npm run build
    ```

## Deployment
- **Vercel** (recommended for full-stack):
  1. Install Vercel CLI: `npm i -g vercel`
  2. Run `vercel` in root and follow prompts.
  3. Config uses `vercel.json` for routing (client to `/`, API to `/api/*`).

- **Other**: Deploy client to Netlify/Vercel static, server to Heroku/Railway.

## Scripts
- `npm run dev` (client/server as above)
- `npm run build`
- `npm run lint` (if ESLint configured)
- `npm run preview` (Vite preview build)

## Contributing
1. Fork the repo.
2. Create a feature branch.
3. Commit changes.
4. Push and open a PR.

## License
MIT License - feel free to use and modify.

## Contact
For issues, open a GitHub issue. Built for showcasing construction services.

---

*Generated images in `attached_assets/generated_images/` are placeholders for real project photos.*
