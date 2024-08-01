import React from 'react'
import { Video, Banknote, SquareArrowOutUpRight } from 'lucide-react';
import CountdownTimer from '@/components/countdown-timer';
import { DateTime } from 'luxon';
import { Button } from '@/components/ui/button';

const EventHighlights = ({ name, event_live_link, event_website, start_date, start_time, end_date, end_time, time_zone }: any) => {

  const formattedDate = (date: string, time: string, zone: string) => {
    const dateTimeString = `${date}T${time}`;
    const dateTime = DateTime.fromISO(dateTimeString, { zone: zone });
    const formattedDateTime = dateTime.setZone('Asia/Calcutta').toFormat("MMM d'th', yyyy h:mm a 'IST'");
    return formattedDateTime;
  }

  return (
    <div className="w-full flex flex-col m-1 p-1 rounded-2xl border-2 shadow-[4px_4px_20px_rgba(0,0,0,0.18)]">
        <div className='m-1 p-1 text-2xl font-bold'> {name} </div>
        <div className='m-1 p-1 flex'>
          <div className='flex'> <Video className='m-1 p-1' size={32} /> <span className='my-1 py-1'> Online </span>  </div> 
          <span className='m-1 p-1'> | </span>
          <div className='flex'> <Banknote className='m-1 p-1' size={32} /> <span className='my-1 py-1'> Paid </span>  </div>
        </div>
        <div className="m-1 p-1 text-base font-bold">
          <a href={event_live_link} target='_blank' className='flex hover:text-stone-500'> 
            <span className='m-1 p-1'> Live Event link </span>  
            <SquareArrowOutUpRight className='mt-2 ml-0 p-1' /> 
          </a> 
        </div>

        <div className='m-1 p-1 text-base'>
          <div className="flex m-1 p-1"> Starts from <span className="font-bold text-stone-500  mx-1"> {formattedDate(start_date, start_time, time_zone)} </span> </div>
          <div className="flex m-1 p-1"> Ends by <span className="font-bold text-stone-500  mx-1"> {formattedDate(end_date, end_time, time_zone)} </span> </div>
        </div>
        
        <div className='flex m-1 p-1 text-base'>
          <div className="m-1 p-1"> Event starts in </div>
          <div className="m-1 p-1">  <CountdownTimer date={start_date} time={start_time} /> </div>
        </div>

        <div className='w-full flex m-1 p-1 text-md'>
          <Button className="w-[48%] m-1 p-1 shadow-[0px_4px_5px_rgba(0,0,0,0.15)]"> Buy Now </Button>
          <Button className="w-[48%] m-1 p-1 shadow-[0px_4px_5px_rgba(0,0,0,0.15)]" variant="outline">
            <a href={event_website} target='_blank' className='flex hover:text-stone-500'> 
              <span className='m-1 p-1'> Official Website </span>  
              <SquareArrowOutUpRight className='mt-2 ml-0 p-1' /> 
            </a>
          </Button>
        </div>

    </div>
  )
}

export default EventHighlights