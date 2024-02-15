import axios from "axios";
import { SiCoinmarketcap } from "react-icons/si";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";

export default class DetailModel {
  constructor(coin) {
    this.coin = coin;

    this.info = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Volume",
        value: coin?.detailRes.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Supply",
        value: coin?.detailRes.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Price",
        value: coin?.detailRes.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24h Change (%)",
        value: coin?.detailRes.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24h Volume",
        value: coin?.detailRes.volumeUsd24Hr,
      },
    ];

    this.chartData = {
      labels: coin?.historyRes.map((i) =>
        new Date(i.date).toLocaleDateString()
      ),

      datasets: [
        {
          id: 1,
          label: "Price",
          borderColor: "red",
          data: coin?.historyRes.map((i) => i.priceUsd),
        },
      ],
    };
  }

  static async getCoin(id) {
    // details
    const detailRes = await axios.get(`https://api.coincap.io/v2/assets/${id}`);

    // history
    const historyRes = await axios.get(
      ` https://api.coincap.io/v2/assets/${id}/history?interval=d1`
    );

    return {
      detailRes: detailRes.data.data,
      historyRes: historyRes.data.data,
    };
  }
}
