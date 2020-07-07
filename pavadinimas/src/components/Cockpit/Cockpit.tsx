import React, { useEffect } from "react";

import classes from "./Cockpit.module.css";

interface props {
  personsLength: number;
  persons?: { id: string; name: string; age: number }[];
  clicked:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  title: string;
  showPersons: boolean;
}

const Cockpit = (props: props) => {
  useEffect(() => {
    console.log("[Cockpit.tsx] useEffect");
    // Http request...
    setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
    return () => {
      console.log("[Cockpit.tsx] cleanup work in useEffect");
    };
  }, []); // shows alert when persons is changed([props.persons]), jei array tu62ias suveikia vien1 kart1.

  useEffect(() => {
    console.log("[Cockpit.tsx] 2nd useEffect");
    return () => {
      console.log("[Cockpit.tsx] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ["red"]
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ["red", "bold"]
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
