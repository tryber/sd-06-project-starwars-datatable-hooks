import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const PlanetFilterByNumber = () => {
  const {
    setFilterByNumber,
    column,
    comparison,
    setValue,
    value,
    setColumn,
    setComparison,
  } = useContext(StarWarsContext);

  /*
  const [columnFilterNum] = useState([
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
    'population',
  ]);
  */

  const CompareFilter = (event) => {
    setComparison(event.target.value);
  };

  const choiceOption = (event) => {
    setColumn(event.target.value);
  };

  const textInput = (event) => {
    setValue(event.target.value);
  };

  const handleClickNum = () => {
    setFilterByNumber([{ column, comparison, value }]);
  };

  // const columns = [...columnFilterNum];

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ choiceOption }
      >
        <option value="empty">empty</option>
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="surface_water">surface_water</option>
        <option value="population">population</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ CompareFilter }
      >
        <option value="empty">empty</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
        <option value="maior que">maior que</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ textInput }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickNum }
      >
        Filter By Number
      </button>
    </div>
  );
};

export default PlanetFilterByNumber;
