import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Hola"} />
    </div>
  );
}

export default App;

