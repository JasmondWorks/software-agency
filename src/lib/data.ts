// ─── TEAM ────────────────────────────────────────────────────────────────────
export const team = [
  {
    id: "obafemi",
    name: "Obafemi Olorede",
    role: "Software Engineer",
    // badge: "Co-founder",
    badge: null,
    initials: "OO",
    color: "navy",
    bio: "Full-stack · React, Next.js, Node, NestJS",
    skills: ["Next.js", "NestJS", "PostgreSQL"],
  },
  {
    id: "daniel",
    name: "Daniel Johnson",
    role: "Product Designer",
    badge: null,
    initials: "DJ",
    color: "teal",
    bio: "UX · Interface design · Design systems",
    skills: ["Figma", "UX Research", "Prototyping"],
  },
  {
    id: "donvictory",
    name: "Donvictory Adewumi",
    role: "Software Engineer",
    badge: null,
    initials: "DA",
    color: "coral",
    bio: "Backend · APIs · Systems architecture",
    skills: ["Node.js", "APIs", "Databases"],
  },
  {
    id: "olaoluwa",
    name: "Olaoluwa Olorede",
    role: "Software Engineer",
    badge: null,
    initials: "OO",
    color: "blue",
    bio: "Frontend · Mobile · React ecosystem",
    skills: ["React", "React Native", "TypeScript"],
  },
  {
    id: "zion",
    name: "Zion Adeniran",
    role: "Software Engineer",
    badge: null,
    initials: "ZA",
    color: "rose",
    bio: "Full-stack · Cloud · Infrastructure",
    skills: ["Full-stack", "Cloud", "DevOps"],
  },
  {
    id: "jude",
    name: "Jude Bassey",
    role: "Software Engineer",
    badge: null,
    initials: "JB",
    color: "amber",
    bio: "Engineering · Product development",
    skills: ["Engineering", "Development"],
  },
  {
    id: "david",
    name: "David Otitolaye",
    role: "Software Engineer",
    badge: null,
    initials: "DO",
    color: "green",
    bio: "Engineering · Product development",
    skills: ["Engineering", "Development"],
  },
] as const;

// ─── SERVICES ────────────────────────────────────────────────────────────────
export const services = [
  {
    num: "01",
    title: "Full product builds",
    description:
      "End-to-end development across web and mobile — from architecture and API design to frontend, deployment, and monitoring.",
    tags: ["React / Next.js", "React Native", "Node / NestJS", "PostgreSQL", "Docker"],
  },
  {
    num: "02",
    title: "AI integration",
    description:
      "We identify where AI creates compound value and integrate it into your core workflows — document processing, recommendations, automation.",
    tags: ["LLM integration", "AI audits", "Workflow automation", "RAG systems"],
  },
  {
    num: "03",
    title: "Technical consultation",
    description:
      "Architecture reviews, security audits, and strategic advisory. Ideal for startups that need a technical co-founder without the equity commitment.",
    tags: ["Fractional CTO", "Security audit", "Architecture review", "Tech discovery"],
  },
  {
    num: "04",
    title: "Product design",
    description:
      "UX research, interface design, and design systems that bridge the gap between what users need and what engineers can build efficiently at scale.",
    tags: ["Figma", "Design systems", "UX research", "Prototyping"],
  },
  {
    num: "05",
    title: "DevOps & infrastructure",
    description:
      "CI/CD pipelines, containerization, cloud deployment, and monitoring. Systems your team can actually operate — not just ones that work on launch day.",
    tags: ["Docker", "CI/CD", "AWS / GCP", "Observability"],
  },
  {
    num: "06",
    title: "Product discovery sprint",
    description:
      "A two-week deep-dive delivering a Product Blueprint — scope, architecture, risk analysis, and build cost. Yours to keep regardless of who builds it.",
    tags: ["₦300k–₦600k", "2 weeks", "8 deliverables"],
  },
] as const;

// ─── PACKAGES ────────────────────────────────────────────────────────────────
export const packages = [
  {
    id: "discovery",
    name: "Discovery",
    description: "For founders who need clarity before committing to a full build.",
    price: "₦300k–600k",
    period: "one-time sprint · 2 weeks",
    featured: false,
    badge: null,
    features: [
      { label: "Product Blueprint document", included: true },
      { label: "Technical architecture spec", included: true },
      { label: "Security risk assessment", included: true },
      { label: "MVP scope + cost estimate", included: true },
      { label: "2 stakeholder workshops", included: true },
      { label: "Dedicated build team", included: false },
      { label: "Ongoing support retainer", included: false },
    ],
    cta: "Book a sprint",
  },
  {
    id: "build",
    name: "Build & launch",
    description: "Full product development from architecture to production deployment.",
    price: "₦1.5M+",
    period: "project-based · milestone billing",
    featured: true,
    badge: "Most popular",
    features: [
      { label: "Everything in Discovery", included: true },
      { label: "Full-stack product development", included: true },
      { label: "Web + mobile (if required)", included: true },
      { label: "CI/CD + cloud deployment", included: true },
      { label: "Security handoff report", included: true },
      { label: "30-day post-launch support", included: true },
      { label: "Ongoing retainer (optional add-on)", included: false },
    ],
    cta: "Start a project",
  },
  {
    id: "retainer",
    name: "Retainer",
    description: "Ongoing technical partnership. Your team's on-demand senior engineers.",
    price: "₦500k+",
    period: "per month · 3-month minimum",
    featured: false,
    badge: null,
    features: [
      { label: "Dedicated engineer hours/month", included: true },
      { label: "Architecture advisory", included: true },
      { label: "Code reviews + mentorship", included: true },
      { label: "Security monitoring", included: true },
      { label: "Monthly reporting", included: true },
      { label: "Slack / WhatsApp access", included: true },
      { label: "AI audit (first month)", included: true },
    ],
    cta: "Talk to us",
  },
] as const;

// ─── STATS ───────────────────────────────────────────────────────────────────
export const stats = [
  { value: "40+", label: "Years combined experience" },
  { value: "7", label: "Specialists in-house" },
  { value: "3+", label: "Disciplines covered" },
  { value: "100%", label: "CAC Registered" },
  { value: "3x", label: "Avg. load capacity built-in" },
] as const;

// ─── PROCESS ─────────────────────────────────────────────────────────────────
export const processSteps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We map your problem space, technical requirements, and business goals. Output: a Product Blueprint.",
  },
  {
    num: "02",
    title: "Architecture",
    description:
      "System design, data models, API contracts, and security baseline — before a single line of product code.",
  },
  {
    num: "03",
    title: "Build",
    description:
      "Milestone-based development with weekly demos. You see real progress, not just status updates.",
  },
  {
    num: "04",
    title: "Launch & handoff",
    description:
      "Full documentation, runbooks, and a security handoff report. Your team can own it from day one.",
  },
] as const;

// ─── CREDIBILITY ─────────────────────────────────────────────────────────────
export const credibilityItems = [
  {
    icon: "🏛",
    bg: "#eff4ff",
    title: "CAC registered",
    description:
      "Formally incorporated under the Corporate Affairs Commission, Nigeria. You're engaging a legal business entity, not an individual.",
  },
  {
    icon: "🔒",
    bg: "#f0fdfa",
    title: "Security by default",
    description:
      "Every product ships with OWASP-aligned practices, JWT hardening, rate limiting, and encrypted data at rest — documented and handed over.",
  },
  {
    icon: "📄",
    bg: "#fff8e1",
    title: "You own everything",
    description:
      "Full IP transfer on delivery. Source code, docs, and infrastructure configs belong to you from the moment we deploy.",
  },
  {
    icon: "📊",
    bg: "#fce4ec",
    title: "Milestone-based billing",
    description:
      "You never pay in full upfront. Payments are tied to delivered, verified milestones — protecting your investment at every stage.",
  },
  {
    icon: "⚡",
    bg: "#eff4ff",
    title: "AI-literate team",
    description:
      "We evaluate your entire product for where AI genuinely compounds value and integrate it into core workflows — not as a feature add-on.",
  },
  {
    icon: "🌍",
    bg: "#e8f5e9",
    title: "Built for Nigeria & beyond",
    description:
      "We build offline-first where it matters, design for low-bandwidth environments, and understand the unique infrastructure of the Nigerian market.",
  },
] as const;

// ─── SOCIAL ──────────────────────────────────────────────────────────────────
export const socialLinks = [
  { label: "Twitter / X", handle: "@randora_hq", color: "#1d9ef1", href: "https://x.com/randora_hq" },
  { label: "LinkedIn", handle: "Randora", color: "#0a66c2", href: "https://linkedin.com/company/randora" },
  { label: "Instagram", handle: "@randora_hq", color: "#e1306c", href: "https://instagram.com/randora_hq" },
  { label: "GitHub", handle: "github.com/randora", color: "#333", href: "https://github.com/randora" },
  { label: "WhatsApp Business", handle: "", color: "#25d366", href: "https://wa.me/234XXXXXXXXXX" },
] as const;
