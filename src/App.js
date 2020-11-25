import React from 'react';
import { Provider } from './context/StarWarsContext';
import TabStarWar from './components/TabStarWar';

function App() {
  return (
    <Provider>
      <div>
        <TabStarWar />
      </div>
    </Provider>
  );
}

export default App;
