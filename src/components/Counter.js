import React from 'react';
import '../styles/Counter.css'
function Counter({counterNumber}) {
  return (
    <div className='counter'>
     {counterNumber}
    </div>
  );
} 

export default Counter;
