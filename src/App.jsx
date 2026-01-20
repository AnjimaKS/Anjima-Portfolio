import GalaxyBackground from './components/GalaxyBackground';
import LandingSection from './sections/LandingSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import MeteorShower from './components/MeteorShower';

function App() {
  return (
    <div className="app-container">
      <GalaxyBackground />
      <MeteorShower />
      <LandingSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}

export default App
