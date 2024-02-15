import millify from "millify";
import React from "react";
import { FaBitcoin } from "react-icons/fa";
import CardView from "./CardView";
import { useNavigate } from "react-router-dom";

const MainPageView = ({ coins, setPage }) => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h4 className="d-flex gap-3 align-items-center">
        <FaBitcoin />
        <span>Welcome, Coin List</span>
      </h4>

      <p>
        CoinTime is a great source to keep track the cripto currency market on
        the world.
      </p>

      <div className="d-flex justify-content-around gap-3 mt-4">
        {coins.slice(0, 3).map((data) => (
          <CardView key={data.id} data={data} />
        ))}
      </div>

      <table className="table table-responsive table-dark mt-5 table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Volume</th>
            <th>Trade Volume</th>
            <th>% Change </th>
          </tr>
        </thead>
        <tbody>
          {coins?.map((coin) => (
            <tr key={coin.id} onClick={() => navigate(`/coin/${coin.id}`)}>
              <td>{coin.rank}</td>
              <td>
                <span className="text-warning fw-bold me-2">{coin.symbol}</span>
                <span>{coin.name}</span>
              </td>
              <td>{millify(coin.priceUsd)}</td>
              <td>{millify(coin.marketCapUsd)}</td>
              <td>{millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr >= 0 ? "up" : "down"}>
                %{Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center mt-2">
        <button onClick={() => setPage((page) => page + 1)} className="btn">
          More
        </button>
      </div>
    </div>
  );
};

export default MainPageView;
