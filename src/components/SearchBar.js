import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function TablePlanets() {
  const { filters, handleChangeName } = useContext(StarWarsContext);
  return (
    <div>
      <h1>Filtros</h1>
      <input
        className="input-form"
        name="name-filter"
        placeholder="Informe o nome"
        type="text"
        value={ filters.filterByName.name }
        onChange={ (e) => handleChangeName(e.target.value) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default TablePlanets;
