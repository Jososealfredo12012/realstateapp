import React from 'react';
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'DuoHome | Find the perfect rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar></Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
