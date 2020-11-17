import React, { useContext } from 'react';
import { PlanetContext } from '../contexts/PlanetContext';

const Navbar = () => {
  const { planets } = useContext(PlanetContext);
  return (
    <div className="navbar">
      {planets.map((planet) => (<p key={ planet.id }>{planet.name}</p>))}
    </div>
  );
};

export default Navbar;
