import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputName() {
  const { setNombreProcurado } = useContext(StarWarsContext);

  function filterPlanet(e) {
    setNombreProcurado(e);
  }

  return (
    <div>
      <input // campo para filtrar por nome
        data-testid="name-filter"
        type="text"
        onChange={ (event) => filterPlanet(event.target.value) }
      />
    </div>
  );
}

export default InputName;

/* class InputName extends React.Component {
  render() {
    const { searchByName } = this.props;
    return (
      <div>
        <input // campo para filtrar por nome
          data-testid="name-filter"
          type="text"
          onChange={(event) => searchByName(event.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchByName: (nome) => dispatch(filterPlanet(nome)),
});

export default connect(null, mapDispatchToProps)(InputName);

InputName.propTypes = {
  searchByName: propTypes.func.isRequired,
};
 */
