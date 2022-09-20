import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Cart from "./components/Cart/Cart";
import {CartProvider} from "./context/CartContext";
import Test from "./test/Test";

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/test' element={<Test />}/>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/description/:idproduct" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;




/*   


          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/description/:idproduct" element={<ItemDetailContainer />} />

  */