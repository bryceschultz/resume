import logo from './logo.svg';
import './App.css';
// import components
import Header from './components/Header/Header';
import SectionContainer from './components/Section/SectionContainer';
import EducationSection from './components/Section/Sections/EducationSection/EducationSection';
import ExperienceSection from './components/Section/Sections/ExperienceSection/ExperienceSection';

function App() {
  return (
    <div id="body">
      <Header />
      <SectionContainer headerText="Education">
        <EducationSection />
      </SectionContainer>
      <SectionContainer headerText="Experience">
        <ExperienceSection />
      </SectionContainer>
    </div>
  );
}

export default App;
