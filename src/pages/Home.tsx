import { JSX } from 'react';
import Certifications from '../components/cv/Certifications';
import Education from '../components/cv/Education';
import Header from '../components/cv/Header';
import Profile from '../components/cv/Profile';
import Skills from '../components/cv/Skills';
import StyledBox from '../components/cv/StyledBox';
import WorkExperience from '../components/cv/WorkExperience';

function Home(): JSX.Element {
  return (
    <StyledBox>
      <Header />
      <Profile />
      <Skills />
      <Education />
      <WorkExperience />
      <Certifications />
    </StyledBox>
  );
}

export default Home;
