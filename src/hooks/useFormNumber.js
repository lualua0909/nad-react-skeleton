import { useState } from "react";
const regExp = new RegExp("^[0-9]+$");

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {
    console.log(e);
  }
}

const useFormNumber = (init = "") => {
  const [value, setValue] = useState(init);

  /* for Antd */
  const handleChange = (e) => {
    const _value = typeof e == "object" ? e.target.value : e;
    const parsed = _value?.replace(",", "");
    console.log(Number(parsed));
    setValue(
      parsed
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          })
            .formatToParts(~~parsed)
            .map((p) =>
              p.type != "literal" && p.type != "currency" ? p.value : ""
            )
            .join("")
        : ""
    );
  };

  return {
    value,
    setValue,
    onChange: handleChange,
  };
};

export default useFormNumber;
