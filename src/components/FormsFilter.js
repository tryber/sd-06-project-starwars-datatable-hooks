import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FormsFilter() {
  const { data } = useContext(StarWarsContext);
  return (
    <fieldset>
      <select data-testid="column-filter">
        {data
          .map((planet, i) => (
            <option key={ i } value="">{ planet }</option>
            // <option key={ i } value="">{ planet.orbital_period }</option>
            // <option key={ i } value="">{ planet.diameter }</option>
            // <option key={ i } value="">{ planet.rotation_period }</option>
            // <option key={ i } value="">{ planet.surface_water }</option>
          ))}
      </select>
    </fieldset>
  );
}

export default FormsFilter;
