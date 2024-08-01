"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const CountdownTimer = ({ date, time }: any) => {

    const dateTime = DateTime.fromISO(`${date}T${time}`)

    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const updateCountdown = () => {
          const now = DateTime.local().setZone('Asia/Calcutta');
          const diff = dateTime.diff(now, ['days', 'hours', 'minutes', 'seconds']);
    
          setTimeRemaining({
            days: Math.floor(diff.days),
            hours: Math.floor(diff.hours),
            minutes: Math.floor(diff.minutes),
            seconds: Math.floor(diff.seconds),
          });
        };
    
        updateCountdown(); // update immediately
        const intervalId = setInterval(updateCountdown, 1000); // update every second
    
        return () => clearInterval(intervalId); // cleanup on unmount
      }, [dateTime]);
    
  return (
    <div className="font-bold text-stone-500"> {`${timeRemaining.days} D : ${timeRemaining.hours} H : ${timeRemaining.minutes} M : ${timeRemaining.seconds} S`} </div>
  )
}

export default CountdownTimer