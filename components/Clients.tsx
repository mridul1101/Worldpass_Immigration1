import Link from "next/link";
import { countries } from "@/lib/constants";
import styles from "@/lib/styles";
import ScrollReveal from "./ScrollReveal";

const Clients = () => {
  return (
    <section id="countries" className={`${styles.paddingY}`}>
      <ScrollReveal>
        <div className={`${styles.flexCenter} flex-col mb-12`}>
          <p className="font-poppins font-semibold text-secondary text-[14px] uppercase tracking-widest mb-3">
            Global Reach
          </p>
          <h2
            className={`${styles.headingDark} text-center max-w-[600px] mx-auto`}
          >
            🌎 Countries We Serve
          </h2>
          <p
            className={`${styles.paragraphDark} text-center max-w-[500px] mt-4`}
          >
            We provide expert immigration services to 10+ top destinations
            worldwide, helping you choose the right country for your goals.
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-wrap justify-center gap-4 max-w-[1000px] mx-auto">
        {countries.map((country, i) => {
          const isMore = country.id === "c-11";
          return (
            <ScrollReveal key={country.id} delay={i * 80}>
              <div
                className={`flex flex-col items-center justify-center p-5 rounded-2xl border transition-all cursor-default group w-[140px] sm:w-[150px] ${
                  isMore
                    ? "border-secondary/30 bg-secondary/5 hover:bg-secondary/10 hover:border-secondary"
                    : "border-gray-200 bg-white hover:border-secondary hover:shadow-lg hover:shadow-secondary/10 hover:-translate-y-1"
                }`}
              >
                <span className={`mb-2 group-hover:scale-110 transition-transform ${isMore ? "text-[36px]" : "text-[46px]"}`}>
                  {country.flag}
                </span>
                <p className={`font-poppins font-semibold text-[14px] text-center leading-[18px] ${
                  isMore ? "text-secondary" : "text-dark"
                }`}>
                  {country.name}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={800}>
        <div className={`${styles.flexCenter} mt-10`}>
          <p
            className={`${styles.paragraphDark} text-center text-[14px] max-w-[450px]`}
          >
            Your dream destination is closer than you think.
            <Link
              href="/contact"
              className="text-secondary font-semibold hover:underline ml-1"
            >
              Let&apos;s get started today →
            </Link>
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Clients;
