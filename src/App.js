import logo from "./";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div className="App-logo">
        <Header />
        <div className="container">
          <button className="btn">Reservación</button>
          <button className="btn">Promociones</button>
          <button className="btn">Acerca de Travis</button>
        </div>
      </div>
    </div>
  );
}

export default App;
