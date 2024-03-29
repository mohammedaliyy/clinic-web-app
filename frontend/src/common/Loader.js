import React from "react";
import { Grid } from "react-loader-spinner";
export default function Loader() {
  return (
    <div className="d-flex flex-column justify-content-center aligns-items-center ">
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#fc3041"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}
