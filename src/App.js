import React from 'react';
import SearchTerm from './components/SearchTerm';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>    
      <main>
        <form className="form-group">
          <SearchTerm />
        </form>
        <Table />
      </main>
    </StarWarsProvider>
  );
}

export default App;
