import React, { useState, useMemo  } from 'react';

import '../index.css';
// import { useLocation } from 'react-router-dom';


function fibonacci() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [length, set_length] = useState(3);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  

  return (
    <>

     <h2 className='header'>Fibonacci Series Finder</h2>
      <h4 className='heading'>Enter the Number </h4>


      <input className='input'
        value={length}
        onChange={(e) => set_length(Number(e.target.value))}
      />
      
      <FibDisplay  length={length} />
    </>
  );
}

function FibDisplay({ length}) {
    
  const numbers  = useMemo(() => {
    console.log('Calculating numbers...');
    
    const result = [1, 1];
    // eslint-disable-next-line no-undef
    for (let i = 2; i < length; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result;
  }, [length,]);

  return (
   

    <h4 className='fib'>
        {length} numbers of the fibonacci sequence: 
       
       <br/>
        {numbers.join(', ')}
    </h4>
   
  );
}

export default fibonacci;
