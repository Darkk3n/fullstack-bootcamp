import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Counter = (props) => {
  return <h1>{props.num}</h1>;
}

const App = (props) => {
  const [counter, setCounter] = useState(5);

  const handleClick = (increase) => {
    if (increase)
      setCounter(counter + 1);
    else
      setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  }

  const isEven = counter % 2 === 0;

  return (
    <div>
      <p>El valor del contador es:</p>
      <Counter num={counter} />
      <p>{isEven ? 'Par' : 'Impar'}</p>
      <button onClick={() => handleClick(true)}>
        Incrementar numero
      </button>
      <button onClick={() => handleClick(false)}>
        Decrementar numero
      </button>
      <button onClick={handleReset}>
        Regresar a 0
      </button>
    </div >
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
