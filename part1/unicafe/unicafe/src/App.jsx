import { useState } from 'react'
const Button = (props) =>(
  <button onClick={props.onClick}>{props.text}</button>
)
const Title = (props) =>(
  <h1>{props.title}</h1>
)
const Counter = (props) => (
  <p>{props.name} {props.counter}</p>
)
const App = () => {
  /* starting code taken from unicafe step 1 starting point suggestion */

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

    const setGoodValue = () =>{
    console.log('good value before', good)
    const updatedValue = good + 1
    setGood(updatedValue)
    console.log('good value after', updatedValue)
  }
    const setNeutralValue = () =>{
    console.log('neutral value before', neutral)
    const updatedValue = neutral + 1
    setNeutral(updatedValue)
    console.log('neutral value after', updatedValue)
    }
    const setBadValue = () =>{
    console.log('bad value before', bad)
    const updatedValue = bad + 1
    setBad(updatedValue)
    console.log('bad value after', updatedValue)
  }
  return (
    <div>
      <Title title='Give FeedBack'/>
      <Button onClick={setGoodValue} text = 'good'/> <Button onClick ={setNeutralValue} text = 'neutral'/> <Button onClick={setBadValue} text = 'bad'/>
      <Title title = 'Statistics'/>
      <Counter name= 'good' counter={good}/>
      <Counter name= 'bad' counter={bad}/>
      <Counter name = 'neutral' counter={neutral}/>
    </div>
  )
}

export default App