import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import styles from "@/lib/styles";

export const metadata: Metadata = {
  title: "Testimonials | World Pass Immigration",
  description:
    "Read success stories from our clients who achieved their immigration dreams. 98% success rate with 10,000+ visas approved across 10+ countries.",
  openGraph: {
    title: "Testimonials | World Pass Immigration",
    description:
      "Read success stories from clients who achieved their immigration dreams. 98% success rate.",
    url: "https://worldpassimmigration.com/testimonials",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "World Pass Immigration Testimonials" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials | World Pass Immigration",
    description:
      "Client success stories. 98% success rate with 10,000+ visas approved across 10+ countries.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/testimonials" },
};

const testimonialsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://worldpassimmigration.com" },
      { "@type": "ListItem", position: 2, name: "Testimonials", item: "https://worldpassimmigration.com/testimonials" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "World Pass Immigration",
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Priya Sharma" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "World Pass Immigration made my Canadian PR journey incredibly smooth. From the initial consultation to receiving my PR card, they were with me at every step. Highly recommended!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rahul Mehta" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "I got my UK student visa approved on the first attempt thanks to their meticulous documentation support. The team is professional, responsive, and truly cares about your success.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Anika Singh" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "After being rejected twice before, World Pass Immigration helped me secure my Australian work visa. Their expertise and dedication made all the difference. Forever grateful!",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
    },
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialsJsonLd) }}
      />
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
