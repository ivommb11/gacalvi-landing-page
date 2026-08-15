import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'motion/react'
import sobreNosotrosBg from '../../assets/photos/sobre-nosotros-bg.webp'

import { STATS } from '../../lib/site'
import type { Stat } from '../../types'
import { IconEllipse } from '../icons'

const textVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const statsContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const statItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function StatItem({ value, lines }: Stat) {
  return (
    <div className="flex items-center gap-[clamp(14px,1.8555vw,19px)]">
      <span className="relative flex size-[clamp(48px,6.8359vw,70px)] shrink-0 items-center justify-center">
        <IconEllipse className="absolute inset-0 size-full" />
        <span className="relative text-[clamp(16px,2.3438vw,24px)] font-black text-ebony">{value}</span>
      </span>
      <span className="max-w-[clamp(64px,9.375vw,96px)] text-[clamp(8.5px,0.9766vw,10px)] font-bold uppercase leading-[clamp(12px,1.3916vw,14.25px)] tracking-[clamp(1.4px,0.1855vw,1.9px)] text-white">
        <span className="block">{lines[0]}</span>
        <span className="block">{lines[1]}</span>
      </span>
    </div>
  )
}

export function SobreNosotros() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section
      ref={sectionRef}
      id="sobre-nosotros"
      className="relative flex min-h-svh flex-col overflow-hidden bg-ebony"
    >
      <motion.img
        src={sobreNosotrosBg}
        alt=""
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-x-0 -inset-y-[30px] object-cover"
        loading="lazy"
      />
      <div aria-hidden className="absolute inset-0 bg-ebony-43" />

      <div className="relative z-10 mx-auto flex w-full flex-1 flex-col px-6 pt-[96px] lg:px-0 lg:pt-[97px] lg:responsive-scale">
        <motion.h2
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-[clamp(15px,2.3438vw,24px)] font-bold uppercase tracking-[clamp(3.2px,0.4922vw,5.04px)] text-alto lg:ml-auto lg:mr-[210px] lg:w-fit lg:text-right lg:text-32"
        >
          Sobre Nosotros
        </motion.h2>

        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="mt-[clamp(16px,2.3438vw,24px)] w-full text-[clamp(12px,1.3184vw,13.5px)] font-regular leading-[clamp(20px,2.7344vw,28px)] text-white lg:ml-auto lg:mr-[92px] lg:w-[505px]"
        >
            <p>
              <span className="font-extrabold">Corporación Gacalvi </span>
              es más que servicios de arquitectura y construcción. Es la experiencia vivencial del
              diseño arquitectónico, del rubro inmobiliario, de la edificación y un centro de
              capacitaciones que brinda los conocimientos necesarios para responder a un mundo
              globalizado que requiere de nuevas estrategias y herramientas que vayan acorde a lo
              que la revolución tecnológica espera de los profesionales.
            </p>
            <p className="mt-[clamp(14px,1.9531vw,20px)]">
              Nuestra corporación inicio bajo la mirada de hacer de la construcción un puente para
              la mejora del ser humano. Poco a poco fuimos modelando nuestras metas y objetivos y
              consideramos que el modo de lograrlos era formando una familia que no solo vea en
              nuestro rubro direcciones y procesos y constructivos, sino que desde la planeación de
              cada proyecto cada cliente pudiera sentir la esencia del diseño y utilidad de cada
              servicio.
            </p>
            <p className="mt-[clamp(14px,1.9531vw,20px)]">
              Es así que hoy Corporación Gacalvi brinda un servicio holístico y hace que cada
              proyecto sea la realización de los sueños de sus clientes. Somos más que una empresa,
              somos la edificadora de los anhelos de quienes confían en nuestra institución.
            </p>
          </motion.div>

        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-[clamp(32px,4.6875vw,48px)] flex flex-col gap-[clamp(16px,2.3438vw,24px)] pb-[clamp(36px,5.4688vw,56px)] sm:flex-row sm:items-end lg:mt-auto lg:justify-end lg:gap-[92px] lg:pb-[120px] lg:pr-[145px]"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.value} variants={statItemVariants}>
              <StatItem value={stat.value} lines={stat.lines} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
