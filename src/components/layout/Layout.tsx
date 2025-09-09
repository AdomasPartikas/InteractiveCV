import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from '../ui/AnimatedBackground';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <AnimatedBackground />
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
