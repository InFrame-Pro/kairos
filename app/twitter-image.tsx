// app/twitter-image.tsx
export { default, size, contentType, alt } from './opengraph-image';

// runtime NO puede ser re-exportado en Next.js 16 — hay que declararlo literal
export const runtime = 'edge';
