import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import CaseStudySection from './sections/CaseStudySection'
import ExperienceSection from './sections/ExperienceSection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <main style={{ backgroundColor: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CaseStudySection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}

export default App
