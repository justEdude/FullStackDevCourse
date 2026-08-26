import axios from "axios";

const commonURL = 'http://localhost:3001/persons'

//gets saved users
const getAll = () =>{
    const request = axios.get(commonURL)
    return request.then(response => response.data)
}
//adds a user
const create = newObject => {
    const request = axios.post(commonURL, newObject)
    return request.then(response => response.data)
}
//updates a saved user
const update = (id, newObject) => {
  const request = axios.put(`${commonURL}/${id}`, newObject)
  return request.then(response => response.data)
}
//deletes a user
const dataRemover = id => {
    const request = axios.delete(`${commonURL}/${id}`)
    return request.then(response => response.data)
}

export default {getAll, create, dataRemover, update}