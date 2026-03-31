import Link from "next/link";
import { countries } from "@/lib/constants";
import styles from "@/lib/styles";

const Clients = () => {
  return (
    <section id="countries" className={`${styles.paddingY}`}>
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {countries.map((country) => (
          <div
            key={country.id}
            className="flex flex-col items-center justify-center p-5 rounded-2xl border border-gray-200 bg-white hover:border-secondary hover:shadow-lg hover:shadow-secondary/10 hover:-translate-y-1 transition-all cursor-default group"
          >
            <span className="text-[46px] mb-2 group-hover:scale-110 transition-transform">
              {country.flag}
            </span>
            <p className="font-poppins font-semibold text-dark text-[14px] text-center leading-[18px]">
              {country.name}
            </p>
          </div>
        ))}
      </div>

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
    </section>
  );
};

export default Clients;
