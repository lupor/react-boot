import React from "react";
import "./button-primary.css";

export const ButtonPrimary = props => {
  const { clickFn, rest } = props;
  return (
    <button
      className="btn btn--primary"
      type="button"
      {...rest}
      onClick={clickFn}
    >
      Add
    </button>
  );
};
