# VSD Son's Realty

Static, responsive company website built with React, TypeScript, Vite, Tailwind CSS and React Router.

## Local development

```sh
cd frontend
npm install
npm run dev
```

Create and preview a production build with `npm run build` and `npm run preview` from `frontend/`. The deployable files are written to `frontend/dist/`.

## Deployment

Deploy the contents of `frontend/dist/` to a static host. Configure that host to serve `index.html` for unknown paths so React Router routes such as `/projects/residential-home` work on direct visits. The included `frontend/public/_redirects` file provides this fallback on Netlify.

## Before launch

- The original company logo is `frontend/public/vsd-logo.jpeg` and is used without modification.
- Project names, descriptions and Unsplash photography are illustrative placeholders. Replace them with approved VSD project details and licensed images in `frontend/src/data/projects.ts`.
- Copy `frontend/.env.example` to `frontend/.env.local` and set verified phone, WhatsApp and Google Maps embed details. Empty phone values keep call/message links disabled.
- The contact form is a front-end demo and does not send or store messages. Connect a form provider before collecting enquiries; no backend or database is included.