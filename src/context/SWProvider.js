import React from 'react';
import SWContext from './SWContext';

const SWProvider = () => {
  return (
    <SWContext.Provider value={}>
      {children}
    </SWContext.Provider>
  );
}

export default SWProvider;
