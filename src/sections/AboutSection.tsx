import type { CSSProperties } from 'react'
import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'
import { MapPin, GraduationCap, Briefcase, Sparkles, Quote } from 'lucide-react'

const quickInfo = [
  { label: 'Based in', value: 'Ajmer, Rajasthan', icon: MapPin },
  { label: 'Education', value: 'IIT Patna, CSE', icon: GraduationCap },
  { label: 'Currently', value: '1st Sem + Freelancing', icon: Briefcase },
  { label: 'Open to', value: 'Full-time roles', icon: Sparkles },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C]"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 max-w-5xl mx-auto text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Primary Animated paragraph */}
        <div className="flex flex-col items-center gap-12 sm:gap-16">
          <AnimatedText
            text="I pay attention to the small things others skip. I'm Aryan Dadhich, a first-year Computer Science student at IIT Patna and a frontend developer from Ajmer, Rajasthan. I build responsive, performant websites using React, TypeScript, and Next.js — with a keen eye for design details."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[720px]"
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)' } as CSSProperties}
          />

          {/* Secondary Bio Card */}
          <FadeIn delay={0.2} y={30} className="w-full max-w-3xl">
            <div className="bg-[#141416]/80 border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-8 text-left text-[#D7E2EA] shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none"></div>

              <p className="font-light text-base sm:text-lg leading-relaxed mb-6 opacity-90">
                I cracked <span className="font-semibold text-white">JEE Advanced 2026</span> with an <span className="font-semibold text-purple-300">AIR of 1079</span> and <span className="font-semibold text-white">JEE Mains with 98 percentile</span> — but my real obsession has always been building things for the web. I&apos;ve been working independently since 2026, helping clients across India get a professional online presence they can be proud of.
              </p>

              <p className="font-light text-base sm:text-lg leading-relaxed opacity-90">
                Beyond frontend, I bring experience in client communication, requirement gathering, and full project ownership from scoping through deployment.
              </p>
            </div>
          </FadeIn>

          {/* Quote Block */}
          <FadeIn delay={0.3} y={30} className="w-full max-w-2xl">
            <div className="bg-gradient-to-r from-[#18011F]/80 to-[#7621B0]/20 border border-[#B600A8]/40 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center relative">
              <Quote className="w-8 h-8 text-[#B600A8] mb-3 opacity-80" />
              <blockquote className="font-medium text-lg sm:text-xl md:text-2xl text-white italic tracking-wide mb-2">
                “Good design is invisible. Bad design is all you notice.”
              </blockquote>
              <cite className="not-italic text-sm font-semibold uppercase tracking-widest text-[#D7E2EA]/70">
                — Aryan Dadhich
              </cite>
            </div>
          </FadeIn>

          {/* Quick Info Grid */}
          <FadeIn delay={0.4} y={30} className="w-full max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickInfo.map((info, idx) => {
                const IconComponent = info.icon
                return (
                  <div
                    key={idx}
                    className="bg-[#141416] border border-[#D7E2EA]/15 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:border-purple-500/40 transition-all duration-300"
                  >
                    <IconComponent className="w-6 h-6 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 mb-1 font-medium">
                      {info.label}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#D7E2EA]">
                      {info.value}
                    </span>
                  </div>
                )
              })}
            </div>
          </FadeIn>

          <ContactButton />
        </div>
      </div>
    </section>
  )
}
