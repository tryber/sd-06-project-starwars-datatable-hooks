import React from 'react';
import logo from './logo.svg';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';

function App() {
  return (
 <div>
   <StarWarsProvider>
     <Table />
   </StarWarsProvider>
 </div>
  );
}

export default App;
