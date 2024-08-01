import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser';

const HostDetails = ({organiser_name, organiser_dial_code, organiser_country_code, organiser_phone, organiser_email, organiser_website, organiser_image_url, organizer_twitter_url, organizer_linkedin_url, organizer_facebook_url, organiser_info }: any) => {
  return (
    <div className="w-full h-full lg:h-fit flex flex-col m-1 p-1 rounded-2xl border-2 shadow-[4px_4px_20px_rgba(0,0,0,0.18)]">
      <div className="w-full flex justify-between m-1 p-1">
        <div className='w-full flex'>
          <Image src={organiser_image_url} alt="organiser_image" className="rounded-full" width={48} height={48} />
          <div className="m-1 p-1 place-content-center text-xl font-medium"> {organiser_name} </div>
        </div>
        <div className="m-1 p-1 h-8 text-stone-500 font-bold text-md border-2 rounded-md border-stone-500"> HOST </div>
      </div>
      <div className="w-full flex m-1 p-1">
        {parse(organiser_info)}
      </div>
      <div className='w-full flex flex-wrap justify-center'>
        <a href={organizer_facebook_url} target='_blank'> <Image src="https://dev.konfhub.com/img/facebook-share.svg" alt="facebook" className="dark:invert m-1 p-1 cursor-pointer" width={36} height={36} /> </a>
        <a href={organizer_twitter_url} target='_blank'> <Image src="https://dev.konfhub.com/img/twitter-pro-black.svg" alt="twitter" className="dark:invert m-1 p-1 cursor-pointer" width={36} height={36} /> </a>
        <a href={organizer_linkedin_url} target='_blank'> <Image src="https://dev.konfhub.com/img/linkedin-share.svg" alt="linkedin" className="dark:invert m-1 p-1 cursor-pointer" width={36} height={36} /> </a>
        <a href={organiser_website} target='_blank'> <Image src="https://dev.konfhub.com/img/website-black.svg" alt="website" className="dark:invert m-1 p-1 cursor-pointer" width={36} height={36} /> </a>
        <a href={`mailto:${organiser_email}`} target='_blank'> <Image src="https://dev.konfhub.com/img/mail-share.svg" alt="mail" className="dark:invert m-1 p-1 cursor-pointer" width={36} height={36} /> </a>
        <a href={`tel:${organiser_dial_code}${organiser_phone}`} target='_blank'> <Image src="https://dev.konfhub.com/img/call-share.svg" alt="call" className="dark:invert m-1 p-1 cursor-pointer" width={36} height={36} /> </a>
      
      </div>
    </div>
  )
}

export default HostDetails