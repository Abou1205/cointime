import millify from "millify";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DetailView = ({ model }) => {
  return (
    <div>
      <h3 className="text-center">
        <span className="me-3 fs-4 fw-bold">
          {model.coin?.detailRes.symbol}
        </span>
        <span className="fs-2 text-warning">{model.coin?.detailRes.name}</span>
      </h3>

      <div className="row">
        <section className="col-md-3 d-flex flex-column gap-5 p-5 p-md-3">
          {model?.info?.map((data, index) => (
            <div
              key={index}
              className="text-bg-light rounded shadow-lg text-center p-3"
            >
              <span className="fs-2">{data.icon}</span>
              <h4>{data.label}</h4>
              <p className="fw-bold">{millify(data.value)}</p>
            </div>
          ))}
        </section>

        <section className="col-md-9 d-flex flex-column gap-5 p-md-4">
          <Line data={model.chartData} />
        </section>
      </div>
    </div>
  );
};

export default DetailView;
