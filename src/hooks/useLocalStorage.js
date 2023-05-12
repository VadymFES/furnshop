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
        // Remove items from prevState that exist in newState
        updatedState = prevState.filter((item) => !newState.some((newItem) => newItem.id === item.id));
        // Concatenate the filtered prevState with newState
        updatedState = [...updatedState, ...newState];
      } else {
        // Remove the item from prevState with the same id as newState
        updatedState = prevState.filter((item) => item.id !== newState.id);
        // Add the new item to updatedState
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
