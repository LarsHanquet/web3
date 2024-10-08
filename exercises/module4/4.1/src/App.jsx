import React, { useState, useEffect } from 'react';
import persons from './services/persons';

const Number = ({ name, number }) => (
  <p>{name} {number}</p>
);

const App = () => {
  const [personsCollection, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  // Load initial data from server
  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await persons.getAll();
        setPersons(response);
      } catch (error) {
        console.error('Error fetching persons:', error);
      }
    };

    fetchPersons();
  }, []);

  const addPerson = async (event) => {
    event.preventDefault();
    
    const newPerson = {
      name: newName,
      number: newPhoneNumber,
    };

    // Check if person with the same name already exists
    if (personsCollection.some(person => person.name === newName)) {
      alert(`${newName} is already included in the phonebook`);
      return; // Early exit if person already exists
    }

    try {
      const response = await persons.create(newPerson);
      setPersons(prevPersons => [...prevPersons, response]); // Update state with the new person
      setNewName('');
      setNewPhoneNumber('');
    } catch (error) {
      console.error('Failed to add person', error);
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handlePhoneChange = (event) => setNewPhoneNumber(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phonenumber: <input value={newPhoneNumber} onChange={handlePhoneChange} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsCollection.map(person => (
          <Number key={person.id} name={person.name} number={person.number} />
        ))}
      </ul>
    </div>
  );
};

export default App;
