import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: 'Balanso - Budget Tracker',
  description: 'Track your income and expenses easily.',
  themeColor: '#4a90e2',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
       
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#4a90e2" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
      {children}
      <Navbar />
      </body>
    </html>
  );
}