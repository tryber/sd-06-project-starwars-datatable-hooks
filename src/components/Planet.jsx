import React from 'react';

const Planet = (props) => {

  const  {planet} = props;
  const attributes = ['name', 'rotation_period',	'orbital_period',
  'diameter',	'climate',	'gravity',	'terrain',
  'surface_water',	'population',	'residents',	'films',	'created',	'edited'
];
  return(
    <tr>
      {attributes
        .map((attribute) => (<td key={ attribute }>{planet[attribute]}</td>))}
    </tr>
  );
};
export default Planet;