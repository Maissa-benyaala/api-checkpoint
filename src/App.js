import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Person from './components/Person';

function App() {
  const [persons,setPersons]=useState([])


useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=>setPersons(res.data))
      
},[])
  return (
    <div className="App">
      {persons.map((user)=>(<Person user={user}/>))}
    </div>
  );
}

export default App;
