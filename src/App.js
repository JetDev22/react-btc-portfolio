import "./App.css";
import Logo from "./btcLogo.png";
import BTC from "./BTC";
import Portfolio from "./Portfolio";
import Disclaimer from "./Disclaimer";


function App() {
  return (
    <div>
      <img className="btcLogo" src={Logo} alt="Bitcoin Logo" /> 
      <BTC />
      <Portfolio />
      <Disclaimer />
    </div>
  );
}

export default App;
