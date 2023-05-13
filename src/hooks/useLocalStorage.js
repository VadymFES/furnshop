import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  const updateState = (newState) => {
    setState((prevState) => {
      let updatedState;
      if (Array.isArray(newState)) {
        updatedState = prevState.filter((item) => !newState.some((newItem) => newItem.id === item.id));
        updatedState = [...updatedState, ...newState];
      } else {
        updatedState = prevState.filter((item) => item.id !== newState.id);
        updatedState = [...updatedState, newState];
      }
      localStorage.setItem(key, JSON.stringify(updatedState));
      return updatedState;
    });
  };

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setState(JSON.parse(storedValue));
    }
  }, [key]);

  return [state, updateState];
};

export default useLocalStorage;
