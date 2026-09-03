import { useState } from 'react'
import { AnimatePresence, motion, type Variants } from 'motion/react'

import type { ServiceAccordionItem } from '../../types'
import { IconChevronDown } from '../icons'
import { Button } from './Button'

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

function LogoSlot({ logo, title, link }: { logo?: string; title: string; link?: string }) {
  if (logo) {
    const img = <img src={logo} alt={title} className="size-[clamp(180px,calc(var(--band)*0.1764705882),300px)] shrink-0 object-contain sm:size-[clamp(140px,calc(var(--band)*0.1764705882),412.6px)]" />
    if (link) return <a href={link} target="_blank" rel="noopener noreferrer" className="contents">{img}</a>
    return img
  }
  return (
    <span className="flex size-[clamp(57px,calc(var(--band)*0.0517647059),121.44px)] shrink-0 items-center justify-center rounded-2 border border-cloud-16 bg-white-8 text-[clamp(8px,calc(var(--band)*0.0073529412),17.25px)] font-bold uppercase tracking-[clamp(1.28px,calc(var(--band)*0.0011176471),2.622px)] text-cloud">
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
                className="flex w-full items-center justify-between border-b border-white-16 py-[clamp(25px,calc(var(--band)*0.0223529412),52.44px)] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud"
              >
                <span className="text-[clamp(14.5px,calc(var(--band)*0.0129411765),30.36px)] font-bold text-white">{item.title}</span>
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
                  <div className="flex flex-col items-center gap-[clamp(18px,calc(var(--band)*0.0164705882),38.64px)] py-[clamp(23px,calc(var(--band)*0.0211764706),49.68px)] sm:flex-row sm:items-center">
                    <LogoSlot logo={item.logo} title={item.title} link={item.link} />
                    <div className="flex flex-col items-center sm:items-start">
                      {item.description && (
                        <p className="w-full text-center max-w-[clamp(310px,calc(var(--band)*0.2823529412),652.4px)] text-16 font-regular text-alto sm:w-auto sm:text-[clamp(9px,calc(var(--band)*0.0079411765),18.63px)] sm:mx-0 sm:text-left">
                          {item.description}
                        </p>
                      )}
                      {item.link && (
                        <Button
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          className="mx-auto mt-[clamp(18px,calc(var(--band)*0.0164705882),38.64px)] sm:mx-0 sm:self-start"
                        >
                          Conoce Más
                        </Button>
                      )}
                    </div>
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
