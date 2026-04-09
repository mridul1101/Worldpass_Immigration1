import type { Metadata } from "next";
import CardDeal from "@/components/CardDeal";
import styles from "@/lib/styles";

export const metadata: Metadata = {
  title: "Our Process | World Pass Immigration",
  description:
    "Our simple 6-step immigration process: free consultation, eligibility assessment, document review, application filing, submission & follow-up, and ongoing support.",
  openGraph: {
    title: "Our Process | World Pass Immigration",
    description:
      "Our simple 6-step immigration process: free consultation, eligibility assessment, document review, application filing, submission & follow-up, and ongoing support.",
    url: "https://worldpassimmigration.com/process",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "World Pass Immigration Process" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process | World Pass Immigration",
    description:
      "Simple 6-step immigration process from free consultation to visa approval.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/process" },
};

const processJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://worldpassimmigration.com" },
      { "@type": "ListItem", position: 2, name: "Our Process", item: "https://worldpassimmigration.com/process" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the first step in the immigration process?",
        acceptedAnswer: { "@type": "Answer", text: "Schedule a free consultation with our expert advisors. We listen to your goals and understand your unique situation." },
      },
      {
        "@type": "Question",
        name: "How do you assess eligibility?",
        acceptedAnswer: { "@type": "Answer", text: "We thoroughly evaluate your profile, qualifications, and eligibility for various immigration pathways." },
      },
      {
        "@type": "Question",
        name: "What happens during the document review stage?",
        acceptedAnswer: { "@type": "Answer", text: "You receive a complete, tailored document checklist. We review all your documents to ensure accuracy and completeness." },
      },
      {
        "@type": "Question",
        name: "How is the application filed?",
        acceptedAnswer: { "@type": "Answer", text: "Our experts professionally prepare and file your application with all required forms and supporting evidence." },
      },
      {
        "@type": "Question",
        name: "What support do you provide after submission?",
        acceptedAnswer: { "@type": "Answer", text: "We submit your application and continuously track its progress, providing regular updates and responding to any queries." },
      },
      {
        "@type": "Question",
        name: "Do you provide ongoing support until a decision is made?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, we stay with you until you receive your visa or residency decision, providing guidance every step of the way." },
      },
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="bg-white min-h-[calc(100vh-80px)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processJsonLd) }}
      />
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <CardDeal />
        </div>
      </div>
    </div>
  );
}
