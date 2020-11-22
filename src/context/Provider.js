import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './Context';
import fetchApi from '../services/SWPApi';

function SWProvider({ children }) {
  const [data, setData] = useState([]);

  const getData = async () => {
    const results = await fetchApi();
    setData(results);
  };

  return (
    <SWContext.Provider
      value={ { data, getData } }
    >
      { children }
    </SWContext.Provider>
  );
}

SWProvider.propTypes = { children: PropTypes.instanceOf(Array).isRequired }

export default SWProvider;
