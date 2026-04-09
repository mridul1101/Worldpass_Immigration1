import type { Metadata } from "next";
import Billing from "@/components/Billing";
import styles from "@/lib/styles";

export const metadata: Metadata = {
  title: "Our Services | World Pass Immigration",
  description:
    "Comprehensive immigration services including study abroad, work visas, visitor visas, permanent residency, family sponsorship, and expert immigration consulting.",
  openGraph: {
    title: "Our Services | World Pass Immigration",
    description:
      "Comprehensive immigration services including study abroad, work visas, visitor visas, permanent residency, family sponsorship, and expert immigration consulting.",
    url: "https://worldpassimmigration.com/services",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "World Pass Immigration Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | World Pass Immigration",
    description:
      "Study abroad, work visas, visitor visas, PR, family sponsorship & expert consulting.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/services" },
};

const servicesJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://worldpassimmigration.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://worldpassimmigration.com/services" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: { "@type": "LocalBusiness", name: "World Pass Immigration" },
    serviceType: "Immigration Consulting",
    name: "Immigration Services",
    description:
      "Comprehensive immigration services including study abroad, work visas, visitor visas, permanent residency, family sponsorship, and expert consulting.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Immigration Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Study Abroad", description: "Admissions, study permits, and pre-departure support for world-class education." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Work & Employment Visas", description: "Professional work visa assistance for skilled professionals and healthcare workers." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Visitor & Tourist Visas", description: "Complete visitor visa assistance for vacations, family visits, and business trips." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Permanent Residency", description: "Express Entry, PNP, family sponsorship, and investment immigration pathways." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Family Sponsorship", description: "Spousal, parent, grandparent, and dependent child sponsorship programs." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Immigration Consulting", description: "Expert profile evaluation and pathway recommendations with free initial assessment." } },
      ],
    },
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-muted min-h-[calc(100vh-80px)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Billing />
        </div>
      </div>
    </div>
  );
}
