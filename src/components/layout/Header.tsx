import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';
import { cn } from '../../utils/helpers';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn('header', isScrolled && 'header--scrolled')}>
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo">
            <span className="header__logo-text">&lt;/&gt;</span>
            <span className="header__name">Patrikas</span>
          </Link>

          <nav className={cn('header__nav', isMobileMenuOpen && 'header__nav--open')}>
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'header__nav-link',
                  location.pathname === item.path && 'header__nav-link--active'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="header__mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={cn('hamburger', isMobileMenuOpen && 'hamburger--active')}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
