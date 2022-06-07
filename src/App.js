import "./App.css";
import NavBar from "./Componentes/NavBar";
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import MercadoLibre from "./Componentes/MercadoLibre/MercadoLibre";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
