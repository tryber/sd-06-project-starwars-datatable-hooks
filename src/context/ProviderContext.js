import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function ProviderContext({ children }) {
  const [data, setData] = useState({});
  const [copyDataResultsTable, setCopyDataResultsTable] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const constArrayOptionsColumn = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [arrayOptionsColumn, setArrayOptionsColumn] = useState(constArrayOptionsColumn);

  useEffect(() => {
    setArrayOptionsColumn(constArrayOptionsColumn
      .filter((optionColumn) => !filterByNumericValues
        .some(({ column }) => column === optionColumn)));
  }, [filterByNumericValues]);

  useEffect(() => {
    const objVoid = 0;
    if (Object.keys(data).length !== objVoid) {
      let copyDataResults = data.results.map((result) => ({ ...result }));
      copyDataResults.forEach((objPlanet) => {
        delete objPlanet.residents;
      });
      if (name !== '') {
        const nameUpperCase = name.toUpperCase();
        const filterByName = copyDataResults
          .filter((objPlanet) => objPlanet.name.toUpperCase().includes(nameUpperCase));
        copyDataResults = filterByName;
      }
      const arrayVoid = 0;
      if (filterByNumericValues.length > arrayVoid) {
        const filterByNumber1 = filterByNumericValues
          .reduce((total, { column, comparison, value }, index) => {
            const firstCall = 0;
            const filterByNumber2 = (index === firstCall ? copyDataResults : total)
              .filter((objPlanet) => {
                // setArrayOptionsColumn(arrayOptionsColumn
                //   .filter((optionColumn) => optionColumn !== column));
                let boolTest = false;
                switch (comparison) {
                case 'maior que':
                  boolTest = parseInt(objPlanet[column], 10) > parseInt(value, 10);
                  break;
                case 'menor que':
                  boolTest = parseInt(objPlanet[column], 10) < parseInt(value, 10);
                  break;
                case 'igual a':
                  boolTest = parseInt(objPlanet[column], 10) === parseInt(value, 10);
                  break;
                default:
                  break;
                }
                return boolTest;
              });
            return filterByNumber2;
          }, []);
        copyDataResults = filterByNumber1;
      }
      setCopyDataResultsTable(copyDataResults);
    }
  }, [data, name, filterByNumericValues]);

  return (
    <StarWarsContext.Provider
      value={
        {
          dataTable: {
            data,
            setData,
            copyDataResultsTable,
          },
          filters: {
            filterByName: {
              name,
              setName,
            },
            filterNumeric: {
              filterByNumericValues,
              setFilterByNumericValues,
            },
          },
          arrayOptionsColumn }
      }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderContext;
