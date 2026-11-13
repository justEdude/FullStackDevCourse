const Form = (props) => {
  //holds the form the updates search events handlers, and saves a new person when submitted
    return (
<form onSubmit={props.onSubmit}>
        <div>
          name: <input value = {props.newName} onChange= {props.onNameChange} /> <br/>
          number: <input value ={props.newNumber} onChange= {props.onNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default Form