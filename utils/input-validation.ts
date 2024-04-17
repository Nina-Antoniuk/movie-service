const PATTERN = new RegExp('^[a-zA-Z0-9 ]+$');

export const inputValidation = (value: string) => {
  return PATTERN.test(value);
};
