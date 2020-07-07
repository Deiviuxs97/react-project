import React, { Component, PureComponent } from "react";
import Person from "./Person/Person";

interface props {
  clicked(index: number): void;
  changed(event: React.ChangeEvent<HTMLInputElement>, id: string): void;
  persons: any;
  // persons: { id: string; name: string; age: number }[];
}

class Persons extends PureComponent<props> {
  // static getDerivedStateFromProps(props: string, state: any) {
  //   console.log("[Persons.tsx] getDerivedStateFromProps");
  //   return state;
  // }

  // componentWillReceiveProps(props: any) {
  //   console.log("[Persons.tsx] componentWillReceiveProps", props);
  // }

  // shouldComponentUpdate(nextProps: any, nextState: any) {
  //   console.log("[Persons.tsx] shouldComponentUpdate");
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   //return ture;
  // }

  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log("[Persons.tsx] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  // componentWillUpdate() {}

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    console.log("[Persons.tsx] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.tsx] componentWillUnmount");
  }

  render() {
    console.log("[Persons.tsx] rendering...");
    return this.props.persons.map(
      (person: { id: string; name: string; age: number }, index: number) => {
        return (
          <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event: React.ChangeEvent<HTMLInputElement>) =>
              this.props.changed(event, person.id)
            }
          />
        );
      }
    );
  }
}

export default Persons;
