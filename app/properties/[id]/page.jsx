'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/request';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import Link from 'next/link';
import PropertyDetails from '@/components/PropertyDetails';
import PropertyImages from '@/components/PropertyImages';
import { FaArrowLeft } from 'react-icons/fa';
import Spinner from '@/components/Spinner';
import BookmarButton from '@/components/BookmarButton';
import ShareButtons from '@/components/ShareButtons';
import PropertyContactForm from '@/components/PropertyContactForm';
import ContactInfoBox from '@/components/ContactInfoBox';

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error('error fetching property: ', error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>
        Property not found
      </h1>
    );
  }

  return (
    <>
      {loading && <Spinner loading={loading}></Spinner>}
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]}></PropertyHeaderImage>
          <section>
            <div className='container m-auto py-6 px-6'>
              <Link
                href='/properties'
                className='text-blue-500 hover:text-blue-600 flex items-center'>
                <FaArrowLeft className='mr-2'></FaArrowLeft> Ir a Propiedades
              </Link>
            </div>
          </section>
          <section className='bg-blue-50'>
            <div className='container m-auto py-10 px-6'>
              <div className='grid grid-cols-70-28 w-full gap-6 '>
                {property && <PropertyDetails property={property} />}

                {/* <!-- Sidebar --> */}
                <aside className='space-y-4'>
                  <BookmarButton property={property}></BookmarButton>
                  <ShareButtons property={property}></ShareButtons>

                  {/* <!-- Contact Form --> */}
                  <PropertyContactForm
                    property={property}></PropertyContactForm>
                  <ContactInfoBox></ContactInfoBox>
                </aside>
              </div>
            </div>
          </section>
          <PropertyImages images={property.images}></PropertyImages>
        </>
      )}
    </>
  );
};

export default PropertyPage;
