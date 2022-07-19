import { EthProvider } from "./contexts/EthContext";
import Nav from "./components/Nav";
import NoticeWrongNetwork from "./components/NoticeWrongNetwork";
import "./App.css";

function App() {


  return (
    <EthProvider>
      <div id="App" >
      <header>
        <Nav />
      </header>
        <div className="container">
          <NoticeWrongNetwork  />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
