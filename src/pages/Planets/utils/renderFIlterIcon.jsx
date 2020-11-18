import React from 'react';
import {
  FiDroplet,
  FiUsers,
  FiRotateCw,
  FiMaximize2,
} from 'react-icons/fi';
import { FaGlobe } from 'react-icons/fa';

const POPULATION = 'population';
const ORBITAL = 'orbital_period';
const DIAMETER = 'diameter';
const ROTATION = 'rotation_period';
const SURFACE = 'surface_water';

export default function renderSortIcon(column) {
  switch (column) {
  case POPULATION:
    return <FiUsers />;
  case ORBITAL:
    return <FaGlobe />;
  case DIAMETER:
    return <FiMaximize2 />;
  case ROTATION:
    return <FiRotateCw />;
  case SURFACE:
    return <FiDroplet />;
  default:
    return null;
  }
}
