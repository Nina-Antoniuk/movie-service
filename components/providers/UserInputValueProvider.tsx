import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';

type UserInputValueContextType = null | {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};

export const UserInputValueContext =
  createContext<UserInputValueContextType>(null);

interface Props {
  children: ReactNode;
}

export const UserInputValueProvider: FC<Props> = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  const userInputValue = useMemo(
    () => ({ inputValue, setInputValue }),
    [inputValue]
  );

  return (
    <UserInputValueContext.Provider value={userInputValue}>
      {children}
    </UserInputValueContext.Provider>
  );
};
