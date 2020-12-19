import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function OrderFilter() {
  const [column, setColumn] = useState('name');
  const {
    filters,
    setFilters,
    data,
  } = useContext(StarWarsContext);
  const orderDirection = filters.filters.order.sort;
  const [sortingOrder, setSortingOrder] = useState(orderDirection);

  if (data) {
    const columns = Object.keys(data[0]).filter((item) => item !== 'residents');

    const onColumnChange = ({ target }) => {
      const selectedColumn = target.value;
      setColumn(selectedColumn);
    };

    const handleRadioChange = ({ target }) => {
      const selectedOrder = target.value;
      setSortingOrder(selectedOrder);
    };

    const handleSendOrder = () => {
      setFilters({
        ...filters,
        filters: {
          ...filters.filters,
          order: {
            column,
            sort: sortingOrder,
          },
        },
      });
    };

    return (
      <div>
        <label htmlFor="select-filter">
          Select a column to order:
          <select
            id="select-filter"
            onChange={ onColumnChange }
            value={ column }
            data-testid="column-sort"
          >
            { columns.sort().map((optionColumn, index) => (
              <option key={ index } value={ optionColumn }>
                { optionColumn }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="column-sort-input-asc">
          ASC
          <input
            id="column-sort-input-asc"
            checked={ sortingOrder === 'ASC' }
            data-testid="column-sort-input-asc"
            name="order"
            onChange={ handleRadioChange }
            type="radio"
            value="ASC"
          />
        </label>
        <label htmlFor="column-sort-input-desc">
          DESC
          <input
            id="column-sort-input-desc"
            checked={ sortingOrder === 'DESC' }
            data-testid="column-sort-input-desc"
            name="order"
            onChange={ handleRadioChange }
            type="radio"
            value="DESC"
          />
        </label>
        <button type="button" onClick={ handleSendOrder }>Send order</button>
      </div>
    );
  }
  return (<span />);
}

export default OrderFilter;
