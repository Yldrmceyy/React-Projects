import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <TipCalculator />
    </>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage>How did you like the service? </SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
      <Output bill={bill} />
      <Reset />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill amount"
        value={bill}
        onChange={(e) => onSetBill((e.target.value))}
      />
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

function Output({bill}) {
  return (
    <div>
      <h3> You pay X (${bill} + $B tip)</h3>
    </div>
  );
}

function Reset() {
  return (
    <div>
      <button>Reset</button>
    </div>
  );
}
