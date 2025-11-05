# RailHubDev - Railway Development Solutions

> Professional railway development website built with Next.js 16, TypeScript, and TailwindCSS

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com)

## ✨ Features

- 🎨 **Modern SaaS UI** - Clean, professional design with blue-gray color palette
- 🌓 **Dark Mode** - Full dark mode support with localStorage persistence
- 📱 **Responsive** - Mobile-first design (phone, tablet, desktop)
- ⚡ **Performance** - React 19 with React Compiler enabled
- 🎯 **Redux Toolkit** - Centralized state management
- 🧩 **Component Library** - Reusable UI components (Button, Card, Container)
- ✅ **Production Ready** - Zero linter errors, successful build

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, stats, features |
| `/about` | Company mission, vision, and story |
| `/expertise` | Service areas and capabilities |
| `/projects` | Completed and ongoing projects |
| `/stories` | Blog/insights section |

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with Navbar
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   ├── expertise/page.tsx   # Expertise page
│   ├── projects/page.tsx    # Projects page
│   └── stories/page.tsx     # Stories page
├── components/
│   ├── layout/
│   │   └── Navbar.tsx       # Navigation with theme toggle
│   ├── providers/
│   │   └── Providers.tsx    # Redux provider
│   └── ui/
│       ├── Button.tsx       # Button component
│       ├── Card.tsx         # Card container
│       └── Container.tsx    # Max-width container
├── redux/
│   └── appSlice.ts          # App state slice
└── lib/
    ├── store.ts             # Redux store config
    └── utils.ts             # Utility functions (cn)
```

## 🎨 Design System

### Colors
- **Primary**: #005BAA (TCDD Blue)
- **Gray Scale**: 50-950
- **Dark Mode**: Full support with `dark:` classes

### Typography
- **Font**: Inter
- **Headings**: Bold, tracking-tight
- **Body**: text-base

### Spacing
- **Scale**: 8px grid (0, 8px, 16px, 24px, 32px, 40px, 48px)
- **Max Width**: 1280px (max-w-7xl)

## 🧩 Components

### Button
```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="md">
  Click Me
</Button>

// Variants: primary, secondary, outline, ghost
// Sizes: sm, md, lg
```

### Card
```tsx
import { Card } from '@/components/ui/Card';

<Card>
  <h3>Card Title</h3>
  <p>Card content...</p>
</Card>
```

### Container
```tsx
import { Container } from '@/components/ui/Container';

<Container>
  <div>Centered content with max-width</div>
</Container>
```

## 🌓 Dark Mode

Dark mode is implemented with:
- TailwindCSS `dark:` classes
- `localStorage` persistence
- Theme toggle in Navbar (moon/sun icon)
- System preference detection on first load

## 🎯 Redux State

The app uses Redux Toolkit for state management:

```typescript
// src/redux/appSlice.ts
interface AppState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
}
```

Access state in components:
```tsx
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const theme = useSelector((state: RootState) => state.app.theme);
```

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **State**: Redux Toolkit
- **Compiler**: React Compiler (enabled)
- **Node**: v18+

## 🛠️ Configuration

### Tailwind Config
Located at `tailwind.config.ts`:
- Custom primary color palette
- Dark mode: `class` strategy
- 8px spacing scale
- Inter font family

### Next.js Config
Located at `next.config.ts`:
- React Compiler enabled
- TypeScript strict mode

## 📱 Responsive Design

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Mobile-first approach with TailwindCSS responsive utilities.

## ✅ Production Checklist

- ✅ TypeScript strict mode
- ✅ No linter errors
- ✅ Build successful
- ✅ All pages functional
- ✅ Dark mode working
- ✅ Responsive tested
- ✅ Redux integrated

## 🚀 Deployment

Build the project:
```bash
npm run build
```

The output will be in `.next` folder, ready for deployment to:
- Vercel (recommended)
- Any Node.js hosting
- Docker container

## 📚 Adding New Pages

1. Create a new folder in `src/app/`:
```bash
mkdir -p src/app/my-page
```

2. Add `page.tsx`:
```tsx
export default function MyPage() {
  return (
    <div>
      <h1>My New Page</h1>
    </div>
  );
}
```

3. The route will be available at `/my-page`

## 🎨 Adding New Components

1. Create in `src/components/ui/`:
```tsx
// src/components/ui/MyComponent.tsx
export function MyComponent() {
  return <div>Component</div>;
}
```

2. Import and use:
```tsx
import { MyComponent } from '@/components/ui/MyComponent';
```

## 💡 Development Tips

1. **Hot Reload**: Changes auto-reload in dev mode
2. **TypeScript**: Use strict types for better DX
3. **Tailwind**: Use className instead of style
4. **Components**: Keep them reusable and atomic
5. **Redux**: Only for global state, local state with useState

## 📄 License

© 2024 RailHubDev. All rights reserved.

---

**Built with ❤️ using Next.js 16, TypeScript, and TailwindCSS**

