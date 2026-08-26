//structure and methods used are, as to be expected, mostly sourced from the course's content
import { useState, useEffect } from 'react'
import Communication from '../Service/BackendCommunication'
import Button from './Button'
/* so the import below for some reason sometimes returns an error complaining about the casing.
my guess is because i had a file named 'weather' that i deleted before creating the current 'Weather' file
but vs code 'remembers' the dead files name for some reason, i guess? anyways i googled the solution 
and found the answers on a stack overflow post, a combination of renaming the file to something else before giving it
its proper name back closing the editors and closing vs code before reopening both of  them did seem to work 
(solutions by users: Paul Razvan Berg, and nima)*/
import Weather from './Weather'

const CountrySearcher = ({country}) => {
const [searchCountry, setSearchCountry] = useState('')
const [matchingResearch, setMatchingResearch] = useState([])
const [weatherCoordinateTaker, setWeatherCoordinateTaker] = useState([])

//value control
const searchHandler = (event) =>{
console.log(event.target.value)
setSearchCountry(event.target.value)

//get specific country logic
const displayCountry = (chosenCountry) => {
console.log("initializing")
Communication
.getCountry(chosenCountry)
.then(response =>{
   //googled how to read through all the values of an object, since here the keys would be unpredictable
   //and the gemini told me about object.values, sourcing it from mozzilas's web docs
const languageTaker = Object.values(response.languages)
const languages = languageTaker.map((x)=> <li key = {x}>{x}</li>)
//set weather coordinates (needed for weather api)
setWeatherCoordinateTaker(Object.values(response.capitalInfo.latlng))
//creates the country render that will be given to the matching research state hook variable
const dataCountries = 
                    <div>
                    <h1>{response.name.common}</h1>
                    <p>
                    Capital: {response.capital}
                    <br/>
                    Area: {response.area}
                    </p>
                    <h1>Languages</h1>
                    <ul>
                    {languages}
                    </ul>
                    <img src={response.flags.png}/>
                    <h1>Weather in {response.capital}</h1>
                   </div>                                  
setMatchingResearch(dataCountries)
console.log(searchCountry)
})
}

//dynamic country name filter logic
const filterLogic = country.filter((x) => x.name.common.toLowerCase().includes(searchCountry.toLowerCase()))
if(!country){
console.log("awaiting")
}else if(filterLogic.length > 9){
setMatchingResearch("too many matches, please, be more specific")
setWeatherCoordinateTaker([])
}else if(filterLogic.length > 1){
setMatchingResearch(filterLogic.map((x)=><div key = {x.name.official}>{x.name.common}<br/><Button onClick={()=> displayCountry(x.name.common)}/></div>))
setWeatherCoordinateTaker([])
}else if(filterLogic.length === 1 && searchCountry !== ""){
displayCountry(filterLogic[0].name.common)
}
}
//renders the weather component and the state variable that holds the country render
return (
   <>
    find countries: <input value ={searchCountry} onChange={searchHandler}></input><br/>
    {matchingResearch}
    <Weather latitude = {weatherCoordinateTaker[0]} longitude = {weatherCoordinateTaker[1]}/>
   </>
)
}

export default CountrySearcher