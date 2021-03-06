import React, { ReactNode, Component } from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import classes from "./Person.module.css";
import AuthContext from "../../../context/auth-context";

interface personProps {
  click?:
    | ((event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void)
    | undefined;
  children?: ReactNode;
  changed?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  age: number;
  isAuth: Readonly<personProps> & Readonly<{ children?: ReactNode }>;
}

interface prop {}

class Person extends Component<personProps> {
  static propTypes: {
    click: PropTypes.Requireable<(...args: any[]) => any>;
    name: PropTypes.Requireable<string>;
    age: PropTypes.Requireable<number>;
    changed: PropTypes.Requireable<(...args: any[]) => any>;
  };
  inputElementRef: any;

  constructor(props: personProps) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log("[Person.tsx] rendering...");
    // const rnd = Math.random();

    // if (rnd > 0.7) {
    //   throw new Error("Something went wrong");
    // }
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please log in</p>
        )}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
export default withClass(Person, classes.Person);
