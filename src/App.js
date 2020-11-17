import React from 'react';
import { fetchAPI } from './service/API';
import './App.css';

function App() {
  fetchAPI();
  return (
    <div className="App">
    </div>
  );
}
StarWarsProvider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired; 

export default App;
