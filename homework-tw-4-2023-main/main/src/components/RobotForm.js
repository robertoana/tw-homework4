import React, { useState } from 'react';

function RobotForm({ onAdd }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
    const [mass, setMass] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


  const handleAdd = () => {
        const newRobot = {
            name,
            type,
            mass,
        };

        onAdd(newRobot);

        setName('');
        setType('');
        setMass('');
        setErrorMessage('');
        if (parseInt(mass) >= 500) {
            setErrorMessage('Mass must be 500 or more');
        }
  };

  return (
    <div>
      <h2>Add a Robot</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="type">Type:</label>
        <input type="text" id="type" placeholder="type" value={type} onChange={(e) => setType(e.target.value)} />

        <label htmlFor="mass">Mass:</label>
        <input type="number" id="mass" placeholder="mass" value={mass} onChange={(e) => setMass(e.target.value)} />

        <button type="button" onClick={handleAdd}>
          add
        </button>
              
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      </form>
    </div>
  );
}

export default RobotForm;