import React, { ReactNode } from "react";
// import Radium from "radium";
import styled from "styled-components";

import "./Person.css";

interface personProps {
  click?:
    | ((event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void)
    | undefined;
  children?: ReactNode;
  changed?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  age: number;
}

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props: personProps) => {
  // const style: any = {
  //   "@media (min-width: 500px)": {
  //     width: "450px",
  //   },
  // };
  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
