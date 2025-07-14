import React from 'react';
import InfoBox from './InfoBox';
import InfoBoxOwners from './InfoBoxOwners';

const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            heading={'Para los interesados'}
            backgroundColor='bg-gray-100'
            buttonInfo={{
              text: 'Buscar propiedades',
              link: '/properties',
              backgroundColor: 'bg-black',
            }}>
            Encuentra tu propiead ideal y ponte en contacto con los dueños.
          </InfoBox>
          <InfoBoxOwners
            heading={'Para los dueños'}
            backgroundColor='bg-blue-100'
            >
            Si te interesa vender o alquilar tu propiedad, comunicate con nosotros:
            <br></br>
            809-889-5643
            <br />
            829-375-4262
          </InfoBoxOwners>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
