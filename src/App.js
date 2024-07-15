
import './App.css';
import Buttom from './components/Button';
import logoyerytech from './image/mdark.png';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
const [counter, setCounter] = useState(0);

  const clickManager = () => {
    setCounter(counter + 1);  
  }

  const resetCounter = () => {
    setCounter(0);
  }

  return ( 
    <div className="App">
      <div className='logo-container'>
        <img className='logo-image' src={ logoyerytech} alt='logo' />
      </div>
      <dic className='principal-container'>
        <Counter counterNumber={counter} />

        <Buttom
          isBtnClicked={true}
          text='Click me'
          onClick={clickManager}
        />
        <Buttom
          isBtnClicked={false}
          text='Reset'
          onClick={resetCounter}
        />


      </dic>


    </div>
  );
}

export default App;
