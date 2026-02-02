# Instagram Login Page Clone

A pixel-perfect recreation of Instagram's login page built with modern web technologies. This project demonstrates advanced UI/UX implementation with smooth animations, responsive design, and a complete authentication interface.

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://instagram-login-page-sooty.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

## ✨ Features

- **Pixel-Perfect Design** - Faithful recreation of Instagram's login interface
- **Responsive Layout** - Seamless experience across desktop, tablet, and mobile devices
- **Image Carousel** - Auto-rotating showcase with smooth transitions
- **Form Validation** - Client-side validation with real-time feedback
- **Modern UI Components** - Built with shadcn/ui component library
- **Dark Mode Support** - Theme switching capability
- **TypeScript** - Full type safety throughout the application
- **Accessibility** - WCAG compliant with keyboard navigation support

## 🚀 Live Demo

Experience the live application: [instagram-login-page-sooty.vercel.app](https://instagram-login-page-sooty.vercel.app)

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) - React framework for production
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) - Re-usable component library
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) - Performant form validation
- **Schema Validation:** [Zod](https://zod.dev/) - TypeScript-first schema validation
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Carousel:** [Embla Carousel](https://www.embla-carousel.com/) - Lightweight carousel library
- **Deployment:** [Vercel](https://vercel.com/) - Platform for frontend deployment

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** (recommended) or npm/yarn

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/KashishParveen/Instagram-login-page.git
cd Instagram-login-page
```

2. **Install dependencies**

Using pnpm (recommended):
```bash
pnpm install
```

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

3. **Run the development server**

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📁 Project Structure

```
instagram-login-page/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── carousel.tsx      # Image carousel component
│   ├── login-form.tsx    # Login form component
│   ├── signup-form.tsx   # Signup form component
│   ├── login-page.tsx    # Main login page component
│   └── instagram-logo.tsx # Instagram logo component
├── hooks/                # Custom React hooks
│   ├── use-mobile.ts    # Mobile detection hook
│   └── use-toast.ts     # Toast notification hook
├── lib/                  # Utility functions
│   └── utils.ts         # Helper utilities
├── public/              # Static assets
├── styles/              # Additional styles
└── package.json         # Project dependencies
```

## 🎨 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server at localhost:3000 |
| `pnpm build` | Build the application for production |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint for code quality |

## 🌐 Deployment

This project is deployed on Vercel. To deploy your own instance:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/KashishParveen/Instagram-login-page)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This project is created for educational purposes only. Instagram and its logo are trademarks of Meta Platforms, Inc. This is not an official Instagram product and is not affiliated with or endorsed by Meta Platforms, Inc.

## 👤 Author

**Kashish Parveen**

- GitHub: [@KashishParveen](https://github.com/KashishParveen)
- Project Link: [https://github.com/KashishParveen/Instagram-login-page](https://github.com/KashishParveen/Instagram-login-page)

## 🌟 Show your support

Give a ⭐️ if you liked this project!

---

<p align="center">Made with ❤️ by Kashish Parveen</p>
