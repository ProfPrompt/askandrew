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
  tagline: "Custom Web Apps & Practical AI Support",
  
  // Rotating phrases in the typing-loop sub-header
  phrases: [
    "to build your new website",
    "to create your profile site",
    "to bring your app idea to life",
    "to teach you how to use AI",
    "to automate your daily tasks",
    "to clean up your workflows",
    "to run a fun workshop",
    "to stop manual copy-pasting"
  ],
  
  description: "I help you build simple websites, create personal profiles, design friendly app prototypes, and automate repetitive daily work in under a week. No complex software jargon, no endless meetings, just real tools that work.",
  descriptionMobile: "I help you build simple websites, create profiles, design friendly app prototypes, and automate daily work in under a week—without the technical jargon.",
  
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
  quote: "I help small business owners, startups, and curious builders turn their ideas into custom websites, simple apps, and smart automations. No heavy technical jargon, no six-month roadmaps, and no corporate fluff. I build what you need in under a week, show you exactly how to manage it yourself, and explain everything plain and simple.",
  
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
  buttonLink: "/book"
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
  // Main Products
  'live-prototyping': {
    id: 'live-prototyping',
    title: 'Custom Websites, Apps & Digital Tools',
    timeLabel: 'Interactive Web Prototype Sprint',
    price: 'Starting from $599',
    description: "Need a slick new website, app, or tool for your company, brand, or even just to manage your dog's Instagram? I'll use AI to create exactly what you need and want, and then teach you how to manage it yourself so you don't have to keep paying developers to make small updates.",
    includes: "A functional, live-hosted web app or site, plus clear instructions so you can easily run it.",
    icon: 'Sparkles',
    linkText: 'Book a Sprint',
    link: '/book/live-prototyping'
  },
  'custom-workspace': {
    id: 'custom-workspace',
    title: 'Optimizing AI for Work & Daily Life',
    timeLabel: 'Save Hours of Manual Work',
    price: 'Starting from $299',
    description: "From daily meal planning to complex spreadsheet hacking, AI can make life so much easier. Let me show you how to use AI to eliminate boring tasks, streamline your manual workflows, and save you hours of typing every single week.",
    includes: "Private, custom-tailored prompts and automated workflows that you can copy-paste and use instantly.",
    icon: 'Bot',
    linkText: 'Get Automated',
    link: '/book/custom-workspace'
  },
  'app-updates': {
    id: 'app-updates',
    title: 'General Tech Support & Fixes',
    timeLabel: 'Quick Sync + Delivery within 48 hours',
    price: '$75',
    description: "Got a minor bug, need a small update, or have a general technical issue that is slowing you down? I am here for fast-tracked troubleshooting, simple hosting setups, and friendly tech care.",
    includes: "Rapid resolution of website or app issues completed with a 48-hour turnaround.",
    icon: 'Wrench',
    linkText: 'Book a Tech Fix',
    link: '/book/app-updates'
  },
  'technical-roadmap': {
    id: 'technical-roadmap',
    title: 'Technical Feasibility & Strategy',
    timeLabel: '45-Minute Brainstorming Call',
    price: '$95',
    description: "Have a unique app idea or an AI tool concept? Let's stress-test the logic before you spend your savings or months of time. We will vet your concept, map out how it works, and design a lean, fast strategy to bring it to life.",
    includes: "A clear, conversational 45-minute blueprint and an execution plan with zero tech jargon.",
    icon: 'Map',
    linkText: 'Book a Strategy Call',
    link: '/book/technical-roadmap'
  },
  
  // Additional / Secondary Products
  'ai-workshops': {
    id: 'ai-workshops',
    title: 'AI Education & Workshops',
    timeLabel: '45-Min Lesson',
    price: '$95',
    description: "Does AI scare you? Unpack that with me through friendly, one-on-one sessions, active workshops, or group training. Learn how to use it, the pitfalls, the ethics, and how to make it highly practical for your business.",
    includes: "A live personalized training session, a custom prompt library, and actionable guides.",
    icon: 'BookOpen',
    linkText: 'Book a Session',
    link: '/book/ai-strategy-workshops'
  },
  'managed-hosting': {
    id: 'managed-hosting',
    title: 'Managed Web Care & Hosting',
    timeLabel: 'Ongoing Monthly Support',
    price: 'Starting from $50/mo',
    description: "Keep your site fast, safe, and up-to-date. Forget about DNS settings, SSL certificates, or server crashes. I handle the under-the-hood stuff so you can focus on running your business.",
    includes: "High-performance hosting, automated daily backups, security monitoring, and small monthly updates.",
    icon: 'Server',
    linkText: 'Inquire About Hosting',
    link: '/book/managed-hosting'
  },
  'speaking': {
    id: 'speaking',
    title: 'Speaking, Education... & Chess!',
    timeLabel: 'Custom Duration',
    price: 'Starting from $750',
    description: "Need an engaging, jargon-free speaker to explain technology to your team, or want to master the chessboard? I offer fun presentations, group training events, and friendly chess masterclasses to sharpen your critical thinking.",
    includes: "Interactive educational sessions or custom chess lessons for all skill levels.",
    icon: 'Mic',
    linkText: 'Check Availability',
    link: '/book/speaking'
  },
  'custom-integration': {
    id: 'custom-integration',
    title: 'Connecting Your Software Stack',
    timeLabel: 'Tailored Scope',
    price: 'Starting from $399',
    description: "Tired of manually copy-pasting data between scattered windows? I build simple, custom connections so your spreadsheets, email, and CRMs talk to each other automatically without manual hassle.",
    includes: "Clean, custom connections that sync your favorite digital tools and eliminate double-entry.",
    icon: 'GitMerge',
    linkText: 'Inquire About Integration',
    link: '/book/custom-integration'
  },
  'other': {
    id: 'other',
    title: 'Custom Requests & Help',
    timeLabel: 'Custom Duration',
    price: 'Custom Quote',
    description: "Got a unique request or need help that doesn't fit the boxes above? Let's have a friendly chat and figure out a custom solution tailored to your goals.",
    includes: "A tailored custom solution designed specifically for your goals and technical requirements.",
    icon: 'HelpCircle',
    linkText: 'Book a Discovery Call',
    link: '/book/other'
  }
};

// ============================================================================
// SECTION 12: THE "HOW IT WORKS" PROGRESSIVE FLOW 
// ============================================================================

export const HOW_IT_WORKS_SECTION = {
  title: "How it works",
  bubbleSad: "Can you help?",
  bubbleDrew: "No problem!",
  bubbleHappy: "Totally worth it!",
  
  // Custom graphics/portraits for process bubbles
  imageSad: "https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/howtosad.jpeg",
  imageDrew: "https://imgx.vipkidstatic.com/global/ter/teacher/avatar/1619214/6e1cafeb00cc472b9a366c08fb82fa9e.png",
  imageHappy: "https://raw.githubusercontent.com/ProfPrompt/askandrew.github.io/refs/heads/main/assets/howtohappy.jpeg",
  
  steps: [
    "Book a friendly session to share your goals, website ideas, or repetitive daily chores.",
    "We'll map out a simple, fast strategy and figure out the easiest way to make it happen.",
    "We can hop on a live screen-share to build your layout, setup your AI, or customize your site together.",
    "We'll thoroughly test your new setup to make sure everything works perfectly and feels comfortable.",
    "You leave our session with a working website, an automated workspace, or the skills to use AI like a pro."
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
  ctaText?: string;
}

export const SHOWCASE_SECTION = {
  titleSmall: "Featured Work",
  titleLarge: "Showcase",
  webAppsTitle: "🚀 Web Apps: Because the internet needs more cool stuff",
  webDesignTitle: "🎨 Web Design: Templates that don't look like they were made in 1998"
};

export const SHOWCASE_PROJECTS: {
  webApps: ShowcaseProject[];
  webDesign: ShowcaseProject[];
} = {
  webApps: [
    {
      title: "Rewind",
      description: "A personalized discovery environment for tracking down forgotten cult classics and obscure cinema. Skip the mainstream streaming algorithms; this engine uses semantic text mapping to curate highly niche film recommendations based on obscure titles, specific micro-moods, or open-ended prompts.",
      image: "https://raw.githubusercontent.com/AndrewGWatts/AndrewGWatts.github.io/main/assets/rewind.png",
      alt: "Rewind AI custom workspace film search layout illustration",
      link: "https://ai.studio/apps/13260ac5-a193-4e63-b85c-8d167b683286?fullscreenApplet=true",
      ctaText: "Remix in AI Studio ↗"
    },
    {
      title: "Loading Now...",
      description: "Finally, a way to visualize exactly how much of your decade you’ve spent staring at a progress bar. It tracks your day, week, month, year, and decade, all wrapped in the warm, pixelated nostalgia of the OS interfaces we probably should have left in the 90s.",
      image: "https://raw.githubusercontent.com/AndrewGWatts/AndrewGWatts.github.io/main/asset/placeholder-loading-now.png",
      alt: "Loading Now web application project screenshot showing custom web development work",
      link: "https://loadingnowapp.github.io",
      repo: "https://github.com/loadingnowapp/loadingnowapp.github.io"
    },
    {
      title: "Advantaged Player Trainer",
      description: "The perfect tool for anyone who wants to lose money at the casino, but slightly slower than everyone else. This app turns your brain into a card-counting machine so you can be the most popular person at the blackjack table, right until security politely asks you to leave.",
      image: "https://raw.githubusercontent.com/AndrewGWatts/AndrewGWatts.github.io/main/asset/placeholder-advantaged-player-webapp.png",
      alt: "Advantaged Player Trainer web app screenshot showing interactive dashboard and analytics",
      link: "https://advantagedplayer.github.io",
      repo: "https://github.com/advantagedplayer/advantagedplayer.github.io"
    },
    {
      title: "Astro Dash",
      description: "Mashup of a classic shooter and an endless runner. Tap to blast, swipe up or down to dodge, stack that score multiplier, and try not to turn your ship into expensive space junk. Designed for mobile, so you can crash in style anywhere.",
      image: "https://raw.githubusercontent.com/AndrewGWatts/AndrewGWatts.github.io/main/asset/astro_dash_placeholder.png",
      alt: "Astro Dash dashboard screenshot showing custom AI integration and data visualization",
      link: "https://astrodashapp.github.io",
      repo: "https://github.com/astrodashapp/astrodashapp.github.io"
    }
  ],
  webDesign: [
    {
      title: "Podcast Producer Profile",
      description: "A dark, highly stylized landing page for an audio engineer. Built to showcase a portfolio of top-tier podcasts.",
      image: "https://raw.githubusercontent.com/AndrewGWatts/AndrewGWatts.github.io/main/asset/podcast-producer-site.png",
      alt: "Podcast Producer Profile website design showcasing clean responsive layout",
      link: "https://LindsayLafreniere.github.io",
      repo: "https://github.com/LindsayLafreniere/LindsayLafreniere.github.io"
    },
    {
      title: "Developer Portfolio",
      description: "A minimalist, high-contrast terminal-inspired portfolio designed for software engineers who want their code to speak.",
      image: "https://raw.githubusercontent.com/AndrewGWatts/AndrewGWatts.github.io/main/asset/developer-portfolio-site.png",
      alt: "Developer Portfolio website design showing modern aesthetic and dark mode styling",
      link: "https://AndrewGWatts.github.io",
      repo: "https://github.com/AndrewGWatts/AndrewGWatts.github.io"
    },
    {
      title: "LinkSprout",
      description: "A minimalist, modern \"link-in-bio\" page designed to get your digital footprint organized without the bloat. It's the perfect landing page for when you need a place to stash your links, look professional, and stop sending people a disorganized mess of URLs.",
      image: "https://raw.githubusercontent.com/AndrewGWatts/AndrewGWatts.github.io/main/asset/linksprout-thumbnail.png",
      alt: "LinkSprout modern minimalist link-in-bio landing page template screenshot",
      link: "https://linksprout.github.io",
      repo: "https://github.com/LinkSprout/LinkSprout.github.io"
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
    { id: 'build-website', label: 'Build my website or web app', recommendedProductIds: ['live-prototyping', 'app-updates', 'managed-hosting'] },
    { id: 'talk-app-idea', label: 'Talk about an app idea & strategy', recommendedProductIds: ['technical-roadmap', 'other'] },
    { id: 'design-app', label: 'Work with me to design an app', recommendedProductIds: ['live-prototyping', 'technical-roadmap'] },
    { id: 'automate-tasks', label: 'Automate my daily tasks & workflows', recommendedProductIds: ['custom-workspace', 'custom-integration', 'ai-workshops'] },
    { id: 'speaking-gig', label: 'Book a speaking or educational gig', recommendedProductIds: ['speaking'] },
    { id: 'other-help', label: 'Other custom request', recommendedProductIds: ['other'] },
    { id: 'all-services', label: 'All services', recommendedProductIds: ['live-prototyping', 'custom-workspace', 'app-updates', 'technical-roadmap', 'ai-workshops', 'managed-hosting', 'speaking', 'custom-integration', 'other'] }
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
  fieldPlaceholderDescription: "What are you trying to build or achieve? Let's figure out how I can help.",

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
