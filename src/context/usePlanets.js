import { useEffect, useState } from 'react';

const usePlanets = () => {  
  const [ data, setData ] = useState([]);

  useEffect(async () => {
    const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then(respose => respose.json())
      .then(data => data.results);
    
    setData(data.concat(results));
    
  }, []);

  return data;
}

export default usePlanets;
