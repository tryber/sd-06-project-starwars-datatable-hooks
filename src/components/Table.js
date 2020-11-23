import React, { useContext, useEffect } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    filteredData,
    currentDataByName,
    currentDataByNumeric,
    filters,
  } = useContext(StarWarsContext);

  const ZERO = 0;
  // shouldComponentUpdate que invoca as funções que filtram
  // os planetas | currentDataByName e currentDataByNumeric
  useEffect(() => {
    currentDataByName();
    if (filters.filterByNumericValues) {
      currentDataByNumeric();
    }
  }, [filters]);

  // Object.entries: retorna array de chaves e valores de
  // um objeto [key, value]
  const renderRegisters = (planet) => Object.entries(planet).map(([key, value]) => {
    if (key !== 'residents') {
      return <td key={ key }>{value}</td>;
    }
    return null;
  });
  // Object.keys: método retorna array de chaves de um objeto [key]
  const renderHeader = (planet) => {
    const columnsName = Object.keys(planet).filter((item) => item !== 'residents');
    return (
      <tr>
        { columnsName.map((item, index) => <th key={ index }>{item}</th>)}
      </tr>
    );
  };

  // classeName "table": para uso com BootStrap
  return filteredData.length !== ZERO && (
    <table className="table">
      <thead>
        {renderHeader(filteredData[0])}
      </thead>
      <tbody>
        {filteredData.map((planet) => (
          <tr key={ planet.name }>{renderRegisters(planet)}</tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
