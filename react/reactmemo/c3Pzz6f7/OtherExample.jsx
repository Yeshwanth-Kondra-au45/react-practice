import React, { useState, useMemo } from "react";

function MyComponent() {
  const [value, setValue] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < value; i++) {
      result += i;
    }
    return result;
  }, [value]);

  return (
    <div>
      <p>Value: {value}</p>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
