# SQAI - Symposium on Quantum AI

[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.0+-blue.svg)](https://mui.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)

The official website for the International Symposium on Quantum Artificial Intelligence (SQAI), built with React, TypeScript, Material-UI, and Docker.

## 🚀 Features

- **Modern Stack**: React 19 + TypeScript + Material-UI v5
- **Responsive Design**: Mobile-first approach with Material-UI components
- **Docker Ready**: Multi-stage Docker build for production deployment
- **Best Practices**: ESLint, TypeScript strict mode, component-based architecture
- **Route Preservation**: All original Jekyll routes maintained for SEO continuity

## 🏗️ Architecture

The application is built with:

- **React 19** with TypeScript for type safety
- **Material-UI v5** for responsive, accessible components
- **React Router** for client-side routing
- **Vite** for fast development and optimized builds
- **Docker** for containerized deployment with Nginx

## 📱 Pages

- **Home** (`/`) - Conference overview and event schedule
- **Call for Papers** (`/cfp/`) - Submission guidelines and deadlines
- **Committees** (`/committees/`) - Organizing committee information
- **Program** (`/program/`) - Conference schedule and sessions
- **Registration** (`/registration/`) - Registration types and pricing
- **Sponsors** (`/sponsors/`) - Sponsorship information and partners
- **Past Conferences** (`/past/`) - Previous SQAI events

## 🛠️ Development

### Prerequisites

- Node.js 20+ 
- npm or yarn
- Docker (optional)

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

### Development with Docker

```bash
# Start development environment
npm run docker:dev

# Or use docker-compose directly
docker-compose up sqai-dev
```

## 🐳 Production Deployment

### Docker Build

```bash
# Build Docker image
npm run docker:build

# Run production container
npm run docker:run

# Or use docker-compose
docker-compose up sqai-website
```

### Manual Build

```bash
# Build static files
npm run build

# Files will be generated in ./dist/
# Serve with any static file server
```

## 🗂️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.tsx      # Main navigation component
├── pages/              # Page components
│   ├── Home.tsx        # Home page with event schedule
│   ├── CallForPapers.tsx
│   ├── Committees.tsx
│   ├── Program.tsx
│   ├── Registration.tsx
│   ├── Sponsors.tsx
│   └── PastConferences.tsx
├── data/               # Static data and configuration
│   ├── navigation.ts   # Navigation menu items
│   └── siteConfig.ts   # Site configuration
└── App.tsx             # Main application component
```

## 🔧 Configuration

### Site Configuration

Edit `src/data/siteConfig.ts` to update:
- Site title and description
- Contact information
- Social media links
- Theme colors

### Navigation

Modify `src/data/navigation.ts` to update the main navigation menu.

## 📊 Material-UI Theme

The application uses a custom Material-UI theme with:
- Primary color: `#0366d6` (GitHub blue)
- Secondary color: `#f8f9fa` (Light gray)
- Responsive typography
- Custom component styling

## 🔒 Security & Performance

- **Security Headers**: CSP, XSS protection, frame options
- **Gzip Compression**: Enabled for all text assets
- **Asset Caching**: Long-term caching for static assets
- **Bundle Optimization**: Tree-shaking and code splitting

## 📈 SEO & Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly
- **Meta Tags**: Comprehensive metadata
- **Route Preservation**: Original URLs maintained

## 🚢 Deployment

The application is designed for deployment on:
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **Container Platforms**: Docker, Kubernetes
- **CDN**: CloudFlare, AWS CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📝 Migration Notes

This project migrates from Jekyll to React while preserving:
- ✅ All original routes and URLs
- ✅ Content structure and organization  
- ✅ Responsive design principles
- ✅ SEO-friendly markup
- ✅ Conference branding and styling

## 📄 License

MIT License - see LICENSE file for details.

## 🎯 Conference Information

**SQAI 2026 - 3rd International Symposium on Quantum Artificial Intelligence**
- 📅 June 26-28, 2026
- 📍 Taipei, Taiwan & Washington, D.C.
- 🌐 Virtual participation available
- 📧 Contact: info@sqai.org

---

Built with ❤️ for the quantum AI community.