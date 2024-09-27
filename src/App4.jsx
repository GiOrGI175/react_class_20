import React, { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

const App4 = () => {
  const [searchTherm, setSearchTherm] = useState();

  const debounceSearchTherm = useDebounce(searchTherm, 4000);

  useEffect(() => {
    if (debounceSearchTherm) {
      //   fetch('dddddddddddddddddddddddddddd');
      console.log('search for', searchTherm);
    }
  }, [debounceSearchTherm]);

  return (
    <div>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => setSearchTherm(e.target.value)}
      />
    </div>
  );
};

export default App4;
