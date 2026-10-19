# Arun Dharwad — Developer Portfolio

Creative animated portfolio built with React, Vite, TypeScript, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Before publishing

1. In `src/App.tsx`, replace the placeholder email `arun.dharwad@example.com`.
2. Replace the LinkedIn placeholder URL with your actual profile.
3. Update project GitHub URLs where they currently point to your profile.
4. Deploy the project demos and put their URLs in the `demo` values in the `projects` array.
5. Add your resume PDF at `public/resume.pdf`.
6. Check that every claim and education detail is accurate before publishing.

## Deploy to Netlify

This project includes `netlify.toml` with the Vite build command and publish directory.

- Build command: `npm run build`
- Publish directory: `dist`

Recommended workflow: push this project to a new GitHub repository, then import that repository into Netlify. Netlify can build and redeploy it when you push updates.

## Notes

The portfolio is a static frontend. Your local demo applications are not automatically hosted by publishing this portfolio. To provide working live demos, deploy those applications separately and update their demo links.
