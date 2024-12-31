import StyledBox from '../components/StyledBox';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Education from '../components/Education';
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
