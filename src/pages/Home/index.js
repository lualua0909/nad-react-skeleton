import { useState } from "react";
import { MetaInfo } from "src/components";
import { getRouteMetaInfo } from "src/config/routes.config";
import useFormNumber from "src/hooks/useFormNumber";
import NumberFormat from "react-number-format";

const Home = () => {
  const number = useFormNumber();
  const [data, setData] = useState();

  return (
    <>
      <MetaInfo {...getRouteMetaInfo("Home")} />
      <h1 className="title">HOME</h1>
      <NumberFormat
        value={data}
        thousandSeparator={true}
        inputmode="numeric"
        onValueChange={(values, sourceInfo) => {
          setData(values.floatValue);
        }}
        decimalScale={4}
      />
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        Submit
      </button>
    </>
  );
};

export default Home;
