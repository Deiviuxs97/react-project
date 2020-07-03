import React, { Component } from "react";
import classes from "./App.css";
// import styled from "styled-components";
import Person from "./Person/Person";

interface eventC {
  alt?: boolean;
  target: HTMLInputElement;
}

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
    let persons = null;
    let btnClass = "";

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

      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ["red", "bold"]
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button
          className={btnClass.join(" ")}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
