import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import fetchStarWars from '../services/api';

const TableBody = () => {
  const {
    filterPlanetByName,
    planetsData,
    setPlanetsData,
    setLoading,
    loading,
    filterByNumber,
  } = useContext(StarWarsContext);

  const choicePlanet = () => {
    const planetsFiltered = [...planetsData];
    return planetsFiltered;
  };

  useEffect(() => {
    setLoading(true);
    fetchStarWars().then((response) => {
      setPlanetsData(response.results);
      console.log('response.results', response.results);
      setLoading(false);
    });
  }, [setPlanetsData, setLoading]);
  const filterPlanet = choicePlanet(planetsData);

  const filters = filterPlanetByName.name;

  const isBigger = (filterValue, planetValue) => (
    parseInt(filterValue, 10) > parseInt(planetValue, 10));
  const isSmaller = (filterValue, planetValue) => (
    parseInt(filterValue, 10) < parseInt(planetValue, 10));
  const isEqual = (filterValue, planetValue) => (
    parseInt(filterValue, 10) === parseInt(planetValue, 10));

  const handleCompare = (planetsDataA, columnType, comparisonType, valueNum) => {
    const comparisonTypes = {
      'maior que': isBigger(planetsDataA[columnType], valueNum),
      'menor que': isSmaller(planetsDataA[columnType], valueNum),
      'igual a': isEqual(planetsDataA[columnType], valueNum),
    };
    return comparisonTypes[comparisonType];
  };

  const FilterByNumber = (myFilterByText) => {
    console.log('filterByNumber', filterByNumber);
    console.log('myfilterByText', myFilterByText);
    return myFilterByText
      .filter((planet) => (filterByNumber.every((filter) => handleCompare(planet,
        filter.column, filter.comparison, filter.value, filter))));
  };
  const hadleRenderFilter = () => {
    const myFilterByText = filterPlanet
      .filter((planet) => planet.name
        .includes(filters));

    const myFilterByNumber = FilterByNumber(myFilterByText);
    return myFilterByNumber;
  };

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div>
      <thead>
        <tr>
          <th>Name:</th>
          <th>Rotation_Period:</th>
          <th>Orbital_Period:</th>
          <th>Diameter:</th>
          <th>Gravity:</th>
          <th>Terrain:</th>
          <th>Surface Water:</th>
          <th>Population:</th>
          <th>Films:</th>
          <th>Created:</th>
          <th>Edited:</th>
          <th>Climate:</th>
          <th>URL:</th>
        </tr>
      </thead>
      <tbody>
        {hadleRenderFilter()
          .map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </div>
  );
};

export default TableBody;
