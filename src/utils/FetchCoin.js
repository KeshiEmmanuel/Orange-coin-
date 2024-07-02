export const allCoinOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f58cb0d27amsh5d4c6b1cb96eccbp1d475cjsnee8fb6a9fd01",
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  },
};

export const fetchCoin = async (url, options) => {
  try {
    const rawData = await fetch(url, options);
    const response = await rawData.json();
    return response.data.coins;
  } catch (err) {
    console.log(err);
  }
};
const url =
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&orderBy=marketCap&search=bitcoin&orderDirection=desc&limit=50&offset=0";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f58cb0d27amsh5d4c6b1cb96eccbp1d475cjsnee8fb6a9fd01",
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
