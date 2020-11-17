import { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import ApiRequestPlanets from '../services/ApiRequestPlanets';

function RequestPlanets() {
  const { setData } = useContext(StarWarsContext);

  useEffect(() => {
    ApiRequestPlanets().then((objPlanets) => {
      setData(objPlanets);
    });
  }, []);
}

export default RequestPlanets;
