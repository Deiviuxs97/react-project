import React from "react";

interface imputProps {
  currentName: string | number | readonly string[] | undefined;
  changed: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

const userInput = (props: imputProps) => {
  const inputStyle = {
    border: "2px solid red",
  };
  return (
    <input
      type="text"
      style={inputStyle}
      onChange={props.changed}
      value={props.currentName}
    />
  );
};

export default userInput;
