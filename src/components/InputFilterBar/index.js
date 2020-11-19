import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function InputFilterBar() {
  const { searchText, setSearchText } = useContext(StarWarsContext);
  return (
    <form>
      <input
        type="text"
        name="search-name"
        id="search-name"
        placeholder="insert a name"
        onChange={ (evento) => setSearchText(evento.target.value) }
        value={ searchText }
        data-testid="name-filter"
      />
    </form>
  );
}

export default InputFilterBar;
