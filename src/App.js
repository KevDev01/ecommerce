import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>

      <NavBar />
    
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Saludo"} />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/category" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={ <h3>Carrito</h3> } />

      </Routes>
      
    
  </BrowserRouter>
  );
}

export default App;

