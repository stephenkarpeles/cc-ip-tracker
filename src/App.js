import './App.scss';
import Header from './components/header'
import Map from './components/map'
import Info from './components/info'

function App() {
  const [ipLookup, setIpLookup] = useState('')

  const data = Info(ipLookup)

  return (
    <div className="App">
      <Header data={data} setIpLookup={setIpLookup}/>
      <Map data={data}/>
    </div>
  );
}

export default App;
