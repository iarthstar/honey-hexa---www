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
  { label: "BEHANCE", href: "https://behance.net/honeyhexa" },
  { label: "BENTO", href: "https://bento.me/honeyhexa" },
  { label: "READCV", href: "https://read.cv/honeyhexa" },
];

const ORIGIN = "https://honeyhexa.com";
const ROUTES = {
  ABOUT: "/about",
  SERVICES: "/services",
  WORK: "/work",
  CONTACT: "/contact",
};
const addToOrigin = (path = "") => `${ORIGIN}${path}`;

// ------------------------------------------------------ METADATA ------ START

const generateDefaultMetaData = (o) => {
  const title = `Honey Hexa | ${o?.title}`;
  const desc =
    o?.desc ??
    "We turn your Ideas into Digital Products. Unleash the Power of Your Brand, Improve your online presence and customer experience with us";
  const imgUrl = addToOrigin("/meta/honey_hexa_og.png");
  return {
    title: title,
    description: desc,
    alternates: {
      canonical: addToOrigin(o?.path),
    },
    category: "technology",
    openGraph: {
      title: title,
      description: desc,
      url: addToOrigin(o?.path),
      siteName: title,
      images: [
        {
          url: imgUrl,
          alt: 'Honey Hexa | Image Alt',
          type: 'image/png',
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: desc,
      creator: "@honeyhexa",
      handle: '@honeyhexa',
      site: '@honeyhexa',
      cardType: 'summary_large_image',
    },
    appleWebApp: {
      title: title,
      statusBarStyle: "black-translucent",
      startupImage: [ imgUrl],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};

export const METADATA_HOME = generateDefaultMetaData({
  title: "Home",
  desc: "We turn your Ideas into Digital Products. Unleash the Power of Your Brand, Improve your online presence and customer experience with us",
});

export const METADATA_SERVICES = generateDefaultMetaData({
  title: "Services",
  desc: "We aim to provide you comprehensive suite of services to help your businesses build, maintain, and grow their online presence and brand identity.",
  path: ROUTES.SERVICES,
});

export const METADATA_ABOUT = generateDefaultMetaData({
  title: "About",
  desc: "Elevate Your Digital Game with Honey Hexa's Cutting-Edge Strategies.",
  path: ROUTES.ABOUT,
});

export const METADATA_CONTACT = generateDefaultMetaData({
  title: "Contact",
  desc: "Book Now, Free consultation for your digital needs, we love to connect with our partners and help them with their way forward.",
  path: ROUTES.CONTACT,
});

export const METADATA_WORK = generateDefaultMetaData({
  title: "Work",
  desc: "Design portfolio and case studies of branding, marketing website, UI/UX design, and mobile app design work by Honey Hexa.",
  path: ROUTES.WORK,
});

export const METADATA_NOT_FOUND = generateDefaultMetaData({
  title: "404",
  desc: "Book Now, Free consultation for your digital needs, we love to connect with our partners and help them with their way forward.",
});

// ------------------------------------------------------ METADATA -------- END
