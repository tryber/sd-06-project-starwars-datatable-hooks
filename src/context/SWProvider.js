import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './SWContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [headers, setHeaders] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterNumber, setFilterNumber] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const [orderFilter, setOrderFilter] = useState({
    column: '',
    sort: '',
  });

  const requestPlanetsAPI = async () => {
    const responseAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await responseAPI.json();
    const planets = await response.results
      .map((planet) => {
        delete planet.residents;
        return planet;
      });
    setData(planets);
    setHeaders(Object.keys(planets[0]));
  };

  useEffect(() => {
    requestPlanetsAPI();
  }, []);

  const info = {
    data,
    isLoading,
    setIsLoading,
    headers,
    setFilterName,
    setFilterNumber,
    orderFilter,
    setOrderFilter,
    filters: {
      filterByName: { name: filterName },
      filterByNumericValues: [filterNumber],
    },
  };

  return (
    <StarWarsContext.Provider value={ info }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default StarWarsProvider;
