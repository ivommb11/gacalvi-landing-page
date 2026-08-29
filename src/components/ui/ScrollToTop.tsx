import { useEffect, useState } from 'react'
import { IconArrowUp } from '../icons'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const show = window.scrollY > 0
      setVisible((prev) => (prev !== show ? show : prev))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Volver al inicio"
      onClick={scrollToTop}
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={`fixed bottom-[74px] right-[22px] z-50 flex size-[48px] items-center justify-center rounded-24 bg-cloud text-ebony shadow-fab transition-opacity duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <IconArrowUp />
    </button>
  )
}
