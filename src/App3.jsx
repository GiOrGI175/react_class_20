import React from 'react';
import { useLocalStorage } from './useLocatStorage';

const App3 = () => {
  const [setValue, cleartem, storeValue] = useLocalStorage('name', 'giorgi');

  const [setDarMode, deleteDarkMode, DarkMode] = useLocalStorage(
    'theeme',
    'Dark'
  );

  console.log(DarkMode);

  return (
    <div>
      <label>Enter Your Name</label>
      <input
        value={storeValue}
        type='text'
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Stored Name: {storeValue}</p>

      <button onClick={cleartem}>Clear Local Storage</button>
    </div>
  );
};

export default App3;
