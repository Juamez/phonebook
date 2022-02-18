import { useState } from 'react'

import './App.css';

const Filter = ({handle}) => {
  return (
  <>
    <p>Filter show with</p> 
    <input onChange={handle}/>
  </>
  )
}

const PersonForm = ({ handleSubmit, handleOnChange, handleNumber }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input onChange={handleOnChange}/>
        </div>
        <div>
          Number: <input type='number' onChange={handleNumber}/>
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </>
  )
}

const Persons = ({ personsToFilter }) => {
  return (
    <>
      {personsToFilter.map((person) => <p key={person.name}>{person.name} {person.number}</p>)}
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  
  const handleOnChange = (event) => {
    setNewName(event.target.value)
  }
  const handleOnChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const newObject = { 
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(newObject))
    setNewName('')
    setNewNumber('')
  }

  const handleFilter = (event) => {
    setFilterValue(event.target.value)
  }

  const personsToFilter = 
    filterValue ? persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase())) : persons
  
  return (
    <div className='App'>
      <h2>Phonebooks</h2>
      <Filter handle={handleFilter}/>
      <h2>Add a new</h2>
      <PersonForm handleSubmit={handleSubmit} handleOnChange={handleOnChange} handleNumber={handleOnChangeNumber}/>
      <h2>Numbers</h2>
      <Persons personsToFilter={personsToFilter}/>
    </div>
  )
}

export default App;