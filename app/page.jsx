import Hero from '@/components/Hero';
import HomeProperties from '@/components/HomeProperties';
import InfoBoxes from '@/components/InfoBoxes';
import React from 'react';
import connectDB from '@/config/database';

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <InfoBoxes></InfoBoxes>
      <HomeProperties></HomeProperties>
    </>
  );
};

export default HomePage;
