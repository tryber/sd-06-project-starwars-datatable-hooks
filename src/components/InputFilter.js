import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputFilter() {
  const { filter } = useContext(StarWarsContext);

  useEffect(() => {
    console.log(filter);
  }, []);

  return (
    <label htmlFor="name-filter">
      <input
        data-testid="name-filter"
        id="name-filter"
        type="text"
        placeholder="Search by Name"
      />
    </label>
  );
}

export default InputFilter;
