'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initPostHog, posthog } from '@/lib/analytics/posthog';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initPostHog();
  }, []);

  return (
    <>
      <PageViewTracker />
      {children}
    </>
  );
}

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const url = window.location.href;
    posthog.capture('$pageview', {
      $current_url: url,
      pathname,
    });
  }, [pathname, searchParams]);

  return null;
}
