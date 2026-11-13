import ShowName from "./ShowName"
const Searcher = (props) => {
/* The method i used here was too strict and only returned exact matches, so i googled for a solution.
   The gemini ai overview taught me how to use the include method to return anything remotely like what was 
   searched.
*/
//filters the received persons list using a search variable as an argument, if a match is found, then only it will be returned
const names = props.persons.filter((x)=> x.name.toLowerCase().includes(props.search))
console.log('logging the names variable used for searching: ',names)
const decide = names.length > 0 ? names : props.persons 
console.log('logging decide: ',decide)

return (
   <ul>
     <ShowName persons={decide} onClick = {props.onClick}/>
   </ul>
)
}

export default Searcher