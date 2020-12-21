import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import App from '../App';

function AppliedFilter(props) {
  const { numericFilter } = props;

  const { deleteFilter } = useContext(StarWarsContext);

  return(
    <div data-testid='filter'>
      { numericFilter.column }
      <button type="button" onClick={ () => deleteFilter(numericFilter.column) }>X</button>
    </div>
  );
}

AppliedFilter.propTypes = {
  numericFilter: PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.number,
  }),
};

export default AppliedFilter;
