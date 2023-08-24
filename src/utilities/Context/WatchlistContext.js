import { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export function useWatchlistContext() {
  return useContext(WatchlistContext);
}

export function WatchlistProvider({ children }) {
  const [watchlistItem, setWatchlistItem] = useState({});

  return (
    <WatchlistContext.Provider value={{ watchlistItem, setWatchlistItem }}>
      {children}
    </WatchlistContext.Provider>
  );
}
