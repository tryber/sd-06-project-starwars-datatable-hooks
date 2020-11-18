import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Input from '../components/Input';
import Table from '../components/Table';
import Button from '../components/Button';

export default function Home() {
  const INITIAL_FILTERS_NUMERIC = {
    column: '',
    comparison: '',
    value: '',
  };
  const [numericFilters, setNumericFilter] = useState({ ...INITIAL_FILTERS_NUMERIC });

  const handleChangeNumeric = (key, value) => {
    setNumericFilter({ ...numericFilters, [key]: value });
  };

  const { column, comparison, value } = numericFilters;
  const { filters, handleInputChange, newFilters } = useContext(StarWarsContext);
  return (
    <div>
      <Input
        id="name"
        testId="name-filter"
        name="name"
        className="input-name"
        type="text"
        place="Digite o nome do Planeta"
        value={ filters.filterByName.name }
        onChange={ (e) => handleInputChange(e.target.value) }
      />
      <label htmlFor="column">
        Coluna:
        <select
          data-testid="column-filter"
          name="column"
          id="column-input"
          defaultValue="default"
          value={ column === '' ? 'default' : column }
          onChange={ (e) => handleChangeNumeric('column', e.target.value) }
        >
          <option disabled value="default"> -- Selecione uma opção -- </option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <select
        data-testid="comparison-filter"
        name="comparison"
        id="comparison-input"
        defaultValue="default"
        value={ comparison === '' ? 'default' : comparison }
        onChange={ (e) => handleChangeNumeric('comparison', e.target.value) }
      >
        <option disabled value="default"> -- Selecione uma opção -- </option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <Input
        id="value-filter"
        testId="value-filter"
        name="value-filter"
        className="value-filter"
        type="number"
        place="Digite o valor"
        value={ value === '' ? 'default' : value }
        onChange={ (e) => handleChangeNumeric('value', e.target.value) }
      />
      <Button
        testId="button-filter"
        value="Filtrar"
        onClick={ () => newFilters(numericFilters) }
      />
      <Table />
    </div>
  );
}
