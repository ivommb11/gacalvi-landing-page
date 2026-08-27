import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import heroBg from '../../assets/photos/hero-bg.webp'

import { Button } from '../ui/Button'
import { IconArrowRight } from '../icons'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const y = useTransform(scrollYProgress, [0, 0.5], ['0%', '-60%'])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  const phoneNumber = '51941439233';
  const message = 'Hola, me gustaría más información sobre sus servicios';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section ref={sectionRef} id="inicio" className="relative h-[200vh]">
      <div className="sticky top-0 isolate flex h-svh items-center justify-center overflow-hidden bg-ebony">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-ebony" />
          <motion.img
            src={heroBg}
            alt=""
            style={{ scale }}
            className="absolute inset-0 size-full object-cover opacity-[0.26]"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ebony-87 via-ebony-33 to-ebony-0"
        />

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 mx-auto flex max-w-[1700px] flex-col items-center px-6 text-center"
        >
          <p className="flex items-center justify-center gap-[28px] text-[15.5px] font-semibold uppercase leading-[23px] tracking-[4.96px] text-white-50 lg:gap-[48px]">
            <span aria-hidden className="block h-px w-[38px] bg-cloud-37" />
            <span>Arquitectura · Ingeniería · Capacitación</span>
            <span aria-hidden className="block h-px w-[38px] bg-cloud-37" />
          </p>

          <h1 className="mt-[36px] text-[40px] font-black uppercase leading-[46px] tracking-[4.2px] text-white sm:text-[50px] sm:leading-[56px] sm:tracking-[5.2px] lg:mt-[39px] lg:text-[66px] lg:leading-[69px] lg:tracking-[9.2px]">
            <span className="block">Corporación</span>
            <span className="block text-cloud">Gacalvi</span>
          </h1>

          <p className="mt-[22px] text-[24px] font-medium leading-[34px] tracking-[2.35px] text-white-80 lg:mt-[25px] lg:text-[28px] lg:leading-[39px] lg:tracking-[2.24px]">
            Sé parte de nuestra historia
          </p>

          <Button href={whatsappUrl} className="mt-[46px] lg:mt-[58px]">
            Contáctanos
            <IconArrowRight width={19} height={19} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
