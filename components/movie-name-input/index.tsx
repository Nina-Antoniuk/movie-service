import { useState } from 'react';
import { useRouter } from 'next/router';

import { Button } from '../button';

import styles from './MovieNameInput.module.css';

export const MovieNameInput = () => {
  const [inputValue, setInputValue] = useState('');

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`http://www.omdbapi.com/?apikey=76544bf1&t=${inputValue}`)
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        localStorage.setItem('data', JSON.stringify(data));
      })
      .catch(error => {
        console.log('error', error);
        localStorage.setItem('error', error);
        throw new Error(error);
      })
      .finally(() => router.push('/movies'));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.lable}>
        <span className="labelCaption">Enter movie title</span>
        <input
          type="text"
          className={styles.input}
          placeholder="Movie title here"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <div className="buttonWrapper">
        <Button text="Continue" type="submit" action={handleSubmit} />
      </div>
    </div>
  );
};
