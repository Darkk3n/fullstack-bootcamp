import './App.css';
import Desc from './Description.js';
import Msg from './Message.js';


const App = () => {
  return (
    <div className="App">
      <Msg color='red' msg='Estamos trabajando' />
      <Msg color='green' msg='En un curso' />
      <Msg color='gold' msg='De react' />
      <Desc />
    </div>
  );
}

export default App;
