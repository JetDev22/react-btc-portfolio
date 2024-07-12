// calculations for portfolio getting props from BTC

function Calc(props){
  // imported btc price and remove , char
  let btcPriceString = props.price;
  let btcPrice = btcPriceString.toString().replace(/,/g, '');
  
  
  // display data
  if(localStorage.getItem("coins") == null && localStorage.getItem("avgPrice") == null){
    console.log("no portfolio found");
    return(
      <div>
        <p className="noPortfolio">No Portfolio Data found<br />Please enter your data below</p>
      </div>
    )
  } else {
    console.log("portfolio found");
    let coins = Number(localStorage.getItem("coins"));
    let avgPrice = Number(localStorage.getItem("avgPrice"));
    let dca = Number(localStorage.getItem("dca"));

    // portfolio analysis
    let roi = (((btcPrice*coins)-(avgPrice*coins))/(avgPrice*coins))*100;
    roi = roi.toFixed(2);

    let dcaCoins = dca/btcPrice;
    dcaCoins = dcaCoins.toFixed(5);

    let portfolioValue = coins*btcPrice
    portfolioValue = portfolioValue.toFixed(2);

    let portfolioCost = coins*avgPrice;
    portfolioCost = portfolioCost.toFixed(2);

    let portfolioReturn = portfolioValue - portfolioCost;
    portfolioReturn = portfolioReturn.toFixed(2);

    return(
      <div>
        <h1>Portfolio Analysis</h1>
        <table>
          <tbody>
            <tr>
              <td style={{textAlign: "left"}}>BTC in portfolio</td>
              <td style={{textAlign: "right"}}>{coins} &#8383;</td>
            </tr>
            <tr>
              <td style={{textAlign: "left"}}>Portfolio Value</td>
              <td style={{textAlign: "right", color: portfolioValue < portfolioCost ? "red" : "green"}}>{portfolioValue} €</td>
            </tr>
            <tr>
              <td style={{textAlign: "left"}}>Portfolio Cost</td>
              <td style={{textAlign: "right"}}>{portfolioCost} €</td>
            </tr>
            <tr>
              <td style={{textAlign: "left"}}>Average Cost</td>
              <td style={{textAlign: "right"}}>{avgPrice} €</td>
            </tr>
            <tr>
              <td style={{textAlign: "left"}}>DCA / Month</td>
              <td style={{textAlign: "right"}}>{dca} €</td>
            </tr>
            <tr>
              <td style={{textAlign: "left"}}>DCA in &#8383;</td>
              <td style={{textAlign: "right"}}>{dcaCoins} &#8383;</td>
            </tr>
            <tr>
              <td style={{textAlign: "left"}}>Return of Investment</td>
              <td style={{textAlign: "right", color: roi >= 0 ? "green" : "red"}}>{roi} %</td>
            </tr>
            <tr>
              <td style={{textAlign: "left"}}>Return</td>
              <td style={{textAlign: "right", color: portfolioReturn < 0 ? "red" : "green"}}>{portfolioReturn} €</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  };
};

export default Calc;
