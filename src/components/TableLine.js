import React from 'react';
import PropTypes from 'prop-types';

const TableLine = ({ planet }) => (
  <tr>
    <td>{planet.climate}</td>
    <td>{planet.created}</td>
    <td>{planet.diameter}</td>
    <td>{planet.edited}</td>
    <td>{planet.name}</td>
    <td>{planet.gravity}</td>
    <td>{planet.residents}</td>
    <td>{planet.orbital_period}</td>
    <td>{planet.population}</td>
    <td>{planet.films}</td>
    <td>{planet.rotation_period}</td>
    <td>{planet.surface_water}</td>
    <td>{planet.terrain}</td>
  </tr>
);

export default TableLine;

TableLine.propTypes = { planet: PropTypes.objectOf(PropTypes.any).isRequired };
