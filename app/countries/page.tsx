import type { Metadata } from "next";
import Clients from "@/components/Clients";
import styles from "@/lib/styles";

export const metadata: Metadata = {
  title: "Countries We Serve | World Pass Immigration",
  description:
    "Expert immigration services to 10+ countries including Canada, United Kingdom, Australia, New Zealand, Germany, Singapore, UAE, Qatar, Malaysia, and Saudi Arabia.",
  openGraph: {
    title: "Countries We Serve | World Pass Immigration",
    description:
      "Expert immigration services to 10+ countries including Canada, UK, Australia, New Zealand, Germany, and more.",
    url: "https://worldpassimmigration.com/countries",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "World Pass Immigration - Countries We Serve" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Countries We Serve | World Pass Immigration",
    description:
      "Immigration services to Canada, UK, Australia, New Zealand, Germany, Singapore, UAE & more.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/countries" },
};

const countriesJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://worldpassimmigration.com" },
    { "@type": "ListItem", position: 2, name: "Countries", item: "https://worldpassimmigration.com/countries" },
  ],
};

export default function CountriesPage() {
  return (
    <div className="bg-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(countriesJsonLd) }}
      />
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Clients />
        </div>
      </div>
    </div>
  );
}
