import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';

fucntion StarWarsProvider() {
	const [planet, setPlanet] = useState([]);

	//fazer o fetch aqui como uma funçao e setPlanet vai receber o json do fetch, no value tambem passar o nome dessa funçao
	

	return (
		<StarWarsContext.Provider value={ { planet } }>
			{children}
		</StarWarsContext.Provider>
	);
}

export default StarWarsProvider;
