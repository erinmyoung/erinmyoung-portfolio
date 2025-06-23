# Erin Young Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Erin Young, a creative and product-focused Full Stack Developer with 6+ years of experience building performant, data-rich web applications in JavaScript, React, and Python.

## ✨ Features

- **Modern Design**: Clean, professional interface with dark/light mode toggle
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance**: Built with Vite for fast development and optimized production builds
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Interactive**: Smooth animations with Framer Motion
- **Type Safe**: Built with TypeScript for better developer experience

## 🛠 Technologies Used

### Core Technologies

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework

### UI & Animation

- **Material UI** - React component library
- **Framer Motion** - Animation library
- **React Slick** - Carousel component

### Development & Quality

- **ESLint** - Code linting
- **Vitest** - Unit testing framework
- **Testing Library** - React testing utilities

### Analytics & Performance

- **Vercel Analytics** - Website analytics
- **Vercel Speed Insights** - Performance monitoring
- **DOMPurify** - XSS protection for dynamic content

### Design

- **Figma** - Original desktop/mobile designs
- **Custom Fonts** - BungeeShade and Tajawal

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/erinmyoung/erinmyoung-portfolio.git
   cd erinmyoung-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your values:

   ```
   VITE_VERCEL_IMAGE_PATH=your_image_path_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 📝 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
| `npm run test`    | Run tests                |

## 🏗 Project Structure

```
src/
├── components/          # React components
│   ├── __tests__/      # Component tests
│   ├── about/          # About section
│   ├── experience/     # Experience section
│   └── projects/       # Projects section
├── constants/          # App constants
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── assets/             # Static assets
│   ├── background/     # Background images
│   └── fonts/          # Custom fonts
└── App.tsx             # Main app component
```

## 🎨 Design System

The portfolio uses a custom design system with:

- **Colors**: Carefully chosen palette with dark/light mode variants
- **Typography**: Custom font stack with BungeeShade for headers
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components
- **Animations**: Smooth micro-interactions

## ♿ Accessibility

This website is built with accessibility in mind:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Responsive text sizing

## 🔧 Performance Optimizations

- **Code Splitting**: Lazy loading for better initial load times
- **Image Optimization**: WebP format and lazy loading
- **Bundle Analysis**: Optimized bundle sizes
- **Compression**: Gzip compression for assets
- **Caching**: Proper cache headers for static assets

## 🧪 Testing

The project includes comprehensive testing:

- **Unit Tests**: Component testing with Vitest and Testing Library
- **Accessibility Tests**: Automated a11y testing
- **Performance Tests**: Core Web Vitals monitoring

Run tests:

```bash
npm run test
```

## 🚀 Deployment

The site is optimized for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** automatically on push to main

Build locally:

```bash
npm run build
npm run preview
```

## 📊 Analytics

The portfolio includes:

- **Vercel Analytics**: Page views and user interactions
- **Speed Insights**: Core Web Vitals monitoring
- **Error Tracking**: Client-side error monitoring

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Erin Young**

- Email: erinmyoung12@gmail.com
- LinkedIn: [linkedin.com/in/erin-young-0a3b1363](https://www.linkedin.com/in/erin-young-0a3b1363)
- GitHub: [github.com/erinmyoung](https://github.com/erinmyoung)
- Portfolio: [Live Demo](https://erinmyoung.vercel.app)

---

_This portfolio demonstrates modern web development practices and serves as a showcase of technical skills for potential employers._
