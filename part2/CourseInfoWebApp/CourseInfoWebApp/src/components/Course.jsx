//structure and methods used are, as to be expected, mostly sourced from the course's content
const Header = (props) => {
const name = props.courses.name
console.log(props.courses)
console.log(props.courses.name)
return (
  <div>
    <h1>
      {name} course
    </h1>
  </div>
)
}

const Part = (props) => {
const {list} = props
  return(
    <div>
      <h3>Parts and Exercises:</h3>
<ul>
  {list}
</ul>
    </div>
  )
}
/*struggled to properly pass data here, googled solution 
(author of the solution: CodeLucky "React Props Explained: Master Data Passing in 8 Minutes!" video on youtube) 

learned i should use props.parts[0].data instead of just props[0].data
 */
const Content = (props) => {
  console.log(props)
  const list = props.parts.map((x) => <li key = {x.id}> {x.name}, Exercises: {x.exercises}</li>)
  console.log(props.parts)
  return(
    <div>
    <Part list = {list}/>
    </div>
  )
}

const Total = (props) => props.parts.reduce((sum, x) => sum + x.exercises ,0)

const Course = (props) => {
  const {courses} = props
  console.log(courses)
  return(
    <>
    <Header courses = {courses}/>
    <Content parts = {courses.parts}/>
    <p>Total Exercises:</p>
    <Total parts = {courses.parts}/>
    </>
  )
}

export default Course