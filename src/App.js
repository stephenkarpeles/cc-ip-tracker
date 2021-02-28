import React, { useState } from 'react'
import './App.scss';
import Header from './components/header'
import MapBlock from './components/map-block'
import Info from './components/info'

function App() {
  const [query, setQuery] = useState('')
  const data = Info(query)

  return (
    <div className="App">
      <Header data={data} setQuery={setQuery}/>
      <MapBlock data={data} setQuery={setQuery}/>
    </div>
  );
}

export default App;
