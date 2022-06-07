import React from "react";
import "../Edits/editPage.css";
const Input = (props) => {
  const { data, setData, label, type, inputType, classStyle } = props;
  return (
    <>
      <label>{label}</label>

      {inputType === "textarea" ? (
        <textarea
          type={type}
          className={classStyle}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      ) : (
        <input
          type={type}
          className=""
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default Input;
