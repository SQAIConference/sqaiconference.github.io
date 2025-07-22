# SQAI Website – React + TypeScript + Vite

This repository contains the source code for the Symposium on Quantum AI (SQAI) website, built with React, TypeScript, and Vite.  
It is a migration from the original Jekyll/Markdown-based site to a modern React SPA.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/QuantumIntelligenceSociety/QuantumIntelligenceSociety.github.io.git
   cd QuantumIntelligenceSociety.github.io
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Development Server

Start the local development server with hot reloading:

```sh
npm run dev
# or
yarn dev
```

- The site will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Building for Production

To create a production build:

```sh
npm run build
# or
yarn build
```

- The output will be in the `dist/` directory.

### Previewing the Production Build

To locally preview the production build:

```sh
npm run preview
# or
yarn preview
```

### Linting

To check code quality with ESLint:

```sh
npm run lint
# or
yarn lint
```

## Project Structure

- `src/` – React source code (pages, components, styles)
- `public/` – Static assets (images, files, etc.)
- `package.json` – Project dependencies and scripts

## Deployment

This project is designed for static hosting (e.g., GitHub Pages, Netlify, Vercel).  
After building, deploy the contents of the `dist/` folder.

## Additional Notes

- All images and downloadable files should be placed in the `public/` directory.
- For any issues or questions, please open an issue or contact info@sqai.org.

---
```
