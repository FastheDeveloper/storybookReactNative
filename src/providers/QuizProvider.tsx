import {StyleSheet, Text, View} from 'react-native';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

type QuizContext = {
  carrotCount: number;
  updateCarrotCount: () => void;
  updateCarrotCountby3: () => void;
  setCarrotCOunt: (newCarrotCOunt: number) => void;
};

const QuizContext = createContext<QuizContext>({
  carrotCount: 0,
  updateCarrotCount: () => {},
  updateCarrotCountby3: () => {},
  setCarrotCOunt: () => {},
});

const QuizProvider = ({children}: PropsWithChildren) => {
  const [carrotCount, setCarrotCOunt] = useState(0);

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

  return (
    <QuizContext.Provider
      value={{
        carrotCount,
        updateCarrotCount,
        updateCarrotCountby3,
        setCarrotCOunt,
      }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;

export const useQuizContext = () => useContext(QuizContext);

const styles = StyleSheet.create({});
