import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function InputFilterByName() {
  const { searchText, setSearchText } = useContext(StarWarsContext);
  return (
    <label htmlFor="search-name">
      Digite um nome:
      <input
        type="text"
        name="search-name"
        id="search-name"
        placeholder="insert a name"
        onChange={ (evento) => setSearchText(evento.target.value) }
        value={ searchText }
        data-testid="name-filter"
      />
    </label>
  );
}

export default InputFilterByName;
