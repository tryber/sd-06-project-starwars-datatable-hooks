import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filters() {
  const { filters, setFilter } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setFilter({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  return (
    <div>
      <label>
        Planet Name
        <input data-testid='name-filter' onChange={handleChange} />
      </label>
    </div>
  );
};

export default Filters;
