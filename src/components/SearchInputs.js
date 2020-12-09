import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInputs() {
  const { searchTerm,
    setSearchTerm,
    column,
    comparison,
    value } = useContext(StarWarsContext);
  /* Como acessar a propriedade do objeto
  const carro = { rodas: 4, portas: 2, Abs: true }
  1 - dot notation - objeto.propriedade  => carro.rodas
  2 - usando variável - objeto['propriedade'] =>  carro['rodas']
  3 - extra - let propriedade = 'Abs'
    console.log(carro[propriedade]) // true
    o filtro - pega os valores colum filter, comparison filter e o valor numerico
  */
  return (
    <header>
      Pesquisa
      <input
        type="text"
        name="search"
        id="search"
        onChange={ (event) => setSearchTerm(event.target.value) }
        value={ searchTerm }
        data-testid="name-filter"
      />
      <select className="btn" data-testid="column-filter" value={ column }>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
        <option>diameter</option>
      </select>
      <select className="btn" data-testid="comparison-filter" value={ comparison }>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        value={ value }
        type="number"
        name="value-filter"
        id="value-filter"
      />
      <button
        type="button"
        className="btn"
        onChange={ (event) => setSearchTerm(event.target.value) }
        value={ searchTerm }
        data-testid="button-filter"
      >
        add filter
      </button>
    </header>

  );
}

export default SearchInputs;
// Crie um filtro para valores numéricos
// ✕ Renderiza o filtro de coluna (4543ms)
// ✕ Renderiza o filtro de comparação (4532ms)
// ✓ Renderiza o campo para o valor do filtro (50ms)
// ✓ Renderiza o botão para executar a filtragem (26ms)
// ✕ Filtra utilizando a comparação "menor que" (4527ms)
// ✕ Filtra utilizando a comparação "maior que" (4541ms)
// ✕ Filtra utilizando a comparação "igual a" (4541ms)
