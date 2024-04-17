const API_KEY = '76544bf1';

export const fetchMovieInfo = (value: string) => {
  return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`).then(
    response => response.json()
  );
};
