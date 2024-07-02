import { useState, createContext } from "react";
import { fetchCoin } from "../utils/FetchCoin";
export const CoinContext = createContext();

// eslint-disable-next-line react/prop-types
function CoinContextProvider({ children }) {
  const [allCoins, setAllCoins] = useState([]);

  const contextValue = {
    allCoins,
    setAllCoins,
    fetchCoin,
  };
  return (
    <CoinContext.Provider value={contextValue}>{children}</CoinContext.Provider>
  );
}

export default CoinContextProvider;
