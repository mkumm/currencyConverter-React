import React from "react";
import "./ExchangeRate.css";
import CurrentDate from "./CurrentDate.js";

const ExchangeRate = props => {
  const tBody = props.NBPcurrencyList.map((item, index) => (
    <tr>
      <td key={`${item.code}${index}`}>{item.code}</td>
      <td key={`${item.currency}${index}`}>{item.currency}</td>
      <td key={`${item.mid}${index}`}>{item.mid.toFixed(4)}</td>
    </tr>
  ));
  console.log(tBody);
  return (
    <div className="ExchangeRate">
      <h1>
        KURS WALUT{" "}
        <span className="CurrentDate">
          <CurrentDate />
        </span>
      </h1>
      <table>
        <thead>
          <tr>
            <th>Kod</th>
            <th>Nazwa</th>
            <th>Średni kurs</th>
          </tr>
        </thead>
        <tbody>{tBody}</tbody>
      </table>
    </div>
  );
};

export default ExchangeRate;
