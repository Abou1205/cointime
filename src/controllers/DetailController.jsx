import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import DetailModel from "../models/Detail.model";

const DetailController = () => {
  const [coin, setCoin] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    DetailModel.getCoin(id).then((res) => setCoin(res));
  }, []);

  const model = new DetailModel(coin);

  console.log(model);

  return <DetailView model={model} />;
};

export default DetailController;
