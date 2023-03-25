export const SERVICES = [
  {
    serviceName: "Brand & Identity",
    tags: ["Logo", "Design System", "Print"],
  },
  {
    serviceName: "Design",
    tags: ["UI / UX", "Research", "Prototype"],
  },
  {
    serviceName: "Development",
    tags: ["Web", "App", "Backend"],
  },
  {
    serviceName: "Digital Marketing",
    tags: ["SEO", "SMM", "PPC", "CTR"],
  },
  {
    serviceName: "Content Creation",
    tags: ["Illustration", "Renders", "Copy"],
  },
];

export const WORKS = [
  { workName: "Kuber Creations", tags: [] },
  { workName: "Netra Constructions", tags: [] },
  { workName: "Harshid Engravers", tags: [] },
  { workName: "AJK Masala", tags: [] },
];

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { label: "TWITTER", href: "https://twitter.com/honeyhexa" },
  { label: "DRIBBBLE", href: "https://dribbble.com/honeyhexa" },
  { label: "INSTAGRAM", href: "https://instagram.com/honeyhexa" },
];

const ORIGIN = "https://www.honeyhexa.com";
const ROUTES = {
  ABOUT: '/about',
  SERVICES: '/services',
  WORK: '/work',
  CONTACT: '/contact',
}
const addToOrigin = (path) => `${ORIGIN}${path}`;

// ------------------------------------------------------ METADATA ------ START

export const METADATA_HOME = {
  title: "Honey Hexa | Home",
  description:
    "We turn your Ideas into Digital Products. Unleash the Power of Your Brand, Improve your online presence and customer experience with us",
  alternates: {
    canonical: ORIGIN,
  },
};

export const METADATA_SERVICES = {
  title: "Honey Hexa | Services",
  description:
    "We aim to provide you comprehensive suite of services to help your businesses build, maintain, and grow their online presence and brand identity.",
  alternates: {
    canonical: addToOrigin(ROUTES.SERVICES),
  },
};

export const METADATA_ABOUT = {
  title: "Honey Hexa | About",
  description:
    "Elevate Your Digital Game with Honey Hexa's Cutting-Edge Strategies.",
  alternates: {
    canonical: addToOrigin(ROUTES.ABOUT),
  },
};

export const METADATA_CONTACT = {
  title: "Honey Hexa | Contact",
  description:
    "Book Now, Free consultation for your digital needs, we love to connect with our partners and help them with their way forward.",
  alternates: {
    canonical: addToOrigin(ROUTES.CONTACT),
  },
};

export const METADATA_WORK = {
  title: "Honey Hexa | Work",
  description:
    "Design portfolio and case studies of branding, marketing website, UI/UX design, and mobile app design work by Honey Hexa.",
  alternates: {
    canonical: addToOrigin(ROUTES.WORK),
  },
};

export const METADATA_NOT_FOUND = {
  title: "Honey Hexa | 404",
  description:
    "Book Now, Free consultation for your digital needs, we love to connect with our partners and help them with their way forward.",
  alternates: {
    canonical: ORIGIN,
  },
};

// ------------------------------------------------------ METADATA -------- END
