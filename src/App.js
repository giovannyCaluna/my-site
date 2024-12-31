import './App.css';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Certifications from './components/Certifications';
import Interests from './components/Interests';

function App() {
  return (
    <Container maxWidth="md" sx={{ fontFamily: 'Arial, sans-serif', paddingTop: 4 }}>
      <CssBaseline />
      <Header />
      <Profile />
      <Skills />
      <Education />
      <WorkExperience />
      <Certifications />
      <Interests />
    </Container>
  );
}

export default App;
