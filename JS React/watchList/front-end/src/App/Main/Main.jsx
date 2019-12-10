import React from 'react';
import './Main.css';

function Main({ children, title }) {
  return (
    <div className="Main">
      {children}
    </div>
  );
}

export default Main;