import React from 'react';
import '../styles/Button.css';

function Button({text,isBtnClicked,onClick}) {
  return (
    <button className={isBtnClicked ? "click-button" : "reset-button"}
     onClick={onClick}
    >
      {text}
       </button>
     )
}

export default Button;