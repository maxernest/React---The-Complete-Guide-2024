import { formatter } from "../util/investment";

export default function Result({ result }) {
  const years = [...Array(10).keys()].map((i) => i + 1);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((data) => {
          return (
            <tr>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(data.totalInterest)}</td>
              <td>{formatter.format(data.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
