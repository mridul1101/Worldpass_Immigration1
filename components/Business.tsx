import Link from "next/link";
import styles from "@/lib/styles";

const reasons = [
  {
    emoji: "✅",
    title: "Personalized Guidance",
    desc: "Every client is unique. We tailor our strategy to match your profile and goals.",
  },
  {
    emoji: "💰",
    title: "Transparent Fees & Ethical Guidance",
    desc: "No hidden costs. Clear, upfront pricing and honest advice every time.",
  },
  {
    emoji: "🏆",
    title: "High Success Rate",
    desc: "Meticulous documentation and expert filing consistently achieve outstanding approvals.",
  },
  {
    emoji: "📋",
    title: "Step-by-Step Application Support",
    desc: "We guide you through every stage from assessment to final approval.",
  },
  {
    emoji: "🌐",
    title: "Trusted Global Network",
    desc: "Strong connections across 10+ countries for maximum pathway options.",
  },
  {
    emoji: "👨‍💼",
    title: "Experts with 5+ Years",
    desc: "Our seasoned consultants bring over 5 years of hands-on immigration expertise to every case.",
  },
];

const WhyCard = ({
  emoji,
  title,
  desc,
}: {
  emoji: string;
  title: string;
  desc: string;
}) => (
  <div className="flex flex-col p-6 rounded-2xl border border-gray-200 bg-white shadow-sm feature-card transition-all cursor-default hover:border-secondary/30">
    <div className="w-[56px] h-[56px] rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4">
      <span className="text-2xl">{emoji}</span>
    </div>
    <h4 className="font-poppins font-bold text-dark text-[16px] leading-[22px] mb-2">
      {title}
    </h4>
    <p className={`${styles.paragraphDark} text-[14px]`}>{desc}</p>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${styles.paddingY}`}>
      <div className={`${styles.flexCenter} flex-col mb-14`}>
        <p className="font-poppins font-semibold text-secondary text-[14px] uppercase tracking-widest mb-3">
          Why Choose Us
        </p>
        <h2
          className={`${styles.headingDark} text-center max-w-[600px] mx-auto`}
        >
          ✨ Why Choose World Pass Immigration?
        </h2>
        <p
          className={`${styles.paragraphDark} text-center max-w-[520px] mt-4`}
        >
          We don&apos;t just process applications — we build futures. Your
          success is our priority.
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {reasons.map((r, index) => (
          <WhyCard key={index} {...r} />
        ))}
      </div>

      <div className={`${styles.flexCenter} mt-12`}>
        <Link
          href="/contact"
          className="py-3.5 px-10 bg-secondary text-white font-poppins font-semibold text-[15px] rounded-full hover:bg-blue-700 hover:scale-105 transition-all shadow-lg"
        >
          Start Your Journey Today →
        </Link>
      </div>
    </section>
  );
};

export default Business;
