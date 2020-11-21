import { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function API() {
  const { setIsFetching, setData } = useContext(StarWarsContext);

  useEffect(() => {
    setIsFetching(true);

    async function fetchData() {
      await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((result) => result.json())
        .then((json) => {
          setIsFetching(false);
          setData(json);
        });
    }
    fetchData();
  }, [setData, setIsFetching]);
  // return null;
}

export default API;
