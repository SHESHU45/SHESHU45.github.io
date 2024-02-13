import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(21 * 60 * 60 + 42 * 60 + 15); // Set initial time in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  return (
    <div className='flex items-center justify-center p-10 bg-grey border-[4px] border-sageGreen'>
      <div className='text-[2.8rem] p-6 text-white bg-sageGreen tracking-widest font-semibold flex flex-col items-center w-[90vw] lg:[w-80vw]'>
        <h1 className='text-[1.5rem] tracking-normal text-[#e5f9fa]'>Time is running out. Grab your Food fast!</h1>
        <h2>{`${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`}</h2>
        <button className='text-[1.1rem] bg-grey p-[5px] px-10 rounded-[3.5px] mt-4'>Register Now at ₹ 499  <span className="line-through">1999</span></button>
      </div>
    </div>
  );
};

export default CountdownTimer;
