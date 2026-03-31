"use client";

import { useState } from "react";
import styles from "@/lib/styles";

const englishLevels = [
  "Beginner",
  "Elementary",
  "Intermediate",
  "Upper Intermediate",
  "Advanced",
  "Proficient / Native",
];

const ageRanges = [
  "Under 18",
  "18-24",
  "25-30",
  "31-35",
  "36-40",
  "41-45",
  "46+",
];

const educationLevels = [
  "10th / SSC",
  "12th / HSC",
  "Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD / Doctorate",
  "Other",
];

const visaTypes = [
  "Study Visa",
  "Work Visa",
  "Visitor / Tourist Visa",
  "Permanent Residency",
  "Family Sponsorship",
  "Business / Investment Visa",
  "Other",
];

const countryCodes = [
  { code: "+91", label: "IND (+91)" },
  { code: "+1", label: "US/CA (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+61", label: "AUS (+61)" },
  { code: "+64", label: "NZ (+64)" },
  { code: "+49", label: "DE (+49)" },
  { code: "+971", label: "UAE (+971)" },
];

const WHATSAPP_NUMBER = "918278776068";

const CTA = () => {
  const [form, setForm] = useState({
    englishLevel: "",
    name: "",
    email: "",
    country: "",
    countryCode: "+91",
    phone: "",
    age: "",
    education: "",
    visaType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      `*New Consultation Request*`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.countryCode} ${form.phone}`,
      `*Country:* ${form.country}`,
      `*Age:* ${form.age}`,
      `*English Level:* ${form.englishLevel}`,
      `*Education:* ${form.education}`,
      `*Visa Type:* ${form.visaType}`,
    ].join("\n");

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  const inputClass =
    "w-full py-4 px-0 bg-transparent border-b border-gray-300 text-dark placeholder-gray-400 font-poppins text-[15px] outline-none focus:border-secondary transition-colors";
  const selectClass =
    "w-full py-4 px-0 bg-transparent border-b border-gray-300 text-gray-400 font-poppins text-[15px] outline-none focus:border-secondary transition-colors appearance-none cursor-pointer";

  return (
    <section id="contact" className="min-h-[calc(100vh-80px)] flex items-center">
      <div className="w-full py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 lg:gap-20 items-center">
          {/* Left: Info */}
          <div>
            <p className="font-poppins font-semibold text-secondary text-[13px] uppercase tracking-[3px] mb-5">
              Get Started Today
            </p>
            <h2 className="font-poppins font-bold text-[36px] sm:text-[44px] lg:text-[50px] text-dark leading-[1.15] mb-6">
              Book Your Free<br />Consultation
            </h2>
            <p className={`${styles.paragraph} max-w-[480px] mb-10 text-[16px] leading-[28px]`}>
              Take the first step toward your international journey. Our expert
              consultants are ready to assess your profile and guide you to the
              right immigration pathway.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
              {[
                { emoji: "✅", label: "Free consultation" },
                { emoji: "🔒", label: "No hidden fees" },
                { emoji: "🤝", label: "100% confidential" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-gray-600 font-poppins text-[15px]"
                >
                  <span className="text-lg">{c.emoji}</span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:worldpassimmigrationservices@gmail.com"
                className="flex items-start gap-3 text-gray-600 hover:text-secondary transition-colors"
              >
                <span className="text-lg mt-0.5">📧</span>
                <div>
                  <p className="font-poppins font-semibold text-dark text-[14px]">Email</p>
                  <p className="font-poppins text-[14px]">worldpassimmigrationservices@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+918278776068"
                className="flex items-start gap-3 text-gray-600 hover:text-secondary transition-colors"
              >
                <span className="text-lg mt-0.5">📲</span>
                <div>
                  <p className="font-poppins font-semibold text-dark text-[14px]">Phone / WhatsApp</p>
                  <p className="font-poppins text-[14px]">+91 82787 76068</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-gray-600">
                <span className="text-lg mt-0.5">📍</span>
                <div>
                  <p className="font-poppins font-semibold text-dark text-[14px]">Visit Us</p>
                  <p className="font-poppins text-[14px]">Hamirpur Road, Opp. ICICI Bank, Una, HP 174303</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full">
            <div className="rounded-2xl bg-white border border-gray-200 px-8 py-10 sm:px-10 sm:py-12 shadow-lg">
              <h3 className="font-poppins font-bold text-dark text-[22px] mb-1">
                Get Free Consultation
              </h3>
              <p className="font-poppins text-gray-500 text-[13px] mb-10">
                Fill in your details and we&apos;ll get back to you
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-1">
                {/* English Level */}
                <div className="relative">
                  <select
                    name="englishLevel"
                    value={form.englishLevel}
                    onChange={handleChange}
                    required
                    className={selectClass}
                  >
                    <option value="" disabled>
                      What is your English level*
                    </option>
                    {englishLevels.map((lvl) => (
                      <option key={lvl} value={lvl} className="bg-white text-dark">
                        {lvl}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">
                    ▼
                  </span>
                </div>

                {/* Name */}
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  required
                  className={inputClass}
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  required
                  className={inputClass}
                />

                {/* Country */}
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  placeholder="Country*"
                  required
                  className={inputClass}
                />

                {/* Phone */}
                <div className="flex gap-0 border-b border-gray-300 focus-within:border-secondary transition-colors">
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className="bg-transparent text-gray-400 font-poppins text-[15px] outline-none py-4 pr-1 cursor-pointer appearance-none"
                  >
                    {countryCodes.map((cc) => (
                      <option
                        key={cc.code}
                        value={cc.code}
                        className="bg-white text-dark"
                      >
                        {cc.label}
                      </option>
                    ))}
                  </select>
                  <span className="text-gray-400 self-center mr-3 text-xs">▼</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number*"
                    required
                    className="flex-1 bg-transparent text-dark placeholder-gray-400 font-poppins text-[15px] outline-none py-4"
                  />
                </div>

                {/* Age */}
                <div className="relative">
                  <select
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    required
                    className={selectClass}
                  >
                    <option value="" disabled>
                      Age*
                    </option>
                    {ageRanges.map((age) => (
                      <option key={age} value={age} className="bg-white text-dark">
                        {age}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">
                    ▼
                  </span>
                </div>

                {/* Education */}
                <div className="relative">
                  <select
                    name="education"
                    value={form.education}
                    onChange={handleChange}
                    required
                    className={selectClass}
                  >
                    <option value="" disabled>
                      Education*
                    </option>
                    {educationLevels.map((edu) => (
                      <option key={edu} value={edu} className="bg-white text-dark">
                        {edu}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">
                    ▼
                  </span>
                </div>

                {/* Visa Type */}
                <div className="relative">
                  <select
                    name="visaType"
                    value={form.visaType}
                    onChange={handleChange}
                    required
                    className={selectClass}
                  >
                    <option value="" disabled>
                      Visa Type*
                    </option>
                    {visaTypes.map((v) => (
                      <option key={v} value={v} className="bg-white text-dark">
                        {v}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">
                    ▼
                  </span>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full mt-6 py-4 bg-secondary text-white font-poppins font-bold text-[15px] uppercase tracking-widest rounded-lg hover:bg-blue-700 transition-colors shadow-lg active:scale-[0.98]"
                >
                  GET FREE CONSULTATION
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
