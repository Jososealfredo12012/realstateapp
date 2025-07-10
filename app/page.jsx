import FeaturedProperties from '@/components/FeaturedProperties';
import Hero from '@/components/Hero';
import HomeProperties from '@/components/HomeProperties';
import InfoBoxes from '@/components/InfoBoxes';
import React from 'react';

export const dynamic = 'force-dynamic';

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <InfoBoxes></InfoBoxes>
      <FeaturedProperties></FeaturedProperties>
      <HomeProperties></HomeProperties>
    </>
  );
};

export default HomePage;
