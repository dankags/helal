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
    
    <div className="w-6/12  rounded-xl py-5 px-10 flex flex-col justify-between gap-12 bg-[#328f85]">
      <div className="flex items-center justify-center"><p className="font-[family-name:var(--font-montserrat)] font-semibold text-7xl capitalize text-white">{timeLeft.days >= 10 ? timeLeft.days:`0${timeLeft.days}`} days to go</p></div>
      <div className=" flex items-center justify-between">
        <div className="flex flex-col gap-3 items-center text-white">
            <div className="font-[family-name:var(--font-montserrat)] font-semibold text-7xl">{timeLeft.days >= 10 ? timeLeft.days:`0${timeLeft.days}`}</div>
            <span className="font-[family-name:var(--font-montserrat)] font-light text-base">Days</span>
        </div>
        <div className="flex flex-col gap-3 items-center text-white">
            <div className="font-[family-name:var(--font-montserrat)] font-semibold text-7xl">{timeLeft.hours >= 10 ? timeLeft.hours:`0${timeLeft.hours}`}</div>
            <span className="font-[family-name:var(--font-montserrat)] font-light text-base">Hours</span>
        </div>
        <div className="flex flex-col gap-3 items-center text-white">
            <div className="font-[family-name:var(--font-montserrat)] font-semibold text-7xl">{timeLeft.seconds >= 10 ? timeLeft.seconds:`0${timeLeft.seconds}`}</div>
            <span className="font-[family-name:var(--font-montserrat)] font-light text-base">Seconds</span>
        </div>
      </div>
  </div>
  )
}

export default TimeCounter 