import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filters() {
  const { filters, setFilter, columns, setColumn } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setFilter({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  const removeColumn = (item) => {
    const index = columns.indexOf(item);

    setColumn([
      ...columns.slice(0, index), ...columns.slice(index + 1, columns.length),
    ]);
  };

  const handleClick = () => {
    const column = document.getElementById('column').value;
    const comparison = document.getElementById('comparison').value;
    const value = document.getElementById('number').value;

    setFilter({
      ...filters,
      filterByNumericValues: [{
        column,
        comparison,
        value,
      }]
    });

    // removeColumn(column);
  };

  return (
    <div>
      <label>
        Planet Name
        <input data-testid='name-filter' onChange={handleChange} />
      </label>
      <section>
        <label>
          Filter By
          <select id="column" data-testid='column-filter'>
            {columns.map(column => (
              <option key={column} value={column}>{column}</option>
            ))}
          </select>
          <select id="comparison" data-testid='comparison-filter'>
            <option value='maior que'>maior que</option>
            <option value='menor que'>menor que</option>
            <option value='igual a'>igual a</option>
          </select>
          <input id="number" type="number" data-testid='value-filter' placeholder="value" />
          <button type="button" data-testid='button-filter' onClick={handleClick}>Filter</button>
        </label>
      </section>
    </div>
  );
};

export default Filters;
