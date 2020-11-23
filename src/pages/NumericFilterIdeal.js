import React, { useContext } from 'react';
import StarWarsContext from '../context';

function NumericFilter() {
  const { setRangeNumber, rangeNumber, setRange,
    setColumn } = useContext(StarWarsContext);

  return (
    <div>
      <input
        data-testid="column-filter"
        type="text"
        list="property-list"
        placeholder="Selecione a propriedade"
        onChange={ ({ target }) => setColumn(target.value) }
      />
      <datalist id="property-list">
        <option value="population">Population</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="surface_water">Surface Water</option>
      </datalist>
      <input
        data-testid="comparison-filter"
        type="text"
        list="comparison-list"
        placeholder={ rangeNumber !== ''
          ? 'Selecione a faixa' : 'Insira o valor ao lado' }
        onChange={ ({ target }) => setRange(target.value) }
        disabled={ rangeNumber === '' }
      />
      { (rangeNumber !== '')
        ? (
          <datalist id="comparison-list">
            <option value="lt">{ `Menor que ${rangeNumber}` }</option>
            <option value="gt">{ `Maior que ${rangeNumber}` }</option>
            <option value="eq">{ `Igual a ${rangeNumber}` }</option>
          </datalist>
        )
        : '' }
      <input
        data-testid="value-filter"
        type="text"
        placeholder="Insira o valor"
        onChange={ ({ target }) => setRangeNumber(target.value) }
      />
      {/* <button
        type="button"
        data-testid="button-filter"
        onClick={ () => }
      /> */}
    </div>
  );
}

export default NumericFilter;
