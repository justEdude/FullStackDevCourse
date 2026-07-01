
const Header = (props) => {
console.log(props.course.name)
return (
  <div>
    <p>
      Currently we are on 
    </p>
    <h1>
      {props.course.name} course
    </h1>
  </div>
)
}

const Part = (props) => {
  console.log(props.name)
  console.log(props.exercises)
  return(
    <div>
      <p>part = {props.name}</p>
      <p>exercises = {props.exercises}</p>
    </div>
  )
}
/*struggled to properly pass data here, googled solution 
(author of the solution: CodeLucky "React Props Explained: Master Data Passing in 8 Minutes!" video on youtube) 

learned i should use props.parts[0].data instead of just props[0].data
since the array acts like another field belonging to the bigger props object
and thus it needs to be personally called in the code */
const Content = (props) => {
  return(
    <div>
    <Part name = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
    <Part name = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
    <Part name = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
console.log(props)

return(
  <>
    <p>
      Total of exercises = {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  </>
)
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]
  }
  return (
    <>
      <Header course = {course}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </>
  )
}

export default App
