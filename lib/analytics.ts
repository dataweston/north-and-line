'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Type-safe analytics interface
interface AnalyticsEvent {
  event: string;
  params?: Record<string, string | number | boolean>;
}

function trackEvent({ event, params }: AnalyticsEvent) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event, params);
  }
}

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
        trackEvent({
          event: 'service_page_view',
          params: {
            service_slug: pathname.split('/').pop() || '',
          },
        });
      }

      // Track case study views
      if (pathname.startsWith('/work/') && pathname !== '/work') {
        trackEvent({
          event: 'case_study_view',
          params: {
            case_study_slug: pathname.split('/').pop() || '',
          },
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
        
        // Track case study scroll depth
        if (pathname.startsWith('/work/') && pathname !== '/work') {
          trackEvent({
            event: 'case_study_scroll_75',
            params: {
              case_study_slug: pathname.split('/').pop() || '',
            },
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, threshold]);
}

export function trackServiceCTA(serviceSlug: string) {
  trackEvent({
    event: 'service_cta_click',
    params: {
      service_slug: serviceSlug,
    },
  });
}

export function trackCTAClick(location: string) {
  trackEvent({
    event: 'cta_book_call_click',
    params: {
      location,
    },
  });
}

export function trackContactFormSubmit(params: Record<string, string>) {
  trackEvent({
    event: 'contact_form_submit',
    params,
  });
}

export { trackEvent };
