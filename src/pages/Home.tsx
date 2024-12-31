import StyledBox from '../components/cv/StyledBox';
import Profile from '../components/cv/Profile';
import Skills from '../components/cv/Skills';
import Education from '../components/cv/Education';
import { JSX } from 'react';

function Home(): JSX.Element {
  return (
    <StyledBox>
      <Profile />
      <Skills />
      <Education />
    </StyledBox>
  );
}

export default Home;
