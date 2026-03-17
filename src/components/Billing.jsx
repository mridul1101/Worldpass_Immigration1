import React from 'react'
import { services } from '../constants'
import styles from '../style'

const ServiceCard = ({ emoji, title, description, items, border }) => (
  <div className={`flex flex-col bg-white rounded-2xl border ${border} p-7 shadow-sm service-card transition-all cursor-default`}>
    <div className='flex items-center gap-3 mb-4'>
      <div className='w-[52px] h-[52px] rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0'>
        <span className='text-[26px]'>{emoji}</span>
      </div>
      <h3 className='font-poppins font-bold text-[#0B2447] text-[18px] leading-[24px]'>
        {title}
      </h3>
    </div>
    <p className={`${styles.paragraphDark} text-[14px] mb-4 leading-[22px]`}>
      {description}
    </p>
    <ul className='space-y-1.5 mt-auto'>
      {items.map((item, i) => (
        <li key={i} className='flex items-start gap-2 text-[13px] text-gray-600 font-poppins'>
          <span className='text-secondary mt-0.5 text-[11px]'>▶</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <a
      href='#contact'
      className='mt-6 block text-center py-2.5 px-5 bg-primary text-white font-poppins font-semibold text-[13px] rounded-full hover:bg-secondary transition-all'
    >
      Enquire Now →
    </a>
  </div>
)

const Billing = () => {
  return (
    <section id='services' className={`${styles.paddingY}`}>
      {/* Section Header */}
      <div className={`${styles.flexCenter} flex-col mb-12`}>
        <p className='font-poppins font-semibold text-secondary text-[14px] uppercase tracking-widest mb-3'>
          What We Offer
        </p>
        <h2 className={`${styles.headingDark} text-center max-w-[600px] mx-auto`}>
          Our Immigration Services
        </h2>
        <p className={`${styles.paragraphDark} text-center max-w-[550px] mt-4`}>
          Comprehensive immigration solutions tailored to your goals — from education to employment,
          visits to permanent residency.
        </p>
      </div>

      {/* Services Grid */}
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Billing
