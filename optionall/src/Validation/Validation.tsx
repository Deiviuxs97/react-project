import React from "react";

interface props {
  inputLength: number;
}
const validation = (props: props) => {
  let validationMessage = "Text long enough";

  if (props.inputLength <= 5) {
    validationMessage = "Text too short";
  }
  return <div>{validationMessage}</div>;
};

export default validation;
