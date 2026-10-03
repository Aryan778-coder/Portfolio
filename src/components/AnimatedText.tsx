import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const characters = text.split('')

  return (
    <p ref={ref} className={`relative ${className}`} aria-label={text} style={style}>
      {characters.map((char, i) => {
        const start = i / characters.length
        const end = Math.min(start + 2 / characters.length, 1)

        return (
          <span key={i} className="relative inline-block" aria-hidden="true">
            {/* Invisible placeholder for layout */}
            <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
            {/* Animated visible character */}
            <AnimatedChar
              char={char}
              scrollYProgress={scrollYProgress}
              start={start}
              end={end}
            />
          </span>
        )
      })}
    </p>
  )
}

interface AnimatedCharProps {
  char: string
  scrollYProgress: any
  start: number
  end: number
}

function AnimatedChar({ char, scrollYProgress, start, end }: AnimatedCharProps) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

  return (
    <motion.span
      style={{ opacity }}
      className="absolute inset-0 text-center"
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}
