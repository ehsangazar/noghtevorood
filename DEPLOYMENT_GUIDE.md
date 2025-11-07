# GitHub Pages Deployment Guide

This guide will help you deploy your Noghte Vorood website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your repository pushed to GitHub

## Deployment Steps

### 1. Enable GitHub Pages in Your Repository

1. Go to your repository on GitHub
2. Click on **Settings** > **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**

### 2. Configure for Your Repository Type

#### Option A: User/Organization Site (username.github.io)

If deploying to `https://username.github.io`:
- No changes needed! The current configuration will work.

#### Option B: Project Site (username.github.io/repo-name)

If deploying to `https://username.github.io/noghtevorood`:

1. Open `next.config.ts`
2. Uncomment and update these lines:
   ```typescript
   basePath: '/noghtevorood',
   assetPrefix: '/noghtevorood',
   ```
   Replace `'noghtevorood'` with your actual repository name.

### 3. Push to GitHub

Once you push to the `main` branch, the GitHub Action will automatically:
1. Build your Next.js site
2. Generate static files
3. Deploy to GitHub Pages

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 4. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow
3. Once complete (green checkmark), your site will be live!

### 5. Access Your Site

After successful deployment:
- User/Org site: `https://username.github.io`
- Project site: `https://username.github.io/repo-name`

## Troubleshooting

### Pages Not Found After Refresh

This is handled automatically! The static export configuration ensures all routes work correctly.

### Build Fails

Check the Actions tab for error logs. Common issues:
- **Missing environment variables**: Not applicable for this static site
- **Build errors**: Fix any TypeScript or ESLint errors locally first
- **Out of memory**: GitHub Actions has sufficient memory for this project

### Images Not Loading

If you see broken images:
1. Ensure all image files are in the `/public` directory
2. Check that image paths start with `/` (e.g., `/logo.png`)
3. Verify remote image domains are listed in `next.config.ts`

### Custom Domain - noghtevorood.com

Your site is configured to use the custom domain `noghtevorood.com`.

**The CNAME file is already created** in `/public/CNAME`.

**To complete the setup:**

1. In your repository: **Settings** > **Pages** > **Custom domain**
2. Enter: `noghtevorood.com`
3. Click **Save**
4. Configure DNS records with your domain registrar (see [DNS_SETUP.md](./DNS_SETUP.md) for detailed instructions)

**Quick DNS Setup:**
Add these A records to your domain:
```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
```

Once DNS propagates (1-48 hours), your site will be live at `https://noghtevorood.com`

## Updates and Redeployment

Every time you push to `main`, GitHub Actions will automatically:
- Rebuild the site
- Deploy the latest version
- Usually completes in 2-3 minutes

## Static Export Considerations

Your site is now a static export, which means:
- ✅ All pages are pre-rendered at build time
- ✅ Fast loading and excellent SEO
- ✅ Works on any static hosting (not just GitHub Pages)
- ✅ No server required
- ⚠️ API routes are not supported (not used in this project)
- ⚠️ Dynamic routes must be generated at build time (already configured)

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build the site
npm run build

# The output will be in the ./out directory
# You can upload this to any static hosting service
```

## Support

If you encounter issues:
1. Check the Actions tab for build logs
2. Ensure all dependencies are properly installed
3. Test the build locally: `npm run build`
4. Verify all pages load correctly in development: `npm run dev`

---

**Note**: The first deployment may take 5-10 minutes. Subsequent deployments are usually faster (2-3 minutes).

