import { LAST_QUIZE_STEP } from '@/constants/common';

export const progressCounter = (step: number): number => {
  const percentPerStep = 100 / LAST_QUIZE_STEP;
  return percentPerStep * step;
};
