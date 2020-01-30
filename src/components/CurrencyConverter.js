import React from "react";
import "./CurrencyConverter.css";

class CurrencyConverter extends React.Component {
  state = {
    worth: "",
    myCurrency: "1",
    WantedCurrency: "1",
    myCurrencyCode: "PL",
    WantedCurrencyCode: "PL",
    result: ""
  };
  handleChangeWorth = e => {
    this.setState({
      worth: e.target.value
    });
  };
  handleChangeCurrency = e => {
    const value = e.target.value;
    const name = e.target.name;
    const codeSection = e.target.dataset.code;
    const code = e.target.options[e.target.selectedIndex].dataset.code;

    this.setState({
      [name]: value,
      [codeSection]: code
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const convertedWorth = (
      this.state.worth *
      (this.state.myCurrency / this.state.WantedCurrency)
    ).toFixed(2);
    const result = `${this.state.worth} ${this.state.myCurrencyCode} = ${convertedWorth} ${this.state.WantedCurrencyCode} `;
    this.setState({
      result: result
    });
  };

  render() {
    console.log(this.props.NBPcurrencyList);
    const Plcurrency = [{ currency: "zloty polski", code: "PL", mid: 1 }];
    const NBPcurrencyList = this.props.NBPcurrencyList;

    const PLNBPcurrencyList = Plcurrency.concat(NBPcurrencyList);

    const options = PLNBPcurrencyList.map(option => (
      <option
        key={option.code}
        value={option.mid.toFixed(4)}
        data-code={option.code}
      >
        {option.code} {option.currency}
      </option>
    ));

    return (
      <div className="CurrencyConverterBox">
        <h1>PRZELICZNIK WALUT</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="worth">
            <p>Wartość:</p>
            <br />
            <input
              id="worth"
              name="worth"
              type="number"
              value={this.state.worth}
              onChange={this.handleChangeWorth}
            />
          </label>
          <label htmlFor="myCurrency">
            <p>Mam:</p>
            <br />
            <select
              id="myCurrency"
              name="myCurrency"
              data-code="myCurrencyCode"
              value={this.state.myCurrency}
              onChange={this.handleChangeCurrency}
            >
              {options}
            </select>
          </label>
          <label htmlFor="WantedCurrency">
            <p>Chcę otrzymać:</p>
            <br />
            <select
              id="WantedCurrency"
              name="WantedCurrency"
              data-code="WantedCurrencyCode"
              value={this.state.WantedCurrency}
              onChange={this.handleChangeCurrency}
            >
              {options}
            </select>
          </label>
          <button>PRZELICZ</button>
        </form>
        <div className="result">
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}
export default CurrencyConverter;
