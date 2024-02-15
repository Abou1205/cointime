import React from "react";
import { inputs } from "../constant";
import InputView from "./InputView";

const LoginPageView = ({ formik }) => {
  return (
    <div className="login-page">
      <div className="container my-5">
        <h2 className="d-flex gap-3 justify-content-center align-items center">
          <img
            src="/dollar currency symbol on gold coin - PNG.png"
            height={60}
          />
          <span>CoinTime</span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data) => (
            <InputView key={data.name} data={data} formik={formik} />
          ))}

          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPageView;
