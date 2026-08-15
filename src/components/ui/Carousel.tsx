import { useLayoutEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

import { animate, motion, useAnimationFrame, useMotionValue, useMotionValueEvent } from 'motion/react'

import { IconButton } from './IconButton'
import { IconChevronLeft, IconChevronRight } from '../icons'

const COPIES = 3

interface CarouselProps<T> {
  items: readonly T[]
  renderItem: (item: T, index: number) => ReactNode
  label: string
  className?: string
}

export function Carousel<T>({ items, renderItem, label, className }: CarouselProps<T>) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const abs = useMotionValue(0)
  const dragging = useRef(false)
  const [itemWidth, setItemWidth] = useState(0)
  const [setSize, setSetSize] = useState(0)
  const [centerOffset, setCenterOffset] = useState(0)
  const [current, setCurrent] = useState(0)

  const slides = Array.from({ length: COPIES }, () => items).flat()

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current
      const viewport = viewportRef.current
      const firstSlide = track?.firstElementChild as HTMLElement | null
      if (!track || !viewport || !firstSlide || items.length === 0) return

      const itemW = firstSlide.offsetWidth
      if (itemW <= 0) return
      const sw = itemW * items.length
      const off = Math.max(0, (viewport.offsetWidth - itemW) / 2)

      setItemWidth(itemW)
      setSetSize(sw)
      setCenterOffset(off)
      x.set(off)
      abs.set(off)
    }

    measure()

    const viewport = viewportRef.current
    const observer = new ResizeObserver(measure)
    if (viewport) observer.observe(viewport)

    return () => {
      observer.disconnect()
    }
  }, [items, x, abs])

  useAnimationFrame(() => {
    if (!setSize || dragging.current) return
    const value = abs.get()
    const u = value - centerOffset
    const w = u - setSize * Math.floor(u / setSize)
    const target = w === 0 ? centerOffset : centerOffset - setSize + w
    if (target !== x.get()) x.set(target)
  })

  useMotionValueEvent(x, 'change', (latest) => {
    if (!itemWidth || items.length === 0) return
    const index = Math.round((centerOffset - latest) / itemWidth)
    const normalized = ((index % items.length) + items.length) % items.length
    setCurrent((prev) => (prev === normalized ? prev : normalized))
  })

  const snapToIndex = (index: number) => {
    if (!itemWidth || !setSize) return
    const targetBase = centerOffset - index * itemWidth
    const value = abs.get()
    let target = targetBase
    while (target - value > setSize / 2) target -= setSize
    while (value - target > setSize / 2) target += setSize
    animate(abs, target, { type: 'spring', stiffness: 300, damping: 34 })
  }

  const moveByItems = (direction: -1 | 1) => {
    snapToIndex(current - direction)
  }

  const snapToNearest = () => {
    if (!itemWidth) return
    const index = Math.round((centerOffset - x.get()) / itemWidth)
    snapToIndex(index)
  }

  if (items.length === 0) return null

  return (
    <div role="region" aria-roledescription="carrusel" aria-label={label} className={className}>
      <div ref={viewportRef} className="overflow-hidden pt-[24px]">
        <motion.div
          ref={trackRef}
          style={{ x }}
          drag="x"
          onDragStart={() => {
            dragging.current = true
          }}
          onDrag={() => abs.set(x.get())}
          onDragEnd={() => {
            dragging.current = false
            snapToNearest()
          }}
          className="flex select-none"
        >
          {slides.map((item, index) => (
            <div key={index} className="flex-none px-4">
              {renderItem(item, index)}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-[38px] flex items-center justify-center gap-[28px]">
        <IconButton
          variant="outline"
          aria-label="Testimonio anterior"
          onClick={() => moveByItems(1)}
        >
          <IconChevronLeft />
        </IconButton>

        <ul className="flex items-center gap-[8px]">
          {items.map((_, i) => (
            <li key={i}>
              <button
                type="button"
                aria-label={`Ir al testimonio ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
                onClick={() => snapToIndex(i)}
                className={`size-[8px] rounded-pill transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud ${
                  i === current ? 'bg-cloud' : 'bg-white-20'
                }`}
              />
            </li>
          ))}
        </ul>

        <IconButton
          variant="outline"
          aria-label="Testimonio siguiente"
          onClick={() => moveByItems(-1)}
        >
          <IconChevronRight />
        </IconButton>
      </div>
    </div>
  )
}