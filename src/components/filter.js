import React, { useContext } from 'react';
import DataContext from '../context/StarWarsContext';

function Filters() {
  const { contextValue: { column, setColumn,
    comparar, setComparar,
    value, setValue,
  } } = useContext(DataContext);

  const removeFilter = (e) => {
    const id = parseInt(e.target.id, 5);

    const arrayColumn = column.filter((index) => index !== id);
    setColumn(arrayColumn);

    const arrayComparison = comparar.filter((index) => index !== id);
    setComparar(arrayComparison);

    const arrayValue = value.filter((index) => index !== id);
    setValue(arrayValue);
  };

  return (
    <div>
      <thead>
        <tr>
          <th>Name</th>
          <th>climate</th>
          <th>diameter</th>
          <th>edited</th>
          <th>films</th>
          <th>gravity</th>
          <th>orbital_period</th>
          <th>population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>created</th>
          <th>url</th>
        </tr>
      </thead>
      {column.map((element, index) => (
        <span key={ index } data-testid="filter">
          {`${column[index]} ${comparar[index]} que ${value[index]}`}
          <button
            type="button"
            key={ index }
            id={ index }
            onClick={ (e) => removeFilter(e) }
          >
            X
          </button>
        </span>
      ))}
    </div>
  );
}

export default Filters;
