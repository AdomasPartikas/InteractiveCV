declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const initGA = (measurementId: string) => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function(...args: any[]) {
    window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    enhanced_measurements: true,
    anonymize_ip: true,
    allow_google_signals: true,
    send_page_view: true,
    transport_type: 'beacon',
    app_name: 'InteractiveCV',
    app_version: '1.0.0'
  });
};

export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_location: url,
      page_title: title
    });
    window.gtag('event', 'page_view', {
      page_location: url,
      page_title: title
    });
  }
};

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackProjectView = (projectName: string) => {
  trackEvent('view_project', {
    project_name: projectName,
    event_category: 'Portfolio',
    event_label: projectName
  });
};

export const trackContactInteraction = (method: string) => {
  trackEvent('contact_interaction', {
    contact_method: method,
    event_category: 'Contact',
    event_label: method
  });
};

export const trackResumeDownload = () => {
  trackEvent('resume_download', {
    event_category: 'Engagement',
    event_label: 'Resume PDF'
  });
};
