import React from 'react'
import { testimonials } from '../constants'
import styles from '../style'

const TestimonialCard = ({ content, name, title, initials, country }) => (
  <div className='flex flex-col p-8 rounded-2xl feedback-card transition-all flex-1 min-w-[280px] max-w-[380px]'>
    {/* Quote icon */}
    <div className='text-secondary text-[48px] leading-[40px] font-poppins font-bold mb-4 opacity-60'>"</div>
    <p className='font-poppins font-normal text-[16px] leading-[28px] text-dimWhite mb-6 flex-1'>
      {content}
    </p>
    {/* Author */}
    <div className='flex flex-row items-center gap-4'>
      <div className='w-[50px] h-[50px] rounded-full bg-secondary/20 border-2 border-secondary/40 flex items-center justify-center flex-shrink-0'>
        <span className='font-poppins font-bold text-secondary text-[16px]'>{initials}</span>
      </div>
      <div>
        <div className='flex items-center gap-2'>
          <h4 className='font-poppins font-bold text-[16px] text-white'>{name}</h4>
          <span className='text-xl'>{country}</span>
        </div>
        <p className='font-poppins font-normal text-[13px] text-secondary'>{title}</p>
      </div>
    </div>
    {/* Stars */}
    <div className='flex gap-1 mt-4'>
      {[...Array(5)].map((_, i) => (
        <span key={i} className='text-accent text-[14px]'>★</span>
      ))}
    </div>
  </div>
)

const Testimonials = () => {
  return (
    <section id='testimonials' className={`${styles.paddingY} relative`}>
      <div className='absolute z-[0] w-[50%] h-[50%] -right-[20%] rounded-full blue__gradient bottom-20' />

      {/* Section Header */}
      <div className={`${styles.flexCenter} flex-col mb-12 relative z-[1]`}>
        <p className='font-poppins font-semibold text-secondary text-[14px] uppercase tracking-widest mb-3'>
          Success Stories
        </p>
        <h2 className={`${styles.heading2} text-center max-w-[600px] mx-auto`}>
          🤝 What Our Clients Say
        </h2>
        <p className={`${styles.paragraph} text-center max-w-[500px] mt-4`}>
          Real stories from real people whose dreams became reality with World Pass Immigration.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className='flex flex-wrap justify-center gap-6 relative z-[1]'>
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </div>

      {/* Trust Badges */}
      <div className={`${styles.flexCenter} flex-wrap gap-8 mt-14 relative z-[1]`}>
        {[
          { emoji: '🛡️', label: 'Certified Consultants' },
          { emoji: '🔒', label: 'Secure & Confidential' },
          { emoji: '📞', label: '24/7 Client Support' },
          { emoji: '✅', label: 'Compliance Guaranteed' },
        ].map((badge, i) => (
          <div key={i} className='flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5'>
            <span className='text-xl'>{badge.emoji}</span>
            <span className='font-poppins font-medium text-dimWhite text-[13px]'>{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
