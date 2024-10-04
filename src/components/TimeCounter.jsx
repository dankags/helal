"use client"
import React, { useEffect, useState } from "react";

const calculateTimeRemaining = (endTime) => {
      const now = new Date().getTime();
      const timeRemaining = endTime - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
      const seconds = Math.floor((timeRemaining / 1000) % 60);
  
      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }

const TimeCounter = () => {
    const currentYear=new Date()
    const endYear=new Date(currentYear.getFullYear()+1,0,1)
    const [timeLeft, setTimeLeft] = useState(calculateTimeRemaining(endYear.getTime()));

    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeRemaining(endYear.getTime()));
        }, 1000);
    
        // Clear the timer when the component unmounts
        return () => clearInterval(timer);
      }, []);

  if(currentYear>=endYear){
    return
  }

  return (
  
<div className="mt-6 w-10/12 lg:w-4/12 overflow-hidden rounded-xl lg:px-4 flex flex-col justify-between gap-4 lg:gap-6 bg-[#328f85]">
      <div className="flex items-center justify-center p-2">
        <h5 className="w-full py-1 overflow-hidden break-words font-semibold text-2xl lg:text-4xl text-center capitalize text-white">
          {timeLeft.days >= 10 ? timeLeft.days : `0${timeLeft.days}`} days to go
        </h5>
      </div>
      
      <div className="w-full flex items-center justify-around p-2 bg-secondary">
        <div className="w-1/3 flex flex-col items-center text-white">
          <div className="w-full text-center overflow-hidden text-ellipsis font-semibold text-2xl lg:text-4xl">
            {timeLeft.days >= 10 ? timeLeft.days : `0${timeLeft.days}`}
          </div>
          <span className="font-light text-xs lg:text-sm">Days</span>
        </div>

        <div className="w-1/3 flex flex-col items-center text-white">
          <div className="w-full text-center overflow-hidden text-ellipsis font-semibold text-2xl lg:text-4xl">
            {timeLeft.hours >= 10 ? timeLeft.hours : `0${timeLeft.hours}`}
          </div>
          <span className="font-light text-xs lg:text-sm">Hours</span>
        </div>

        <div className="w-1/3 flex flex-col items-center text-white">
          <div className="w-full text-center overflow-hidden text-ellipsis font-semibold text-2xl lg:text-4xl">
            {timeLeft.seconds >= 10 ? timeLeft.seconds : `0${timeLeft.seconds}`}
          </div>
          <span className="font-light text-xs lg:text-sm">Seconds</span>
        </div>
      </div>
    </div>

  );
}




export default TimeCounter 
