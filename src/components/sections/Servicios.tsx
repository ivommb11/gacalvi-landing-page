import { motion, type Variants } from 'motion/react'
import { SERVICES } from '../../lib/site'
import { Accordion } from '../ui/Accordion'

const textVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Servicios() {
  return (
    <section id="servicios" className="flex min-h-svh flex-col bg-ebony">
      <div className="mx-auto flex w-full max-w-[1700px] flex-1 flex-col px-6 pb-[190px] pt-[136px] lg:px-[92px]">
        <div className="grid grid-cols-1 items-center gap-y-[64px] lg:grid-cols-[431px_minmax(0,1fr)] lg:gap-x-[96px] lg:gap-y-0">
          <div className="flex flex-col">
            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-24 font-bold uppercase tracking-5.04 text-white lg:text-28"
            >
              Nuestros Servicios
            </motion.h2>

            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="mt-[95px] max-w-[431px] text-13.5 font-regular text-alto"
            >
              Somos una empresa comprometida con tu bienestar, tu economía y cada uno de tus proyectos.
              Por eso, nos hemos preocupado por ocupar cada área del rubro de la construcción:
              edificación y diseño arquitectónico. Además, contamos con una plataforma destinada al
              aprendizaje de técnicas ligadas a la ingeniería civil y arquitectura. De este modo, podrás
              capacitarte para lograr perfeccionarte en estrategias, programas y metodologías del campo
              constructivo.
            </motion.p>

            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="mt-[86px] max-w-[447px] text-16 font-black text-white"
            >
              ¡Súmate a la experiencia Gacalvi!
            </motion.p>
          </div>

          <Accordion items={SERVICES} animateInView />
        </div>
      </div>
    </section>
  )
}
