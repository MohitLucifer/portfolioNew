# Mohit Kumar - 3D Portfolio

A personal 3D portfolio website built with Next.js, Tailwind CSS, Three.js and React Three Fiber. It showcases my introduction, work experience, skills, and projects, with interactive 3D scenes, animated transitions, and a light/dark theme.

## Tech Stack

- **Framework:** Next.js 13 (pages router), React 18
- **Styling:** Tailwind CSS, `next-themes` (light/dark)
- **3D / Animation:** Three.js, `@react-three/fiber`, `@react-three/drei`, `maath`, Framer Motion
- **UI extras:** `react-parallax-tilt`, `react-type-animation`, `react-vertical-timeline-component`
- **Contact form:** EmailJS (`@emailjs/browser`) with `dompurify` sanitisation

## Getting Started

Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - create an optimized production build
- `npm run start` - run the production build
- `npm run lint` - run Next.js/ESLint checks

## Environment Variables

The contact form uses [EmailJS](https://www.emailjs.com/). Copy `.env.example` to `.env.local` and fill in your values:

```bash
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_KEY=your_emailjs_public_key
```

The rest of the site works without these; only email sending requires them.

## Project Structure

- `pages/` - Next.js pages (`index.js` composes the single-page scroll, `_app.js` holds meta + theme + preloader)
- `components/` - section components (`Hero`, `About`, `Experience`, `Tech`, `Works`, `Contact`, `Navbar`, ...) and 3D wrappers
- `components/canvas/` - Three.js / R3F scenes (`Computers`, `Earth`, `Player`, `Stars`)
- `constants/index.js` - all site content (nav, services, skills, experience, projects, socials, hero text)
- `hoc/` - `SectionWrapper` higher-order component
- `utils/` - animation variants and helpers
- `public/` - static assets (`models/` 3D models, `assets/` images and icons, `document/` resume)

## Customising Content

Most content lives in [`constants/index.js`](constants/index.js). Update the arrays there to change your skills, experience, and projects. Replace images in `public/assets/` and your resume in `public/document/`.

## Credits

3D portfolio design based on the open-source [3D-Portfolio](https://github.com/Shivam-Sharma-1/3D-Portfolio) template by Shivam Sharma, customised with my own content.
