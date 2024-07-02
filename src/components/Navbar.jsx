import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useState, useContext } from "react";
import { CoinContext } from "../context/CoinContext";
import { allCoinOptions } from "../utils/FetchCoin";
function Navbar() {
  const [showInput, setShowInput] = useState(false);
  const { setAllCoins, fetchCoin } = useContext(CoinContext);

  async function handleSearch(search) {
    const response = await fetchCoin(
      `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&orderBy=marketCap&search=${search}&orderDirection=desc&limit=50&offset=0`,
      allCoinOptions
    );
    const searchedData = response.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    if (search) {
      return setAllCoins(searchedData);
    } else if (search === "") {
      const Data = await fetchCoin(
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
        allCoinOptions
      );

      return setAllCoins(Data);
    }
  }
  return (
    <header className="mt-2">
      <nav className="flex pt-3 items-center justify-between">
        <div className="flex items-center gap-1 font-[Inter] font-medium text-xl">
          <img src="/logo.svg" alt="logo" className="w-9" />
        </div>
        <div className="ml-auto">
          <input
            type="text"
            className="handleInput outline-none text-white w-[300px] px-5 py-3 bg-gray-600 font-[Inter] rounded-xl inputBorder"
            placeholder="Search Any coin"
            onInput={(e) => handleSearch(e.target.value)}
          />
          <PiMagnifyingGlassBold
            onClick={() => setShowInput((prev) => !prev)}
            fontSize={"25px"}
            color="white"
            className="handleSearchIcon"
          />
          {showInput ? (
            <>
              <div
                className="bg-transparent backdrop-blur-sm  z-[5] absolute top-0 left-0 w-full h-full"
                onClick={() => setShowInput(false)}
              ></div>
              <input
                type="text"
                placeholder="Search"
                className="absolute font-[Inter] text-white top-8 outline-none rounded-full py-4 px-7 bg-transparent backdrop-blur-xl shadow-lg w-[350px] left-[15%] z-10"
                onInput={(e) => handleSearch(e.target.value)}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          <button className="py-3 px-4 ml-3 bg-orange-400 rounded-2xl signUpborder text-white font-[Inter]">
            Sign-Up
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
