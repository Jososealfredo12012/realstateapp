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
        <p className='inline'>555-555-5555</p>
      </div>
      <br />
      <div>
        <EmailIcon
          size={30}
          round={true}
          className='inline mr-2'></EmailIcon>
        <p className='inline'>correo@correo.com</p>
      </div>
    </div>
  );
};

export default ContactInfoBox;
