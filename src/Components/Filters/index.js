import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import request from '../../services/request';
import CustomFilters from './CustomFilters';

const Filters = () => {
  const {
    setIsFetching,
    setData,
    filters,
    setFilters,
    setColumn,
    setComparison,
    column,
    comparison,
    value,
    setValue } = useContext(StarWarsContext);
  const { name } = filters.filterByName;
  const colums = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const filterByName = async () => {
    setIsFetching(true);
    const data = await request();
    const byName = await data.filter((planet) => planet.name.toUpperCase()
      .includes(name.toUpperCase()));
    return byName;
  };

  const handleNaming = async () => {
    const byname = await filterByName();
    return setData(byname);
  };

  const handleName = async ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };
  const handleColumn = ({ target }) => {
    setColumn(target.value);
  };

  const handleComparison = ({ target }) => {
    setComparison(target.value);
  };

  const handleNumber = ({ target }) => {
    setValue(target.value);
  };

  const filterByNumericValues = async () => {
    const byName = await filterByName();
    await filters.filterByNumericValues.map((element, index) => {
      const fullFiltered = byName.filter((array) => {
        const columns = filters.filterByNumericValues[index].column;
        const comparisons = filters.filterByNumericValues[index].comparison;
        const values = filters.filterByNumericValues[index].value;
        if (comparisons === 'maior que') {
          return array[columns] > parseInt(values, 10);
        } if (comparisons === 'menor que') {
          return array[columns] < parseInt(values, 10);
        }
        return array[columns] === values;
      });
      return setData(fullFiltered);
    });
  };

  const handleButton = () => {
    setFilters(
      {
        ...filters,
        filterByNumericValues: filters.filterByNumericValues
          .concat({ column, comparison, value }),
      },
    );
    setIsFetching(true);
  };

  useEffect(() => {
  }, [column, comparison, value]);

  useEffect(() => {
    handleNaming();
  }, [name]);

  useEffect(() => {
    const zero = 0;
    if (filters.filterByNumericValues.length > zero) {
      filterByNumericValues();
    }
    setIsFetching(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <div>
      <div className="filter-name">
        Name:
        <input
          value={ name }
          onChange={ handleName }
          type="text"
          placeholder="Type the planet name"
          data-testid="name-filter"
        />
      </div>
      <div className="filter-comparison">
        <select data-testid="column-filter" onChange={ handleColumn }>
          {colums.map((element) => <option key={ element }>{ element }</option>)}
        </select>
        <select data-testid="comparison-filter" onChange={ handleComparison }>
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input type="number" data-testid="value-filter" onChange={ handleNumber } />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleButton }
        >
          Filtrar
        </button>
      </div>
      <CustomFilters />
    </div>
  );
};

export default Filters;
