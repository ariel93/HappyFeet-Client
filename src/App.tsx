import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './App.scss';

// Visit https://mui.com/material-ui/ for more matirial UI components 


function App() {
  const [counter, setCounter] = useState<number>(0)

  const handleIncrease = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <h1>Title</h1>
      <div>{counter}</div>
      <Button variant="outlined" color="primary" onClick={handleIncrease}>increase</Button>
    </div>
  );
}

export default App;