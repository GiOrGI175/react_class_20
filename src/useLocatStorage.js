import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storeValue, setStoreValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    setStoreValue(value);

    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const cleartem = () => {
    window.localStorage.removeItem(key);
    setStoreValue('initialValue');
  };

  return [setValue, cleartem, storeValue];
}
