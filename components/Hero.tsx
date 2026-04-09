import Link from "next/link";
import styles from "@/lib/styles";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden hero-gradient"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-[20%] left-[10%] w-[200px] h-[200px] rounded-full bg-white/[0.03]" />
        <div className="absolute bottom-[20%] right-[15%] w-[300px] h-[300px] rounded-full bg-white/[0.03]" />
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 hero-dots opacity-[0.15]" />
      </div>

      <div className={`${styles.paddingX} w-full relative z-10`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="flex flex-col items-center text-center py-16 sm:py-20">
            <div className="flex flex-row items-center py-2 px-5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full mb-8 w-fit">
              <span className="text-xl mr-2">🌍</span>
              <p className="font-poppins font-medium text-[13px] text-white/90 tracking-wide">
                Trusted Immigration Consultants Worldwide
              </p>
            </div>

            <h1 className="font-poppins font-bold ss:text-[72px] text-[44px] ss:leading-[86px] leading-[56px] mb-4">
              <span className="text-white">Where Dreams</span>
              <br />
              <span className="text-gradient-hero">Take Flight</span>
              <span className="ml-3">✈️</span>
            </h1>

            <p className="font-poppins font-medium text-white/80 text-[18px] mt-2 mb-4">
              At World Pass Immigration
            </p>

            <p className="font-poppins font-normal text-white/60 text-[17px] leading-[30px] max-w-[580px] mb-10">
              Whether you want to study abroad, work internationally, visit loved
              ones, or settle permanently — we provide expert guidance, transparent
              processes, and dedicated support at every step.
            </p>

            <div className="flex ss:flex-row flex-col gap-4 mb-12">
              <Link
                href="/contact"
                className="py-4 px-10 bg-white text-secondary font-poppins font-bold text-[16px] rounded-full hover:bg-gray-100 hover:scale-105 hover:shadow-2xl transition-all text-center shadow-lg"
              >
                📞 Book Free Consultation
              </Link>
              <Link
                href="/services"
                className="py-4 px-10 border-2 border-white/40 text-white font-poppins font-semibold text-[16px] rounded-full hover:bg-white/10 hover:border-white/70 transition-all text-center backdrop-blur-sm"
              >
                Explore Services →
              </Link>
            </div>

            {/* Inline Stats Strip */}
            <div className="flex flex-wrap items-center justify-center gap-6 ss:gap-10 mb-10">
              {[
                { value: "1-on-1", label: "Personalised Consultation" },
                { value: "98%", label: "Success Rate" },
                { value: "10+", label: "Countries" },
                { value: "5+", label: "Years Experience" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <p className="font-poppins font-bold text-white text-[28px] ss:text-[34px] leading-tight">
                    {stat.value}
                  </p>
                  <p className="font-poppins font-normal text-white/50 text-[12px] uppercase tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3">
              <p className="font-poppins text-white/40 text-[12px] uppercase tracking-[3px]">
                We help you move to
              </p>
              <div className="flex flex-row items-center gap-3 flex-wrap justify-center">
                {[
                  "🇨🇦", "🇬🇧", "🇦🇺", "🇳🇿", "🇩🇪",
                  "🇸🇬", "🇦🇪", "🇶🇦", "🇲🇾", "🇸🇦",
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
