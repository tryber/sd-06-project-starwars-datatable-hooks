import { useEffect, useState } from 'react';

const usePlanets = (callback) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((result) => result.results);

    setData(data.concat(results));
    callback(false);
  }, []);

  return data;
};

export default usePlanets;
