import { useEffect, useState } from 'react';
import fetchPlanets from '../services';

const usePlanets = (callback) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await fetchPlanets();
      
      setData(data.concat(results));
      callback(false);
    };
    
    fetchData();
  }, []);

  return data;
};

export default usePlanets;
