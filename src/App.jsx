import React, { Component } from "react";
import { AppContextProvider } from "./Context/AuthContext";
import Login from "./Login";

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <>
        <AppContextProvider>
          <Login/>
        </AppContextProvider>
      </>
    );
  }
}

export default App;
