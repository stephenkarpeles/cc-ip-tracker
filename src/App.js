import React, { useState } from 'react'
import './App.scss';
import Header from './components/header'
import MapBlock from './components/map-block'
import Info from './components/info'

function App() {
  const [ipLookup, setIpLookup] = useState('')
  const data = Info(ipLookup)

  return (
    <div className="App">
      <Header data={data} setIpLookup={setIpLookup}/>
      <MapBlock data={data} setIpLookup={setIpLookup}/>
    </div>
  );
}

export default App;
