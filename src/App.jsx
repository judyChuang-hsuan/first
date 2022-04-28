import { useState } from 'react'
import './App.css'
import {people} from "./data/data";
import People from './People';
function App() {
  

 
  return (
  <table>
    <tbody>
    <tr>
      <th>員工編號</th>
      <th>員工姓名</th>
      <th>體溫</th>
      <th>是否簽到</th>
    </tr>
    </tbody>
    <tbody>
    {people.map((person)=>{
       return <People key={person.id}{...person}/>})}
    </tbody>
  </table>)
}

export default App
