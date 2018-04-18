import React, { Component } from "react";
import Navbar from './Navbar';
import Content from './Content';

class MainPanel extends Component {
    render() {
        if(this.props.data){
           // console.log(this.props.data);
        }
        return(
            <div className="main-panel">
                <Navbar />
                <Content  devices={this.props.data}/>
            </div>
        )
    }
}
export default MainPanel;