import React, { useState, useMemo } from 'react';

function ExpensiveComponentSol() {
  const [count, setCount] = useState(0);

  // Memoize the calculation using useMemo
  const value = useMemo(() => {
    console.log('Calculating value...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <div>
    <h2>optimised</h2>
      <h3>Calculated Value: {value}</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default ExpensiveComponentSol;
