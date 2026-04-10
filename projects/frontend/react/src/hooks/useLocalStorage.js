import { useEffect, useState } from 'react';

export default function useLocalStorage(key, value) {
  const [storageValue, setStorageValue] = useState(() => {
    const localStorageValue = localStorage.getItem(key);

    if (localStorageValue !== null) {
      return JSON.parse(localStorageValue);
    }

    return value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storageValue));
  }, [storageValue, key]);

  return [storageValue, setStorageValue];
}
