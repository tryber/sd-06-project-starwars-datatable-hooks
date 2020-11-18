import { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import fetchPlanets from '../services';

const usePlanets = (callback) => {
  const { data, setData } = useContext(MyContext);

  useEffect(() => {
    async function fetchData() {
      const results = await fetchPlanets();

      setData(data.concat(results));
      callback(false);
    }

    fetchData();
  }, []);
};

export default usePlanets;
