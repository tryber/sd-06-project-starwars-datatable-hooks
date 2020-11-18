// https://swapi.dev/api/planets/

import { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function API() {
  const { setState } = useContext(StarWarsContext);

  useEffect(() => {
    setState({
      isFetching: true,
    });
    async function fetchData() {
      await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((result) => result.json())
        .then((json) => {
          setState({
            isFetching: false,
            data: json,
          });
        });
    }
    fetchData();
  }, [setState]);

  return null;
}

export default API;
