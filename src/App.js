import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

const MIN_COUNT_VALUE = 0;

function App() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const onDecrement = () => {
    setCount((prev) => (prev > MIN_COUNT_VALUE ? prev - 1 : prev));
  };

  const onReset = () => {
    setCount(MIN_COUNT_VALUE);
  };

  return (
    <div className="App">
      <div className="count">{count}</div>
      <div className="actions">
        <div>
          <Button label="Increment" onClick={onIncrement} />
          <Button
            label="Decrement"
            onClick={onDecrement}
            disabled={count === MIN_COUNT_VALUE}
          />
        </div>
        <Button label="Reset" onClick={onReset} />
      </div>
    </div>
  );
}

export default App;
