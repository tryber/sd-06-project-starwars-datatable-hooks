import React, { useContext } from 'react';
import StarWarsContext from '../../Context/StarWarsContext';

import StyledFilter from './styled';

const FilterTable = () => {
  const { stateStarWars, setStarWars } = useContext(StarWarsContext);
  // const [stateInputName, setInputName] = useState();

  const valueInputFilter = ({ value }) => {
    // console.log(value);

    setStarWars({
      ...stateStarWars,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <div>
      <StyledFilter>
        {/* {console.log(planetsStarWars)} */}
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Name Planet"
          onChange={ ({ target }) => valueInputFilter(target) }
        />
      </StyledFilter>
    </div>
  );
};

export default FilterTable;
