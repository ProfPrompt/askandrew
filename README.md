# Ask Andrew - Web App & AI Consulting Platform

This repository contains the codebase for a highly optimized, fully responsive, professional portfolio, lead-generation, and booking application for **Ask Andrew** (`askandrew.io`). It is built using **React 18**, **Vite**, **TypeScript**, and **Tailwind CSS**, with interactive page animations powered by **motion** (`motion/react`) and icons by **Lucide React**.

The site is optimized for high-performance serverless hosting, utilizing **Web3Forms** for secure, serverless form processing.

---

## 🚀 Quick Deployment Guide (GitHub Pages & Web3Forms)

This project has been optimized for a purely static, serverless deployment on **GitHub Pages**. All legacy Express/Node.js backend server code and Nodemailer dependencies have been fully removed. Forms are handled securely and client-side using **Web3Forms**.

### Step 1: Push Your Project to GitHub
1. Extract the project files onto your local computer.
2. Initialize a new local Git repository in the project folder:
   ```bash
   git init
   git add .
   git commit -m "Configure static hosting and Web3Forms"
   ```
3. Create a new repository on **GitHub** named exactly `<YOUR_USERNAME>.github.io` (for a user site) or any name (e.g., `askandrew-website` for a project site).
4. Link your local project and push it to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Configure Web3Forms Security
To ensure absolute security and prevent unauthorized use of your access key on other websites:
1. Log in to your **Web3Forms Dashboard** (for the email address `askandrew.io@gmail.com`).
2. Select your access key: `00d7763d-64e0-455b-9703-28731d614b31`.
3. In the security settings, enable **Domain Restriction** (or Whitelist).
4. Add the domain `askandrew.io` (and optionally `www.askandrew.io` and the GitHub Pages domain if testing) to strictly restrict form submissions to your domain.
5. In the Web3Forms dashboard settings, make sure the target email for submissions is set to `askandrew.io@gmail.com`.

> 💡 **Note on Local/Preview Testing:** If you enable **Domain Restriction** in Web3Forms for `askandrew.io`, submissions made from `localhost` or the AI Studio development environment will be rejected by the Web3Forms API. If you wish to test forms in local development, you can temporarily disable domain restriction or add `localhost` to the allowed list.

### Step 3: Configure GitHub Pages Deploy Workflow
You can automate deployment using **GitHub Actions**. Create a file in your project under `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then, in your GitHub repository:
1. Go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push your code to the `main` branch, and the workflow will build and deploy your site automatically!

### Step 4: Map Custom Domain (`askandrew.io`)
To map your custom domain on GitHub Pages:
1. Under **Settings** > **Pages** in your GitHub repository, locate the **Custom domain** section.
2. Enter `askandrew.io` and click **Save**. This will automatically create a `CNAME` file in your deployment branch (or you can create a `CNAME` file in the `/public` folder containing `askandrew.io` to persist it across builds).
3. Update your DNS provider (e.g., Cloudflare, GoDaddy) to point to GitHub's IP addresses or create a CNAME record pointing to `<your-username>.github.io`.
4. Check **Enforce HTTPS** to secure your site with SSL.

---

## 🛠️ Project Structure & Customization

The codebase is engineered to keep visual interface code separated from text data, making copy-editing and updates simple and risk-free.

### 🎨 The Ultimate Content Configurator (`src/content.ts`)
The entire visual look, text, sequencing, and icons of the application are managed in a single, chronologically organized source of truth: `src/content.ts`. You do not need to hunt through TSX files to change copy or styles.

#### 1. Global UI & Theme Settings
At the very top of `src/content.ts` in the `THEME_SETTINGS` object, you can immediately change:
- **`fontLink`**: Google Fonts stylesheet link to load any Google Font dynamically.
- **`fontFamilySans`** & **`fontFamilyMono`**: Font family strings applied globally across sans-serif and monospace UI.
- **`colors`**: Modify primary, secondary (brand accents), dark, and light colors in a single click using HEX, RGB, or HSL values.

#### 2. Sequential Chronological Order
The sections inside `src/content.ts` are laid out in the exact chronological order that they appear on the screen, from the header navigation down to the footer. This makes it incredibly easy to find the text you want to edit.

#### 3. Fully Customizable Icons (The `DynamicIcon` System)
All icons on the site are configurable as simple strings (e.g., `"Sparkles"`, `"Bot"`, `"Wrench"`, `"Calendar"`, `"Mail"`, `"ArrowLeft"`, `"Github"`, `"Linkedin"`). You can replace any icon string with any valid Lucide icon name, and the application will dynamically load and style it.

---

## 🎯 Pre-Launch Checklist (SEO, Favicon, Sitemap & askandrew.io)

Before launching the app live on **GitHub Pages** and pointing `askandrew.io` to it, perform these final customization steps to guarantee pristine SEO search appearances and branding.

### 1. Update Site Metadata, Titles, and Descriptions
- Open **`/index.html`**:
  - Replace the `<title>` tag with your custom headline:
    ```html
    <title>Ask Andrew - Web App Development & AI Consulting</title>
    ```
  - Update the description `<meta>` tag to customize how Google indexes your site:
    ```html
    <meta name="description" content="Build dynamic web apps, automate complex operations, and design custom workspaces. Fast-track your projects in 48 hours." />
    ```
- Open **`/metadata.json`**:
  - Ensure the `name` and `description` properties are updated to:
    ```json
    {
      "name": "Ask Andrew",
      "description": "Premium Web App & Custom AI Workspace Consultancy"
    }
    ```

### 2. Configure Your Custom Favicon
- Prepare your icon files (`favicon.ico`, `apple-touch-icon.png`, or a square SVG).
- Place them in the `/public` folder (replacing any existing placeholders).
- In `/index.html`, ensure the icon link tags point correctly to your favicon:
  ```html
  <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
  ```

### 3. Generate a Sitemap (`sitemap.xml`)
To ensure search engines index all your page URLs properly, create a simple static sitemap in the public directory.
- Create a file named **`/public/sitemap.xml`**:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://askandrew.io/</loc>
      <lastmod>2026-07-07</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://askandrew.io/book</loc>
      <lastmod>2026-07-07</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  </urlset>
  ```

### 4. Create a search-engine instruction file (`robots.txt`)
- Create a file named **`/public/robots.txt`**:
  ```txt
  User-agent: *
  Allow: /
  Sitemap: https://askandrew.io/sitemap.xml
  ```

---

## 💻 Local Development

To run the application locally for testing or further development:

1. **Clone or Extract** the project.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Launch Local Dev Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser. Since the application is purely static, form submissions will make direct CORS requests to the secure Web3Forms API endpoint.

---

## 🎨 Design System

- **Styling**: Tailwind CSS (configuration imported via `@import "tailwindcss";` in `src/index.css`).
- **Typography**: Responsive, high-contrast typography using **Inter** (sans-serif) for general interface components and **JetBrains Mono** for layout details, tags, and code elements.
- **Aesthetic**: Modern, clean, slate-colored light layout with custom pink/burgundy brand indicators (`#B9305D` / `text-brand-secondary`) and rich feedback visual micro-interactions.
