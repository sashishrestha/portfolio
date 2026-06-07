export const info = {
  name: "Sashi Shrestha",
  title: "Senior UI/UX Designer",
  tagline: "Crafting digital experiences that solve real problems.",
  bio: "Designer, problem solver, and product thinker with 12+ years of experience creating digital products that are both visually compelling and strategically effective.",
  location: "Kathmandu, Nepal",
  email: "hellosashishrestha@gmail.com",
  available: true,
  social: {
    linkedin: "https://www.linkedin.com/in/sashishrestha/",
    dribbble: "https://dribbble.com/sashishrestha",
    behance: "https://www.behance.net/sashishrestha",
  },
};

export const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "14+", label: "Happy Clients" },
  { value: "6", label: "Companies" },
];

export const experience = [
  {
    role: "Sr. UI/UX Designer/Front End Developer",
    company: "BeyondID",
    period: "Mar 2019 - Present",
    duration: "+7 years",
    type: "Full-time",
    logo: "/images/beyondid-keydata-cyber.svg",
    description:
      "Leading UI/UX design and front-end development for enterprise and SaaS products. Owning end-to-end design — from discovery and wireframing through to polished, production-ready interfaces.",
    highlights: [
      "Designed Identity Command Center (ICC), BeyondID's enterprise identity platform built on Okta, Auth0, EntraID, Sailpoint, Ping and CyberArk, serving IT admins with intuitive user flows and dashboards for managing complex identity security needs.",
      "Built and maintained a component design system used by the dev team",
      "Led branding and product design for multiple fintech products",
    ],
  },
  {
    role: "Sr. UI/UX Designer/Front End Developer",
    company: "Braindigit",
    period: "Dec 2016 - Feb 2019",
    duration: "2 years 3 months",
    type: "Full-time",
    logo: "/images/braindigit.svg",
    description:
      "Leading UI/UX design and front-end development for enterprise and SaaS products. Owning end-to-end design — from discovery and wireframing through to polished, production-ready interfaces.",
    highlights: [
      "Led the UI/UX design of Contentder Website Builder, a no-code platform enabling businesses to create and manage professional e-commerce websites through customizable templates and a centralized content management dashboard",
      "Designed responsive interfaces for real estate platforms, improving property discovery, listing management, search functionality, and user engagement across web and mobile devices.",
      "Contributed to the design of HRM and payroll-related mobile applications, focusing on employee management, attendance tracking, payroll workflows, and administrative processes.",
      "Collaborated with product managers, developers, and stakeholders to define user journeys, wireframes, prototypes, and scalable design systems across multiple products.",
      "Worked closely with front-end teams to bridge the gap between design and implementation, ensuring pixel-perfect execution and a seamless user experience.",
    ],
  },
  {
    role: "Sr. UI/UX Designer",
    company: "Continental Solution / Seattle App Lab",
    period: "Jan 2015 — Nov 2016",
    duration: "~2 years",
    type: "Full-time",
    logo: "/images/continental.svg",
    description:
      "Designed and developed responsive web applications and mobile UIs for US-based clients.",
    highlights: [
      "Delivered high-fidelity prototypes for mobile-first applications",
      "Collaborated directly with offshore US stakeholders",
    ],
  },
  {
    role: "Web Designer",
    company: "Harati Computer Services P. Ltd.",
    period: "Apr 2014 — Jan 2015",
    duration: "~1 year",
    type: "Full-time",
    logo: "/images/harati.svg",
    description:
      "Handled end-to-end design for client websites, print, and digital marketing assets.",
    highlights: [
      "Designed and delivered 10+ client websites",
      "Managed branding projects from concept to delivery",
    ],
  },
  {
    role: "Web & Graphic Designer",
    company: "Zhyaa IT Media P. Ltd.",
    period: "Jan 2012 — Mar 2014",
    duration: "~2 years",
    type: "Full-time",
    logo: "/images/3xcel.svg",
    description:
      "Designed web interfaces and graphic assets for diverse client portfolio.",
    highlights: [],
  },
  {
    role: "Graphic Designer",
    company: "Nagarjun Offset Press",
    period: "2009 — 2012",
    duration: "~4 years",
    type: "Part-time",
    logo: "/images/NOP.svg",
    description:
      "Designed printing/digital material.",
    highlights: [],
  },
];





export const caseStudies = [
  {
    id: 1,
    title: "Identity Command Center",
    subtitle:
      "Designing a complex B2B security dashboard to reduce administrative setup time by 40%.",
    category: "Product Design",
    challenge:
      "ICC had grown screen by screen — each page was functional but built in isolation. There was no unified visual language, no shared component library, and no token system connecting design to code. The product worked, but it didn't feel like a cohesive product. My mandate was to establish the design foundation and then systematically elevate each critical screen on top of it",
    process: [
      "Stakeholder interviews to map mental models and pain points",
      "Competitive analysis of Okta, Auth0, EntraID and Sailpoints",
      "Used AI for research, ideate and prototype",
      "High-fidelity prototypes iterated over 4 rounds of user feedback",
      "Built component system in Figma synced to React codebase",
    ],
    outcome:
      "Shipped to enterprise clients with a 40% reduction in onboarding support tickets. The component system cut design-to-dev handoff time in half.",
    color: "#1a2a1a",
    accent: "#4ade80",
    img: "/images/icc.png",
    logo: "/images/ICC-logo.svg",
    link: "/images/Identity-command-center.pdf",
  },
  {
    id: 2,
   title: "Estimator Platform",
subtitle: "One design system powering four estimation contexts",
category: "Enterprise UX / Design System",
challenge:
  "Four distinct business domains — service, product, package, and SMS estimation — needed a unified platform that felt consistent without forcing users to relearn the UI every time they switched contexts.",
process: [
  "Mapped all four estimation workflows to identify shared interaction patterns",
  "Built a single token-based design system (33 tokens, 17 components) used across all contexts",
  "Designed a 6-step progressive wizard for complex service estimation with smart branching for T&M vs Fixed Fee contracts",
  "Implemented a context-switching model with shared nav shell — URL, nav, and branding swap instantly without cognitive overhead",
],
outcome:
  "169 pages across 50 routes delivered from one codebase and one design system. Users who learn one context navigate all four without relearning any UI patterns — reducing adoption friction across teams.",
color: "#278f2e",
    accent: "#818cf8",
    img: "/images/estimator-login.jpeg",
    logo: "/images/estimator-logo.svg",
    link: "/images/Service-Estimator.pdf",
  },
];
