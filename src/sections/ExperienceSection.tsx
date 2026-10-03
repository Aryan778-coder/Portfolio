import FadeIn from '../components/FadeIn'
import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react'

const workExperience = [
  {
    period: 'April 2026 – Present',
    type: 'Self-Employed',
    role: 'Business Development Executive (Website Sales)',
    summary:
      'Driving new business by identifying and connecting with potential clients — restaurants, schools, and local businesses — to generate qualified leads for web development services.',
    points: [
      'Contacted restaurants, schools, and local businesses to generate leads',
      'Scheduled and conducted online demo meetings for website presentations',
      'Collected client requirements and coordinated with the development team',
    ],
  },
  {
    period: 'May 2026 – Present',
    type: 'Freelance',
    role: 'Sales & Client Relationship Associate',
    summary:
      'Managing the full client communication lifecycle — from first contact through to proposal delivery — ensuring clear, professional interactions at every touchpoint.',
    points: [
      'Managed client inquiries through phone, email, and social media',
      'Maintained customer relationships and handled follow-up communication',
      'Helped prepare proposals for website development services',
    ],
  },
]

const educationList = [
  {
    period: 'July 2026 – Present (1st Sem)',
    location: 'Patna, Bihar',
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Indian Institute of Technology, Patna',
    highlights: ['JEE Mains 2026 — 98 Percentile', 'JEE Advanced 2026 — AIR 1079'],
  },
  {
    period: 'July 2023 – May 2024',
    location: 'Kuchaman, Nagaur',
    degree: 'Senior Secondary School Examination',
    institution: 'Tagore Science Residential School',
  },
  {
    period: 'July 2021 – May 2022',
    location: 'Parbatsar, Nagaur',
    degree: 'Secondary School Examination',
    institution: 'Sanskar Public School',
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32 relative z-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-purple-400 mb-2 block">
              04 Experience & Education
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
            >
              Where I&apos;ve Worked & Studied
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Work Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-[#D7E2EA]/15 pb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
                Work Experience
              </h3>
            </div>

            <div className="flex flex-col gap-8">
              {workExperience.map((job, idx) => (
                <FadeIn key={idx} delay={idx * 0.15} y={20}>
                  <div className="bg-[#141416] border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300 relative group">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/20 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {job.period}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/50">
                        {job.type}
                      </span>
                    </div>

                    <h4 className="text-xl font-semibold text-white mb-2">
                      {job.role}
                    </h4>

                    <p className="text-sm text-[#D7E2EA]/80 font-light leading-relaxed mb-4">
                      {job.summary}
                    </p>

                    <ul className="flex flex-col gap-2 pt-2 border-t border-[#D7E2EA]/10">
                      {job.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/90 font-light">
                          <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-[#D7E2EA]/15 pb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
                Education
              </h3>
            </div>

            <div className="flex flex-col gap-8">
              {educationList.map((edu, idx) => (
                <FadeIn key={idx} delay={idx * 0.15} y={20}>
                  <div className="bg-[#141416] border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300 relative">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/20 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/50 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>

                    <h4 className="text-xl font-semibold text-white mb-1">
                      {edu.degree}
                    </h4>

                    <p className="text-sm font-medium text-purple-300 mb-3">
                      {edu.institution}
                    </p>

                    {edu.highlights && (
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-[#D7E2EA]/10">
                        {edu.highlights.map((hl, hIdx) => (
                          <span
                            key={hIdx}
                            className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-lg flex items-center gap-1.5"
                          >
                            <Award className="w-3.5 h-3.5" />
                            {hl}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
