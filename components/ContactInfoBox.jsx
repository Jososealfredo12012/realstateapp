import React from 'react';
import { WhatsappIcon, EmailIcon } from 'react-share';

const ContactInfoBox = () => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='text-xl font-bold mb-6'>
        Tambien puedes comunicarte directamente via whatsapp o correo:
      </h2>
      <div>
        <WhatsappIcon
          size={30}
          round={true}
          className='inline mr-2'>
          </WhatsappIcon>
        <p className='inline'>809-889-5673, 829-375-4262</p>
      </div>
      <br />
      <div>
        <EmailIcon
          size={30}
          round={true}
          className='inline mr-2'></EmailIcon>
        <p className='inline'>duohomerd@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactInfoBox;
