import StyledBox from '../components/cv/StyledBox';
import Profile from '../components/cv/Profile';
import Skills from '../components/cv/Skills';
import Education from '../components/cv/Education';
import { JSX } from 'react';
import Header from '../components/cv/Header';
import WorkExperience from '../components/WorkExperience';
import Certifications from '../components/cv/Certifications';
import { StyledDiv } from '../components/Segment';

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
