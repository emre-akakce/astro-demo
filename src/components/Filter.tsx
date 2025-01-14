import React, { useState } from 'react';

const Filter = ({ onFilter }: any) => {
  const [filterId, setFilterId] = useState(''); // State to store the filter ID

  const handleFilter = async () => {
    try {
      // Send the filter ID as a query parameter or in the body
      const response = await fetch(`/endpoint?filterId=${filterId}`, {
        method: 'GET', // or 'POST' if the API expects a POST request
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch filtered data: ${response.statusText}`);
      }
      const newData = await response.text();

      const plistElement = document.getElementById('plist');
      if (plistElement) {        
        // Clear the existing product list
        plistElement.innerHTML = newData;
       }
      
      // Pass the filtered data to the parent component
      onFilter(newData);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  };

  return (
    <div>
      {/* Input for Filter ID */}
      <input
        type="text"
        placeholder="Enter filter ID"
        value={filterId}
        onChange={(e) => setFilterId(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;
