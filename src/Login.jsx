import React, { Component } from "react";
import FormControl from "@mui/material/FormControl";
import { Button, TextField } from "@mui/material";
import AppContext from "./Context/AuthContext";
import { startLogin } from "./Auth";

class Login extends Component {
  static contextType = AppContext;
  constructor() {
    super();
    this.state = { username: "", password: "", message: "" };
  }
  handleChange = (e) => {
    // const name = e.target.name;
    // const value=e.target.value;
    // this.setState({[name]:value})
    // Solution 1
    // this.setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Solution 2
    const {name,value}=e.target;
    this.setState((prev)=>({...prev,[name]:value}))
  };
  handleLoginEvent = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { message, ...data } = this.state;
    const { forward } = this.context;
    forward(startLogin(data));
  };
  render() {
    return (
      <>
        <FormControl>
          <TextField
            type={`text`}
            name="username"
            style={{ marginTop: "10px" }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={this.handleChange}
          />
          <TextField
            type={`password`}
            name="password"
            style={{ marginTop: "10px" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={this.handleChange}
          />
          <Button onClick={this.handleLoginEvent}>Submit</Button>
        </FormControl>
      </>
    );
  }
}

export default Login;
