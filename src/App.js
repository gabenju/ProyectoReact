import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Promis from './components/test/Promis';



function App() {
    const saludo = 'Tienda de Bebidas'
    let producto1 = { id: 100, name: 'zapato nike', price: 100 };
    const onAdd = (quantity) => {
      //console.log('Compraste $'(quantity)' unidades');
    }

  return (
   /* <div>
      <Promis />
    </div>
    */
    <div>
    <NavBar />
    <h1> Proyecto E-Commerce </h1>
    <ItemListContainer saludo={saludo} greeting='En proceso'/>
    <ItemCount initial={1} stock={7} onAdd={onAdd} />
    </div>
  );
}

export default App;
