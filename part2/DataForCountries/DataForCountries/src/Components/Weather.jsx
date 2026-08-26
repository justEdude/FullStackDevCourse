
import { useState } from 'react'
import Communication from '../Service/BackendCommunication'

const Weather = ({latitude, longitude}) => {
    const [forecast, setForecast] = useState([])
    const [alreadyRendered, setAlreadyRendered] = useState(false)
   // if valid coordinates have not been received, logs a message and returns empty fragments
   // otherwise it will call the weather api, get the chosen country's capital's weather.
   // and (using the response) set it to a variable, that will soon be used to set a state hook that will then be rendered
    if(!latitude, !longitude){
        console.log("awaiting valid coordinates")
        
        //here to prevent infinite renders
        if(alreadyRendered === true){
            setAlreadyRendered(false)
        }

        return (
            <>
            </>
        )
    }else{
    if(alreadyRendered !== true){
    console.log(latitude, longitude)
    Communication
    .getWeather({latitude, longitude})
    .then(response=> {
       const weatherReceived = <>
                       <p>today's weather forecast is {response.data[0].weather[0].description}</p>
                       <img src={`https://openweathermap.org/payload/api/media/file/${response.data[0].weather[0].icon}.png`}/>
                       <p>The temperature is {response.data[0].temp}</p>
                       <p>The feels-like temperature is {response.data[0].feels_like}</p>
                       <p>The Ultraviolet Index is {response.data[0].uvi}</p>
                       </>
    console.log(weatherReceived)
    setForecast(weatherReceived)
    setAlreadyRendered(true)
    })
    }
    return (
        <>
        {forecast}
        </>
    )
}
}

export default Weather