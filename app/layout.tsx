import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Excited Hamsters | Race. Sabotage. Team Up.',
  description: 'Explore a planned collectible and mobile-game ecosystem where Hamsters race through maze-like courses, Beavers create obstacles, Moose clear paths, and Power-Ups add another layer of strategy.'
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}