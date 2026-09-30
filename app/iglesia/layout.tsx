import type { Metadata } from 'next';
import './panel.css';

export const metadata: Metadata = {
  title: 'Panel de iglesias',
  robots: { index: false, follow: false },
};

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return <div className="px">{children}</div>;
}
