/**
 * Ask Andrew - Core Website Content, Theme, and Copy Configuration File
 * 
 * This is the SINGLE SOURCE OF TRUTH for all text, pricing, links, assets,
 * fonts, and colors across the site.
 * 
 * It is structured in the exact chronological order that the sections appear 
 * on the home page and booking page, making it super intuitive to customize.
 */

// ============================================================================
// SECTION 1: GLOBAL THEME & STYLE SETTINGS (Fonts, Colors, Default Sizes)
// ============================================================================

export const THEME_SETTINGS = {
  // Google Fonts stylesheet link to import
  fontLink: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap',
  
  // Font Family names to apply
  fontFamilySans: 'Inter',
  fontFamilyMono: 'JetBrains Mono',

  // Site Brand Colors (Hex codes)
  colors: {
    primary: '#A78BFA',       // Main branding highlight / hero accents / backgrounds (Lavender/Violet)
    secondary: '#B9305D',     // Secondary brand contrast / key CTA buttons & links (Deep Pink)
    dark: '#1A1A1A',          // Darkest text, rich backgrounds, and deep elements (Charcoal/Almost Black)
    light: '#FFFFFF',         // Main content canvas background and crisp light backdrops (White)
    grayLight: '#F5F5F7',     // Soft gray background for subtle card grouping or spacers
  },

  // Responsive Tailwind Font Sizes for various blocks to allow swift adjustments
  fontSizes: {
    heroHeadline: 'text-4xl sm:text-5xl lg:text-7xl',
    heroTagline: 'text-xl sm:text-2xl lg:text-3xl',
    sectionTitleLarge: 'text-3xl sm:text-4xl lg:text-5xl',
    sectionTitleMedium: 'text-3xl lg:text-4xl',
    bodyText: 'text-base sm:text-lg',
    subText: 'text-sm text-gray-500',
  }
};

// ============================================================================
// SECTION 2: HEADER, LOGO & MAIN NAVIGATION
// ============================================================================

export const HEADER_NAV = {
  logoText: "ASKANDREW.IO",
  logoEmoticon: "; )",
  logoIconName: "Wrench", // String key corresponding to Lucide Icons
  bookButtonText: "Book a Call With Andrew",
  bookButtonShort: "Book a Call",
  
  // Main Navigation links shown in Header and Mobile Drawer
  links: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Showcase', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
  ]
};

// ============================================================================
// SECTION 3: WATERMARK / BACKGROUND BACKGROUND TEXT
// ============================================================================

export const WATERMARK = {
  // Repeating text blocks scrolling in the background watermark layout
  words: [
    "APPS", "WEBSITES", "CODING", "AUTOMATION", 
    "DESIGN", "WORKSHOPS", "TRAINING", "AI SYSTEMS"
  ]
};

// ============================================================================
// SECTION 4: HERO HERO BLOCK (ROTATING PHRASES & CORE INTRO)
// ============================================================================

export const HERO_SECTION = {
  headline: "Ask Andrew",
  tagline: "Custom Web Apps & AI Strategy",
  
  // Rotating phrases in the typing-loop sub-header
  phrases: [
    "to build your website",
    "to design your app",
    "to automate your daily work",
    "to optimize AI for your life",
    "to connect your software stack",
    "to solve your tech issues"
  ],
  
  description: "I build simple websites, create personal profiles, design friendly app prototypes, and automate repetitive daily work in under a week. No complex software jargon, no endless meetings, just real tools that work.",
  descriptionMobile: "I build simple websites, create personal profiles, design friendly app prototypes, and automate repetitive daily work in under a week. No complex software jargon, no endless meetings, just real tools that work.",
  
  ctaPrimaryText: "Let's Get Started",
  ctaPrimaryLink: "/book",
  
  ctaSecondaryText: "See My Services",
  ctaSecondaryLink: "#services",
  
  // Custom illustration / mockup representing the hero focus
  heroImage: "https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/herowface.png"
};

// ============================================================================
// SECTION 5: ABOUT ME BLOCK (PERSONAL SUMMARY)
// ============================================================================

export const ABOUT_SECTION = {
  title: "About Andrew",
  quote: "I work with small business owners, startups, and curious builders to turn their ideas into custom websites, simple apps, and smart automations. No heavy technical jargon, no six-month roadmaps, and no corporate fluff. I build what you need in under a week, show you exactly how to manage it yourself, and explain everything plain and simple.",
  
  avatarUrl: "https://imgx.vipkidstatic.com/global/ter/teacher/avatar/1619214/6e1cafeb00cc472b9a366c08fb82fa9e.png",
  
  ctaPrimaryText: "Let's Build Together",
  ctaPrimaryLink: "/book",
  
  ctaSecondaryText: "Connect on LinkedIn",
  ctaSecondaryIcon: "Linkedin",
  linkedInUrl: "https://www.linkedin.com/in/agwatts/"
};

// ============================================================================
// SECTION 6: MID-PAGE CALL TO ACTION
// ============================================================================

export const MID_PAGE_CTA = {
  title: "READY TO GET YOUR TIME BACK?",
  buttonText: "Book a Session with Andrew",
  buttonLink: "/book"
};

// ============================================================================
// SECTION 7: IDEAS SECTION (SPLIT SCREEN LAYOUT WITH SAD/HAPPY COMPARISON)
// ============================================================================

export const IDEAS_SECTION = {
  title: "Bring Your Ideas to Life",
  paragraph1: "Have a brilliant idea for a website, a personal portfolio, or a new digital app, but don't know where to start? Or maybe you're wasting hours wrestling with AI on your own, getting caught in confusing, endless loops that go nowhere.",
  paragraph2: "Let's build a clean, working prototype together. Whether you need a slick site for your brand or a functional demo to show investors, we can bring it to life in under a week—no tech background required.",
  buttonText: "Book a Friendly Session",
  buttonLink: "/book",
  
  // Side comparison images
  imageSad: "https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/confusedman.jpg",
  imageSadAlt: "Confused person with too many ideas",
  imageHappy: "https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/happyman.jpg",
  imageHappyAlt: "Proud person with a finished digital product"
};

// ============================================================================
// SECTION 8: SECONDARY PROTOTYPE CTA
// ============================================================================

export const SECONDARY_PROTOTYPE_CTA = {
  title: "GET A WORKING WEBSITE BY NEXT WEEK.",
  buttonText: "Book a Live Session",
  buttonLink: "/book",
  buttonSecondaryText: "Connect on LinkedIn",
  buttonSecondaryIcon: "Linkedin",
  linkedInUrl: "https://www.linkedin.com/in/agwatts/"
};

// ============================================================================
// SECTION 9: EASIER WAY SECTION (SPLIT SCREEN WORKSPACE VALUE PROPOSITIONS)
// ============================================================================

export const EASIER_WAY_SECTION = {
  title: "THERE HAS TO BE AN EASIER WAY.",
  paragraph1: "Tired of copy-pasting the exact same prompts into ChatGPT every morning? Or struggling to get the AI to understand your business style, templates, and spreadsheets?",
  paragraph2: "We can design a simple, private AI workspace and set up smart automations so your spreadsheets, emails, and tools update themselves. You'll leave our session with a comfortable setup that saves you hours of manual typing.",
  buttonText: "Automate My Tasks",
  buttonLink: "/book",
  
  // Desk lifestyle images (sad vs. happy)
  imageSad: "https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/saddesk.jpeg",
  imageSadAlt: "Frustrated professional struggling with endless prompting",
  imageHappy: "https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/happydesk.jpeg",
  imageHappyAlt: "Relaxed professional enjoying their custom AI workspace"
};

// ============================================================================
// SECTION 10: TESTIMONIALS SLIDER SECTION & CUSTOMERS LIST
// ============================================================================

export const TESTIMONIALS_SECTION = {
  titleSmall: "Don't Just Take My Word For It",
  titleLarge: "Testimonials",
  
  // Testimonials Array - Easy to add/remove/edit quotes
  list: [
    {
      quote: "Andrew completely transformed my personal portfolio webpage, turning it into a dynamic, eye-catching site. The content is much better organized and presented, while it looks sleek and cutting edge. Andrew is great to work with, friendly and open to customizations and getting the product you want. He's also highly skilled with app and platform designs, using AI effectively, and general troubleshooting with computers and tech issues.",
      author: "Lindsay Lafreniere",
      role: "Podcast Producer"
    },
    {
      quote: "I originally came to Andrew's workshop just wanting to learn more about AI and how it could actually be useful for my business. He showed me how to save my prompts as custom tools and use them to communicate complex ideas clearly to the AI. From there, we brainstormed and worked together to bring three of my own app ideas to life right during the session. I was honestly blown away by how quickly I was able to do it myself afterward.",
      author: "Leslie Williams",
      role: "Real Estate Professional"
    },
    {
      quote: "I’ve been working with Andrew to integrate AI into my workflow, and it’s been incredibly helpful for speeding up my day-to-day. His workshops gave me the confidence to pass that knowledge on to my own clients, which adds so much value to our relationships. If you're looking for someone who can help you optimize your business and actually implement new tech, I highly recommend Andrew on your team.",
      author: "Meghan Robinson",
      role: "Client Concierge"
    }
  ]
};

// ============================================================================
// SECTION 11: THE BOOKING MENU & SERVICES CATALOG
// ============================================================================

export interface Product {
  id: string;
  title: string;
  timeLabel: string;
  price: string;
  description: string;
  includes: string;
  icon: string;       // String key corresponding to Lucide Icons
  linkText: string;
  link: string;
}

export const BOOKING_MENU_SECTION = {
  title: "The Booking Menu",
  whatYouGetLabel: "What you get:",
  buttonText: "Book a Call With Andrew",
  buttonLink: "/book",
  additionalServicesTitle: "Additional Services",
  
  // Refund policies
  refundTitle: "Refund Policy",
  refundDescription: "Due to the bespoke nature of my services, all sales are final. Refunds cannot be offered once the engagement has started."
};

// Main product dictionary - ordered chronologically by category
export const PRODUCTS: Record<string, Product> = {
  // Main Products (Websites & Custom Tools)
  'one-page-site': {
    id: 'one-page-site',
    title: 'Simple Website, Profile, or App',
    timeLabel: 'Delivered in under a week',
    price: 'Starting at €299',
    description: "I build a simple, responsive one-page website, professional bio profile, or clear custom application to showcase your work, capture leads, or automate a specific manual task.",
    includes: "A gorgeous, live-hosted landing page with your custom content, forms, and setup assistance.",
    icon: 'Sparkles',
    linkText: 'Book a Simple Project',
    link: '/book/one-page-site'
  },
  'multi-page-site': {
    id: 'multi-page-site',
    title: 'Complex Website, Web App, or Prototype',
    timeLabel: 'Delivered in under a week',
    price: 'Starting at €499',
    description: "I design and build a multi-page website, feature-rich custom application, or product prototype to help launch your service, run complex operations, or test your product concept with real data.",
    includes: "A custom multi-page structure, complete user flows, custom database connectivity, and launch guidance.",
    icon: 'Layers',
    linkText: 'Book a Complex Project',
    link: '/book/multi-page-site'
  },
  
  // Legacy mappings for safe backwards compatibility
  'micro-tool': {
    id: 'one-page-site',
    title: 'Simple Website, Profile, or App',
    timeLabel: 'Delivered in under a week',
    price: 'Starting at €299',
    description: "I build a simple, responsive one-page website, professional bio profile, or clear custom application to showcase your brand, collect leads, or automate a specific manual task.",
    includes: "A gorgeous, live-hosted landing page with your custom content, forms, and setup assistance.",
    icon: 'Sparkles',
    linkText: 'Book a Simple Project',
    link: '/book/one-page-site'
  },
  'full-prototype': {
    id: 'multi-page-site',
    title: 'Complex Website, Web App, or Prototype',
    timeLabel: 'Delivered in under a week',
    price: 'Starting at €499',
    description: "I design and build a multi-page website, feature-rich custom application, or product prototype to help launch your service, run complex operations, or test your product concept with real data.",
    includes: "A custom multi-page structure, complete user flows, custom database connectivity, and launch guidance.",
    icon: 'Layers',
    linkText: 'Book a Complex Project',
    link: '/book/multi-page-site'
  },
  
  // Additional / Secondary Products
  'hosting-maintenance': {
    id: 'hosting-maintenance',
    title: 'Hosting & Maintenance',
    timeLabel: 'Ongoing Support',
    price: 'Starting at €50/mo',
    description: "I keep your website or application running smoothly, fast, secure, and up-to-date with domain setup, routine checks, and priority support. Ready to keep your online presence stable, secure, and high-performing.",
    includes: "Domain maintenance, performance monitoring, regular updates, and direct support when you need a quick change.",
    icon: 'Server',
    linkText: 'Inquire About Hosting',
    link: '/book/hosting-maintenance'
  },
  'tech-support': {
    id: 'tech-support',
    title: 'Support & Custom Fixes',
    timeLabel: 'Rapid turnaround',
    price: '€75/hr',
    description: "I fix bugs, update content, optimize performance, build custom integrations, or solve unique technical issues holding you back. Ready to step in and keep your digital tools operating reliably.",
    includes: "Rapid technical diagnostic, bug fixing, and custom code or workflow modifications.",
    icon: 'Wrench',
    linkText: 'Book Support & Fixes',
    link: '/book/tech-support'
  },
  'strategy-call': {
    id: 'strategy-call',
    title: 'Tech Feasibility & Strategy Call',
    timeLabel: '45-Min Session',
    price: '€95',
    description: "We will review your software, website, or app idea to see if it is doable. You will leave with a clear, step-by-step roadmap to build it without wasting time or money.",
    includes: "A structured, straightforward strategy call, live brainstorming, and a clear written execution blueprint.",
    icon: 'Map',
    linkText: 'Book a Strategy Call',
    link: '/book/strategy-call'
  },
  'workshops-speaking': {
    id: 'workshops-speaking',
    title: 'Group Workshops & Speaking Events',
    timeLabel: 'Custom Engagement',
    price: 'Starting from €499',
    description: "I host interactive practical workshops or deliver clear, engaging presentations about automated systems, team productivity, and smart technology integration.",
    includes: "A tailored educational session or keynote, interactive slides or custom guides, and live Q&A.",
    icon: 'Mic',
    linkText: 'Book a Session',
    link: '/book/workshops-speaking'
  }
};

// ============================================================================
// SECTION 12: THE "HOW IT WORKS" PROGRESSIVE FLOW 
// ============================================================================

export const HOW_IT_WORKS_SECTION = {
  title: "How it works",
  bubbleSad: "Can you do it?",
  bubbleDrew: "No problem!",
  bubbleHappy: "Totally worth it!",
  
  // Custom graphics/portraits for process bubbles
  imageSad: "https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/howtosad.jpeg",
  imageDrew: "https://imgx.vipkidstatic.com/global/ter/teacher/avatar/1619214/6e1cafeb00cc472b9a366c08fb82fa9e.png",
  imageHappy: "https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/howtohappy.jpeg",
  
  steps: [
    "Choose your service level and book a session. After booking, we will meet on a video call to discuss your goals, requirements, and tech strategy.",
    "We'll map out a solid plan of action tailored to your needs—whether it's a website, web app, hosting, maintenance, or custom support.",
    "I build, migrate, or optimize your solution in the background, keeping you fully updated on progress along the way.",
    "We jump on a live screen-share to review the final build, test the integrations, and make sure everything is perfect.",
    "Your new website, application, or workflow goes live, and you walk away with a highly functional, fully optimized digital platform."
  ]
};

// ============================================================================
// SECTION 13: MID-PAGE PERSUASION CALL TO ACTION BLOCK
// ============================================================================

export const MID_PERSUASION_CTA = {
  title: "You haven't come this far to keep talking about your app idea.",
  buttonPrimaryText: "Ask Andrew",
  buttonPrimaryLink: "/book",
  buttonSecondaryText: "Connect on LinkedIn",
  buttonSecondaryIcon: "Linkedin",
  linkedInUrl: "https://www.linkedin.com/in/agwatts/"
};

// ============================================================================
// SECTION 14: PORTFOLIO SHOWCASE GRID (WEB APPS vs WEB DESIGN)
// ============================================================================

export interface ShowcaseProject {
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  repo?: string;
  linkLabel?: string; // Custom label for link button e.g., 'Remix in AI Studio ↗'
  linkIcon?: string;  // Optional custom icon name for the main link (e.g. 'Sparkles')
  projectType: string;
}

export const SHOWCASE_SECTION = {
  titleSmall: "Featured Work",
  titleLarge: "Showcase",
  carouselTitle: "Some of my projects"
};

export const SHOWCASE_PROJECTS: {
  webApps: ShowcaseProject[];
  websites: ShowcaseProject[];
} = {
  webApps: [
    {
      title: "Advantaged Player Trainer",
      description: "An interactive card-counting simulator designed to train your blackjack strategy. Combines gamified dashboard drills with real-time feedback and performance analytics.",
      image: "https://andrewgwatts.github.io/asset/placeholder-advantaged-player-webapp.png",
      alt: "Advantaged Player Trainer web app screenshot showing interactive dashboard and analytics",
      link: "https://advantagedplayer.github.io",
      repo: "https://github.com/advantagedplayer/advantagedplayer.github.io",
      projectType: "Mobile Game"
    },
    {
      title: "Rewind",
      description: "A movie discovery engine that bypasses streaming algorithms. Uses semantic text mapping to curate highly niche, forgotten cult classics based on open-ended prompts.",
      image: "https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/rewind.png",
      alt: "Rewind AI custom workspace film search layout illustration",
      link: "https://aistudio.google.com",
      linkLabel: "Remix in AI Studio ↗",
      linkIcon: "Sparkles",
      projectType: "Web App"
    },
    {
      title: "Astro Dash",
      description: "An endless retro-arcade space runner. Blast asteroids, dodge obstacles, stack high-score multipliers, and navigate increasingly difficult cosmic hazards.",
      image: "https://andrewgwatts.github.io/asset/astro_dash_placeholder.png",
      alt: "Astro Dash dashboard screenshot showing custom AI integration and data visualization",
      link: "https://astrodashapp.github.io",
      repo: "https://github.com/astrodashapp/astrodashapp.github.io",
      projectType: "Mobile Game"
    },
    {
      title: "Loading Now...",
      description: "A progress-tracking utility that visualizes your day, week, month, year, and decade, wrapped in the nostalgic pixel art of 90s operating system interfaces.",
      image: "https://andrewgwatts.github.io/asset/placeholder-loading-now.png",
      alt: "Loading Now web application project screenshot showing custom web development work",
      link: "https://loadingnowapp.github.io",
      repo: "https://github.com/loadingnowapp/loadingnowapp.github.io",
      projectType: "Web App"
    },
    {
      title: "LinkSprout",
      description: "A modern, minimalist 'link-in-bio' landing page designed to organize your digital footprint, stash essential links, and present a clean professional profile.",
      image: "https://andrewgwatts.github.io/asset/linksprout-thumbnail.png",
      alt: "LinkSprout modern minimalist link-in-bio landing page template screenshot",
      link: "https://linksprout.github.io",
      repo: "https://github.com/LinkSprout/LinkSprout.github.io",
      projectType: "Web App"
    }
  ],
  websites: [
    {
      title: "Podcast Producer Profile",
      description: "A dark, highly stylized, high-contrast landing page designed for audio engineers to showcase top-tier podcast production portfolios and services.",
      image: "https://andrewgwatts.github.io/asset/podcast-producer-site.png",
      alt: "Podcast Producer Profile website design showcasing clean responsive layout",
      link: "https://LindsayLafreniere.github.io",
      repo: "https://github.com/LindsayLafreniere/LindsayLafreniere.github.io",
      projectType: "Website"
    },
    {
      title: "Developer Portfolio",
      description: "A sleek, minimalist, terminal-inspired website portfolio designed for software engineers to showcase their code, technical projects, and expertise.",
      image: "https://andrewgwatts.github.io/asset/developer-portfolio-site.png",
      alt: "Developer Portfolio website design showing modern aesthetic and dark mode styling",
      link: "https://AndrewGWatts.github.io",
      repo: "https://github.com/AndrewGWatts/AndrewGWatts.github.io",
      projectType: "Website"
    },
    {
      title: "Teacher Profile",
      description: "A bright, friendly, and highly customized personal profile website designed for teachers and educators to showcase lesson materials, classroom values, and tutoring services.",
      image: "https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/teacher.jpg",
      alt: "Teacher Profile website design showing friendly custom layout for educators",
      link: "https://teacherkaren.xyz",
      repo: "https://github.com/profprompt/teacherkaren",
      projectType: "Website"
    }
  ]
};

// ============================================================================
// SECTION 15: FINAL PERSUASION HERO & FOOTER
// ============================================================================

export const FINAL_CTA_SECTION = {
  title: "Ready to build your web app?",
  buttonPrimaryText: "Ask Andrew",
  buttonPrimaryLink: "/book",
  buttonSecondaryText: "Connect on LinkedIn",
  buttonSecondaryIcon: "Linkedin",
  linkedInUrl: "https://www.linkedin.com/in/agwatts/"
};

export const FOOTER_SECTION = {
  linkedInUrl: "https://www.linkedin.com/in/agwatts/",
  linkedInIcon: "Linkedin",
  githubUrl: "https://github.com/ProfPrompt",
  githubIcon: "Github",
  copyright: "Copyright © 2026 Andrew Watts"
};

// ============================================================================
// SECTION 16: BOOKING PAGE CUSTOMIZATION (TEXTS, QUESTIONS, FORMS & SUCCESS)
// ============================================================================

export interface BookingGoal {
  id: string;
  label: string;
  recommendedProductIds: string[];
}

export const BOOKING_PAGE_SETTINGS = {
  // ==========================================================================
  // HOST AVAILABILITY & TIMEZONE SETTINGS (Andrew's Workspace)
  // ==========================================================================
  hostTimezone: "Europe/Lisbon",
  workingHoursStart: 9, // 9:00 AM (24-hour format)
  workingHoursEnd: 21,   // 9:00 PM (24-hour format, exclusive)
  breakHours: [14, 15],  // Break hours (e.g. 12 PM - 2 PM) in host timezone where slots are unavailable

  // Page headers
  badgeText: "Interactive Booking Menu",
  titleText: "Configure Your Session",
  descriptionText: "Select what you're looking to achieve and find the perfect package with transparent options.",
  
  // Interactive Step labels
  step1Label: "Step 1: What do you want to Ask Andrew?",
  step1Icon: "Sparkles",
  step2Label: "Step 2: Recommended Products",
  step2BadgeText: "Showing matching options",
  step3SelectedLabel: "Selected Solution",
  step3RateLabel: "Rate",
  step3CostLabel: "Estimated Cost",
  step3ButtonText: "Request Booking",

  // Goals Dropdown Configuration - Editable goals and their recommended products matches!
  goalsList: [
    { id: 'goal-simple', label: 'Build a Simple Website, Profile, or App (Starting at €299)', recommendedProductIds: ['one-page-site', 'strategy-call'] },
    { id: 'goal-complex', label: 'Build a Complex Website, Web App, or Prototype (Starting at €499)', recommendedProductIds: ['multi-page-site', 'strategy-call'] },
    { id: 'goal-strategy', label: 'Schedule a Tech Feasibility & Strategy Call (€95)', recommendedProductIds: ['strategy-call'] },
    { id: 'goal-maintenance', label: 'Get Website Hosting & Maintenance (Starting at €50/mo)', recommendedProductIds: ['hosting-maintenance'] },
    { id: 'goal-fix', label: 'Get Support & Custom Fixes (€75/hr)', recommendedProductIds: ['tech-support'] },
    { id: 'goal-workshops', label: 'Group Workshops & Speaking (Starting at €499)', recommendedProductIds: ['workshops-speaking', 'strategy-call'] },
    { id: 'all-services', label: 'Show all service levels & options (€50 - €499+)', recommendedProductIds: ['one-page-site', 'multi-page-site', 'strategy-call', 'hosting-maintenance', 'tech-support', 'workshops-speaking'] }
  ] as BookingGoal[],

  // Modal Step Headers
  modalBadgeText: "Final Step",
  modalTitleText: "Request Your Booking",
  modalSubtitleTemplate: "Book for {title} ({price}). No immediate payment required.",
  modalCloseIcon: "X",

  // Contact Info form fields
  fieldLabelName: "Name",
  fieldIconName: "User",
  fieldPlaceholderName: "Your Name",
  
  fieldLabelEmail: "Email",
  fieldIconEmail: "Mail",
  fieldPlaceholderEmail: "you@example.com",
  
  fieldLabelDescription: "Tell me about your request",
  fieldIconDescription: "MessageSquare",
  fieldPlaceholderDescription: "What are you trying to build or achieve? Let's figure out how I can make this happen.",

  // Scheduling Preference Box
  fieldLabelSchedulePref: "Scheduling Preference",
  fieldIconSchedulePref: "Calendar",
  schedulingModeFlexibleBtn: "Flexible Schedule",
  schedulingModeSpecificBtn: "Specific Dates & Times",

  // Weekdays Selector Settings
  flexibleWeekdaysLabel: "Preferred Weekdays (Select Multiple)",
  flexibleWeekdaysIcon: "Check",
  flexibleShortcutMF: "M-F",
  flexibleShortcutAll: "All",
  flexibleShortcutClear: "Clear",

  // Time Blocks Selector Settings
  flexibleTimeBlocksLabel: "Preferred Time Blocks (Select Multiple)",
  flexibleTimeBlocksIcon: "Clock",
  timeBlocksList: [
    { label: 'Morning (9:00 AM – 12:00 PM)', val: 'Morning (9:00 AM – 12:00 PM)' },
    { label: 'Afternoon (12:00 PM – 5:00 PM)', val: 'Afternoon (12:00 PM – 5:00 PM)' },
    { label: 'Evening (5:00 PM – 9:00 PM)', val: 'Evening (5:00 PM – 9:00 PM)' },
    { label: 'Night (9:00 PM – 12:00 AM)', val: 'Night (9:00 PM – 12:00 AM)' }
  ],
  flexibleNotesLabel: "Specific hours or scheduling requirements? (Optional)",
  flexibleNotesPlaceholder: "e.g. M-F 6pm to 9pm preferred, or Saturdays 10am-1pm",

  // Specific Calendar Date/Time Settings
  specificDatePickerLabel: "Pick Your Preferred Dates (Select Multiple)",
  specificDatePickerIcon: "Calendar",
  specificTimePickerLabel: "Preferred Times (Select Multiple)",
  specificTimePickerIcon: "Clock",
  specificNoDatesMessage: "Select one or more dates above to see available times.",

  // Submit Buttons
  submitButtonTextNormal: "Confirm & Send Request",
  submitButtonTextSubmitting: "Submitting request...",
  submitHelperText: "Andrew will follow up via email to finalize logistics.",

  // Success Confirmation Screen
  successBadge: "✓",
  successTitle: "Request Sent!",
  successMessageTemplate: "Thank you for reaching out, {name}. I will review your project details and get back to you shortly to confirm the scheduled call and details.",
  successReturnButtonText: "Return Home",
  successReturnButtonLink: "/"
};
