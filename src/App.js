import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';


function App() {
    const saludo = 'Tienda de Bebidas'

  return (
    <div>
    <NavBar />

    <h1> Proyecto E-Commerce </h1>

    <ItemListContainer saludo={saludo} greeting='En proceso'/>
    </div>
  );
}

export default App;
