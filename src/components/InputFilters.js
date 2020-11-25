import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputFilters() {
  const { setFilters, filters } = useContext(StarWarsContext);
  const zero = 0;

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(zero);

  const adcFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByNumericValues:
        prevFilters.filterByNumericValues.concat({ column, comparison, value }),
    }));
  };

  /* LÓGICA DE FILTRO DAS OPTIONS:
  implementei aqui a mesma lógica usada pela Ana Capdeville, para fazer sumir as
  options conforme um novo filtro é criado. Segue o link do PR:
  https://github.com/tryber/sd-06-project-starwars-datatable-hooks/pull/14/files
  Graças a ele também consegui arrumar a lógica de setar novos valores ao objeto
  filters, retirando a lógica anterior de ter um objetoProvider
  */

  const renderOptions = () => {
    let options = [
      ' ', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ];

    const filteredOption = filters.filterByNumericValues
      .map((filter) => Object.values(filter)[0]);

    options = options.filter((option) => !filteredOption.includes(option));

    return options;
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ (e) => setColumn(e.target.value) }
      >
        {renderOptions().map((option) => (
          <option key={ option }>{ option }</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option>Selecione</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ adcFilter }
      >
        Filtrar
      </button>
      <p><b>FILTROS APLICADOS</b></p>
      { filters.filterByNumericValues.map((filter, index) => (
        <div key={ index }>
          <span>
            { filter.column }
            { filter.comparison }
            { filter.value }
          </span>
          <br />
        </div>
      ))}
    </div>
  );
}

export default InputFilters;
