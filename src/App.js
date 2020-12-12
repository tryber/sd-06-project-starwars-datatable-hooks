import React from 'react';
import PlanetContextProvider from './contexts/PlanetContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h3>star wars - much to learn, i have</h3>
      <p><strong>Obi-Wan:</strong> But Master Yoda says I should be mindful of the future.</p>
      <p><strong>Qui-Gon Jinn:</strong> But not at the expense of the moment.</p>
      <p>
        <strong>
          Obi-Wan:
        </strong>
        But Master Yoda says I should be mindful of the future.
      </p>
      <p>
        <strong>
          Qui-Gon Jinn:
        </strong>
        But not at the expense of the moment.
      </p>
      <PlanetContextProvider>
        <Navbar />
      </PlanetContextProvider>
    </div>
  );
}
export default App;