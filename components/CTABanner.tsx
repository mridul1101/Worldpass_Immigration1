import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 sm:py-20">
      {/* Decorative shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5" />
        <div className="absolute bottom-[-40%] left-[-10%] w-[400px] h-[400px] rounded-full bg-white/5" />
        <div className="absolute top-[20%] left-[40%] w-[200px] h-[200px] rounded-full bg-white/[0.03]" />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto text-center px-6">
        <ScrollReveal>
          <p className="font-poppins font-semibold text-white/60 text-[13px] uppercase tracking-[3px] mb-4">
            Need help with Immigration?
          </p>
          <h2 className="font-poppins font-bold text-white text-[32px] sm:text-[44px] leading-[1.2] mb-6">
            Start Your Journey<br />With World Pass!
          </h2>
          <p className="font-poppins font-normal text-white/70 text-[16px] leading-[28px] max-w-[520px] mx-auto mb-10">
            We provide you with completely unbiased opinion of your chances of
            success, free of charge. Book your free assessment today.
          </p>
          <div className="flex flex-col ss:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="py-4 px-10 bg-white text-secondary font-poppins font-bold text-[16px] rounded-full hover:bg-gray-100 hover:scale-105 hover:shadow-2xl transition-all shadow-lg"
            >
              📞 Book Free Assessment
            </Link>
            <Link
              href="/contact"
              className="py-4 px-10 border-2 border-white/40 text-white font-poppins font-semibold text-[16px] rounded-full hover:bg-white/10 hover:border-white/70 transition-all"
            >
              Get in Touch →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTABanner;
