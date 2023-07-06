import React, { useState } from 'react';
import './TableGenerator.css';

const TableGenerator = () => {
  const [number, setNumber] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setNumber(value);
  };

  const generateTable = () => {
    const rows = [];
    for (let i = 1; i <= number; i++) {
      rows.push(
        <tr key={i}>
          <td>{i}</td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter a number"
        className="input-field"
      />
      <table className="table">
        <tbody>{number && generateTable()}</tbody>
      </table>
    </div>
  );
};

export default TableGenerator;
