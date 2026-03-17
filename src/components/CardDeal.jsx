import React from 'react'
import { processSteps } from '../constants'
import styles from '../style'

const StepCard = ({ step, title, description, index, total }) => (
  <div className='relative flex flex-col items-center text-center px-4'>
    {/* Connector line */}
    {index < total - 1 && (
      <div className='hidden md:block absolute top-8 left-[calc(50%+32px)] right-[-50%] h-[2px] bg-gradient-to-r from-secondary to-secondary/10 z-0' />
    )}
    {/* Step circle */}
    <div className='relative z-10 w-[56px] h-[56px] rounded-full bg-secondary flex items-center justify-center mb-4 flex-shrink-0 shadow-lg shadow-secondary/30'>
      <span className='font-poppins font-bold text-white text-[16px]'>{step}</span>
    </div>
    <h4 className='font-poppins font-bold text-white text-[16px] leading-[22px] mb-2'>
      {title}
    </h4>
    <p className='font-poppins font-normal text-dimWhite text-[13px] leading-[20px]'>
      {description}
    </p>
  </div>
)

const CardDeal = () => {
  return (
    <section id='process' className={`${styles.paddingY}`}>
      {/* Section Header */}
      <div className={`${styles.flexCenter} flex-col mb-14`}>
        <p className='font-poppins font-semibold text-secondary text-[14px] uppercase tracking-widest mb-3'>
          How It Works
        </p>
        <h2 className={`${styles.heading2} text-center max-w-[600px] mx-auto`}>
          📋 Our Simple 6-Step Process
        </h2>
        <p className={`${styles.paragraph} text-center max-w-[500px] mt-4`}>
          A clear, structured journey from your first consultation all the way to your visa approval.
          We stay with you every step of the way.
        </p>
      </div>

      {/* Steps Grid */}
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {processSteps.map((step, index) => (
          <StepCard
            key={step.id}
            {...step}
            index={index}
            total={processSteps.length}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className={`${styles.flexCenter} mt-14`}>
        <a
          href='#contact'
          className='py-4 px-10 bg-accent text-primary font-poppins font-bold text-[16px] rounded-full hover:scale-105 hover:shadow-xl transition-all shadow-lg'
        >
          🚀 Start Your Journey — Book Free Consultation
        </a>
      </div>
    </section>
  )
}

export default CardDeal

