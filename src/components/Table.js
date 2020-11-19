import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FilterContext from '../context/FilterContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  const {
    filterName,
    filterNumbers: { filterByNumericValues } } = useContext(FilterContext);
  const lastIndex = filterByNumericValues.length - 1;
  const { column, comparison, value } = filterByNumericValues[lastIndex];

  useEffect(() => {
  }, [data]);

  const applyFilter = () => {
    if (filterName !== '') {
      const filteredData = data.filter((item) => item.name.toLowerCase()
        .includes(filterName.toLowerCase()));
      return filteredData;
    }
    if (column !== '') {
      const filterInputNumbers = data.filter((planet) => {
        if (comparison === 'maior que' && Number(planet[column]) > Number(value)) {
          return planet;
        }
        if (comparison === 'menor que' && Number(planet[column]) < Number(value)) {
          return planet;
        }
        if (comparison === 'igual a' && Number(planet[column]) === Number(value)) {
          return planet;
        }
        return undefined;
      });
      return filterInputNumbers;
    }
    return data;
  };

  const headers = ['Name', 'Rotation period',
    'Orbital period', 'Diameter', 'Climate',
    'Gravity', 'Terrain',
    'Surface water', 'Population',
    'Films', 'Created',
    'Edited', 'url',
  ];
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              {
                headers.map((heading, index) => (
                  <th scope="col" key={ index }>{heading}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              applyFilter().map((element, index) => (
                <tr key={ index }>
                  <td>{element.name}</td>
                  <td>{element.rotation_period}</td>
                  <td>{element.orbital_period}</td>
                  <td>{element.diameter}</td>
                  <td>{element.climate}</td>
                  <td>{element.gravity}</td>
                  <td>{element.terrain}</td>
                  <td>{element.surface_water}</td>
                  <td>{element.population}</td>
                  <td>{element.films}</td>
                  <td>{element.created}</td>
                  <td>{element.edited}</td>
                  <td>{element.url}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
