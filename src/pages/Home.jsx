import React from 'react';

import Table from '../components/Table';
import FiltersForm from '../components/FiltersForm';

export default function Home() {
  return (
    <div>
      <FiltersForm />
      <Table />
    </div>
  );
}
