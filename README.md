# Next.js Base Template

A professional Next.js 14 base template with TypeScript, TailwindCSS, and Shadcn/UI.

Repository: [https://github.com/mtatkinson/base-template-web](https://github.com/mtatkinson/base-template-web)

## Quick Start with Cursor

Clone and run the project in one command:
```bash
git clone https://github.com/mtatkinson/base-template-web.git && cd base-template-web && npm install && npm run dev
```

## Features

- ⚡️ Next.js 14 with App Router
- 🎨 TailwindCSS for styling
- 🎯 TypeScript for type safety
- 🎪 Shadcn/UI components
- 🌓 Dark mode support
- 📱 Responsive layouts
- ♿️ Accessibility features
- 🚀 Best practices and optimizations

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/mtatkinson/base-template-web.git
cd base-template-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── common/           # Common components
│   └── layouts/          # Layout components
├── lib/                  # Utilities
│   ├── utils.ts          # Helper functions
│   ├── hooks.ts          # Custom hooks
│   └── api.ts            # API utilities
└── types/                # TypeScript types
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
