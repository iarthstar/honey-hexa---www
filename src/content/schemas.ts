import { ORIGIN } from "@/constants";

export const ORGANISATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Honey Hexa",
  legalName: "Honey Hexa Pvt. Ltd.",
  url: ORIGIN,
  logo: {
    "@type": "ImageObject",
    url: "https://enterprisemarketing.com/images/logo.png",
    width: 600,
    height: 60,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-95120-54457",
      contactType: "Chief Business Officer",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/honeyhexa",
    "https://twitter.com/honeyhexa",
    "https://www.facebook.com/honeyhexa",
    "https://www.youtube.com/honeyhexa",
    "https://instagram.com/honeyhexa",
  ],
  founder: {
    "@type": "Person",
    name: "Honey Gajjar",
    sameAs: "https://www.linkedin.com/in/honeygajjar",
  },
  knowsAbout: [
    "Search Engine Optimization",
    "Content Marketing",
    "Digital Marketing",
    "Marketing Automation",
    "Lead Generation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Consulting",
          description:
            "Comprehensive SEO services to boost your search engine rankings and online visibility.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content Marketing",
          description:
            "Content creation and distribution services to engage your target audience.",
        },
      },
    ],
  },
  interactionStatistic: {
    "@type": "InteractionCounter",
    interactionType: { "@type": "CommunicateAction" },
    userInteractionCount: "50000",
  },
};

export const WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://enterprisemarketing.com/services/seo-consulting",
  name: "SEO Consulting Services",
  description:
    "Comprehensive SEO consulting services to boost search engine rankings, improve online visibility, and drive more traffic to your enterprise website.",
  datePublished: "2024-01-10",
  dateModified: "2024-08-15",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://enterprisemarketing.com/images/seo-consulting-banner.jpg",
    width: 1200,
    height: 800,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://enterprisemarketing.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://enterprisemarketing.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SEO Consulting",
        item: "https://enterprisemarketing.com/services/seo-consulting",
      },
    ],
  },
  author: {
    "@type": "Person",
    name: "Jane Doe",
    jobTitle: "SEO Consultant",
    sameAs: "https://www.linkedin.com/in/janedoe",
  },
  publisher: {
    "@type": "Organization",
    name: "Enterprise Marketing Inc.",
    url: "https://enterprisemarketing.com",
    logo: {
      "@type": "ImageObject",
      url: "https://enterprisemarketing.com/images/logo.png",
      width: 600,
      height: 60,
    },
    sameAs: [
      "https://www.linkedin.com/company/enterprisemarketing",
      "https://twitter.com/enterprisemkt",
      "https://www.facebook.com/enterprisemarketing",
      "https://instagram.com/enterprisemarketing",
    ],
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://enterprisemarketing.com/services/seo-consulting",
  },
  isPartOf: {
    "@type": "WebSite",
    name: "Enterprise Marketing",
    url: "https://enterprisemarketing.com",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1.page-title", "h2.page-subtitle", "p.intro-text"],
  },
  relatedLink: [
    {
      "@type": "WebPage",
      url: "https://enterprisemarketing.com/services/content-marketing",
      name: "Content Marketing Services",
    },
    {
      "@type": "WebPage",
      url: "https://enterprisemarketing.com/blog/seo-trends-2024",
      name: "SEO Trends 2024",
    },
  ],
  about: {
    "@type": "Thing",
    name: "SEO",
    sameAs: "https://en.wikipedia.org/wiki/Search_engine_optimization",
  },
  knowsAbout: [
    "SEO Consulting",
    "Search Engine Optimization",
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO",
  ],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://enterprisemarketing.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  interactionStatistic: {
    "@type": "InteractionCounter",
    interactionType: {
      "@type": "SearchAction",
    },
    userInteractionCount: "30000",
  },
};

export const LOCALBUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Enterprise Marketing Inc.",
  legalName: "Enterprise Marketing Solutions LLC",
  url: "https://enterprisemarketing.com",
  logo: {
    "@type": "ImageObject",
    url: "https://enterprisemarketing.com/images/logo.png",
    width: 600,
    height: 60,
  },
  image: {
    "@type": "ImageObject",
    url: "https://enterprisemarketing.com/images/office-front.jpg",
    width: 1200,
    height: 800,
  },
  description:
    "Enterprise Marketing Inc. provides digital marketing, SEO consulting, and content marketing services to businesses globally. Our goal is to increase visibility, drive traffic, and generate leads through advanced SEO and marketing strategies.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Marketing St",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94103",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "37.7749",
    longitude: "-122.4194",
  },
  hasMap: "https://www.google.com/maps/place/Enterprise+Marketing+Inc",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-555-1234",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: ["English", "Spanish"],
  },
  sameAs: [
    "https://www.linkedin.com/company/enterprisemarketing",
    "https://twitter.com/enterprisemkt",
    "https://www.facebook.com/enterprisemarketing",
    "https://instagram.com/enterprisemarketing",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$$",
  founder: {
    "@type": "Person",
    name: "Jane Doe",
    sameAs: "https://www.linkedin.com/in/janedoe",
  },
  foundingDate: "2010-03-15",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.9",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Client X",
      sameAs: "https://www.linkedin.com/in/clientx",
    },
    reviewBody:
      "Enterprise Marketing provided excellent SEO consulting services that improved our traffic by 150% in just 6 months.",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1.page-title", "h2.page-subtitle", "p.intro-text"],
  },
  knowsAbout: [
    "SEO Consulting",
    "Content Marketing",
    "Digital Marketing",
    "Marketing Automation",
    "Lead Generation",
  ],
  serviceArea: {
    "@type": "Place",
    geo: {
      "@type": "GeoShape",
      circle: {
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "37.7749",
          longitude: "-122.4194",
        },
        geoRadius: "100",
      },
    },
  },
  department: [
    {
      "@type": "Organization",
      name: "SEO Department",
      employee: {
        "@type": "Person",
        name: "Sarah Johnson",
        jobTitle: "SEO Manager",
        sameAs: "https://www.linkedin.com/in/sarahjohnson",
      },
    },
    {
      "@type": "Organization",
      name: "Content Marketing Department",
      employee: {
        "@type": "Person",
        name: "John Smith",
        jobTitle: "Content Manager",
        sameAs: "https://www.linkedin.com/in/johnsmith",
      },
    },
  ],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://enterprisemarketing.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
};
