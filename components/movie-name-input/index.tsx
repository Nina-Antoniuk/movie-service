import { FC, useContext, useState } from 'react';

import { Button } from '../button';
import { UserInputValueContext } from '../providers/UserInputValueProvider';

import styles from './MovieNameInput.module.css';
import { inputValidation } from '@/utils/input-validation';

export const MovieNameInput: FC = () => {
  const userInputValueContext = useContext(UserInputValueContext);

  const [isValidValue, setIsValidValue] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    userInputValueContext?.setInputValue(e.target.value);
  };

  const handleBlur = () => {
    if (userInputValueContext) {
      if (!userInputValueContext?.inputValue) {
        return;
      }

      const isValid = inputValidation(userInputValueContext?.inputValue);
      setIsValidValue(isValid);
    } else {
      setIsValidValue(false);
    }
  };

  const handleFocus = () => {
    setIsValidValue(true);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.lable}>
        <span className="labelCaption">Enter movie title</span>
        <input
          type="text"
          className={`${styles.input} ${!isValidValue && styles.inputError}`}
          placeholder="Movie title here"
          value={userInputValueContext?.inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </label>
      {!isValidValue && (
        <p className={styles.validationErrorText}>
          Only letters and numbers can be entered in this field
        </p>
      )}
      <div className="buttonWrapper">
        <Button
          text="Continue"
          type="submit"
          isDisabled={!userInputValueContext?.inputValue || !isValidValue}
        />
      </div>
    </div>
  );
};
