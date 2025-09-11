declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

let isGAInitialized = false;
let gaQueue: Array<() => void> = [];

const processGAQueue = () => {
  while (gaQueue.length > 0) {
    const fn = gaQueue.shift();
    if (fn) fn();
  }
};

export const initGA = (measurementId: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (isGAInitialized || document.getElementById('ga-script')) {
      resolve();
      return;
    }

    window.dataLayer = window.dataLayer || [];
    function gtag(..._args: any[]) {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    
    script.onload = () => {
      gtag('js', new Date());
      gtag('config', measurementId, {
        send_page_view: false
      });

      isGAInitialized = true;
      processGAQueue();
      resolve();
    };
    
    script.onerror = (error) => {
      reject(error);
    };

    document.head.appendChild(script);
  });
};

export const trackPageView = (title?: string) => {
  const sendPageView = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      const pageData = {
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: window.location.pathname + window.location.search
      };
      
      window.gtag('event', 'page_view', pageData);
    }
  };

  if (isGAInitialized) {
    sendPageView();
  } else {
    gaQueue.push(sendPageView);
  }
};

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  const sendEvent = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, parameters);
    }
  };

  if (isGAInitialized) {
    sendEvent();
  } else {
    gaQueue.push(sendEvent);
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

export const isGALoaded = () => {
  return isGAInitialized && 
         typeof window !== 'undefined' && 
         typeof window.gtag === 'function' && 
         window.dataLayer && 
         window.dataLayer.length > 0;
};
