import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mes`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/semanal`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/noche`;
    } else if(rates.onetime){
      return `${rates.onetime.toLocaleString()} A la venta`;
    }
  };
  return (
    <div className='rounded-xl shadow-md relative'>
      <Image
        src={property.images[0]}
        alt=''
        height={0}
        width={0}
        sizes='100vw'
        className='w-full h-auto rounded-t-xl'
      />
      <div className='p-4'>
        <div className='text-left md:text-center lg:text-left mb-6'>
          <div className='text-gray-600'>{property.type}</div>
          <h3 className='text-xl font-bold'>{property.name}</h3>
        </div>
        <h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
          ${getRateDisplay()}
        </h3>

        <div className='flex justify-center gap-4 text-gray-500 mb-4'>
          <p>
            <FaBed className='inline mr-2'></FaBed> {property.beds}{' '}
            <span className='md:hidden lg:inline'>Camas</span>
          </p>
          <p>
            <FaBath className='inline mr-2'></FaBath> {property.baths}{' '}
            <span className='md:hidden lg:inline'>Baños</span>
          </p>
          <p>
            <FaRulerCombined className='inline mr-2'></FaRulerCombined>
            {property.square_feet}{' '}
            <span className='md:hidden lg:inline'>Metros²</span>
          </p>
        </div>

        <div className='flex justify-center gap-4 text-green-900 text-sm mb-4'>
          {property.rates.nightly && (
            <p>
              <FaMoneyBill className='inline mr-2'/> Por Noche
            </p>
          )}
          {property.rates.weekly && (
            <p>
              <FaMoneyBill className='inline mr-2'/> Semanal
            </p>
          )}
          {property.rates.monthly && (
            <p>
              <FaMoneyBill className='inline mr-2'/> Mensual
            </p>
          )}
          {property.rates.onetime && (
            <p>
              <FaMoneyBill className='inline mr-2'/> A la venta
            </p>
          )}
        </div>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='flex align-middle gap-2 mb-4 lg:mb-0'>
            <FaMapMarker className='text-orange-700 mt-1'></FaMapMarker>
            <span className='text-orange-700'>
              {' '}
              {property.location.city} {property.location.state}{' '}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'>
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
