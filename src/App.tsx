import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import './App.scss';
import axios from 'axios';
import { IShoe } from './interfaces/shoe';

// Visit https://mui.com/material-ui/ for more matirial UI components 

function App() {
  const [counter, setCounter] = useState<number>(5)
  const [shoes, setShoes] = useState<IShoe[]>([])

  useEffect(()=>{
    axios.get("http://localhost:8080/shoes").then(response => setShoes(response.data) );
  },[] );

  const handleIncrease = () => {
    setCounter(counter1=> counter1 + 5);
  }

  return (
    <div className="App">

    {shoes && 
      shoes.map((shoe,i)=>{
          return <h1>{`${shoe.brand} ${shoe.name} ${shoe.price}`}</h1>
      })
    }

      
      <div>{counter}</div>
      <Button variant="outlined" color="primary" onClick={handleIncrease}>increase</Button>
    </div>
  );

 
}

export default App;