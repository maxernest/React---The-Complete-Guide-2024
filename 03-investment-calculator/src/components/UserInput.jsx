export default function UserInput({ userInput, handleInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label for="initial_investment">INITIAL INVESTMENT</label>
          <input
            type="number"
            id="initial_investment"
            value={userInput.initialInvestment.toString()}
            onChange={(e) => handleInput("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label for="anual_investment">ANUAL INVESTMENT</label>
          <input
            type="number"
            id="anual_investment"
            value={userInput.annualInvestment.toString()}
            onChange={(e) => handleInput("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label for="expected_return">EXPECTED RETURN</label>
          <input
            type="number"
            id="expected_return"
            value={userInput.expectedReturn.toString()}
            onChange={(e) => handleInput("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label for="duration">DURATION</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration.toString()}
            onChange={(e) => handleInput("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
