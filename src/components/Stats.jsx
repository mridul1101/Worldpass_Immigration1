import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-wrap gap-0 py-10`}>
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className={`flex-1 flex flex-col items-center justify-center min-w-[160px] py-6 px-4 ${index !== stats.length - 1 ? 'border-r border-white/10' : ''}`}
        >
          <div className='text-3xl mb-1'>{stat.emoji}</div>
          <h4 className='font-poppins font-bold text-[38px] leading-[48px] text-white'>
            {stat.value}
          </h4>
          <p className='font-poppins font-normal text-[14px] text-secondary uppercase tracking-widest mt-1 text-center'>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats

