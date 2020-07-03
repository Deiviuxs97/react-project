import React, { ReactNode } from "react";

import "./UserOutput.css";
interface outputProps {
  userName: ReactNode;
}

const userOutput = (props: outputProps) => {
  return (
    <div className="UserOutput">
      <p>Username: {props.userName}</p>
      <p>I hoppe I'll be overwritten!</p>
    </div>
  );
};

export default userOutput;
