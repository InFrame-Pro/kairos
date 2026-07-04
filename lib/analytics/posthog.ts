import posthog from 'posthog-js';

let initialized = false;

export function initPostHog() {
  if (typeof window === 'undefined') return;
  if (initialized) return;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!key || !host) {
    console.warn('PostHog no configurado (faltan env vars)');
    return;
  }

  posthog.init(key, {
    api_host: host,
    person_profiles: 'always',
    capture_pageview: false,
    capture_pageleave: true,
    respect_dnt: true,
  });

  initialized = true;
}

export { posthog };
