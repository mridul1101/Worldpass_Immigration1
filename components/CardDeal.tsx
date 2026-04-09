import Link from "next/link";
import { processSteps } from "@/lib/constants";
import styles from "@/lib/styles";
import ScrollReveal from "./ScrollReveal";

const StepCard = ({
  step,
  title,
  description,
  index,
  total,
}: {
  step: string;
  title: string;
  description: string;
  index: number;
  total: number;
}) => (
  <div className="flex flex-col items-center flex-1 relative">
    <ScrollReveal delay={index * 150}>
      <div className="flex flex-col items-center text-center">
        <div className="relative z-10 w-[64px] h-[64px] rounded-full bg-secondary flex items-center justify-center mb-5 flex-shrink-0 shadow-lg shadow-secondary/25 ring-4 ring-secondary/10 mx-auto">
          <span className="font-poppins font-bold text-white text-[18px]">
            {step}
          </span>
        </div>
        <h4 className="font-poppins font-bold text-dark text-[16px] leading-[22px] mb-2">
          {title}
        </h4>
        <p className="font-poppins font-normal text-gray-500 text-[13px] leading-[20px] max-w-[220px] mx-auto">
          {description}
        </p>
      </div>
    </ScrollReveal>

    {/* Connector line (desktop only) */}
    {index < total - 1 && (
      <div className="hidden md:block absolute top-[32px] left-[calc(50%+40px)] w-[calc(100%-80px)] h-[3px] z-0 translate-x-[8px]">
        <div className="w-full h-full bg-gradient-to-r from-secondary/40 to-secondary/10 rounded-full" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-secondary/30" />
      </div>
    )}

    {/* Connector line (mobile only) */}
    {index < total - 1 && (
      <div className="md:hidden w-[3px] h-[40px] bg-gradient-to-b from-secondary/40 to-secondary/10 my-3 rounded-full mx-auto" />
    )}
  </div>
);

const CardDeal = () => {
  return (
    <section id="process" className={`${styles.paddingY}`}>
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-16">
          <p className="font-poppins font-semibold text-secondary text-[14px] uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2
            className={`${styles.heading2} text-center max-w-[600px] mx-auto`}
          >
            📋 Our Simple 6-Step Process
          </h2>
          <p className={`${styles.paragraph} text-center max-w-[500px] mt-4`}>
            A clear, structured journey from your first consultation all the way
            to your visa approval. We stay with you every step of the way.
          </p>
        </div>
      </ScrollReveal>

      {/* Timeline - top row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mb-8 md:mb-16 max-w-[900px] mx-auto">
        {processSteps.slice(0, 3).map((step, index) => (
          <StepCard
            key={step.id}
            {...step}
            index={index}
            total={3}
          />
        ))}
      </div>

      {/* Timeline - bottom row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 max-w-[900px] mx-auto">
        {processSteps.slice(3).map((step, index) => (
          <StepCard
            key={step.id}
            {...step}
            index={index}
            total={3}
          />
        ))}
      </div>

      <ScrollReveal delay={600}>
        <div className="flex justify-center mt-16">
          <Link
            href="/contact"
            className="py-4 px-10 bg-secondary text-white font-poppins font-bold text-[16px] rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all shadow-lg"
          >
            🚀 Start Your Journey — Book Free Consultation
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CardDeal;
