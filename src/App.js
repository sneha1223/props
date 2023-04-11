import React from 'react';
import Page from './component/Page';
import './App.css';

function App() {
  const data = 'Sneha';
  return (
    <div className="App">
    <h1>This is my friend {data} </h1>
    <Page data={data} />
    </div>
  )
}

export default App;
