import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import './AppliedFilter.css';

function AppliedFilter(props) {
  const { numericFilter } = props;

  const { deleteFilter } = useContext(StarWarsContext);

  return (
    <div>
      <div className="appliedFilter-container" data-testid="filter">
        { numericFilter.column }
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={ () => deleteFilter(numericFilter.column) }
        >
          X
        </button>
      </div>

    </div>
  );
}

AppliedFilter.propTypes = {
  numericFilter: PropTypes.shape({
    column: PropTypes.string,
  }).isRequired,
};

export default AppliedFilter;
