import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
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