import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'
import {
  CONTACT_INFO,
  FOOTER_NAV,
  SOCIAL_BRANDS,
  SOCIAL_HANDLES,
} from '../../lib/site'
import {
  IconArrowUp,
  IconInstagram,
  IconInstagramBox,
  IconMail,
  IconMapPin,
  IconPhone,
} from '../icons'
import gacalviLogo from "../../assets/photos/logo.png";

const columnHeading = 'text-9.5 font-bold uppercase tracking-1.9 text-cloud'
const columnDivider = 'mt-[4px] block h-px w-[34px] bg-white-7'
const linkClass =
  'inline-flex items-center text-12 font-regular tracking-0.48 text-white-38 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud'

function scrollToTop() {
  window.scrollTo({ top: 0 })
}

export function Footer() {
  const shouldReduceMotion = useReducedMotion()
  const footerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.footer
      ref={footerRef}
      id="contacto"
      style={shouldReduceMotion ? undefined : { y, opacity }}
      className="relative bg-ebony"
    >
      <div className="mx-auto w-full max-w-[1700px] px-6 pt-[80px] xl:pl-[145px]">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          <div className="max-w-[294px]">
            <div className="flex items-center gap-[12px]">
              <span className="flex size-[36px] shrink-0 items-center justify-center rounded-2 ">
                {/*<IconLogoMark className="size-[18px]" />bg-cloud*/}<img src={gacalviLogo} alt="Corporación Gacalvi" className="w-[70px] h-auto object-contain" />
              </span>
              <p className="text-12 font-black uppercase tracking-1.44 text-white">
                Corporación GACALVI
              </p>
            </div>
            {/*<span aria-hidden className="mt-[17px] block h-[1.5px] w-[42px] bg-cloud" />*/}
            <p className="mt-[25px] text-12.5 font-regular text-white-38">
              Firma de arquitectura e ingeniería comprometida con la excelencia, la innovación y el
              impacto positivo en el entorno construido peruano.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página" className="max-w-[240px]">
            <h3 className={columnHeading}>Navegación</h3>
            <span aria-hidden className={columnDivider} />
            <ul className="mt-[24px] flex flex-col gap-[18px]">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-[230px]">
            <h3 className={columnHeading}>Contacto</h3>
            <span aria-hidden className={columnDivider} />
            <ul className="mt-[24px] flex flex-col gap-[18px]">
              <li className="flex items-start gap-[24px]">
                <IconMapPin className="mt-[2px] shrink-0" />
                <span className="text-12 font-regular leading-[16px] text-white-38">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li>
                <a href={CONTACT_INFO.phoneHref} className={`${linkClass} gap-[24px]`}>
                  <IconPhone className="shrink-0" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.emailHref} className={`${linkClass} gap-[24px]`}>
                  <IconMail className="shrink-0" />
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="max-w-[230px]">
            <h3 className={columnHeading}>Redes Sociales</h3>
            <span aria-hidden className={columnDivider} />
            <ul className="mt-[24px] flex flex-col gap-[18px]">
              {SOCIAL_HANDLES.map((social) => (
                <li key={social.handle}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} gap-[14px]`}
                  >
                    <IconInstagram className="shrink-0" />
                    {social.handle}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-[45px] flex flex-col gap-[18px]">
              {SOCIAL_BRANDS.map((brand) => (
                <li key={brand.name}>
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} gap-[12px]`}
                  >
                    <span className="flex size-[16px] shrink-0 items-center justify-center rounded-2 border border-white-10">
                      <IconInstagramBox className="size-[13px]" />
                    </span>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[64px] border-t border-white-5">
        <p className="py-[20px] text-center text-11 font-regular text-white-50">
          © 2026 Corporación GACALVI. Todos los derechos reservados.
        </p>
      </div>

      <button
        type="button"
        aria-label="Volver al inicio"
        onClick={scrollToTop}
        className="absolute bottom-[74px] right-[22px] flex size-[48px] items-center justify-center rounded-24 bg-cloud text-ebony shadow-fab focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud"
      >
        <IconArrowUp />
      </button>
    </motion.footer>
  )
}
