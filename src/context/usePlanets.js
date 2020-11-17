import { useEffect, useState } from 'react';

const usePlanets = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then(respomse => respomse.json())
      .then(result => result.results);
    
    setData(data.concat(results));
  }, []);
  return data;
};

export default usePlanets;
