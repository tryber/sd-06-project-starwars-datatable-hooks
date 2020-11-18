import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputText() {
  const { inputName, setFilterByName } = useContext(StarWarsContext);
  return (
    <div>
      <label
        htmlFor="User"
      >
        Filter name
        <input
          type="text"
          id="User"
          testid="name-filter"
          value={ inputName }
          onChange={ ({ target }) => setFilterByName(target.value) }
        />
      </label>
    </div>
  );
}

export default InputText;
