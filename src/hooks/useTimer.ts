import {useRef, useState} from 'react';

export const useTimer = (startTime: number) => {
  const [timeTillLastInteraction, setTimeTillLastInteraction] =
    useState(startTime);

  const timer = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    setTimeTillLastInteraction(startTime);
    timer.current = setInterval(() => {
      setTimeTillLastInteraction(currTime => currTime + 1);
    }, 1000);
  };

  const clearTimer = () => {
    clearInterval(timer.current);
  };
  return {
    timeTillLastInteraction,
    startTimer,
    clearTimer,
  };
};
