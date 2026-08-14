import { NAV_ITEMS, SECTION_IDS } from '../../lib/site'
import { useActiveSection } from '../../hooks/useActiveSection'
{/*import { IconLogoMark bg-cloud} from '../icons'*/}
import gacalviLogo from '../../assets/photos/logo.png'

export function Sidebar() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[220px] flex-col bg-ebony lg:flex">
      <div className="border-b border-cloud-9 px-[28px] pb-[19px] pt-[40px]">
        <span className="flex size-[80px] items-center justify-center rounded-2">
          {/*<IconLogoMark className="size-[18px]" />*/}<img src={gacalviLogo} alt="Corporación Gacalvi" className="w-[70px] h-auto object-contain" />
        </span>
        <p className="mt-[26px] font-black uppercase leading-[15.81px] tracking-1.73 text-white">
          <span className="block text-11.5">Corporación</span>
          <span className="block text-11.5 text-cloud">GACALVI</span>
        </p>
      </div>

      <nav aria-label="Navegación principal" className="px-[28px] pt-[16px]">
        <ul className="flex flex-col gap-[12px]">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block py-[7px] text-10.5 font-semibold uppercase tracking-1.89 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloud ${
                    isActive ? 'text-white' : 'text-white-45'
                  }`}
                >
                  {isActive && (
                    <span aria-hidden className="absolute -left-[28px] top-1/2 h-[31px] w-[2px] -translate-y-1/2 bg-cloud" />
                  )}
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-auto border-t border-cloud-9 px-[28px] pb-[26px] pt-[34px]">
        <p className="text-9 font-regular uppercase tracking-1.98 text-white-20">
          <span className="block">Arquitectura</span>
          <span className="block">Ingeniería</span>
          <span className="block">Diseño</span>
        </p>
      </div>
    </aside>
  )
}
