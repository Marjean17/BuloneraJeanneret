import './App.css';
import Button from "./components/Button/Button";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App"
    style={{backgroundColor: "grey", minHeight: "100vh"}}
    >
      <Button/>
      <Nav/>
    </div>
  );
}

export default App;
