import {BrowserRouter, Switch, Route} from "react-router-dom";
import {NavBar} from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
