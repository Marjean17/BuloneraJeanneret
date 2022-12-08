import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Fondo from "./img/fotoFondo.jpg";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "grey", minHeight: "100vh" }}
    >
      <NavBar />
      <ItemListContainer>
        <body>
          <header>
            <span>Bulonera Jeanneret</span>
          </header>
          <main>
            <span>Desde hace mas 50 años proveyendo a la industria</span>
            <span>con la mayor variedad y el mejor precio</span>
            <img src={Fondo} alt="imagen de bulones"></img>
            <span>Si existe y no lo tenemos lo conseguimos. Consúltenos</span>
          </main>
        <Footer/>
        </body>
      </ItemListContainer>
    </div>
  );
}

export default App;
