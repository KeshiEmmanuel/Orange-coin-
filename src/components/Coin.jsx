/* eslint-disable react/prop-types */
const Coin = ({ coin }) => {
  function formatPrice(price) {
    return (price / 1).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
  return (
    <div className="text-white  font-[Inter] coinbackground text-center p-3">
      <img
        src={coin.iconUrl}
        alt={coin.name}
        className="rounded-full w-14 mx-auto"
      />
      <div>
        <p className="text-[13px] py-1 text-gray-400">Rank {coin.rank}</p>
        <p className="text-white font-semibold">{coin.name}</p>
        <p className="text-gray-400">{formatPrice(coin.price)}</p>
      </div>
    </div>
  );
};

export default Coin;
