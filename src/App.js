import React, { useState, useEffect } from 'react';
import './App.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(null); 

  function toogleTimer() {
    if (running) { 
      clearInterval(running);
      setRunning(false);
    } else { 
      const start = new Date(new Date() - time); 
      setRunning(setInterval(() => {
        setTime((new Date() - start))
      }, 10));
    }
  }

  useEffect(toogleTimer, []); 

  return (
    <div className='Stopwatch'>

        <div className='container'>
            <div className="container_content ">
             <h1>Vipul's Stopwatch</h1>
              <h2>{(time / 1000).toFixed(2)}s</h2>
              <button className="hover:bg-sky-700" onClick={toogleTimer}>{running ? 'Stop' : (time ? 'Resume' : 'Start')}</button>
              {!!time && <button className="hover:bg-sky-700" onClick={() => setTime(0)}>Reset</button>}
              </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">

      <Stopwatch />
    </div>
  );
}

export default App;
