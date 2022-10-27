// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import { useCallback } from 'react';

// const buttons = [
//   { text: 'red' className: 'btn-red' },
//   { text: 'blue' className: 'btn-blue' },
//   { text: 'yellow' className: 'btn-yellow' },
// ]

function App() {
  // State hook

  const [backgroundColor, setBackgroundColor] = useState('bg-blue');
  // const [width, setWidth] = useState(500);
  // const [todos, setTodos] = useState([]);

  // let backgroundColor = 'bg-blue';

  function buttonClickHandler(event) {
    if (event.target.className.includes('btn-red')) {
      // console.log('red');
      // backgroundColor = 'bg-red';
      setBackgroundColor('bg-red');
      // setWidth('300px');
    }

    if (event.target.className.includes('btn-blue')) {
      // console.log('blue');
      // backgroundColor = 'bg-blue';
      setBackgroundColor('bg-blue');
      // setWidth('400px');
    }

    if (event.target.className.includes('btn-yellow')) {
      // console.log('yellow');
      // backgroundColor = 'bg-yellow';
      setBackgroundColor('bg-yellow');
      // setWidth('500px');
    }

  };

  return (
    <>
    {/* <main className={'backgroundColor'} style={{ width }} ></main> */}
      <main className={'backgroundColor'} >
        <section>
          <p>Color Picker</p>
          {/* Button( { text: 'red' } ) */}
          <Button text='red' className='btn-red' onClick={buttonClickHandler} />
          <Button text='blue' className='btn-blue' onClick={buttonClickHandler} />
          <Button text='yellow' className='btn-yellow' onClick={buttonClickHandler} />
        </section>
      </main>
    </>
  );
}

export default App;

function Button({ text, className, onClick }) {
  // const { text, prop2 } = props;

  return(
    // <button className={'btn ' + className} >
    <button className={`btn ${className}`} onClick={onClick} >
      {text}
    </button>
  )
}
