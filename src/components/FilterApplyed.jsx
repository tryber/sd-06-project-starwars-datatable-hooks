import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/StarWarsContext';

function FilterApplyed({ filter }) {
  const { column, comparasion, value } = filter;
  const { removeFilter, updateFilteredPlanets } = useContext(Context);

  const handleRemoveFilter = () => {
    removeFilter(column);
    updateFilteredPlanets();
  };

  return (
    <div data-testid="filter">
      {`${column} ${comparasion} ${value}`}
      <button type="button" onClick={ () => handleRemoveFilter() }>X</button>
    </div>
  );
}

FilterApplyed.propTypes = {
  filter: PropTypes.shape({
    column: PropTypes.string,
    comparasion: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default FilterApplyed;
