import React from 'react'
import styles from '../style'

const CTA = () => {
  return (
    <section id='contact' className={`${styles.paddingY}`}>
      <div className='relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d2240] to-[#1a4b8c] border border-secondary/20 p-10 sm:p-14'>
        <div className='absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-secondary/5 -translate-y-1/2 translate-x-1/2' />
        <div className='absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2' />
        <div className='relative z-10 flex md:flex-row flex-col items-center gap-8'>
          <div className='flex-1'>
            <p className='font-poppins font-semibold text-secondary text-[14px] uppercase tracking-widest mb-3'>
              Get Started Today
            </p>
            <h2 className={`${styles.heading2} mb-4`}>
              📞 Book Your Free Consultation
            </h2>
            <p className={`${styles.paragraph} max-w-[500px] mb-6`}>
              Take the first step toward your international journey. Our expert consultants are
              ready to assess your profile and guide you to the right immigration pathway.
            </p>
            <div className='flex flex-wrap gap-4'>
              {[
                { emoji: '📍', label: 'Visit Our Office' },
                { emoji: '📧', label: 'Email Us' },
                { emoji: '📲', label: 'Call Us' },
                { emoji: '🌐', label: 'Book Online' },
              ].map((c, i) => (
                <div key={i} className='flex items-center gap-2 text-dimWhite font-poppins text-[14px]'>
                  <span className='text-xl'>{c.emoji}</span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-4 w-full md:max-w-[320px]'>
            <input
              type='text'
              placeholder='Your Full Name'
              className='w-full py-3 px-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 font-poppins text-[14px] outline-none focus:border-secondary transition-colors'
            />
            <input
              type='tel'
              placeholder='Phone / WhatsApp Number'
              className='w-full py-3 px-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 font-poppins text-[14px] outline-none focus:border-secondary transition-colors'
            />
            <select className='w-full py-3 px-5 rounded-xl bg-[#0B2447] border border-white/20 text-white/70 font-poppins text-[14px] outline-none focus:border-secondary transition-colors'>
              <option value=''>Select Service</option>
              <option>Study Abroad</option>
              <option>Work Visa</option>
              <option>Visitor Visa</option>
              <option>Permanent Residency</option>
              <option>Family Sponsorship</option>
            </select>
            <button
              type='button'
              className='w-full py-3.5 px-6 bg-accent text-primary font-poppins font-bold text-[16px] rounded-xl hover:scale-105 hover:shadow-xl transition-all shadow-lg'
            >
              🚀 Get Free Assessment
            </button>
            <p className='text-white/40 font-poppins text-[11px] text-center'>
              Free consultation • No hidden fees • 100% confidential
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
