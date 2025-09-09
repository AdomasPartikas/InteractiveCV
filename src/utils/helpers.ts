/**
 * Utility function to combine CSS classes conditionally
 */
export const cn = (...classes: (string | undefined | null | boolean)[]): string => {
  return classes
    .filter((cls) => typeof cls === 'string' && cls.trim() !== '')
    .join(' ')
    .trim();
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Scroll to element with smooth behavior
 */
export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Get category color for timeline events
 */
export const getCategoryColor = (category: string): string => {
  const colors = {
    education: 'var(--color-accent)',
    work: '#4ade80',
    personal: '#60a5fa',
    achievement: '#f59e0b'
  };
  
  return colors[category as keyof typeof colors] || 'var(--color-accent)';
};
