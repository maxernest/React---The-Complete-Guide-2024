import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleInput(field, input) {
    setUserInput((data) => {
      let newData = { ...data };
      newData[field] = parseInt(input);
      return newData;
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleInput={handleInput} />
      <Result result={calculateInvestmentResults({ ...userInput })} />
    </>
  );
}

export default App;
