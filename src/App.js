import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
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