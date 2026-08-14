import type { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>

const baseProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  'aria-hidden': true,
} as const

export function IconLogoMark(props: IconProps) {
  return (
    <svg viewBox="0 0 18 18" width={18} height={18} {...baseProps} {...props}>
      <path
        d="M4.5 16.5V3C4.5 2.60218 4.65804 2.22064 4.93934 1.93934C5.22064 1.65804 5.60218 1.5 6 1.5H12C12.3978 1.5 12.7794 1.65804 13.0607 1.93934C13.342 2.22064 13.5 2.60218 13.5 3V16.5H4.5Z"
        stroke="#050A11"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 9H3C2.60218 9 2.22064 9.15804 1.93934 9.43934C1.65804 9.72064 1.5 10.1022 1.5 10.5V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5H4.5"
        stroke="#050A11"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 6.75H15C15.3978 6.75 15.7794 6.90804 16.0607 7.18934C16.342 7.47064 16.5 7.85218 16.5 8.25V15C16.5 15.3978 16.342 15.7794 16.0607 16.0607C15.7794 16.342 15.3978 16.5 15 16.5H13.5"
        stroke="#050A11"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.5 4.5H10.5" stroke="#050A11" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 7.5H10.5" stroke="#050A11" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 10.5H10.5" stroke="#050A11" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 13.5H10.5" stroke="#050A11" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 13 13" width={13} height={13} {...baseProps} {...props}>
      <path
        d="M2.70833 6.5H10.2917"
        stroke="#050A11"
        strokeWidth={1.08333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2.70833L10.2917 6.5L6.5 10.2917"
        stroke="#050A11"
        strokeWidth={1.08333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconChevronLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 18 18" width={18} height={18} {...baseProps} {...props}>
      <path
        d="M11.25 13.5L6.75 9L11.25 4.5"
        stroke="#FFFFFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconChevronRight(props: IconProps) {
  return (
    <svg viewBox="0 0 18 18" width={18} height={18} {...baseProps} {...props}>
      <path
        d="M6.75 13.5L11.25 9L6.75 4.5"
        stroke="#FFFFFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 18 18" width={18} height={18} {...baseProps} {...props}>
      <path
        d="M4.5 6.75L9 11.25L13.5 6.75"
        stroke="#BCBBBA"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconArrowUp(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" width={20} height={20} {...baseProps} {...props}>
      <path
        d="M15 12.5L10 7.5L5 12.5"
        stroke="#050A11"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const contactStroke = {
  stroke: '#BCBBBA',
  strokeWidth: 1.08333,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function IconMapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 15 13" width={15} height={13} {...baseProps} {...props}>
      <path
        transform="translate(2.62 0.54)"
        d="M5.20602 11.2719C6.21471 10.4016 9.21853 7.58336 9.21853 4.87735C9.21853 3.72746 8.76145 2.62466 7.94783 1.81156C7.13422 0.998461 6.03072 0.541667 4.8801 0.541667C3.72947 0.541667 2.62598 0.998461 1.81236 1.81156C0.99875 2.62466 0.541667 3.72746 0.541667 4.87735C0.541667 7.58336 3.54549 10.4016 4.55417 11.2719C4.64814 11.3426 4.76253 11.3807 4.8801 11.3807C4.99767 11.3807 5.11206 11.3426 5.20602 11.2719Z"
        {...contactStroke}
      />
      <path
        transform="translate(5.33 4.33)"
        d="M2.16858 3.79343C3.0671 3.79343 3.79549 3.0655 3.79549 2.16755C3.79549 1.2696 3.0671 0.541667 2.16858 0.541667C1.27006 0.541667 0.541667 1.2696 0.541667 2.16755C0.541667 3.0655 1.27006 3.79343 2.16858 3.79343Z"
        {...contactStroke}
      />
    </svg>
  )
}

export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 15 13" width={15} height={13} {...baseProps} {...props}>
      <path
        transform="translate(0.74 0.56)"
        d="M12.9717 8.62339V10.2484C12.9724 10.3992 12.9368 10.5486 12.8671 10.6868C12.7973 10.825 12.6951 10.9491 12.5668 11.0511C12.4385 11.153 12.2871 11.2307 12.1222 11.279C11.9573 11.3273 11.7826 11.3453 11.6092 11.3317C9.68601 11.1506 7.83862 10.581 6.21549 9.6688C4.70538 8.83716 3.42508 7.72756 2.46549 6.4188C1.40923 5.00571 0.751893 3.39684 0.546741 1.72255C0.531123 1.57276 0.551663 1.4218 0.607054 1.27927C0.662445 1.13673 0.751473 1.00576 0.86847 0.89468C0.985467 0.783602 1.12787 0.694853 1.28661 0.634085C1.44535 0.573317 1.61695 0.541861 1.79049 0.541719H3.66549C3.96881 0.539132 4.26286 0.63222 4.49284 0.803633C4.72282 0.975045 4.87304 1.21309 4.91549 1.47339C4.99463 1.99342 5.1414 2.50403 5.35299 2.99547C5.43708 3.18934 5.45528 3.40005 5.40543 3.60261C5.35559 3.80518 5.23978 3.99111 5.07174 4.13839L4.27799 4.8263C5.16771 6.18239 6.46328 7.30521 8.02799 8.0763L8.82174 7.38839C8.99167 7.24275 9.20621 7.14239 9.43994 7.09919C9.67367 7.05599 9.91679 7.07176 10.1405 7.14464C10.7075 7.32802 11.2967 7.45522 11.8967 7.5238C12.2003 7.56092 12.4776 7.69346 12.6758 7.8962C12.874 8.09894 12.9793 8.35774 12.9717 8.62339Z"
        {...contactStroke}
      />
    </svg>
  )
}

export function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 15 13" width={15} height={13} {...baseProps} {...props}>
      <g transform="translate(0.71 1.63)" {...contactStroke}>
        <path d="M11.7917 0.541667H1.79167C1.10131 0.541667 0.541667 1.02669 0.541667 1.625V8.125C0.541667 8.72331 1.10131 9.20833 1.79167 9.20833H11.7917C12.482 9.20833 13.0417 8.72331 13.0417 8.125V1.625C13.0417 1.02669 12.482 0.541667 11.7917 0.541667Z" />
        <path d="M13.0418 0.541767L7.43552 3.62927C7.24256 3.73404 7.01947 3.78961 6.79177 3.78961C6.56407 3.78961 6.34097 3.73404 6.14802 3.62927L0.541767 0.541767" />
      </g>
    </svg>
  )
}

export function IconInstagram(props: IconProps) {
  return (
    <svg viewBox="0 0 13 13" width={13} height={13} {...baseProps} {...props}>
      <path
        d="M9.20833 1.08333H3.79167C2.2959 1.08333 1.08333 2.2959 1.08333 3.79167V9.20833C1.08333 10.7041 2.2959 11.9167 3.79167 11.9167H9.20833C10.7041 11.9167 11.9167 10.7041 11.9167 9.20833V3.79167C11.9167 2.2959 10.7041 1.08333 9.20833 1.08333Z"
        stroke="#FFFFFF"
        strokeOpacity={0.4}
        strokeWidth={1.08333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66667 6.15875C8.73351 6.60955 8.65651 7.06995 8.44662 7.47447C8.23672 7.87898 7.90462 8.20701 7.49755 8.41191C7.09047 8.6168 6.62916 8.68811 6.17922 8.61571C5.72928 8.54331 5.31362 8.33088 4.99137 8.00863C4.66912 7.68638 4.45669 7.27072 4.38429 6.82078C4.31188 6.37084 4.3832 5.90953 4.58809 5.50245C4.79298 5.09538 5.12102 4.76328 5.52553 4.55338C5.93005 4.34349 6.39045 4.26649 6.84125 4.33333C7.30108 4.40152 7.72679 4.61579 8.0555 4.9445C8.38421 5.27321 8.59848 5.69892 8.66667 6.15875Z"
        stroke="#FFFFFF"
        strokeOpacity={0.4}
        strokeWidth={1.08333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.47917 3.52083H9.48458"
        stroke="#FFFFFF"
        strokeOpacity={0.4}
        strokeWidth={1.08333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconInstagramBox(props: IconProps) {
  return (
    <svg viewBox="0 0 13 13" width={13} height={13} {...baseProps} {...props}>
      <path
        d="M9.75 1.08333H8.125C7.40671 1.08333 6.71783 1.36867 6.20992 1.87659C5.70201 2.3845 5.41667 3.07337 5.41667 3.79167V5.41667H3.79167V7.58333H5.41667V11.9167H7.58333V7.58333H9.20833L9.75 5.41667H7.58333V3.79167C7.58333 3.64801 7.6404 3.51023 7.74198 3.40865C7.84357 3.30707 7.98134 3.25 8.125 3.25H9.75V1.08333Z"
        stroke="#FFFFFF"
        strokeOpacity={0.4}
        strokeWidth={1.08333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconEllipse(props: IconProps) {
  return (
    <svg viewBox="0 0 70 70" width={70} height={70} xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
      <circle cx="35" cy="35" r="35" fill="#D9D9D9" />
    </svg>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
      <path d="M3 5.5H17" stroke="#BCBBBA" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M3 10H17" stroke="#BCBBBA" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M3 14.5H17" stroke="#BCBBBA" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}

export function IconClose(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
      <path d="M5 5L15 15" stroke="#BCBBBA" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M15 5L5 15" stroke="#BCBBBA" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}
