import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import FormikFormulario from "./components/Formik/FormikFormulario";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Saludo"} />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/category" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Formik" element={<FormikFormulario />} />

        </Routes>

      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

