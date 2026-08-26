 /* starting code taken from the phonebook step 1,3 starting point and suggestions */
// structure and methods, and syntax used are, as to be expected, mostly sourced from the course's content
import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowName from  './components/ShowName'
import Searcher from './components/Searcher'
import Form from './components/Form'
import phonebookService from './service/phonebookBackend'
import Notification from './components/Notification'
const App = () => {
const [persons, setPersons] = useState([]) 
const [newName, setNewName] = useState('')
const [newNumber, setNewNumber] = useState('')
const[search, setSearch] = useState()
const[message, setMessage] = useState(null)
const[success, setSuccess] = useState(null)
const searchHandler = (event) => {
/* searched if i could use a component as an event handler, learned i cannot.
   so i read the official react page and that i should pass a function that handles the event for the component
   as a prop, so i did this
   when the user searches something it triggers an onChange event, which grabs the search value
   modifies search, causing it to re render, and since the component uses it as a state hook
   it too re renders, updates a "decide" list and passes it to ShowName as a prop which eventually,
   renders the list correctly.
*/
//value control
const value = event.target.value.toLowerCase()
console.log(value)
setSearch(value)
console.log(persons)
}

//sets the new name state hook
const changeHandler = (event) => {
  console.log(event.target.value)
  setNewName(event.target.value)
}

//sets the new number state hook
const numberChangeHandler = (event) => {
  console.log(event.target.value)
  setNewNumber(event.target.value)
}

//adds a new person and a new number or updates the number if the person has already been previously added
const addGuy = (event) => {
  event.preventDefault()
  const newGuy = {
    name: newName,
    number: newNumber
  }
  const uniqueName = persons.filter((x)=> x.name === newGuy.name)
  console.log('person finder:', uniqueName)
  if(uniqueName.length === 0){
    phonebookService
    .create(newGuy)
    .then(addedNote => {
      setPersons(persons.concat(addedNote))
      console.log('creation successfull ', addedNote)
       setNewName('')
       setNewNumber('')
       setMessage(`added ${newGuy.name}`)
       setSuccess(true)
       setTimeout(() => {
        setMessage(null)
       }, 4000)
    })
    .catch(error => {
    setMessage( `could not create ${newGuy.name} user`)
    setSuccess(false)
    setTimeout(()=>{
      setMessage(null)
    }, 4000)
    })
  }else{
    const newArray = [...persons]
    const id = uniqueName[0].id
    if(window.confirm(`${newGuy.name} has already been added to the phonebook, do you want to update the number`)){
    phonebookService
    .update(id, newGuy)
    .then(returnedNote => {
      // here array was returning undefined because i used {} instead of just omitting braces
      // googled why is map returning undefined and gemini quickly showed me i was forgetting to omit braces
    setPersons(newArray.map(x => x.id === id ? returnedNote : x))
    setNewName('')
    setNewNumber('')
    setMessage(`successfully updated ${newGuy.name}`)
       setSuccess(true)
       setTimeout(() => {
        setMessage(null)
       }, 4000)
    })
    .catch(error => {
    setMessage( `could not update ${newGuy.name}, ${newGuy.name} has previously been deleted from the system`)
    setPersons(newArray.filter((x)=> x.name !== newGuy.name))
    setSuccess(false)
    setTimeout(()=>{
      setMessage(null)
    }, 4000)
    })
    }else{
    setNewName('')
    setNewNumber('')
    }
  }
}

//deletes a person and their number
const deleteMethod = (id, name) => {
  // relies on window.confirm having a true return in case confirmed to execute the delete function, 
  // and a false return in case denied to log the denial
if(window.confirm(`are you sure you want to delete ${name}`)){
const newArray = [...persons]
phonebookService
.dataRemover(id)
.then(response => {
  console.log('delete successfull ', response)
  setPersons(newArray.filter((x)=> x.name !== response.name))
  setMessage( `successfully deleted ${name} from our system`)
  setSuccess(true)
  setTimeout(()=>{
      setMessage(null)
    }, 4000)
})
.catch(error => {
    setMessage( `could not delete ${name}, it seems the user has already been removed from our system`)
    setPersons(newArray.filter((x)=> x.name !== name))
    setSuccess(false)
    setTimeout(()=>{
      setMessage(null)
    }, 4000)
    })
}else{
  console.log('canceling operation has been stopped')
}
}

//effect hook logic, gets initial state of the application
const hook = () => {
console.log('backend communications based fetching begins')
 phonebookService
 .getAll()
  .then(response => {
    console.log('backend communications based fetching concluded, promise successfull ', response)
    setPersons(response)
  })
}

useEffect(hook, [])

console.log('amount of contacts present: ', persons.length)

//renders components
  return (
    <div>
      <h2>Phonebook</h2>
      search for: <input onChange={searchHandler}/>
      <br/>
      <br/>
      <Form onSubmit = {addGuy} onNameChange = {changeHandler} onNumberChange = {numberChangeHandler} newName = {newName} newNumber = {newNumber}/>
      <h2>Numbers</h2>
      <Notification message={message} success={success}/>
     <Searcher persons={persons} search={search} onClick={deleteMethod}/>
    </div>
  )
}

export default App