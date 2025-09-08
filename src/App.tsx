import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="projects" element={<div>Projects Page - Coming Soon</div>} />
          <Route path="contact" element={<div>Contact Page - Coming Soon</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
