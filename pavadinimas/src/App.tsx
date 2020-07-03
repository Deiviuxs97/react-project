import React, { Component } from "react";
// import "./App.css";
// import StyleRoot from "../node_modules/@types/radium";
// import Radium from "radium";
import styled from "styled-components";
import Person from "./Person/Person";

interface eventC {
  alt?: boolean;
  target: HTMLInputElement;
}
// StyledButton generic type?
const StyledButton: any = styled.button`
  background-color: ${(props: eventC) => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alt ? "salmo" : "lightgreen")};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "asd1", name: "Max", age: 28 },
      { id: "qwe1", name: "Manu", age: 29 },
      { id: "zxc1", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event: eventC, id: string) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // const person = Object.assign({}, this.state.persons[personIndex]);

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex: number) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(
            (
              person: { id: string; name: string; age: number },
              index: number
            ) => {
              return (
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              );
            }
          )}
        </div>
      );

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ["red", "bold"]
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
