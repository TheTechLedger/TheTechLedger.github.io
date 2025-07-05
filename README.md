# The Tech Ledger

A modern technology news website built with Next.js, TypeScript, and Tailwind CSS. Stay updated with the latest technology news, trends, and insights from around the world.

## 🌐 Live Site

Visit the live website: [https://thetechledger.github.io](https://thetechledger.github.io)

## 🚀 Features

- **Modern Design**: Clean, responsive design with Tailwind CSS
- **Article Management**: Full CRUD operations for articles
- **Search & Filtering**: Advanced search and category filtering
- **API Integration**: Ready for external API integration
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Newsletter Signup**: Integrated newsletter subscription
- **Contact Forms**: Working contact form with API integration
- **Admin Panel**: Article creation and management interface
- **GitHub Pages**: Automatic deployment from main branch

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/TheTechLedger.github.io.git
cd TheTechLedger.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables (optional for local development):
```bash
cp .env.local.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages. Every push to the `main` branch will trigger a build and deployment.

### Manual Deployment

If you need to deploy manually:

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out/` directory.

3. Push the changes to GitHub:
```bash
git add .
git commit -m "Update website"
git push origin main
```

### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Set the source to "GitHub Actions"
4. The workflow will automatically deploy your site

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── articles/          # Articles listing and detail pages
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   └── admin/             # Admin panel for article management
├── components/            # Reusable React components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and API client
└── types/                 # TypeScript type definitions
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```bash
# API Configuration (optional for local development)
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
NEXT_PUBLIC_API_KEY=your_api_key_here

# Development Settings
NEXT_PUBLIC_ENVIRONMENT=development
NEXT_PUBLIC_DEBUG_MODE=true
```

### API Integration

The website is designed to work with an external API. See `API_SETUP.md` for detailed configuration instructions.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and prepare for deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- Email: josephrasanjana0@gmail.com
- Website: [https://thetechledger.github.io](https://thetechledger.github.io)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [GitHub Pages](https://pages.github.com/)
