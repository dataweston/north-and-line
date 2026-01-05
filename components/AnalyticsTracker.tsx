'use client';

import { usePageTracking } from '@/lib/analytics';

export default function AnalyticsTracker() {
  usePageTracking();
  return null;
}
