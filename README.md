# Bhopal Survival Collective

A community-driven platform dedicated to empowering sustainable development and collective action in Bhopal.

## Overview

The Bhopal Survival Collective is a digital initiative focused on:
- Building community resilience and awareness
- Promoting sustainable development practices
- Fostering collective action for social change
- Supporting local communities through shared knowledge and resources

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Routing**: TanStack Router (v1.168)
- **State Management**: TanStack Query (React Query)
- **Build Tool**: Vite 7.3
- **Styling**: Tailwind CSS 4.2
- **UI Components**: Radix UI
- **Animation**: Framer Motion
- **Backend**: TanStack Start with Cloudflare Workers
- **Database**: Cloudflare D1 (SQLite)
- **Forms**: React Hook Form with Zod validation

## Project Structure

```
src/
├── components/
│   ├── cjp/              # Project-specific components
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   └── ui/               # Reusable UI components (Radix UI based)
├── routes/               # TanStack Router routes
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and helpers
└── styles.css            # Global styles with Tailwind
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm or Bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bhopal-survival-collective/main.git
cd bhopal-survival-collective-main
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8081/`

### Building

Create a production build:
```bash
npm run build
```

Build in development mode (with source maps):
```bash
npm run build:dev
```

### Other Commands

- **Preview**: `npm run preview` - Preview production build locally
- **Lint**: `npm run lint` - Run ESLint for code quality
- **Format**: `npm run format` - Format code with Prettier

## Features

### Community Engagement
- Interactive member registration and profiles
- Community testimonials and success stories
- Event tickets and meme galleries
- Real-time quote generation and inspiration

### Information Architecture
- Educational content about CJP initiatives
- Demand documentation and tracking
- Sustainability statistics and metrics
- Visual storytelling through galleries

### User Experience
- Responsive design for all devices
- Dark/Light mode support
- Smooth animations and transitions
- Accessible component library
- Loading states and error handling

## Deployment

This project is configured to deploy on **Cloudflare Workers**.

### Deploy to Cloudflare

```bash
npm run build
wrangler deploy
```

Make sure you have `wrangler` CLI installed and configured with your Cloudflare credentials.

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
VITE_API_URL=your_api_url
```

## Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code Standards

- Use TypeScript for type safety
- Follow ESLint configuration
- Format code with Prettier before committing
- Write meaningful commit messages
- Add comments for complex logic

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, please:
- Open an issue on GitHub
- Contact: support@bhopalsurvival.org
- Visit: https://bhopalsurvival.org

## Community

Join our community:
- **Twitter**: [@BhopaliSurvival](https://twitter.com/BhopaliSurvival)
- **Discord**: [Community Server](https://discord.gg/bhopal)
- **Email**: community@bhopalsurvival.org

## Acknowledgments

- Radix UI for accessible component primitives
- TanStack team for excellent routing and state management solutions
- Tailwind CSS for utility-first styling
- Cloudflare for hosting infrastructure

---

**Made with ❤️ by the Bhopal Survival Collective Community**

**Hello**