import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Index from './pages/Index';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div>
       <Navbar /> 
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;



