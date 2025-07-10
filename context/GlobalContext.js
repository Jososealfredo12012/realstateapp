'use client';
import { createContext, useContext, useState } from 'react';

// Create context
const GlobalContext = createContext();

// Create a provider
export function GlobalProvider({ children }) {
  const [unread, setUnread] = useState(0);
  return (
    <GlobalContext.Provider
      value={{
        unread,
        setUnread,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Create custom hook to acces context
export function useGlobalContext(params) {
  return useContext(GlobalContext);
}
