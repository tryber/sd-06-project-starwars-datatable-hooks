import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function ShowFilter() {
  const {
    // Recupera do contexto as seguintes funções e arrays:
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(StarWarsContext);

  // Função responsável por remover os filtros no click do botão, filtrando-os do array de filtros, e os setando novamente.
  const removeFilter = ((actualFilter) => {
    const remove = filterByNumericValues.filter((filter) => filter !== actualFilter);
    setFilterByNumericValues(remove);
  });

  // Retorno do mapeamento dos filtros, exibindo os que estiverem sendo escolhidos no momento, captando-os do filterByNumericValues.
  return (
    <>
      {filterByNumericValues
        .map((filter, i) => (
          <div key={ i } data-testid="filter" className="show-filters">
            <span>
              {`FILTRO ${i + 1}: ${filter.column} ${filter.comparison} ${filter.value}`}
            </span>
            <button
              type="button"
              className="remove-button"
              onClick={ () => removeFilter(filter) }
            >
              X
            </button>
          </div>
        ))}
    </>
  );
}

export default ShowFilter;
