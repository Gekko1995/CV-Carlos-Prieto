import Hero from '../components/Hero.jsx';
import Trusted from '../components/Trusted.jsx';
import About from '../components/About.jsx';
import CompanyMission from '../components/CompanyMission.jsx';
import ExperienciaPromo from '../components/ExperienciaPromo.jsx';
import Education from '../components/Education.jsx';
import ProfessionalTitle from '../components/ProfessionalTitle.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';

export default function MainPage() {
  return (
    <>
      <Hero />
      <Trusted />
      <About />
      <CompanyMission />
      <ExperienciaPromo />
      <Education />
      <ProfessionalTitle />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
