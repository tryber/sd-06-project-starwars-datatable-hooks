import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBox() {
  const { state, setState } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ (e) => {
          setState({
            ...state,
            filters: {
              ...state.filters, filterByName: { name: e.target.value },
            },
          });
          // console.log(state.filters.filterByName)
        } }
      />
    </div>
  );
}

export default SearchBox;

// function eu() {
//   if (editMode) {
//     return (
//       <button
//         className="btn-submit"
//         style={ { backgroundColor: '#E0A800' } }
//         type="submit"
//         onClick={ this.handleEdit }
//       >
//         Editar despesa
//       </button>
//     );
//   }
//   return (
//     <button
//       className="btn-submit"
//       style={ { backgroundColor: '#888888' } }
//       type="submit"
//       onClick={ this.handleAdd }
//     >
//       Adicionar despesa
//     </button>
//   );
// }
