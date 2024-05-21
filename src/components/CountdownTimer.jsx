import { t } from 'i18next';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CountdownTimer = () => {
  const navigate = useNavigate();

  const [showComponent, setShowComponent] = useState(true);

  const calculateTimeRemaining = () => {
    // Set the target date to January 31st
    const targetDate = new Date('2024-01-31T00:00:00Z');
    const currentDate = new Date();

    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
      const seconds = Math.floor((timeDifference / 1000) % 60);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Round up to the nearest whole day

      return {
        days,
        hours,
        minutes,
        seconds,
        expired: false,
      };
    } else {
      // If the target date has passed, return a specific format
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true,
      };
    }
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleHideComponent = () => {
    setShowComponent(false);
  };

  if (!showComponent) {
    return null; // Do not render the component
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-x-10 bg-black text-white p-4 text-center">
      <p className="text-xl font-bold mb-2">{t('count-h1')}:</p>
      <div className="flex-col">
        <p className="text-2xl font-bold text-red-700">
          {timeRemaining.expired
            ? '00:00:00:00'
            : `${timeRemaining.days < 10 ? '0' : ''}${timeRemaining.days} : ${
                timeRemaining.hours < 10 ? '0' : ''
              }${timeRemaining.hours} : ${timeRemaining.minutes < 10 ? '0' : ''}${
                timeRemaining.minutes
              } : ${timeRemaining.seconds < 10 ? '0' : ''}${timeRemaining.seconds}`}
        </p>

        <div className="justify-center items-end flex space-x-6 font-semibold">
          <span className="text-white">{timeRemaining.days > 0 ? t('Days') : t('Day')}</span>
          <span className="text-white">{t('Hrs')}</span>
          <span className="text-white">{t('Mins')}</span>
          <span className="text-white">{t('Secs')}</span>
        </div>
      </div>
      <button
        className="bg-red-700 text-white px-4 py-4 mt-2 hover:bg-red-800 rounded-lg m font-semibold"
        onClick={() => navigate('/buy-token')}
      >
   {t('buy')}
      </button>
      <button
        className="absolute top-2 right-2 font-bold text-gray-200 text-base"
        onClick={handleHideComponent}
      >
        X
      </button>
    </div>
  );
};

export default CountdownTimer;
