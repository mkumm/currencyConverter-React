import React from "react";
import CurrencyConverter from "./CurrencyConverter.js";
import ExchangeRate from "./ExchangeRate.js";
import "./App.css";

const API = "http://api.nbp.pl/api/exchangerates/tables/a/";

class App extends React.Component {
  state = {
    currencyList: []
  };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        const NBPcurrencyList = data[0].rates;

        this.setState(prevState => ({
          currencyList: prevState.currencyList.concat(NBPcurrencyList)
        }));
      });
  }

  render() {
    return (
      <div className="wrapper">
        <CurrencyConverter NBPcurrencyList={this.state.currencyList} />
        <ExchangeRate NBPcurrencyList={this.state.currencyList} />
      </div>
    );
  }
}
export default App;
