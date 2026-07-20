import { useState } from 'react'
const Button = (props) =>(
  <button onClick={props.onClick}>{props.text}</button>
)
const Title = (props) =>{
  return (
  <div>
  <h1>{props.title}</h1>
  </div>
  )
}
const StatisticLine = (props) => (
  <>{props.name} {props.counter}</>
  
)
  const Statistics = (props) => {
    if(props.totalVotes === 0){
      return (
        <div>no feedback given</div>
      )
    }
    return (
    <div>
      <table>
        <tbody>  
      <tr>
        <td><StatisticLine name= 'good' counter={props.good}/></td>
      </tr>
      <tr>
        <td><StatisticLine name= 'neutral' counter={props.neutral}/></td>
      </tr>
      <tr>
        <td><StatisticLine name= 'bad' counter={props.bad}/></td>
      </tr>
      <tr>
        <td>total votes: {props.totalVotes}<br/></td>
      </tr>
      <tr>
        <td><span>average:</span><AverageCalculator good = {props.good} neutral = {props.neutral} bad = {props.bad}/><br/></td>
      </tr>
      <tr>
        <td><PositivePercentageCalculator good = {props.good} neutral = {props.neutral} bad = {props.bad}/><span>%</span></td>
          </tr>
       </tbody>
      </table>
    </div>
    )
  }
const AverageCalculator = (props) => {
const good = props.good
const neutral = props.neutral
const bad = props.bad
const score = good - bad 
const totalVotes = good + bad + neutral
let average = score / totalVotes
if(totalVotes === 0){
  average = "please insert a number before getting the average score"
}
return average
}
const PositivePercentageCalculator = (props) => {
//couldn't get the percentage right here, googled answer, found it in a quora post, it was given by an assistant bot
const good = props.good
const neutral = props.neutral
const bad = props.bad
const totalVotes = good + bad + neutral
let positivePercentage = (good / totalVotes) * 100
if(totalVotes === 0){
  positivePercentage = "no data to score"
}
return positivePercentage
}
const App = () => {
  /* starting code taken from unicafe step 1 starting point suggestion */

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalVotes = good + neutral + bad
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
      <Statistics good = {good} neutral = {neutral} bad = {bad} totalVotes = {totalVotes}/>
    </div>
  )
}

export default App