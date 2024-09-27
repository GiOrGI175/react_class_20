import React, { useState } from 'react';
import { useWindowsSize } from './UseWindoeSize';

const App = () => {
  const { width, height } = useWindowsSize();
  return (
    <>
      <div>
        <p>width: {width}</p>
        <p>height: {height}</p>
      </div>
    </>
  );
};

export default App;
