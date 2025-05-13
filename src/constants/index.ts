// add icons link after

interface HeaderLink {
  text: string;
}

interface ServiceItem {
  title: string;
  list: string[];
  iconPath: string;
}

const headerLinks: HeaderLink[] = [
  {
    text: "About me",
  },
  {
    text: "Services"
  },
  {
    text: "My stack"
  },
  {
    text: "Contacts"
  }
];

const heroSliderText: string[] = [
  "Fast delivery",
  "Clean and maintainable code",
  "Project support",
  "Responsive design",
  "Scalable solutions",
  "Attention to detail",
  "Performance optimization",
  "SEO-friendly structure"
]

const serviceInfo: ServiceItem[] = [
  {
    title: "Creation of adaptive landing pages and multi-page sites",
    list: [
      "– Layout according to the layout (Figma/Sketch) using Tailwind CSS",
      "– Cross-browser and mobile support"
    ],
    iconPath: "/figma.png"
  },
  {
    title: "SPA development on React",
    list: [
      "– Routing setup (React Router)",
      "– Lazy loading (code splitting) for speed optimization"
    ],
    iconPath: "/router.svg"
  },
  {
    title: "Integration of external APIs",
    list: [
      "– Requests to REST/GraphQL services (fetch, axios, Apollo)",
      "– Data processing and implementation of UI logic"
    ],
    iconPath: "/api.png"
  },
  {
    title: "Component library / design system",
    list: [
      "– Reusable UI components (buttons, cards, modals)",
      "– Component documentation (Storybook)"
    ],
    iconPath: "/design.png"
  },
  {
    title: "Theme and styling with Tailwind CSS",
    list: [
      "– Creating a custom Tailwind configuration (colors, fonts, plugin)",
      "– Animations and interactive effects (hover, focus, transformations)"
    ],
    iconPath: "/tailwind.png"
  },
  {
    title: "Versioning and workflow",
    list: [
      "– Git/GitHub: branching, pull requests, code reviews",
      "– Setting up a 'clean' workflow (prettier, ESLint)"
    ],
    iconPath: "/git.png"
  },
  {
    title: "Documentation and support",
    list: [
      "– Preparation of README, launch instructions",
      "– Training the customer in basic operations (how to edit content, deploy)"
    ],
    iconPath: "/md.png"
  }
]

export { headerLinks, heroSliderText, serviceInfo }
export type { HeaderLink, ServiceItem }
