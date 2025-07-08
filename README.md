# LevelUp Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🌐 Bilingual support (Hebrew/English)
- ♿ Accessibility features
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 📧 Contact form with email integration
- 🚀 Optimized for performance

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project can be deployed to any static hosting service like:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- AWS S3

Simply upload the contents of the `dist` directory after building.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)
- Formspree (for contact form)

## Project Structure

```
src/
├── components/          # React components
├── contexts/           # React contexts (Language, Accessibility)
├── data/              # Static data (projects, etc.)
├── types/             # TypeScript type definitions
├── index.css          # Global styles
└── main.tsx           # Application entry point
```

## Contact Form

The contact form uses Formspree for email handling. Make sure to update the form endpoint in `ContactSection.tsx` if needed.

## License

This project is private and proprietary.