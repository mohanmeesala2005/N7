# N7 - Enterprise Banking Solutions Website

A pixel-perfect, responsive React website for N7 business solutions built with modern web technologies.

## 🚀 Features

- **Fully Responsive Design** - Mobile-first approach with perfect responsiveness across all devices
- **High Performance** - Optimized with code splitting, lazy loading, and production-ready build
- **Modern Stack** - React 18, Vite, Tailwind CSS, Lucide Icons
- **Accessibility** - WCAG compliant with semantic HTML
- **SEO Optimized** - Meta tags, performance optimizations
- **Dark Theme** - Professional dark design with gradient accents

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── Solutions.jsx   # Solutions showcase
│   ├── Features.jsx    # Features section
│   ├── Testimonials.jsx # Client testimonials
│   ├── CTA.jsx         # Call-to-action section
│   └── Footer.jsx      # Footer
├── App.jsx             # Main app component
├── main.jsx            # Entry point
├── index.css           # Global styles & Tailwind
└── assets/             # Images and media (to be added)

Configuration Files:
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS config
├── postcss.config.js   # PostCSS config
├── .eslintrc.json      # ESLint rules
└── index.html          # HTML entry point
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎨 Customization

### Adding Images
1. Create an `src/assets` folder
2. Place your images there
3. Import and use in components:
   ```jsx
   import heroImage from '../assets/hero.jpg'
   <img src={heroImage} alt="description" />
   ```

### Modifying Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  'dark-bg': '#0a0e27',
  'dark-card': '#1a1f3a',
  'accent-blue': '#00d4ff',
  'accent-purple': '#7c3aed',
}
```

### Updating Content
Each component is self-contained and easy to modify:
- `Header.jsx` - Navigation items and branding
- `Hero.jsx` - Hero section content and CTA
- `Solutions.jsx` - Product offerings
- `Features.jsx` - Key features list
- `Testimonials.jsx` - Client testimonials
- `CTA.jsx` - Call-to-action content
- `Footer.jsx` - Footer links and contact

## 🚀 Performance Optimizations

- **Code Splitting** - Automatic chunk splitting for React, UI vendors
- **Tree Shaking** - Unused code removal in production
- **Minification** - Terser configuration for optimal bundle size
- **Image Optimization** - Use next-gen formats (WebP)
- **CSS Purging** - Tailwind removes unused styles

## 📱 Responsive Breakpoints

- Mobile: 0px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus management

## 📦 Dependencies

- **react** - UI library
- **react-dom** - React DOM rendering
- **react-router-dom** - Routing (optional)
- **lucide-react** - Icon library
- **tailwindcss** - Utility-first CSS
- **vite** - Build tool

## 🔧 Development

### Linting
```bash
npm run lint
```

### Build Analysis
Vite provides built-in analysis with:
```bash
npm run build -- --analyze
```

## 📝 Environment Variables

Create a `.env` file in the root:
```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=N7 Solutions
```

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Run linting and build checks
4. Submit pull request

## 📄 License

Copyright © 2024 N7 Solutions. All rights reserved.

## 📞 Support

For support, contact: hello@n7.com

---

**Ready to deploy?** Build with `npm run build` and deploy the `dist/` folder to your hosting provider.
