/**
 * Reusable Countdown Timer Component
 */
import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string; // ISO timestamp
  onExpire?: () => void;
  className?: string;
  showLabels?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ 
  targetDate, 
  onExpire, 
  className = "", 
  showLabels = true 
}: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onExpire?.();
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onExpire]);

  if (isExpired) {
    return (
      <div className={`text-destructive font-medium ${className}`}>
        Deal Expired
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {timeLeft.days > 0 && (
        <>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-luxury-text">{timeLeft.days}</span>
            {showLabels && <span className="text-xs text-luxury-text-light">days</span>}
          </div>
          <span className="text-luxury-text">:</span>
        </>
      )}
      
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-luxury-text">
          {timeLeft.hours.toString().padStart(2, '0')}
        </span>
        {showLabels && <span className="text-xs text-luxury-text-light">hrs</span>}
      </div>
      
      <span className="text-luxury-text">:</span>
      
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-luxury-text">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </span>
        {showLabels && <span className="text-xs text-luxury-text-light">min</span>}
      </div>
      
      <span className="text-luxury-text">:</span>
      
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-luxury-text">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </span>
        {showLabels && <span className="text-xs text-luxury-text-light">sec</span>}
      </div>
    </div>
  );
};

export default Countdown;