# Noghte Vorood Podcast Website 🎙️

**NoghteVoroord** (meaning "Entry Point") - A Farsi-speaking podcast where deep conversations begin about technology, society, creativity, and the future.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwindcss)

## 🌟 Features

- 🎨 **Modern Design** - Dark theme with brand green (#00704A) accents
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Static Export** - Fast loading, excellent SEO, works on any static hosting
- 🎧 **Episode Pages** - Individual pages for each podcast episode
- 👥 **Speakers Showcase** - Dedicated pages for hosts and guests
- 📧 **Newsletter Integration** - Custom Substack integration
- 🌐 **Multi-language** - English and Farsi (Persian) content
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🚀 **Auto-Deploy** - GitHub Actions workflow for continuous deployment

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: GitHub Pages (Static Export)
- **CI/CD**: GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/noghtevorood.git
cd noghtevorood
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

## 📦 Build & Deploy

### Local Build

Build the static site locally:

```bash
npm run build
```

The output will be in the `./out` directory.

### Deploy to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

**Quick Setup:**

1. Go to your repository **Settings** > **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to the `main` branch
4. GitHub Actions will automatically build and deploy your site

**For detailed instructions**, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

### Custom Domain

This site is configured for the custom domain **noghtevorood.com**.

- ✅ CNAME file already created in `/public/CNAME`
- 📝 See [DNS_SETUP.md](./DNS_SETUP.md) for DNS configuration instructions
- 🚀 Once DNS is configured, your site will be live at `https://noghtevorood.com`

## 📂 Project Structure

```
noghtevorood/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   ├── contact/             # Contact page
│   ├── donate/              # Donation page
│   ├── episodes/            # Episodes listing & detail pages
│   ├── privacy/             # Privacy policy
│   └── speakers/            # Speakers showcase
├── public/                  # Static assets
│   ├── guests/             # Guest photos
│   ├── ehsan_gazar.png
│   ├── ali_parvizi.png
│   └── ...
├── episodes.json            # Episode data
├── lib/                     # Utility functions
├── .github/workflows/       # GitHub Actions
└── next.config.ts           # Next.js configuration
```

## 🎨 Brand Identity

- **Background**: Black (#000000)
- **Primary Green**: #00704A
- **Light Green**: #009962
- **Dark Green**: #005239

## 📝 Content Management

### Adding New Episodes

1. Add episode data to `episodes.json`
2. Create a markdown file in `episodes-md/` (optional)
3. The episode page will be automatically generated

### Adding New Guests

Update the speakers page at `app/speakers/page.tsx` with guest information.

## 🔧 Configuration

### Environment Variables

No environment variables required for the base setup.

### DNS Configuration

The site is configured for **noghtevorood.com**. To set up DNS:

1. See detailed instructions in [DNS_SETUP.md](./DNS_SETUP.md)
2. Add A records to your domain registrar
3. Enable custom domain in GitHub Pages settings
4. Wait for DNS propagation (typically 1-2 hours)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📱 Connect

- **YouTube**: [@noghte_vorood](https://www.youtube.com/@noghte_vorood)
- **Newsletter**: [Substack](https://noghtevorood.substack.com/)
- **Spotify**: [Listen](https://open.spotify.com/show/7KXz3Hb4z1JmLqauwpmHgc)
- **Apple Podcasts**: [Subscribe](https://podcasts.apple.com/us/podcast/پادکست-نقطه‌ورود-noghte-vorood-podcast/id1850117759)
- **Email**: info@noghtevorood.com

## 👥 Hosts

- **Ehsan Gazar** - Principal Engineer | [LinkedIn](https://www.linkedin.com/in/gazar/) | [Website](https://gazar.dev/)
- **Ali Parvizi** - Front-end Software Engineer | [LinkedIn](https://www.linkedin.com/in/ali-parvizi/) | [Website](https://aliparvizi.ir/)

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

Built with Next.js, powered by passion for technology and meaningful conversations.

---

**Made with ❤️ for the Farsi-speaking tech community**
