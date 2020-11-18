import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function ProviderContext({ children }) {
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [copyDataResultsTable, setCopyDataResultsTable] = useState([]);

  useEffect(() => {
    const objVoid = 0;
    if (Object.keys(data).length !== objVoid) {
      const copyDataResults = data.results.map((result) => ({ ...result }));
      copyDataResults.forEach((objPlanet) => {
        delete objPlanet.residents;
      });
      if (name !== '') {
        const nameUpperCase = name.toUpperCase();
        const filterByName = copyDataResults
          .filter((objPlanet) => objPlanet.name.toUpperCase().includes(nameUpperCase));
        setCopyDataResultsTable(filterByName);
      } else {
        setCopyDataResultsTable(copyDataResults);
      }
    }
    // console.log('camou data mudou')
  }, [data, name]);

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
          } }
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
