import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Promis from './components/test/Promis';
import FetchContainer from './components/test/FetchContainer';



function App() {

  return (
    <div>
      <NavBar />
      <h1> Proyecto E-Commerce </h1>
      <ItemCount initial={1} stock={7} />
      <ItemListContainer />
      </div>
  );
}

export default App;

/*     <FetchContainer />*/