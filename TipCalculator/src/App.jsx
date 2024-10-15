import "./App.css";

export default function App() {
  return (
    <>
      <TipCalculator />
    </>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage>How did you like the service? </SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="number" placeholder="Bill amount" />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <label> {children}</label>
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output() {
  return(
    <div>
      <h3> You pay X ($A + $B tip)</h3>
    </div>
  )
}

function Reset() {
  return(
    <div>
      <button>Reset</button>
    </div>
  )
}
