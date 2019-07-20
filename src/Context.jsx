import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

export const Context = React.createContext();

class Provider extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return <Context.Provider value={this.state}>
      {children}
    </Context.Provider>
  }
}

export const ContextProvider = withRouter(Provider);
