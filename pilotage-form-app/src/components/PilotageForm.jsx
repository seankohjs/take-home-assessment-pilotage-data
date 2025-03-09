import React, { useState } from 'react';

const PilotageForm = ({ onSearch }) => {
  const [imo, setImo] = useState('');
  const [error, setError] = useState('');


  const validateIMO = (imoString) => {

    if (!/^\d{7}$/.test(imoString)) {
      return false;
    }


    const digits = imoString.split('').map(Number);


    const checkDigit = digits[6];

   
    const sum =
      digits[0] * 7 +
      digits[1] * 6 +
      digits[2] * 5 +
      digits[3] * 4 +
      digits[4] * 3 +
      digits[5] * 2;

    
    return sum % 10 === checkDigit;
  };


  const handleChange = (e) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, '');
    setImo(numericValue);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateIMO(imo)) {
      setError('Invalid IMO number. Please check the format or the check digit.');
      return;
    }
    onSearch(imo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={imo}
        onChange={handleChange}
        placeholder="Enter 7-digit IMO number"
      />
      <button type="submit">Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default PilotageForm;
