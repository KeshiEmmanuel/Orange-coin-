import Coin from "./Coin";
import gsap from "gsap";
import { useContext, useEffect } from "react";
import { allCoinOptions } from "../utils/FetchCoin";
import { CoinContext } from "../context/CoinContext";
import { useGSAP } from "@gsap/react";
const AllCoins = () => {
  const { fetchCoin, allCoins, setAllCoins } = useContext(CoinContext);
  useGSAP(() => {
    gsap.from(".coin", {
      duration: 1,
      y: "100%",
    });
  });
  useEffect(() => {
    const fetchingData = async () => {
      const data = await fetchCoin(
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
        allCoinOptions
      );
      setAllCoins(data);
    };
    fetchingData();
  }, []);
  console.log(allCoins);
  return (
    <div className="allcoins py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {allCoins.map((coin) => (
        <div key={coin.uuid} className="coin">
          <Coin coin={coin} />
        </div>
      ))}
    </div>
  );
};

export default AllCoins;
