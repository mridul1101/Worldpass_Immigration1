import Link from "next/link";
import styles from "@/lib/styles";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} pb-20`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-4 px-0`}
      >
        <div className="flex flex-row items-center py-2 px-4 bg-secondary/10 border border-secondary/20 rounded-full mb-6 w-fit">
          <span className="text-xl mr-2">🌍</span>
          <p className="font-poppins font-medium text-[13px] text-secondary tracking-wide">
            Trusted Immigration Consultants Worldwide
          </p>
        </div>

        <div className="mb-2">
          <h1 className="font-poppins font-bold ss:text-[72px] text-[48px] ss:leading-[86px] leading-[62px]">
            <span className="text-dark">Where Dreams</span>
            <br />
            <span className="text-gradient-gold">Take Flight</span>
            <span className="ml-3">✈️</span>
          </h1>
        </div>

        <p className="font-poppins font-medium text-secondary text-[18px] mt-2 mb-4">
          At World Pass Immigration
        </p>

        <p className={`${styles.paragraph} max-w-[530px] mb-8`}>
          Whether you want to study abroad, work internationally, visit loved
          ones, or settle permanently — we provide expert guidance, transparent
          processes, and dedicated support at every step.
        </p>

        <div className="flex ss:flex-row flex-col gap-4 mb-10">
          <Link
            href="/contact"
            className="py-3.5 px-8 bg-secondary text-white font-poppins font-bold text-[16px] rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all text-center"
          >
            📞 Book Free Consultation
          </Link>
          <Link
            href="/services"
            className="py-3.5 px-8 border-2 border-secondary text-secondary font-poppins font-semibold text-[16px] rounded-full hover:bg-secondary hover:text-white transition-all text-center"
          >
            Explore Services →
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-poppins text-gray-500 text-[13px] uppercase tracking-widest">
            We help you move to
          </p>
          <div className="flex flex-row items-center gap-3 flex-wrap">
            {[
              "🇨🇦",
              "🇬🇧",
              "🇦🇺",
              "🇳🇿",
              "🇩🇪",
              "🇸🇬",
              "🇦🇪",
              "🇶🇦",
              "🇲🇾",
              "🇸🇦",
            ].map((flag, i) => (
              <span
                key={i}
                className="text-2xl hover:scale-125 transition-transform cursor-default"
              >
                {flag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-12 relative`}
      >
        <div className="w-[340px] h-[340px] ss:w-[400px] ss:h-[400px] rounded-full border border-secondary/15 bg-secondary/5 flex items-center justify-center relative">
          <div
            className="w-[260px] h-[260px] ss:w-[310px] ss:h-[310px] rounded-full border border-secondary/20 bg-secondary/8 flex items-center justify-center animate-pulse"
            style={{ animationDuration: "4s" }}
          >
            <div className="w-[180px] h-[180px] ss:w-[220px] ss:h-[220px] rounded-full bg-secondary/10 border border-secondary/25 flex items-center justify-center">
              <span className="text-[90px] ss:text-[110px]">🌍</span>
            </div>
          </div>

          <div className="absolute -top-3 ss:-top-5 right-4 ss:-right-6 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-lg">
            <p className="text-dark text-[13px] font-poppins font-semibold">
              ⭐ 98% Success Rate
            </p>
          </div>

          <div className="absolute bottom-6 -left-4 ss:-left-10 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-lg">
            <p className="text-dark text-[13px] font-poppins font-semibold">
              ✅ 10,000+ Visas
            </p>
          </div>

          <div className="absolute top-1/2 -right-4 ss:-right-14 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-lg -translate-y-1/2">
            <p className="text-dark text-[13px] font-poppins font-semibold">
              🌐 10+ Countries
            </p>
          </div>

          <div className="absolute -bottom-3 ss:-bottom-5 right-8 ss:right-4 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-lg">
            <p className="text-dark text-[13px] font-poppins font-semibold">
              📅 15+ Years
            </p>
          </div>
        </div>

        <div className="absolute z-[-1] w-[50%] h-[50%] top-0 right-0 teal__gradient" />
        <div className="absolute z-[-1] w-[40%] h-[40%] bottom-10 left-0 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
