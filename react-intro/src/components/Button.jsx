import React from 'react';

// export default function Button({ text, className, onClick }) {
export function Button({ text, className, onClick }) {
  // const { text, prop2 } = props;
  return (
    // <button className={'btn ' + className}>
    <button className={`btn ${className}`} 
    // function wrapper
    onClick={() => {
      onClick(className);
    }}>
      {text}
    </button>
  );
}