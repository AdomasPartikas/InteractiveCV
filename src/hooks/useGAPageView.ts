import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

export const useGAPageView = () => {
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const pageTitle = document.title;
      trackPageView(pageTitle);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [location]);
};

export default useGAPageView;
