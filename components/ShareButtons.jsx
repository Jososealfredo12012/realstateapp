import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';

const ShareButtons = ({ property }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;
  return (
    <>
      <h3 className='text-xl font-bold text-center pt-2'>
        Comparte esta propiedad
      </h3>
      <div className='flex gap-3 justify-center pb-5'>
        <FacebookShareButton
          url={shareUrl}
          quote={property.name}
          hashtag={`#${property.type.replace(/\s/g, '')}ForRent`}>
          <FacebookIcon size={40} round={true}></FacebookIcon>
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={property.name}
          hashtag={[`${property.type.replace(/\s/g, '')}ForRent`]}>
          <TwitterIcon size={40} round={true}></TwitterIcon>
        </TwitterShareButton>

        <WhatsappShareButton
          url={shareUrl}
          title={property.name}
          separator=':: '>
          <WhatsappIcon size={40} round={true}></WhatsappIcon>
        </WhatsappShareButton>

        <EmailShareButton
          url={shareUrl}
          subject={property.name}
          body={`Check out this property listing: ${shareUrl}`}>
          <EmailIcon size={40} round={true}></EmailIcon>
        </EmailShareButton>
      </div>
    </>
  );
};

export default ShareButtons;
