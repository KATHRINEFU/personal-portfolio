import './App.css';
import {NavBar} from './components/Navigation'
import {Banner} from './components/Banner'
import {Work} from './components/Work'
import { Life } from './components/Life';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Work/>
      <Life/>
      <Contact/>
    </div>
  );
}

export default App;
