import React from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponenTwo";

//Component Lifecycle

class ComponentLifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount", this.state.number);
    //after the component is rendered
  }

  componentDidUpdate() {
    console.log("in component did update ", this.state.number);
  }

  increment = () => {
    this.setState({ number: this.state.number + 1 });
  };

  toggleComponent = () => {
    this.setState({ number: this.state.number === 0 ? 1 : 0 });
  };

  render() {
    const component = this.state.number ? <ComponentOne /> : <ComponentTwo />;
    // console.log('render')
    //output the html
    return (
      <div>
        <h1>Life Cycle Methods-{this.state.Id}</h1>

        <p>Life cycle method implementation!!!</p>
        <p>Number is : {this.state.number}</p>

        <button type="button" onClick={this.increment}>
          Toggle
        </button>

        {component}
      </div>
    );
  }
}

export default ComponentLifeCycle;