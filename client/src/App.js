import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Staff from './components/Staff';
import Admin from './components/Admin';
import {Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
    <Route path='/' element={
      <div className="App">
      <NavBar/>
      <Home/>
     </div>
    }/>
    <Route path='/staff' element={
      <div className="App">
      <NavBar/>
      <Staff/>
     </div>
    }/>
    <Route path='/admin' element={
      <div className="App">
      <NavBar/>
      <Admin/>
     </div>
    }/>
    </Routes>
  );
}

export default App;
