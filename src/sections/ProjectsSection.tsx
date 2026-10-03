import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from '../components/LiveProjectButton'

const projects = [
  {
    number: '01',
    category: 'Client Project • E-Commerce',
    name: 'Gaurav Footwears',
    description:
      'Luxury women’s footwear brand with an online shopping platform, rich product catalogs, Supabase backend, and secure Razorpay checkout.',
    link: 'https://www.gauravfootwears.in/',
    tags: ['React (TSX)', 'Tailwind CSS', 'Supabase', 'Razorpay', 'Live Client'],
    col1img1: 'https://www.gauravfootwears.in/heels-collection.jpg',
    col1img2: 'https://www.gauravfootwears.in/ballerinas-collection.jpg',
    col2img: 'https://www.gauravfootwears.in/og-image.png',
  },
  {
    number: '02',
    category: 'Client Project • Legal Platform',
    name: 'Shree Radharani Nyay Sadan',
    description:
      'Authoritative digital platform for an advocate and legal advisory firm in Rajasthan, crafted for credibility and client consultations.',
    link: 'https://www.shreeradharaninyaysadan.in/',
    tags: ['React (TSX)', 'TypeScript', 'Tailwind CSS', 'SEO Optimization'],
    col1img1: 'https://www.shreeradharaninyaysadan.in/yogesh-sharma.png',
    col1img2: 'https://www.shreeradharaninyaysadan.in/shankar-loor.png',
    col2img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=85',
  },
]

const TOTAL_CARDS = projects.length

interface ProjectCardProps {
  project: (typeof projects)[0]
  index: number
  totalCards: number
}

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={cardRef}
      className="sticky"
      style={{ top: `${96 + index * 28}px`, height: '85vh' }}
    >
      <motion.div
        style={{ scale }}
        className="
          w-full h-full
          rounded-[36px] sm:rounded-[48px] md:rounded-[60px]
          border-2 border-[#D7E2EA]/40
          bg-[#0C0C0C]
          p-4 sm:p-6 md:p-8
          flex flex-col gap-4 sm:gap-6
          overflow-hidden shadow-2xl relative
        "
      >
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="hero-heading font-black leading-none text-[#D7E2EA] select-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span
                className="text-purple-300 font-semibold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm"
              >
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase tracking-tight leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 2.2rem)' }}
              >
                {project.name}
              </h3>
              <div className="hidden sm:flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#D7E2EA]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <LiveProjectButton href={project.link} />
        </div>

        {/* Bottom row: two-column image grid */}
        <div className="flex gap-3 sm:gap-4 flex-1 min-h-0 relative z-10">
          {/* Left column (40%) */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <div className="relative rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#141416] border border-[#D7E2EA]/15 flex items-center justify-center flex-1">
              <img
                src={project.col1img1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#141416] border border-[#D7E2EA]/15 flex items-center justify-center flex-1">
              <img
                src={project.col1img2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column (60%) */}
          <div
            style={{ width: '60%' }}
            className="relative rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#141416] border border-[#D7E2EA]/15 group"
          >
            <img
              src={project.col2img}
              alt={`${project.name} preview main`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-4 sm:p-6 flex flex-col justify-end">
              <p className="text-[#D7E2EA] text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-lg line-clamp-2 sm:line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      {/* Heading */}
      <div className="text-center mb-16 sm:mb-20 md:mb-24">
        <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-purple-400 mb-2 block">
          Featured Work
        </span>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </div>

      {/* Sticky stacking cards */}
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <div key={project.number} style={{ height: '85vh' }}>
            <ProjectCard project={project} index={i} totalCards={TOTAL_CARDS} />
          </div>
        ))}
      </div>
    </section>
  )
}
