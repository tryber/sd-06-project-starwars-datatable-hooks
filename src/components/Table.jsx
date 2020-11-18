import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../style/table.css';

function Table() {
  const {
    dataAPI,
    getData,
    nameInput,
    numInput,
  } = useContext(StarWarsContext);

  const [filteredData, setFilter] = useState([]);
  const tableHeaders = ['Name', 'Rotation Period', 'Orbital Periode',
    'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'URL'
  ];

  const handleData = () => {
    const fName = nameInput.filters.filterByName.name;
    const fNum = numInput.filters.filterByNumber.number;
    const fComp = numInput.filters.filterByNumber.compare;
    const fOpt = numInput.filters.filterByNumber.option;

    if (fName !== '') {
      const newData = dataAPI.filter((obj) => obj.name.toLowerCase().includes(fName));
      setFilter(newData);
    }

    if (fName === '' && fNum === '') {
      const newData = dataAPI;
      setFilter(newData);
    }

    if (fNum >= 0 && fComp === "maior que" && fOpt && fName === '') {
      parseInt(fNum, 10);
      const newData = dataAPI.filter((obj) => parseInt(obj[fOpt], 10) > parseInt(fNum, 10))
      setFilter(newData);
    }

    if (fNum >= 0 && fComp === "menor que" && fOpt && fName === '') {
      parseInt(fNum, 10);
      const newData = dataAPI.filter((obj) => parseInt(obj[fOpt], 10) < parseInt(fNum, 10))
      setFilter(newData);
    }

    if (fNum >= 0 && fComp === "igual a" && fOpt && fName === '') {
      
      const newData = dataAPI.filter((obj) => parseInt(obj[fOpt], 10) === parseInt(fNum, 10))
      setFilter(newData);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    handleData();
  }, [nameInput, dataAPI, numInput]);

  return (
    <table>
      <thead>
        <tr className="table-row">
          { tableHeaders.map((title, index) => <th key={ `title${index}` }>{title}</th>) }
        </tr>
      </thead>
      <tbody>
        {filteredData.map((obj, index) => {
          const tableRows = (
            <tr key={ `planet${index}` } className="table-row">
              <td>{obj.name}</td>
              <td>{obj.rotation_period}</td>
              <td>{obj.orbital_period}</td>
              <td>{obj.diameter}</td>
              <td>{obj.climate}</td>
              <td>{obj.gravity}</td>
              <td>{obj.terrain}</td>
              <td>{obj.surface_water}</td>
              <td>{obj.population}</td>
              <td>{obj.films}</td>
              <td>{obj.created}</td>
              <td>{obj.edited}</td>
              <td>{obj.url}</td>
            </tr>
          );
          return tableRows;
        })}
      </tbody>
    </table>
  );
}

export default Table;
