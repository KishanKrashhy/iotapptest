import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import logo from './logo.svg';
import Sidebar from './components/sidebar';
import MainPanel from './components/MainPanel';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      msg : '',
      endpoint: "http://localhost:8080/",
      temp : ''
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ msg: data.devices }));
    socket.on("stateUpdate", data => this.setState({temp : data.devices}));
    this.getResumeData();
  };
  getResumeData() {
    $.ajax({
      url: 'http://127.0.0.1:8080/',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ response: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }

    });
  };
  
  render() {
    console.log(`this is the stage ${this.state.temp}`);
    return (
      <div className="wrapper">
        <Sidebar />
        <MainPanel  data={this.state.msg}/>
      </div>
    );
  }
}

export default App;
