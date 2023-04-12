import React, { Component, createContext } from "react";

const AppContext = createContext();

export class AppContextProvider extends Component {
  forward = (action) => {
    console.log(action);
    return action(this)};
  apiRequest = (
    method = "GET",
    urlSufix = "",
    data = {},
    contentType = "application/json"
  ) => {
    console.log(`api request >>> type: ${method}, url: ${urlSufix}`);

    // return {
    //   method: method,
    //   url: apiBaseUrl + urlSufix,
    //   headers: {
    //     'Content-Type': contentType,
    //     Authorization: authToken ? `Token ${authToken}` : ''
    //   },
    //   data: data
    // };
  };

  render() {
    const { forward, apiRequest } = this;
    return (
      <AppContext.Provider value={{ forward, apiRequest }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;
