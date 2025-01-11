import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Web Developer & Designer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Optional: Add meta tags, favicon, or any other head content */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
