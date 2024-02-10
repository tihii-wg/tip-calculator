import "./App.css";

function App() {
  return (
    <div className="App">
      <BillComponent />
      <SelectPercentage>
        <span>How did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage>
        <span>How did you friends like the service?</span>
      </SelectPercentage>
      <OutPutComponent />
      <ResetComponent>
        <span>Reset</span>
      </ResetComponent>
    </div>
  );
}

export default App;

function BillComponent() {
  return (
    <div>
      <span>How much was the bill?</span>
      <input type="text" />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      {children}
      <select>
        <option>Dissatisfied (0%)</option>
        <option>It was ok (5%)</option>
        <option>It was good (10%) </option>
        <option>Absolutely amazing (20%) </option>
      </select>
    </div>
  );
}

function OutPutComponent() {
  return (
    <div>
      <h3>You pay 92$ (80$ + 12$ tip)</h3>
    </div>
  );
}

function ResetComponent({ children }) {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}
