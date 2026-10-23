import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Free Cv builder',
  description: 'Allow you to generate free cv',
};
type LayoutProp = {
  children: ReactNode;
};
export default function RootLayout({ children }: Readonly<LayoutProp>) {
  return (
    <html lang="en">
      <body id="main">{children}</body>
    </html>
  );
}
