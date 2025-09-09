import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  smooth?: boolean;
  excludePaths?: string[];
}

const ScrollToTop = ({ smooth = true, excludePaths = [] }: ScrollToTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Skip scroll to top for excluded paths
    if (excludePaths.includes(pathname)) {
      return;
    }

    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'instant'
    });
  }, [pathname, smooth, excludePaths]);

  return null;
};

export default ScrollToTop;
