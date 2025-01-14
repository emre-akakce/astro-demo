import React from 'react';

const Filter = ({ onFilter }: any) => {
  const handleFilter = async () => {
    try {
      const response = await fetch('http://localhost:5555/cep-tel2');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch filtered data: ${response.statusText}`);
      }
      const newData = await response.json();
      //console.log(newData.result.category);
      
      onFilter(newData);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;
