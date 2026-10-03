import { useState } from 'react'
import FadeIn from '../components/FadeIn'
import { ExternalLink, CheckCircle2, ShieldCheck, Target, UserCheck, AlertTriangle } from 'lucide-react'

const caseStudies = [
  {
    id: 'gaurav',
    badge: 'Live Production • E-Commerce',
    period: '2026 – Present',
    title: 'Gaurav Footwears',
    url: 'https://www.gauravfootwears.in/',
    displayUrl: 'gauravfootwears.in',
    overview:
      'A luxury direct-to-consumer e-commerce footwear platform designed with timeless Indian artistry, supreme comfort, real-time product catalogs, Supabase backend, and secure Razorpay payment gateway integration.',
    tech: [
      'React (TSX)',
      'Tailwind CSS',
      'Supabase (DB & Auth)',
      'Razorpay Payment Gateway',
      'Cart & Order Workflows',
      'SEO & Performance Tuning',
      'Responsive Design',
    ],
    highlights: [
      {
        title: 'Problem',
        icon: AlertTriangle,
        text: 'The brand previously operated primarily offline and through local word-of-mouth. To scale nationally, they needed an upscale, high-converting digital storefront that conveyed timeless luxury while providing trustworthy, effortless online purchasing and order tracking.',
      },
      {
        title: 'Goal',
        icon: Target,
        text: 'Engineer a high-performance e-commerce platform that showcases handcrafted collections (Ballerinas, Heels, Flats, Wedges, Royal Juttis), offers real-time cart management, and guarantees 100% secure checkout via Razorpay.',
      },
      {
        title: 'My Role',
        icon: UserCheck,
        text: 'Lead Frontend & E-Commerce Developer — designed the responsive user interface, implemented state-driven cart & checkout flows, integrated Supabase for backend data persistence, hooked up Razorpay API, and deployed to live production.',
      },
      {
        title: 'Challenges',
        icon: ShieldCheck,
        text: 'Optimizing high-res luxury photography without sacrificing sub-second page loads, implementing seamless mobile cart interactions with live price calculations, and ensuring bulletproof payment verification callbacks across UPI, cards, and netbanking.',
      },
    ],
    outcome: {
      headline: 'Outcome',
      text: 'Successfully launched live at gauravfootwears.in with automated catalog browsing, instant checkout, and an exquisite luxury aesthetic that elevates brand perception and drives direct customer orders.',
    },
  },
  {
    id: 'legal',
    badge: 'Live Production • Legal Platform',
    period: '2024 – Present',
    title: 'Shree Radharani Nyay Sadan',
    url: 'https://www.shreeradharaninyaysadan.in/',
    displayUrl: 'shreeradharaninyaysadan.in',
    overview:
      'A comprehensive web platform for an advocate and legal services firm in Rajasthan, built to showcase legal services, profile credentials, and facilitate direct client inquiries with high credibility.',
    tech: [
      'React (TSX)',
      'TypeScript',
      'Tailwind CSS',
      'HTML5 & CSS3',
      'Responsive Design',
      'SEO Optimisation',
      'Legal UX Architecture',
    ],
    highlights: [
      {
        title: 'Problem',
        icon: AlertTriangle,
        text: 'The legal firm had no online presence. Prospective clients seeking legal assistance had no way to verify credentials, explore specialized legal services, or easily reach out — creating a major trust gap in a client-first profession.',
      },
      {
        title: 'Goal',
        icon: Target,
        text: "Design and engineer a fast, clean, highly credible website that presents the advocate's expertise, structures complex service details clearly, and offers an effortless contact workflow across all screen sizes and mobile connections.",
      },
      {
        title: 'My Role',
        icon: UserCheck,
        text: 'Full-stack development and design owner — handled client requirements, UI architecture, component development with React (TSX) and TypeScript, performance tuning, and final production deployment.',
      },
      {
        title: 'Challenges',
        icon: ShieldCheck,
        text: 'Balancing authoritative legal aesthetics with an approachable user experience. Presenting structured legal details clearly required clean component boundaries, accessible typography hierarchy, and mobile-first responsive layout optimization.',
      },
    ],
    outcome: {
      headline: 'Outcome',
      text: 'Successfully deployed live at shreeradharaninyaysadan.in. Provides the advocate with a polished digital identity that builds instant client confidence, loads lightning-fast, and drives direct client inquiries.',
    },
  },
]

export default function CaseStudySection() {
  const [activeStudyIndex, setActiveStudyIndex] = useState(0)
  const currentStudy = caseStudies[activeStudyIndex]

  return (
    <section
      id="casestudy"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-purple-400 mb-2 block">
              In-Depth Breakdown
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 130px)' }}
            >
              Case Studies
            </h2>
          </div>
        </FadeIn>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {caseStudies.map((study, idx) => {
            const isActive = activeStudyIndex === idx
            return (
              <button
                key={study.id}
                onClick={() => setActiveStudyIndex(idx)}
                className={`px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#D7E2EA] text-[#0C0C0C] shadow-lg shadow-purple-500/20 scale-105'
                    : 'bg-[#141416] border border-[#D7E2EA]/20 text-[#D7E2EA]/70 hover:text-white hover:border-[#D7E2EA]/50'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-purple-600' : 'bg-gray-500'}`} />
                <span>{study.title}</span>
              </button>
            )
          })}
        </div>

        {/* Featured Project Main Card */}
        <FadeIn key={currentStudy.id} delay={0.1} y={20}>
          <div className="rounded-[36px] sm:rounded-[48px] border-2 border-[#D7E2EA]/20 bg-[#141416] p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Header / Meta */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-8 border-b border-[#D7E2EA]/10 pb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {currentStudy.badge}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                    {currentStudy.period}
                  </span>
                </div>
                <h3
                  className="text-white font-bold tracking-tight uppercase"
                  style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)' }}
                >
                  {currentStudy.title}
                </h3>
              </div>

              {/* Live Link Button */}
              <a
                href={currentStudy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base flex items-center gap-2 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-300 shadow-md group"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Project Overview */}
            <div className="mb-10">
              <p className="text-lg sm:text-xl text-[#D7E2EA] font-light leading-relaxed max-w-4xl opacity-90">
                {currentStudy.overview}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-semibold block mb-3">
                Technologies & Focus Areas
              </span>
              <div className="flex flex-wrap gap-2.5">
                {currentStudy.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#0C0C0C] border border-[#D7E2EA]/20 text-[#D7E2EA] text-xs sm:text-sm font-medium px-4 py-2 rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {currentStudy.highlights.map((highlight, idx) => {
                const IconComponent = highlight.icon
                return (
                  <div
                    key={idx}
                    className="bg-[#0C0C0C]/60 border border-[#D7E2EA]/10 rounded-2xl p-6 relative hover:border-purple-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="font-semibold text-lg uppercase tracking-wider text-white">
                        {highlight.title}
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed">
                      {highlight.text}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Outcome Card */}
            <div className="bg-gradient-to-r from-emerald-950/40 to-purple-950/40 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400 mt-1 md:mt-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg uppercase tracking-wider text-emerald-300 mb-1">
                    {currentStudy.outcome.headline}
                  </h4>
                  <p className="text-sm sm:text-base text-[#D7E2EA]/90 font-light leading-relaxed">
                    {currentStudy.outcome.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
