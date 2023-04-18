import React from 'react';
import Filter from '../components/Filter';
import Table from '../components/Table';

const BankDetails = () => {
  return (
    <>
        <div className="container">
            <Filter />
            <Table />
        </div>
    </>
  )
}

export default BankDetails