# Ask Andrew - Web App & AI Consulting Platform

This repository contains the codebase for a highly optimized, fully responsive, professional portfolio, lead-generation, and booking application for **Ask Andrew** (`askandrew.io`). It is built using **React 18**, **Vite**, **TypeScript**, and **Tailwind CSS**, with interactive page animations powered by **motion** (`motion/react`) and icons by **Lucide React**.

The site also includes a built-in server-side API handler in `/api/index.ts` to manage and process client booking submissions (using **Nodemailer** for secure, customized email notification delivery).

---

## 🚀 Quick Deployment Guide (Cloudflare Pages)

This project is fully prepared for instant production deployment to **Cloudflare Pages** (for fast global static asset delivery) and can be connected with **Cloudflare Workers** or **Pages Functions** to handle backend contact form requests securely.

### Step 1: Push Your Project to GitHub
1. Extract the downloaded ZIP file of this project onto your local computer.
2. Initialize a new local Git repository in the folder:
   ```bash
   git init
   git add .
   git commit -m "initial commit of Ask Andrew platform"
   ```
3. Create a new repository on **GitHub** (e.g., `askandrew-website`).
4. Link your local project and push it to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Create a Cloudflare Pages Project
1. Log in to your **Cloudflare Dashboard** and navigate to **Workers & Pages**.
2. Click **Create** > **Pages** > **Connect to Git** and link your GitHub account.
3. Select your repository and configure the build settings:
   - **Framework Preset**: Choose `Vite` (or `None`).
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
4. Click **Save and Deploy**. Cloudflare will compile and deploy your static web application.

### Step 3: Configure Environment Variables (SMTP Secrets)
To securely store SMTP credentials and recipient details so they remain completely hidden from the user's browser, define them inside the Cloudflare Dashboard:
1. In the Cloudflare Dashboard, go to your **Pages Project** > **Settings** > **Variables & Secrets**.
2. Under **Environment Variables**, click **Add variable** / **Add secret** for both **Production** and **Preview** environments.
3. Define the following secret keys:

| Environment Variable | Description | Example / Recommended Value |
|----------------------|-------------|----------------------------|
| `SMTP_HOST`          | SMTP server hostname for sending emails | `smtp.gmail.com` or `smtp.resend.com` |
| `SMTP_PORT`          | Port used by your SMTP provider | `465` (SSL) or `587` (TLS) |
| `SMTP_USER`          | Your SMTP auth user email or login credential | `yourname@gmail.com` |
| `SMTP_PASS`          | Your SMTP password / app-specific password | `your-secure-app-password` |
| `SMTP_SECURE`        | Whether to connect over SSL/TLS (`true`/`false`) | `true` (if using port 465) or `false` |
| `ADMIN_EMAIL`        | The email address where booking notifications go | `your-receiving-email@gmail.com` |

> 🔒 **Security Notice:** These variables are kept encrypted and fully hidden server-side on Cloudflare's secure infrastructure. They are never exposed to the client-side browser bundle.

### Step 4: Map your Custom Domain (`askandrew.io`)
1. In the Cloudflare Pages project page, click the **Custom Domains** tab.
2. Click **Set up a custom domain**.
3. Type `askandrew.io` (and optionally `www.askandrew.io`) and click **Continue**.
4. Since your DNS is hosted on Cloudflare (or another registrar), Cloudflare will automatically prompt you to configure or update the CNAME DNS records pointing to your Pages project endpoint (e.g., `<project>.pages.dev`).
5. Click **Activate Domain**. Cloudflare will handle SSL generation automatically.

---

## 🛠️ Project Structure & Customization

The codebase is engineered to keep visual interface code separated from text data, making copy-editing and updates simple and risk-free.

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

Before launching the app live on **Cloudflare Pages** and pointing `askandrew.io` to it, perform these final customization steps to guarantee pristine SEO search appearances and branding.

### 1. Update Site Metadata, Titles, and Descriptions
- Open **`/index.html`**:
  - Replace the `<title>` tag with your ultimate custom headline:
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

---

## 💻 Local Development

To run the application and test the mail system on your local machine:

1. **Clone or Extract** the project.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Local Environment**:
   Create a `.env` file in the root directory (based on `.env.example`):
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_SECURE=false
   ADMIN_EMAIL=your-receiving-email@gmail.com
   ```
4. **Launch Local Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser. (The backend contact form API will print email content to the terminal console if SMTP variables are not set up locally).

---

## 🎨 Design System

- **Styling**: Tailwind CSS (configuration imported via `@import "tailwindcss";` in `src/index.css`).
- **Typography**: Responsive, high-contrast typography using **Inter** (sans-serif) for general interface components and **JetBrains Mono** for layout details, tags, and code elements.
- **Aesthetic**: Modern, clean, slate-colored light layout with custom pink/burgundy brand indicators (`#B9305D` / `text-brand-secondary`) and rich feedback visual micro-interactions.

