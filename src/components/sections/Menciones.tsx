import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, type Transition, type Variants } from 'motion/react'
import { MENTIONS } from '../../lib/site'
import type { MentionCard } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'
import { IconClose } from '../icons'

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: {},
}

const imageVariants: Variants = {
  hover: { scale: 1.05 },
}

const layoutSpring: Transition = { type: 'spring', stiffness: 200, damping: 22 }

export function Menciones() {
  const [selected, setSelected] = useState<MentionCard | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!selected) return

    const previousActive = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelected(null)
        return
      }
      if (event.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previousActive?.focus()
    }
  }, [selected])

  return (
    <>
      <section id="menciones" className="flex min-h-svh flex-col bg-white">
        <div className="mx-auto flex w-full max-w-[1700px] flex-1 flex-col px-6 pb-[88px] pt-[82px] lg:px-[16px]">
          <SectionHeading title="Menciones" />

          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="mx-auto mt-[42px] grid max-w-[1320px] grid-cols-1 gap-x-[96px] gap-y-[56px] md:grid-cols-3"
          >
            {MENTIONS.map((card) => {
              const open = selected?.id === card.id
              return (
                <motion.article
                  key={card.id}
                  variants={cardVariants}
                  whileHover="hover"
                  layoutId={`mention-card-${card.id}`}
                  transition={{ layout: layoutSpring }}
                  onClick={() => setSelected(card)}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  aria-expanded={open}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      setSelected(card)
                    }
                  }}
                  className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ebony/40"
                >
                  <div className="overflow-hidden">
                    <motion.img
                      src={card.src}
                      alt={card.alt}
                      variants={imageVariants}
                      transition={{ layout: layoutSpring, scale: { duration: 0.3, ease: 'easeOut' } }}
                      layoutId={`mention-image-${card.id}`}
                      className="aspect-[269/365] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-t-3 border-cloud pt-[26px]">
                    <h3 className="text-11.5 font-extrabold uppercase leading-[15.81px] tracking-1.38 text-mineshaft">
                      {card.title}
                    </h3>
                    {card.description && (
                      <p className="mt-[18px] text-13.5 font-regular text-emperor">
                        {card.description}
                      </p>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            key={`mention-detail-${selected.id}`}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <motion.div
              className="absolute inset-0 bg-ebony/55 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelected(null)}
            />

            <motion.div
              ref={panelRef}
              tabIndex={-1}
              layoutId={`mention-card-${selected.id}`}
              transition={{ layout: layoutSpring }}
              className="relative flex max-h-[88vh] w-full flex-col overflow-hidden bg-white shadow-fab outline-none md:h-[80vh] md:max-w-[1100px] md:flex-row"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Cerrar"
                className="absolute right-[16px] top-[16px] flex size-[36px] items-center justify-center rounded-99 bg-ebony-39"
              >
                <IconClose width={14} height={14} />
              </button>

              <div className="h-[280px] w-full shrink-0 bg-white md:h-auto md:w-[46%] md:self-stretch md:pl-6 lg:pl-[40px]">
                <motion.img
                  src={selected.src}
                  alt={selected.alt}
                  layoutId={`mention-image-${selected.id}`}
                  transition={{ layout: layoutSpring }}
                  className="h-full w-full object-contain"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.25, duration: 0.3, ease: 'easeOut' },
                }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                className="min-h-0 flex-1 overflow-y-auto px-6 pb-[40px] pt-[28px] lg:px-[40px]"
              >
                {(selected.category || selected.date) && (
                  <p className="text-11 font-bold uppercase tracking-1.89 text-cloud">
                    {[selected.category, selected.date].filter(Boolean).join(' · ')}
                  </p>
                )}
                <h2 className="mt-[14px] text-22 font-extrabold tracking-0.48 text-mineshaft">
                  {selected.title}
                </h2>
                <div className="mt-[18px] border-t-3 border-cloud" />
                <p className="mt-[18px] text-13.5 font-regular text-emperor">
                  {selected.fullText ?? selected.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
