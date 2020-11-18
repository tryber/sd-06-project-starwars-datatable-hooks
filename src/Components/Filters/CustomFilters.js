import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import request from '../../services/request';

const CustomFilters = () => {
  const { filters, setFilters, setData } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  const [planet, setPlanet] = useState([]);
  const handleRemove = async () => {
    setFilters({
      ...filters,
      filterByNumericValues: [],
    });
    console.log(planet);
    setData(planet);
  };

  const reqPlanets = async () => {
    const planets = await request();
    setPlanet(planets);
  };

  useEffect(() => {
    reqPlanets();
  }, []);

  return (
    <div>
      <h1>Filtros: </h1>
      {filterByNumericValues.map(({ column, comparison, value }, index) => {
        if (filterByNumericValues) {
          return (
            <div key={ index } data-testid="filter">
              <span>{ `${column} ${comparison} ${value} ` }</span>
              <button id={ index } type="button" onClick={ handleRemove }>X</button>
            </div>
          );
        }
        return <span key={ index }> </span>;
      })}
    </div>
  );
};

export default CustomFilters;
