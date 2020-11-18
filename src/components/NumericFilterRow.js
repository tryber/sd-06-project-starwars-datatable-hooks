import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NumericFilterRow({ currentFilters, saveFilter }) {
  const [value, setValue] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const comparisonFilters = [
    'maior que', 'menor que', 'igual a',
  ];

  function handleColumnSelect(event) {
    const { selectedIndex } = event.nativeEvent.target.options;
    const selected = event.nativeEvent.target[selectedIndex].value;

    switch (event.target.name) {
    case 'column-filter':
      return setColumn(selected);
    case 'comparison-filter':
      return setComparison(selected);
    default:
      return null;
    }
  }

  function handleButtonClick() {
    if (value && column && comparison) {
      saveFilter(column, comparison, value);
      setValue('');
      setColumn('');
      setComparison('');
      setFeedbackMessage('');
    } else {
      setFeedbackMessage('Please fill all filter fields');
      const feedbackTimeout = 4000;
      setTimeout(() => {
        setFeedbackMessage('');
      }, feedbackTimeout);
    }
  }

  return (
    <div className="column-filter-selector">
      <select
        onChange={ handleColumnSelect }
        data-testid="column-filter"
        name="column-filter"
        defaultValue={ column }
      >
        <option>-- Filter property --</option>
        {currentFilters.map((filter) => (
          <option value={ filter } key={ filter }>
            { filter }
          </option>
        ))}
      </select>

      <select
        onChange={ handleColumnSelect }
        data-testid="comparison-filter"
        name="comparison-filter"
        defaultValue={ comparison }

      >
        <option>-- Comparison filter --</option>
        {comparisonFilters.map((statement) => (
          <option key={ statement } value={ statement }>
            {statement}
          </option>
        ))}
      </select>

      <input
        type="number"
        data-testid="value-filter"
        placeholder="Filter by value"
        onChange={ (event) => setValue(event.target.value) }
        value={ value }
      />

      <button
        type="button"
        onClick={ () => handleButtonClick() }
        data-testid="button-filter"
      >
        Filter!
      </button>

      {feedbackMessage && <span>{feedbackMessage}</span>}
    </div>
  );
}

NumericFilterRow.propTypes = {
  currentFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveFilter: PropTypes.func.isRequired,
};
export default NumericFilterRow;
