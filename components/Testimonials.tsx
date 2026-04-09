"use client";

import { useState, useEffect, useCallback } from "react";
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
  <div className="flex flex-col p-8 rounded-2xl feedback-card transition-all w-full min-w-0 flex-shrink-0">
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
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

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

      {/* Carousel */}
      <div className="relative z-[1] max-w-[800px] mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="w-full flex-shrink-0 px-4">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-[-20px] sm:left-[-40px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all z-10"
          aria-label="Previous testimonial"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-[-20px] sm:right-[-40px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all z-10"
          aria-label="Next testimonial"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all ${
                i === current
                  ? "w-8 h-3 bg-secondary"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
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
