import  { FC, useEffect, useState } from 'react'
import { AttemptType } from '.';

interface Props{
    duration: number;
    ontimeout: () => void;
    attempt: AttemptType[]
}
const TimerFunc:FC<Props> = ({duration, ontimeout, attempt}) => {
    const [timeLeft, setTimeLeft] = useState(duration * 60);
    
    useEffect(() => {
      const timer = window.setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            window.clearInterval(timer);
            return prevTimeLeft;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
  
      return () => window.clearInterval(timer); // Clean up the interval on unmount
    }, [timeLeft, attempt]);
  
    return <div>Time left: {timeLeft} seconds</div>;
}

export default TimerFunc