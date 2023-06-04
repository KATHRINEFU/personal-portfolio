import './App.css';
import {NavBar} from './components/Navigation'
import {Banner} from './components/Banner'
import {Work} from './components/Work'
import { Life } from './components/Life';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Work/>
      <Life/>
    </div>
  );
}

export default App;
