//structure and methods used are, as to be expected, mostly sourced from the course's content
/* starting code taken from anecdotes step 1 example */

import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Reader = (props) => <div>{props.selected}</div>

const Title = (props) =>{
  return (
  <div>
  <h1>{props.title}</h1>
  </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  /*
  googled 'how to fill a statehook array with 0' and gemini gave me the answer, it was taken from a 
  stack overflow post made by user Jabri Juhinin, titled 'What does Array(array.length).fill(0) mean?'
  */
  const Votes = Array(anecdotes.length).fill(0)

  const [votes, setVote] = useState(() => Array(anecdotes.length).fill(0))

  const handleVotes = () => {
   const updatedVotes = [...votes]
   updatedVotes[selected] +=1
   setVote(updatedVotes)
   console.log(updatedVotes)
   
  }
  /*
   made a mistake here, was using a for loop to try and get the biggest number of votes
   but when passing it to the anecdotes, i was passing it as an index, which obviously did not work
   eg if the first anecdote has 4 votes and gets returned, the code would 
   understand that i wanted it to display the anecdote in slot 4 of the votes array
   
   googled how to find the biggest item in an array and then get its index javascript
   and got the solution from gemini which sourced it from the math.max article from
   mozillas developer network
  */
  const displayMostVotes = () => {
    let value = 0;
    const popularAnecdote = Math.max(...votes)
    return <div>{anecdotes[votes.indexOf(popularAnecdote)]} has {popularAnecdote} votes</div>
  }
/* decided to fix my old for loop, succeeded, this is what it looks like now:

  const displayMostVotes = () => {
    let value = 0;
    const valueArray = [...votes]
    for(let i = 0; i <= valueArray.length; i++){
        if(value < valueArray[i]){
          value = valueArray[i]
        }
    }
    const popularAnecdote = value
    return <div>{anecdotes[valueArray.indexOf(popularAnecdote)]} has {popularAnecdote} votes</div>
  }
    
*/

  const [selected, setSelected] = useState(0)
  //attempting to learn PRNG from mozilla developer network
  //achieved sucess (after fixing syntax issues)

  //creates an int value according to the length of the anecdotes array
  //grabs that value and uses it in Math.random to get pseudo random number
 const DisplayRandomValue = () => {
  const GetRandomValue = Math.floor(Math.random() * anecdotes.length)
  console.log('here is the random value', GetRandomValue)
  setSelected(GetRandomValue)
 }

  return (
    <div>
      <Title title = "Anecdote of the Day"/>
      <Reader selected = {anecdotes[selected]}/>
      <Button onClick = {DisplayRandomValue} text = 'next anecdote'/>
      <Button onClick = {handleVotes} text = 'vote'/>
      <Title title = "Anecdote with most votes"/>
      <Reader selected = {displayMostVotes()}/>
      <br/>
      <Button onClick = {displayMostVotes} text = "view most voted anecdote"/>
    </div>
  )
}

export default App