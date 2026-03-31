import type { Metadata } from "next";
import CTA from "@/components/CTA";
import styles from "@/lib/styles";

export const metadata: Metadata = {
  title: "Contact Us | World Pass Immigration",
  description:
    "Book a free immigration consultation with World Pass Immigration. Get expert guidance for study abroad, work visas, visitor visas, permanent residency, and family sponsorship.",
  openGraph: {
    title: "Contact Us | World Pass Immigration",
    description:
      "Book a free immigration consultation. Expert guidance for study abroad, work visas, PR, and family sponsorship.",
    url: "https://worldpassimmigration.com/contact",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact World Pass Immigration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | World Pass Immigration",
    description:
      "Book a free immigration consultation with World Pass Immigration.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/contact" },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://worldpassimmigration.com" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://worldpassimmigration.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <CTA />
        </div>
      </div>
    </div>
  );
}
