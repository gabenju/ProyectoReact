import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {

  return (
  <>
  <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/product/:idproduct" element={<ItemDetailContainer />} />
        </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;



/*      
      <ItemListContainer />

<h1> Proyecto E-Commerce </h1>
      <ItemCount initial={1} stock={7} />
  <FetchContainer />*/

  /*    */