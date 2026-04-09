import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import styles from "@/lib/styles";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Pass Immigration | Where Dreams Take Flight",
  description:
    "World Pass Immigration offers expert guidance for study abroad, work visas, visitor visas, permanent residency, and family sponsorship across 10+ countries including Canada, UK, Australia, Germany, and more.",
  keywords:
    "immigration consultants, study abroad, work visa, Canada PR, Australia visa, UK student visa, permanent residency, family sponsorship, World Pass Immigration",
  authors: [{ name: "World Pass Immigration" }],
  robots: "index, follow",
  metadataBase: new URL("https://worldpassimmigration.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "World Pass Immigration | Where Dreams Take Flight",
    description:
      "Expert immigration consultants for study abroad, work visas, visitor visas, and permanent residency. 98% success rate. 10,000+ visas approved.",
    url: "https://worldpassimmigration.com/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "World Pass Immigration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Pass Immigration | Where Dreams Take Flight",
    description:
      "Expert immigration consultants for study abroad, work visas, PR, and family sponsorship. 98% success rate.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://worldpassimmigration.com/#business",
  name: "World Pass Immigration",
  url: "https://worldpassimmigration.com/",
  logo: "https://worldpassimmigration.com/favicon.png",
  image: "https://worldpassimmigration.com/og-image.png",
  description:
    "Expert immigration consultants offering study abroad, work visas, visitor visas, permanent residency, and family sponsorship across 10+ countries.",
  telephone: "+918278776068",
  email: "worldpassimmigrationservices@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hamirpur Road, Opp. ICICI Bank",
    addressLocality: "Una",
    addressRegion: "Himachal Pradesh",
    postalCode: "174303",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.4685,
    longitude: 76.2708,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
  },
  sameAs: [
    "https://www.instagram.com/worldpassimmigration/",
    "https://www.facebook.com/worldpassimmigration/",
    "https://www.linkedin.com/company/worldpassimmigration/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-71FHN93JKM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-71FHN93JKM');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-poppins bg-white">
        <div className="w-full overflow-hidden">
          {/* Navbar */}
          <header
            className={`${styles.paddingX} ${styles.flexCenter} fixed top-0 w-full z-[9999] bg-white border-b border-gray-200 shadow-sm`}
          >
            <div className={styles.boxWidth}>
              <Navbar />
            </div>
          </header>

          {/* Page Content */}
          <main className="pt-[80px]">{children}</main>

          {/* Footer */}
          <div className="bg-darkNavy">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={styles.boxWidth}>
                <Footer />
              </div>
            </div>
          </div>

          {/* Floating WhatsApp Button */}
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
