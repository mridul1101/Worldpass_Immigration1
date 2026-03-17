import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Testimonials 
} from './components'
import styles from './style'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>

      {/* NAVBAR — Fixed */}
      <div className={`${styles.paddingX} ${styles.flexCenter} fixed top-0 w-full z-[9999] bg-primary shadow-lg`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* HERO — Deep navy with pattern */}
      <div className='bg-primary hero-pattern'>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>

      {/* STATS BAR — Darker navy */}
      <div className='bg-darkNavy'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US — White */}
      <div className='bg-white'>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Business />
          </div>
        </div>
      </div>

      {/* OUR SERVICES — Light grey */}
      <div className='bg-[#F0F4F8]'>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Billing />
          </div>
        </div>
      </div>

      {/* OUR PROCESS — Dark navy */}
      <div className='bg-primary'>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <CardDeal />
          </div>
        </div>
      </div>

      {/* COUNTRIES — White */}
      <div className='bg-white'>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Clients />
          </div>
        </div>
      </div>

      {/* TESTIMONIALS — Darker navy */}
      <div className='bg-darkNavy'>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Testimonials />
          </div>
        </div>
      </div>

      {/* CTA — Primary navy */}
      <div className='bg-primary'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <CTA />
          </div>
        </div>
      </div>

      {/* FOOTER — Darkest navy */}
      <div className='bg-darkNavy'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App

