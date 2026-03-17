import React from 'react'
import { whyChooseUs } from '../constants'
import styles from '../style'

const reasons = [
  { emoji: '✅', title: 'Personalized Immigration Solutions', desc: 'Every client is unique. We tailor our strategy to match your profile and goals.' },
  { emoji: '💰', title: 'Transparent Fees & Ethical Guidance', desc: 'No hidden costs. Clear, upfront pricing and honest advice every time.' },
  { emoji: '🏆', title: 'High Success Rate', desc: 'Meticulous documentation and expert filing consistently achieve outstanding approvals.' },
  { emoji: '📋', title: 'Step-by-Step Application Support', desc: 'We guide you through every stage from assessment to final approval.' },
  { emoji: '🌐', title: 'Trusted Global Network', desc: 'Strong connections across 10+ countries for maximum pathway options.' },
  { emoji: '📄', title: 'End-to-End Documentation Assistance', desc: 'Complete support for all paperwork, SOPs, financial docs, and more.' },
]

const WhyCard = ({ emoji, title, desc, index }) => (
  <div className={`flex flex-col p-6 rounded-2xl border border-gray-100 bg-white shadow-sm feature-card transition-all cursor-default ${index !== reasons.length - 1 ? 'mb-0' : 'mb-0'}`}>
    <div className='w-[56px] h-[56px] rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4'>
      <span className='text-2xl'>{emoji}</span>
    </div>
    <h4 className='font-poppins font-bold text-[#0B2447] text-[16px] leading-[22px] mb-2'>
      {title}
    </h4>
    <p className={`${styles.paragraphDark} text-[14px]`}>
      {desc}
    </p>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={`${styles.paddingY}`}>
      {/* Section Header */}
      <div className={`${styles.flexCenter} flex-col mb-14`}>
        <p className='font-poppins font-semibold text-secondary text-[14px] uppercase tracking-widest mb-3'>
          Why Choose Us
        </p>
        <h2 className={`${styles.headingDark} text-center max-w-[600px] mx-auto`}>
          ✨ Why Choose World Pass Immigration?
        </h2>
        <p className={`${styles.paragraphDark} text-center max-w-[520px] mt-4`}>
          We don't just process applications — we build futures. Your success is our priority.
        </p>
      </div>

      {/* Reasons Grid */}
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
        {reasons.map((r, index) => (
          <WhyCard key={index} {...r} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className={`${styles.flexCenter} mt-12`}>
        <a
          href='#contact'
          className='py-3.5 px-10 bg-primary text-white font-poppins font-semibold text-[15px] rounded-full hover:bg-secondary hover:scale-105 transition-all shadow-lg'
        >
          Start Your Journey Today →
        </a>
      </div>
    </section>
  )
}

export default Business
