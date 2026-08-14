import { motion } from 'motion/react'
import testimoniosBg from '../../assets/photos/testimonios-bg.webp'

import { TESTIMONIALS } from '../../lib/site'
import type { Testimonial } from '../../types'
import { Carousel } from '../ui/Carousel'
import { SectionHeading } from '../ui/SectionHeading'

function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <figure className="relative mx-auto flex h-full min-h-[290px] w-[calc(100vw-6rem)] max-w-[988px] flex-col items-center justify-center border border-white-8 bg-ebony-39 px-6 py-[48px] text-center lg:px-[120px]">
      <span
        aria-hidden
        className="pointer-events-none absolute left-[20px] top-[-20px] flex items-center justify-center font-georgia text-[150px] font-bold leading-none text-white opacity-20 lg:left-[88px] lg:top-[66.5px] lg:h-[173px] lg:w-[178px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-[250px]"
      >
        “
      </span>

      <blockquote className="relative max-w-[596px] text-15.5 font-semibold text-white-80">
        {quote}
      </blockquote>

      <span aria-hidden className="relative mt-[40px] block h-[1.5px] w-[40px] bg-cloud" />

      <figcaption className="relative mt-[32px]">
        <p className="text-10.5 font-bold uppercase tracking-1.89 text-white">
          {name}
        </p>
        <p className="mt-[6px] text-11 font-bold tracking-0.55 text-white-70">
          {role}
        </p>
      </figcaption>
    </figure>
  )
}

export function Testimonios() {
  return (
    <section id="testimonios" className="relative flex min-h-svh flex-col overflow-hidden bg-ebony">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          src={testimoniosBg}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-[0.64]"
          loading="lazy"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex w-full max-w-[1700px] flex-1 flex-col px-6 pb-[88px] pt-[98px]"
      >
        <SectionHeading title="Testimonios" onDark />

        <Carousel
          items={TESTIMONIALS}
          label="Testimonios"
          className="mt-[64px]"
          renderItem={(item) => <TestimonialCard {...item} />}
        />
      </motion.div>
    </section>
  )
}
