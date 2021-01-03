import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import fetchPlanetsAPI from '../services/sWservices';
import TableLine from '../components/TableLine';

const SWProvider = ({ children }) => {
  const [planets, setplanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const setFilterByName = (name) => {
    setFilters({
      ...filters,
      filters: { filterByName: { name } },
    });
  };

  const filterPlanetName = (planet) => {
    if (planet.name.match(new RegExp(filters.filters.filterByName.name, 'i'))) {
      return true;
    }
    return false;
  };

  const filterPlanets = () => {
    setFilteredPlanets(
      planets.reduce((acc, planet) => {
        if (filterPlanetName(planet)) {
          acc.push(<TableLine planet={ planet } key={ planet.name } />);
        }
        return acc;
      }, []),
    );
  };

  const getPlanetSW = async () => {
    const planetSW = await fetchPlanetsAPI();
    setplanets(planetSW);
    setFilteredPlanets(planetSW.map((planet) => (
      <TableLine planet={ planet } key={ planet.name } />
    )));
  };

  useEffect(() => {
    getPlanetSW();
  }, []);

  useEffect(() => {
    filterPlanets();
  }, [filters]);

  const value = {
    filteredPlanets,
    filters,
    setFilterByName,
  };

  return <SWContext.Provider value={ value }>{children}</SWContext.Provider>;
};

export default SWProvider;

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
