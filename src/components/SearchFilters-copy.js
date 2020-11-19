// import React, { useContext, useState } from 'react';
// import StarWarsContext from '../context/StarWarsContext';

// function SearchFilters() {
//   const columns = ['population', 'orbital_period', 'diameter', 'rotation_period',
//     'surface_water'];
//   const comparisons = ['maior que', 'menor que', 'igual a'];
//   const { handleClick } = useContext(StarWarsContext);
//   const [column, setColumn] = useState('population');
//   const [comparison, setComparison] = useState('maior que');
//   const [value, setValue] = useState(0);
//   const filters = {
//     column,
//     comparison,
//     value,
//   }

//   return (
//     <section>
//       <label
//         htmlFor="columnFilter"
//       >
//         Colunas
//         <select
//           data-testid="column-filter"
//           id="columnFilter"
//           value={ column }
//           onChange={ (e) => setColumn(e.target.value) }
//         >
//           { columns.map((column) => (
//           <option key={ column } value={ column }>{ column }</option>)) }
//         </select>
//       </label>
//       <br/>
//       <label
//         htmlFor="comparisonFilter"
//       >
//         Comparação
//         <select
//           data-testid="comparison-filter"
//           id="comparisonFilter"
//           value={ comparison }
//           onChange={ (e) => setComparison(e.target.value) }
//         >
//           { comparisons.map((comparison) => (
//           <option key={ comparison } value={ comparison }>{ comparison }</option>)) }
//         </select>
//       </label>
//       <br/>
//       <label
//         htmlFor="valueFilter"
//       >
//         Diâmetro
//         <input
//           type="number"
//           id="valueFilter"
//           data-testid="value-filter"
//           value={ value }
//           onChange={ (e) => setValue(e.target.value) }
//         />
//       </label>
//       <br/>
//       <button
//         type="button"
//         data-tedid="button-filter"
//         onClick={ () => handleClick(filters) }
//       >
//         Filtrar
//       </button>
//       <br/>
//       <br/>
//     </section>
//   )
// }

// export default SearchFilters;
