import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
	const { planet } = useContext(StarWarsContext);

	
  return (
		<table>
			<thead>
				<tr>
					<th></th>
				</tr>
			</thead>
			<tbody>

			</tbody>
		</table>
	);
}

export default Table;