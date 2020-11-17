import React from 'react';

import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import { getPlanetList } from '../services/starwarsAPI';

class StarWarsProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      results: [],
    };

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI() {
    getPlanetList()
      .then((response) => this.setState({ results: response.results }));
  }

  render() {
    const { children } = this.props;
    return (
      <StarWarsContext.Provider value={ { ...this.state } }>
        {children}
      </StarWarsContext.Provider>
    );
  }
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default StarWarsProvider;
