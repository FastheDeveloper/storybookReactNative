import {StyleSheet, Text, View} from 'react-native';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

type QuizContext = {
  carrotCount: number;
  updateCarrotCount: () => void;
  updateCarrotCountby3: () => void;
  setCarrotCOunt: (newCarrotCOunt: number) => void;
  timeTillLastInteraction: number;
};

const QuizContext = createContext<QuizContext>({
  carrotCount: 0,
  updateCarrotCount: () => {},
  updateCarrotCountby3: () => {},
  setCarrotCOunt: () => {},
  timeTillLastInteraction: 0,
});

const QuizProvider = ({children}: PropsWithChildren) => {
  const [carrotCount, setCarrotCOunt] = useState(0);
  const [timeTillLastInteraction, setTimeTillLastInteraction] = useState(0);

  const isFinished = carrotCount >= 10;
  const resetCounter = () => {
    setCarrotCOunt(0);
  };

  const updateCarrotCount = () => {
    if (isFinished) {
      resetCounter();
      return;
    }
    setCarrotCOunt(carrotCount + 1);
  };

  const updateCarrotCountby3 = () => {
    if (isFinished) {
      resetCounter();
      return;
    }
    setCarrotCOunt(carrotCount => carrotCount + 3);
  };

  useEffect(() => {
    setTimeTillLastInteraction(0);
    const timer = setInterval(() => {
      setTimeTillLastInteraction(currTime => currTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [carrotCount]);
  return (
    <QuizContext.Provider
      value={{
        carrotCount,
        updateCarrotCount,
        updateCarrotCountby3,
        setCarrotCOunt,
        timeTillLastInteraction,
      }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;

export const useQuizContext = () => useContext(QuizContext);

const styles = StyleSheet.create({});
