import React from 'react';
import PropertySearchForm from '@/components/PropertySearchForm';
import Properties from '@/components/Properties';

const PropertiesPage = async () => {
  

  return (
    <>
      <section className='bg-blue-700 py-4'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm></PropertySearchForm>
        </div>
      </section>

      <Properties></Properties>
    </>
  );
};

export default PropertiesPage;
