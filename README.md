# Landing Page Project

A modern, responsive landing page built with React, React Router, and Tailwind CSS. This project features multi-language support (English, German, and Turkish), animated components using GSAP, and multiple page routes.

## Features

- 🌐 Multi-language support (English, German, Turkish)
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ✨ Animations powered by GSAP
- 🧭 Client-side routing with React Router
- 📄 Legal pages (Terms of Service, Privacy Policy, Cookies)

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nextgoatapp/nextgoatapp-wfe.git
   cd landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at `http://localhost:5173/` (or another port if 5173 is in use).

## Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

This will generate optimized production files in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
landing-page/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── ...
│   ├── context/        # React contexts
│   │   └── LanguageContext.jsx
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Entry point
├── .eslintrc.js        # ESLint configuration
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## Language Support

The application supports three languages:
- English (default): `/` routes
- German: `/de` routes
- Turkish: `/tr` routes

The language can be changed using the language selector in the navigation bar.

## Available Pages

- Home (`/`)
- About Us (`/about-us`)
- Forgot Password (`/forgot-password`)
- Terms of Service (`/terms-of-service`)
- Privacy Policy (`/privacy-policy`)
- Cookies (`/cookies`)

Each page is available in all supported languages.

## Technologies Used

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/)
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Linting

To run the linter:

```bash
npm run lint
# or
yarn lint
```

## License

[Add your license information here]

## Contact

[Add your contact information here]
