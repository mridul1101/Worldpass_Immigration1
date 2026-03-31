import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Business from "@/components/Business";
import styles from "@/lib/styles";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="bg-white hero-pattern">
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={styles.boxWidth}>
            <Hero />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-muted">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Stats />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white">
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={styles.boxWidth}>
            <Business />
          </div>
        </div>
      </div>
    </>
  );
}
