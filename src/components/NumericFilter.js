import React from 'react';

function NumericFilter(props) {
  const {
    setNumericFiltersData,
    columnFilters,
    comparisonFilters,
  } = props;
  

  const onChange = (event) => {
    const { name, value } = event.target;
    const valueToRegister = name === 'value' ? parseInt(value) : value;
    console.log('Valor pra registrar:', valueToRegister);
    console.log('Tipo do valor:', typeof valueToRegister);
    setNumericFiltersData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 
  return (
    <div>
      <label htmlFor="column-filter">
        Column Filter:
        <select
          id="column-filter"
          name="column"
          data-testid="column-filter"
          onChange={ (event) => onChange(event) }
        >
          {columnFilters.map((category, index) => (
            <option key={ index } value={ category }>{ category }</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Filter by:
        <select
          id="comparison-filter"
          name="comparison"
          data-testid="comparison-filter"
          onChange={ (event) => onChange(event) }
        >
          {comparisonFilters.map((comparison, index) => (
            <option key={ index } value={ comparison }>{ comparison }</option>
          ))}
        </select>
      </label>
      <label htmlFor="value-filter">
        Value:
        <input
          type="number"
          id="value-filter"
          name="value"
          value={ setNumericFiltersData.value }
          data-testid="value-filter"
          onChange={ (event) => onChange(event) }
        />
      </label>
      <button type="submit" data-testid="button-filter">Apply Filter</button>
    </div>
  );
}

export default NumericFilter;
