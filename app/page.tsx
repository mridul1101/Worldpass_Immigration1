import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Business from "@/components/Business";
import Clients from "@/components/Clients";
import CardDeal from "@/components/CardDeal";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import styles from "@/lib/styles";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Stats Strip */}
      <Stats />

      {/* Why Choose Us */}
      <div className="bg-white">
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={styles.boxWidth}>
            <Business />
          </div>
        </div>
      </div>

      {/* Countries */}
      <div className="bg-muted section-divider-top">
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={styles.boxWidth}>
            <Clients />
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-white section-divider-top">
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={styles.boxWidth}>
            <CardDeal />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-muted section-divider-top">
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={styles.boxWidth}>
            <Testimonials />
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
