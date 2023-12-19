import './App.css';

// import components
import Header from './components/Header/Header';
import SectionContainer from './components/Section/SectionContainer';
import ExperienceSection from './components/Section/Sections/ExperienceSection/ExperienceSection';
import EducationSection from './components/Section/Sections/EducationSection/EducationSection';
import SkillsSection from './components/Section/Sections/SkillsSection/SkillsSection';
import RecentTraining from './components/Section/Sections/RecentTraining/RecentTraining';
import Toggle from './components/Toggle/Toggle';
import { InformalToggleContextProvider } from './components/Toggle/context/InformalToggleContext';

import fontawesome from '@fortawesome/fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


fontawesome.library.add(fab);

function App() {

  return (
    <InformalToggleContextProvider initialState={false}>
      <Toggle />
      <div id="dynamic-content">
        <Header />
        <SectionContainer headerText="Experience">
          <ExperienceSection />
        </SectionContainer>
        <SectionContainer headerText="Education">
          <EducationSection />
        </SectionContainer>
        <SectionContainer headerText="Skills">
          <SkillsSection />
        </SectionContainer>
        <SectionContainer headerText="Recent Training">
          <RecentTraining />
        </SectionContainer>
      </div>
    </InformalToggleContextProvider>
  );
}

export default App;
