import FadeIn from '../components/FadeIn'
import { Code2, Layers, Wrench, Sparkles } from 'lucide-react'

const skillCategories = [
  {
    number: '01',
    title: 'Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C / C++', 'HTML5 & CSS3', 'R'],
    description: 'Core programming and scripting languages used for building software, data structures, and web components.',
  },
  {
    number: '02',
    title: 'Frameworks & Libraries',
    icon: Layers,
    skills: ['React (TSX)', 'Next.js', 'Node.js', 'Flask', 'FastAPI', 'Tailwind CSS'],
    description: 'Modern frontend and backend frameworks utilized to craft scalable, high-performance web applications.',
  },
  {
    number: '03',
    title: 'Tools & Workflow',
    icon: Wrench,
    skills: ['Git & GitHub', 'VS Code', 'Visual Studio', 'PyCharm', 'IntelliJ', 'Eclipse', 'Figma'],
    description: 'Development environments, version control, and design software enabling efficient team collaboration and scoping.',
  },
  {
    number: '04',
    title: 'Other Skills',
    icon: Sparkles,
    skills: ['Responsive Design', 'Accessibility (WCAG)', 'REST APIs', 'SEO', 'Web Performance', 'Cross-browser Testing'],
    description: 'Essential web engineering standards that ensure seamless performance, visibility, and accessibility for every user.',
  },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
          >
            What I Work With
          </h2>
          <p className="font-light text-[#0C0C0C]/70 max-w-2xl mx-auto mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            A working stack built through real projects — not just tutorials. Each tool here has been used to ship something live.
          </p>
        </div>

        {/* Skill list */}
        <div className="flex flex-col gap-10">
          {skillCategories.map((category, i) => {
            const IconComp = category.icon
            return (
              <FadeIn key={category.number} delay={i * 0.1} y={20}>
                <div
                  className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 sm:py-10 border-t border-[#0C0C0C]/15"
                >
                  {/* Left: Number & Title */}
                  <div className="flex items-center gap-6 md:w-1/3">
                    <span
                      className="font-black text-[#0C0C0C] leading-none"
                      style={{ fontSize: 'clamp(2.5rem, 6vw, 90px)' }}
                    >
                      {category.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <IconComp className="w-5 h-5 text-[#7621B0]" />
                        <h3
                          className="font-semibold uppercase text-[#0C0C0C]"
                          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.8rem)' }}
                        >
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#0C0C0C]/60 max-w-xs font-light">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Skill Badges */}
                  <div className="md:w-2/3 flex flex-wrap gap-2.5 sm:gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#0C0C0C]/5 border border-[#0C0C0C]/15 hover:border-[#7621B0] hover:bg-[#7621B0]/10 text-[#0C0C0C] font-medium text-sm sm:text-base px-4 py-2 rounded-xl transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
