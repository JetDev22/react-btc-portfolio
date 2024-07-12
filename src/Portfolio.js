// Enter or Update portfolio data and store in local storage
import {useRef} from 'react';


function Portfolio(){
  function updatePortfolio(){ 
    localStorage.setItem("coins", coinInput.current.value);
    localStorage.setItem("avgPrice", avgPrice.current.value);
    localStorage.setItem("dca", dca.current.value);
  };

  function resetPortfolio(){
    console.log("Portfolio Reset");
    localStorage.removeItem("coins");
    localStorage.removeItem("avgPrice");
    localStorage.removeItem("dca");
    // reload page
    window.location.reload();
  };

  const coinInput = useRef();
  const avgPrice = useRef();
  const dca = useRef();

  return(
    <div className="portfolioInput">
      <form>
        <input ref={coinInput} placeholder="coins held" type="number" step="0.000001" required /><br />
        <input ref={avgPrice} placeholder="average price" type="number" step="0.001" required /><br />
        <input ref={dca} placeholder="montly DCA amount" type="number" /><br />
        <button onClick={updatePortfolio} type="submit">Update Portfolio</button><br />
        <button onClick={resetPortfolio} type='reset'>Reset Portfolio</button>
      </form>
    </div>
  )
};

export default Portfolio;
