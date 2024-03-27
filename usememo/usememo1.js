import React, { useMemo, useState } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);

  // Simulated expensive calculation
  const calculateValue =() => {
    console.log('Calculating value...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  };

  const value = calculateValue();

  return (
    <div>
        <h2>need-optimisation</h2>
      <h3>Calculated Value: {value}</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default ExpensiveComponent;
