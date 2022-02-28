import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const WarningNotUsed = () => {
   return <h1>Counter not used yet.</h1>
}

const ListOfClicks = ({ clicks }) => {
   debugger;
   return <p>{clicks.join(', ')}</p>
}

const INITIAL_COUNTER_STATE = {
   left: 0,
   right: 0,
   message: 'Message in the State'
};

const App = (props) => {

   const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);
   const [clicks, setClicks] = useState([]);

   const handleClickLeft = () => {
      setCounters({
         ...counters,
         left: counters.left + 1,
      })
      setClicks(prev => [...prev, 'L']);

   }

   const handleClickRight = () => {
      setCounters({
         ...counters,
         right: counters.right + 1,
      })
      setClicks(prev => [...prev, 'R']);
   }

   const handleReset = () => {
      setCounters(INITIAL_COUNTER_STATE);
      setClicks([]);
   }

   return (
      <div>
         {counters.left}
         <button onClick={handleClickLeft}>Left</button>
         <button onClick={handleClickRight}>Right</button>
         {counters.right}
         <p>
            <button onClick={handleReset}>Reset</button>
         </p>
         <p>Total Clicks: {clicks.length}</p>
         {clicks.length === 0 ? <WarningNotUsed /> : <ListOfClicks clicks={clicks} />}
      </div>
   )
}

ReactDOM.render(
   <App />,
   document.getElementById('root')
);