import React, { ReactNode } from "react";

import classes from "./Person.module.css";

interface personProps {
  click?:
    | ((event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void)
    | undefined;
  children?: ReactNode;
  changed?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  age: number;
}

const person = (props: personProps) => {
  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error("Something went wrong");
  }
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
