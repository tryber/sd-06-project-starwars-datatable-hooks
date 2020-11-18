import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { data, isFetching } = useContext(StarWarsContext);
  return (
      <table>
          <tr>
            <th>

            </th>
          </tr>
          <tbody>
            <td>
                
            </td>
          </tbody>
      </table>
  )
}
