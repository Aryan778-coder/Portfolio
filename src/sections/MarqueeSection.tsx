import { useEffect, useRef, useState } from 'react'

const marqueeItemsRow1 = [
  { label: 'REACT (TSX)', icon: '⚡' },
  { label: 'NEXT.JS', icon: '🚀' },
  { label: 'TYPESCRIPT', icon: '🛡️' },
  { label: 'IIT PATNA CSE', icon: '🎓' },
  { label: 'JEE ADV AIR 1079', icon: '🏆' },
  { label: 'TAILWIND CSS', icon: '🎨' },
  { label: 'CLEAN CODE', icon: '✨' },
  { label: 'WEB PERFORMANCE', icon: '💨' },
  { label: 'RESPONSIVE DESIGN', icon: '📱' },
  { label: 'NODE.JS', icon: '🟢' },
]

const marqueeItemsRow2 = [
  { label: 'SHREE RADHARANI NYAY SADAN', icon: '⚖️' },
  { label: 'CLIENT-FIRST FOCUS', icon: '🤝' },
  { label: 'FULL PROJECT OWNERSHIP', icon: '🎯' },
  { label: 'FASTAPI & FLASK', icon: '⚙️' },
  { label: 'ACCESSIBILITY (WCAG)', icon: '👁️' },
  { label: 'SEO OPTIMISATION', icon: '📈' },
  { label: 'FIGMA TO CODE', icon: '📐' },
  { label: 'CROSS-BROWSER TESTING', icon: '🌐' },
]

const row1Duplicated = [...marqueeItemsRow1, ...marqueeItemsRow1, ...marqueeItemsRow1, ...marqueeItemsRow1]
const row2Duplicated = [...marqueeItemsRow2, ...marqueeItemsRow2, ...marqueeItemsRow2, ...marqueeItemsRow2]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(200)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(scrollOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="marquee"
      className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden border-y border-[#D7E2EA]/10"
    >
      {/* Row 1 - moves right on scroll */}
      <div
        className="flex gap-4 mb-4 whitespace-nowrap"
        style={{ willChange: 'transform', transform: `translateX(${offset - 300}px)` }}
      >
        {row1Duplicated.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-[#141416] border border-[#D7E2EA]/15 px-6 py-4 rounded-2xl flex-shrink-0 text-[#D7E2EA] font-semibold tracking-wider text-base sm:text-lg md:text-xl shadow-lg hover:border-purple-500/50 transition-colors"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Row 2 - moves left on scroll */}
      <div
        className="flex gap-4 whitespace-nowrap"
        style={{ willChange: 'transform', transform: `translateX(${-(offset - 300)}px)` }}
      >
        {row2Duplicated.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-[#18011F]/60 border border-[#B600A8]/30 px-6 py-4 rounded-2xl flex-shrink-0 text-[#D7E2EA] font-semibold tracking-wider text-base sm:text-lg md:text-xl shadow-lg hover:border-[#B600A8] transition-colors"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
