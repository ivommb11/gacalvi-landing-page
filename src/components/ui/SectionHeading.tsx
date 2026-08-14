interface SectionHeadingProps {
  title: string
  onDark?: boolean
  className?: string
}

export function SectionHeading({ title, onDark = false, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <h2
        className={`text-center text-28 font-bold uppercase tracking-5.04 ${
          onDark ? 'text-white' : 'text-mineshaft'
        }`}
      >
        {title}
      </h2>
      <span aria-hidden className="mx-auto mt-[16px] block h-[2px] w-[56px] rounded-pill bg-cloud" />
    </div>
  )
}
