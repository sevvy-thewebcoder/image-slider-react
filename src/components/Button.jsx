import '../styles/Button.css';
import React from 'react';

function Button({ disabled, onClick, content }) {
  return (
    <button disabled={disabled} onClick={onClick} className="button">
      {content}
    </button>
  );
}

export { Button };
