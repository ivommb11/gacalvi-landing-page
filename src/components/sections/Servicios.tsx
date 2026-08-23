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
        <div className="mx-auto flex w-full lg:max-w-[var(--band)] flex-1 flex-col px-6 pb-[clamp(124px,calc(var(--band)*0.1117647059),263.2px)] pt-[clamp(88px,calc(var(--band)*0.08),187.68px)] lg:px-[clamp(60px,calc(var(--band)*0.0541176471),127px)]">
          <div className="grid grid-cols-1 items-center gap-y-[clamp(42px,calc(var(--band)*0.0376470588),88.32px)] lg:grid-cols-[clamp(282px,calc(var(--band)*0.2535294118),594.8px)_minmax(0,1fr)] lg:gap-x-[clamp(62px,calc(var(--band)*0.0564705882),132.48px)] lg:gap-y-0">
          <div className="flex flex-col">
            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-[clamp(16px,calc(var(--band)*0.0141176471),33.12px)] font-bold uppercase tracking-[clamp(3.3px,calc(var(--band)*0.0029647059),6.955px)] text-white lg:text-[clamp(18.5px,calc(var(--band)*0.0164705882),38.64px)]"
            >
              Nuestros Servicios
            </motion.h2>

            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="mt-[clamp(62px,calc(var(--band)*0.0558823529),131.1px)] max-w-[clamp(282px,calc(var(--band)*0.2535294118),594.8px)] text-[clamp(9px,calc(var(--band)*0.0079411765),18.63px)] font-regular text-alto"
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
              className="mt-[clamp(56px,calc(var(--band)*0.0505882353),118.7px)] max-w-[clamp(291px,calc(var(--band)*0.2629411765),616.8px)] text-[clamp(10px,calc(var(--band)*0.0094117647),22.08px)] font-black text-white"
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
