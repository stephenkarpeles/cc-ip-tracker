import React, { useState } from 'react'
import './App.scss';
import Header from './components/header'
import Map from './components/map'
import Info from './components/info'

function App() {
  const [query, setQuery] = useState('')
  const data = Info(query)

  return (
    <div className="App">
      <Header data={data} setQuery={setQuery}/>
      <Map data={data}/>
    </div>
  );
}

export default App;
