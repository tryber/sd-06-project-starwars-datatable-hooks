import React from 'react';
import Title from './Title';
import FilterName from './FilterName';
import FilterNumber from './FilterNumber';
import FilterList from './FilterList';
import Table from './Table';

function MainPage() {
  return (
    <div>
      <header>
        <Title />
      </header>
      <section>
        <FilterName />
        <FilterNumber />
        <FilterList />
      </section>
      <section>
        <Table />
      </section>
    </div>
  );
}

export default MainPage;
