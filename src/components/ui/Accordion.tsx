import { useState } from 'react'
import { AnimatePresence, motion, type Variants } from 'motion/react'

import type { ServiceAccordionItem } from '../../types'
import { IconChevronDown } from '../icons'

interface AccordionProps {
  items: readonly ServiceAccordionItem[]
  className?: string
  animateInView?: boolean
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function LogoSlot({ logo, title }: { logo?: string; title: string }) {
  if (logo) {
    return <img src={logo} alt={title} className="size-[300px] shrink-0 object-contain sm:size-[clamp(140px,35%,300px)]" />
  }
  return (
    <span className="flex size-[88px] shrink-0 items-center justify-center rounded-2 border border-cloud-16 bg-white-8 text-12.5 font-bold uppercase tracking-1.9 text-cloud">
      {title}
    </span>
  )
}

export function Accordion({ items, className, animateInView = false }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <motion.div
      className={className}
      {...(animateInView
        ? {
            variants: containerVariants,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, amount: 0.3 },
          }
        : {})}
    >
      {items.map((item) => {
        const open = openId === item.id

        return (
          <motion.div key={item.id} variants={animateInView ? itemVariants : undefined}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`accordion-panel-${item.id}`}
                onClick={() => setOpenId(open ? null : item.id)}
                className="flex w-full items-center justify-between border-b border-white-16 py-[38px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud"
              >
                <span className="text-22 font-bold text-white">{item.title}</span>
                <motion.span
                  initial={false}
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex shrink-0"
                >
                  <IconChevronDown width={24} height={24} />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key={`accordion-panel-${item.id}`}
                  id={`accordion-panel-${item.id}`}
                  role="region"
                  aria-label={item.title}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.3, ease: 'easeInOut' },
                    opacity: { duration: 0.2, ease: 'easeOut' },
                  }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-[28px] py-[36px] sm:flex-row sm:items-center">
                    <LogoSlot logo={item.logo} title={item.title} />
                    {item.description && (
                      <p className="max-w-[480px] text-15.5 font-regular text-alto">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
