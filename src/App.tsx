import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ui/ScrollToTop';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { initGA } from './utils/analytics';
import useGAPageView from './hooks/useGAPageView';
import './styles/globals.css';

const AppContent = () => {
  useGAPageView();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

function App() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    
    if (measurementId) {
      initGA(measurementId).catch(() => {
      });
    }
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
