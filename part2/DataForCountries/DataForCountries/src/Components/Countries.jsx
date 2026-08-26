import { useState, useEffect } from 'react'
import Communication from '../Service/BackendCommunication'
import CountrySearcher from './CountrySearcher'

const Countries = () => {

const [nameList, setNameList] = useState ([])

//effect hook logic, gets all countries
const hook = () => {
console.log('backend communications based fetching begins')
Communication
.getAll()
.then((response => { setNameList(nameList.concat(response))
console.log(`communication with backend successfull`)   
}))
.catch(error =>{
alert(`error when attempting connection, please reload and try again`)
})
}
useEffect(hook, [])

return (
     <>
    <table>
       <tbody>
         <tr>
           <td>
           <CountrySearcher country = {nameList}/>
           </td>
        </tr>
       </tbody>
    </table>
    </>
)

}

export default Countries