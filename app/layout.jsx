import React from 'react';
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/components/AuthProvider';
import Footer from '@/components/Footer';
import 'photoswipe/dist/photoswipe.css';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'DuoHome | Find the perfect rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <Analytics></Analytics>
      <AuthProvider>
        <html lang='en'>
          <body>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default MainLayout;
