import { NUMBER_OF_STEPS } from '@/constants/common';

export const progressCounter = (step: number): number => {
  const percentPerStep = 100 / NUMBER_OF_STEPS;
  return percentPerStep * step;
};
