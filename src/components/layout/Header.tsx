import { useState } from 'react'

import { FOOTER_NAV, SECTION_IDS } from '../../lib/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import gacalviLogo from '../../assets/photos/logo.png'
import { IconClose, IconMenu } from '../icons'
import { ConsultasModal } from '../ui/ConsultasModal'

export function Header() {
  const [open, setOpen] = useState(false)
  const [consultasOpen, setConsultasOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  return (
    <header className="sticky top-0 z-50 border-b border-cloud-9 bg-ebony lg:hidden">
      <div className="flex items-center justify-between px-[20px] py-[14px]">
        <a
          href="#inicio"
          className="flex items-center gap-[12px]"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-[36px] items-center justify-center rounded-2">
            <img src={gacalviLogo} alt="Corporación Gacalvi" className="w-[36px] h-auto object-contain" />
          </span>
          <span className="font-black uppercase leading-[15.81px] tracking-1.73 text-white">
            <span className="block text-11.5">Corporación</span>
            <span className="block text-11.5 text-cloud">GACALVI</span>
          </span>
        </a>

        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="flex size-[40px] items-center justify-center rounded-2 border border-cloud-9 text-cloud focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Navegación móvil" className="border-t border-cloud-9 px-[20px] pb-[24px] pt-[12px]">
          <ul className="flex flex-col">
            {FOOTER_NAV.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block border-b border-white-5 py-[14px] text-12 font-semibold uppercase tracking-1.89 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud ${
                      isActive ? 'text-white' : 'text-white-45'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <button
            type="button"
            onClick={() => { setOpen(false); setConsultasOpen(true) }}
            className="mt-[16px] w-full rounded-2 bg-cloud py-[10px] text-12 font-semibold uppercase tracking-1.89 text-ebony shadow-button transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud"
          >
            Consultas
          </button>
        </nav>
      )}

    <ConsultasModal open={consultasOpen} onClose={() => setConsultasOpen(false)} />
    </header>
  )
}
