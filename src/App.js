import "./App.css";
import NavBar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom' ;
import { createContext } from "react";
import { CartProvider } from "./Componentes/ContextoTarjeta/ContextoTarjeta" ;

export const Context = createContext()


function App() { 
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
