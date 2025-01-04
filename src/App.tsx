import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import Education from './pages/education/EducationPage';
import WorkExperience from './pages/work/WorkExperiencePage';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path='/education' element={<Education />} />
        <Route path='/work-experience' element={<WorkExperience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;



