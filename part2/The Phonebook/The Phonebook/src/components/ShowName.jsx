import phonebookService from '../service/phonebookBackend'
const ShowName = (props) => {
   let people = props.persons
//renders each person from the received person props as a line in a list, alongside a button to delete
    return (
        people.map((x)=> <li key = {x.name}>{x.name} {x.number} <button onClick={()=>props.onClick(x.id, x.name)}>delete</button> </li>)
           )
}
export default ShowName