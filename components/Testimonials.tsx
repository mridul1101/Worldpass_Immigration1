import { testimonials } from "@/lib/constants";
import styles from "@/lib/styles";

const TestimonialCard = ({
  content,
  name,
  email,
  title,
  initials,
  country,
  date,
}: {
  content: string;
  name: string;
  email: string;
  title: string;
  initials: string;
  country: string;
  date: string;
}) => (
  <div className="flex flex-col p-8 rounded-2xl feedback-card transition-all flex-1 min-w-[280px] max-w-[380px]">
    <div className="flex items-center justify-between mb-4">
      <div className="text-secondary text-[48px] leading-[40px] font-poppins font-bold opacity-40">
        &ldquo;
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-amber-400 text-[14px]">
            ★
          </span>
        ))}
      </div>
    </div>
    <p className="font-poppins font-normal text-[16px] leading-[28px] text-gray-600 mb-6 flex-1">
      {content}
    </p>
    <div className="flex flex-row items-center gap-4">
      <div className="w-[50px] h-[50px] rounded-full bg-secondary/10 border-2 border-secondary/30 flex items-center justify-center flex-shrink-0">
        <span className="font-poppins font-bold text-secondary text-[16px]">
          {initials}
        </span>
      </div>
      <div>
        <h4 className="font-poppins font-bold text-[16px] text-dark">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[13px] text-secondary flex items-center gap-1.5">
          <span className="text-base">{country}</span>
          <span>{title}</span>
        </p>
        <p className="font-poppins font-normal text-[12px] text-gray-400 mt-0.5">
          {email}
        </p>
      </div>
    </div>
    <p className="font-poppins text-[11px] text-gray-400 mt-4">
      Reviewed on {date}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className={`${styles.paddingY} relative`}>
      <div className={`${styles.flexCenter} flex-col mb-12 relative z-[1]`}>
        <p className="font-poppins font-semibold text-secondary text-[14px] uppercase tracking-widest mb-3">
          Success Stories
        </p>
        <h2
          className={`${styles.heading2} text-center max-w-[600px] mx-auto`}
        >
          🤝 What Our Clients Say
        </h2>
        <p className={`${styles.paragraph} text-center max-w-[500px] mt-4`}>
          Real stories from real people whose dreams became reality with World
          Pass Immigration.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 relative z-[1]">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </div>

      <div
        className={`${styles.flexCenter} flex-wrap gap-8 mt-14 relative z-[1]`}
      >
        {[
          { emoji: "🛡️", label: "Certified Consultants" },
          { emoji: "🔒", label: "Secure & Confidential" },
          { emoji: "📞", label: "24/7 Client Support" },
          { emoji: "✅", label: "Compliance Guaranteed" },
        ].map((badge, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm"
          >
            <span className="text-xl">{badge.emoji}</span>
            <span className="font-poppins font-medium text-gray-600 text-[13px]">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
