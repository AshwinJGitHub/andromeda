import logo from './logo.svg';
import './App.css';
import HeaderComp from './components/headerComp'
import FooterComp from "./components/footerComp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComp />
      </header>
        <footer>
            <FooterComp />
        </footer>
    </div>
  );
}

export default App;
