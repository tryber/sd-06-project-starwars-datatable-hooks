import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filters: {
    filterByName: { name, setName },
    filterNumeric: {
      filterByNumericValues,
      setFilterByNumericValues,
    },
  },
  arrayOptionsColumn,
  } = useContext(StarWarsContext);
  // console.log(useContext(StarWarsContext))
  // console.log('name', name);
  const arrayOptionsComparison = [
    'maior que',
    'menor que',
    'igual a',
  ];
  const [valueInputsColumn, setValueInputsColumn] = useState(arrayOptionsColumn[0]);
  const [
    valueInputsComparison,
    setValueInputsComparison,
  ] = useState(arrayOptionsComparison[0]);
  const [valueInputsNumber, setValueInputsNumber] = useState('');
  // console.log('valueInputsColumn', valueInputsNumber)

  function onClickFilter() {
    if (valueInputsColumn !== ''
      && valueInputsComparison !== ''
      && valueInputsNumber !== '') {
      setFilterByNumericValues([...filterByNumericValues, {
        column: valueInputsColumn,
        comparison: valueInputsComparison,
        value: valueInputsNumber,
      }]);
    }
  }

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
      <div>
        <select
          data-testid="column-filter"
          value={ valueInputsColumn }
          onChange={ ({ target }) => setValueInputsColumn(target.value) }
        >
          {arrayOptionsColumn
            .map((optionColumn, index) => (
              <option key={ index } value={ optionColumn }>{ optionColumn }</option>
            ))}
        </select>
        <select
          data-testid="comparison-filter"
          value={ valueInputsComparison }
          onChange={ ({ target }) => setValueInputsComparison(target.value) }
        >
          {arrayOptionsComparison
            .map((optionComparison, index) => (
              <option
                key={ index }
                value={ optionComparison }
              >
                { optionComparison }
              </option>
            ))}
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ valueInputsNumber }
          onChange={ ({ target }) => setValueInputsNumber(target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ onClickFilter }
        >
          Acionar o filtro
        </button>
      </div>
    </div>
  );
}

export default Filters;
