import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';

import { INITIAL_QUIZE_STEP } from '@/constants/common';

type QuizeStepContextType = null | {
  quizeStep: number;
  setQuizeStep: Dispatch<SetStateAction<number>>;
};

export const QuizeStepContext = createContext<QuizeStepContextType>(null);

interface Props {
  children: ReactNode;
}

export const QuizeFormProvider: FC<Props> = ({ children }) => {
  const [quizeStep, setQuizeStep] = useState<number>(INITIAL_QUIZE_STEP);

  const step = useMemo(
    () => ({
      quizeStep,
      setQuizeStep,
    }),
    [quizeStep]
  );

  return (
    <QuizeStepContext.Provider value={step}>
      {children}
    </QuizeStepContext.Provider>
  );
};
