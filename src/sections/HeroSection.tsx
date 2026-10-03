import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import Magnet from '../components/Magnet'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-30">
          <a
            href="#about"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            Projects
          </a>
          <a
            href="#casestudy"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            Case Study
          </a>
          <a
            href="#experience"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* Hero heading */}
      <div className="overflow-hidden w-full px-4 md:px-8 relative z-20">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13vw] sm:text-[14vw] md:text-[15.5vw] lg:text-[15vw] mt-6 sm:mt-4 md:-mt-5 text-center sm:text-left"
            style={{ display: 'block' }}
          >
            HI, I&apos;M ARYAN
          </h1>
        </FadeIn>
      </div>

      {/* Portrait - centered absolutely with Magnet */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-[42%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur-lg group-hover:opacity-60 transition duration-500"></div>
            <img
              src="/aryan.png"
              alt="Aryan Dadhich - Frontend Developer & CSE Student"
              className="relative w-[260px] sm:w-[340px] md:w-[400px] lg:w-[460px] rounded-[36px] object-cover border-2 border-[#D7E2EA]/30 shadow-2xl select-none pointer-events-none"
              style={{ maxHeight: '55vh' }}
              draggable={false}
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom bar */}
      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 mt-auto relative z-20">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[290px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.35rem)' }}
          >
            CSE STUDENT AT IIT PATNA & FRONTEND DEVELOPER DRIVEN BY CRAFTING WEBSITES THAT FEEL RIGHT TO USE
          </p>
        </FadeIn>

        {/* Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
