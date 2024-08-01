import React from 'react'
import Image from 'next/image'

const ImageBanner = ({ event_poster_url }: any) => {
  return (
    <div className="m-1 p-1 rounded-2xl border-2 shadow-[4px_4px_20px_rgba(0,0,0,0.18)] dark:bg-stone-400">
      <Image src={event_poster_url} alt="Konfhub-icon" className="m-1 p-1 rounded-2xl" width={840} height={532} />
    </div>
  )
}

export default ImageBanner