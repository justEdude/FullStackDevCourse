import Course from './components/Course'

const Deconstructor = (props) => {
  return (
    props.courses.map((x)=> <Course key = {x.id} courses = {x}/> )
  )
}

const App = () => {
  const courses = [
    {
    id:1,
    name: 'Half Stack application development',
    parts: [
  {
    id:1,
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    id:2,
    name: 'Using props to pass data',
    exercises: 7
  },

  {
    id:4,
    name: 'Testing part addition',
    exercises: 8
  },
  {
    id: 5,
    name: 'Testing part addition one more time',
    exercises: 11
  }
]
  }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'testing adding acourses.js',
      id:3,
      parts:[
        {
          name: 'test1',
          exercises: 1,
          id:1
        },
        {
          name: 'testing additions',
          exercises: 4,
          id:2
        }
      ]
    }
  ]
  return (
    <>
       <Deconstructor courses = {courses}/>
    </>
  )
}

export default App
