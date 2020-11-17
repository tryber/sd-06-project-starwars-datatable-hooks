import React from 'react';

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      planets: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.planets();
  }

  planets() {
    fetch('http://swapi-trybe.herokuapp.com/api/planets')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ planets: json.results, loading: false });
      });
  }

  render() {
    const { planets, loading } = this.state;

    return (
      <div>
        {
          loading 
            ? 'carregando'
            :
            <table>
              {
                Object.keys(planets[0]).map((keyParam) => <th>{`${keyParam} || `}</th>)
              }
            </table>
        }
      </div>
    );
  }
}

export default Table;
