import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import request from '../../services/request';

const CustomFilters = () => {
  const { filters, setFilters, setData, id, setId } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  const [planet, setPlanet] = useState([]);

  const reqPlanets = async () => {
    const planets = await request();
    setPlanet(planets);
  };

  useEffect(() => {
    reqPlanets();
  }, []);

  const handleRemove = ({ target }) => {
    const newArray = filterByNumericValues
      .filter((array) => array.id !== parseInt(target.id, 10));
    setFilters({
      ...filters,
      filterByNumericValues: newArray,
    });
    setData(planet);
    setId(id - 1);
  };

  return (
    <div className="custom-fitlers">
      <h1>Filtros: </h1>
      {filterByNumericValues.map((planets, index) => {
        if (filterByNumericValues) {
          return (
            <div className="each-filter" key={ index } data-testid="filter">
              <span>{ `${planets.column} ${planets.comparison} ${planets.value} ` }</span>
              <button id={ planets.id } type="button" onClick={ handleRemove }>X</button>
            </div>
          );
        }
        return <span key={ index }> </span>;
      })}
    </div>
  );
};

export default CustomFilters;
