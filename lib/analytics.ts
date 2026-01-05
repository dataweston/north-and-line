'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function usePageTracking() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: pathname,
      });

      // Track service page views
      if (pathname.startsWith('/services/')) {
        (window as any).gtag('event', 'service_page_view', {
          service_slug: pathname.split('/').pop(),
        });
      }

      // Track case study views
      if (pathname.startsWith('/work/') && pathname !== '/work') {
        (window as any).gtag('event', 'case_study_view', {
          case_study_slug: pathname.split('/').pop(),
        });
      }
    }
  }, [pathname]);
}

export function useScrollTracking(threshold: number = 75) {
  const pathname = usePathname();

  useEffect(() => {
    let tracked = false;
    
    const handleScroll = () => {
      if (tracked) return;

      const scrollPercentage = 
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;

      if (scrollPercentage >= threshold) {
        tracked = true;
        
        if (typeof window !== 'undefined' && (window as any).gtag) {
          // Track case study scroll depth
          if (pathname.startsWith('/work/') && pathname !== '/work') {
            (window as any).gtag('event', 'case_study_scroll_75', {
              case_study_slug: pathname.split('/').pop(),
            });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, threshold]);
}

export function trackServiceCTA(serviceSlug: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'service_cta_click', {
      service_slug: serviceSlug,
    });
  }
}
