import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      diameter: '',
      climate: '',
      created: '',
      edited: '',
      films: '',
      gravity: '',
      orbital_period: '',
      population: '',
      url: '',
      rotation_period: '',
      surface_water: '',
      terrain: '',
      filteredPlanets: props,
    };

    this.handleChange = this.handleChange.bind(this);
    this.input = this.input.bind(this);
  }

  handleChange(event) {
    const { setFilter, planets } = this.props;
    const { name, value } = event.target;
    console.log(planets);
    this.setState({ [name]: value }, () => {
      setFilter(planets.filter((planet) => planet.name.includes(value)));
    });
  }

  filterField(fieldType, fieldValue, index) {
    return (
      <option
        id={ fieldType }
        name={ fieldType }
        value={ fieldValue }
        onChange={ this.handleChange }
        key={ `${fieldType}-${fieldValue}-${index}` }
      >
        { fieldType }
      </option>
    );
  }

  comparisonType(type, index) {
    return (
      <option
        id={ type }
        name={ type }
        value={ type }
        onChange={ this.handleChange }
        key={ `${type}-shouldBeRandom-${index}` }
      >
        { type }
      </option>
    );
  }

  input(fieldType, fieldValue, index) {
    return (
      <label htmlFor={ fieldType }>
        { fieldType }
        <input
          data-testid={ `${fieldType}-filter` }
          id={ fieldType }
          name={ fieldType }
          value={ fieldValue }
          onChange={ this.handleChange }
          key={ `${fieldType}-${fieldValue}-${index}` }
        />
      </label>
    );
  }

  render() {
    const STATES = [{ ...this.state }];
    const FIELDS = ['name'];
    const FILTER_NUMBERS = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const COMPARISON_TYPE = ['maior que', 'menor que', 'igual a'];

    return (
      <form>
        { FIELDS.map((field, index) => this.input(field, STATES[0][field], index))}
        <select data-testid="column-filter">
          { FILTER_NUMBERS.map((field, index) => (
            this.filterField(field, STATES[0][field], index))) }
        </select>
        <select data-testid="comparison-filter">
          {COMPARISON_TYPE.map((type, index) => this.comparisonType(type, index))}
        </select>
      </form>
    );
  }
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  planets: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

// const {
//   name,
//   diameter,
//   climate,
//   created,
//   edited,
//   films,
//   gravity,
//   orbital_period,
//   population,
//   url,
//   rotation_period,
//   surface_water,
//   terrain,
//   filteredPlanets,
// } = this.state;
