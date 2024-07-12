import axios from "axios";
import {useState} from "react";
import ROI from "./ROI";

// request BTC price from coindesk
function BTC(){
  const [price, setPrice] = useState(0);
  const utc = new Date().toUTCString();
  axios.get('https://api.coindesk.com/v1/bpi/currentprice/eur.json')
  .then ((response) => { 
      setPrice(response.data.bpi.EUR.rate);
    })
  return (
    <>
      <div className="currentPrice">
        <p className="btcPrice">{price} €</p>
        <p className="timeStamp">{utc}</p>
      </div>
      <div className="ROI">
        <ROI price={price} />
      </div>
    </>
  );
};

export default BTC;
