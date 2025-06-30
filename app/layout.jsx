import React from 'react';
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/components/AuthProvider';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'DuoHome | Find the perfect rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <Navbar></Navbar>
          <main>{children}</main>
          <Footer></Footer>
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
