import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
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
   
    </Routes>
  );
}

export default App;
