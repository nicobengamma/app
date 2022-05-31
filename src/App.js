import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      ></link>
      <NavBar />
      <ItemListContainer titulo="Comunity" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous"
        ></script>
      </header>
    </div>
  );
}

export default App;
