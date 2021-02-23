import React from "react";

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.wrapper = React.createRef();
    }
    render() {
      return <div ref={this.wrapper}>{this.props.children}</div>;
    }
}

export default MyComponent;