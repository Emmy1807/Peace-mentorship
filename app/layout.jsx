import './styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Peace Mentorship Program — Become the Leader God Created You to Be',
  description:
    'A 6-Month Faith-Based Mentorship Program for Young Professionals, College & Graduate Students. Grow spiritually, mature emotionally, excel professionally, and walk boldly in purpose.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
