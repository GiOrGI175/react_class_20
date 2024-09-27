import React from 'react';
import { useToggle } from './useToggle';

const App2 = () => {
  const [isToggle, toggle] = useToggle();

  return (
    <div>
      <p>{isToggle ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>toogle</button>
    </div>
  );
};

export default App2;
