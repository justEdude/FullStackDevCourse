import axios from "axios";
const api_key = import.meta.env.VITE_WEATHER_ENV_VAR
console.log(api_key)
const commonURL = "https://studies.cs.helsinki.fi/restcountries/api"

//backend communication
const getAll = () =>{
    const request = axios.get(`${commonURL}/all`)
    return request.then(response => response.data)
}

const getCountry = country =>{
    const request = axios.get(`${commonURL}/name/${country}`)
    return request.then(response => response.data)
}

const getWeather = ({latitude, longitude}) => {
    const request = axios.get(`https://api.openweathermap.org/data/4.0/onecall/current?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`)
    return request.then(response => response.data)
}

export default {getAll, getCountry, getWeather}