import React from 'react';
import ReactDOM from 'react-dom/client';

const tick = () => {
  const elem = <div>
  <h1>hellllllo</h1>
  <h2>
    it is {new Date().toLocaleTimeString()}
  </h2>
  </div>
  root.render(elem);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  tick()
}, 1000);
