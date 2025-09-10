import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

// Hook to track page views automatically when routes change
export const useGAPageView = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    const currentUrl = window.location.origin + location.pathname + location.search;
    const pageTitle = document.title;
    
    trackPageView(currentUrl, pageTitle);
  }, [location]);
};

export default useGAPageView;
