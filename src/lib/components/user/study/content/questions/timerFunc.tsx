import  { FC, useEffect, useState } from 'react'

interface Props{
    duration: number;
    ontimeout: () => void;
}
const TimerFunc:FC<Props> = ({duration, ontimeout}) => {
    const [timeLeft, setTimeLeft] = useState(duration * 60);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            clearInterval(timer);
            ontimeout(); // Call the callback function when the timer reaches 0
            return prevTimeLeft;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
  
      return () => clearInterval(timer); // Clean up the interval on unmount
    }, [duration, ontimeout]);
  
    return <div>Time left: {timeLeft} seconds</div>;
}

export default TimerFunc