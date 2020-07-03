import React, { ReactNode } from "react";

interface props {
  clicked:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  character: ReactNode;
}

const char = (props: props) => {
  const style: React.CSSProperties = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "center",
  };

  return (
    <div style={style} onClick={props.clicked}>
      {props.character}
    </div>
  );
};

export default char;
