import React, { Component } from "react";

class Content extends Component {
    render() {
        if (this.props.devices) {
            let allDevices = [];
            allDevices.push(...(this.props.devices));
           // console.log((this.props.devices.length))
            var deviceList = this.props.devices.map(function (device,i) {
                return <div key={i} className="col-md-4">
                    <div className="card ">
                        <div className="card-header ">
                            <h4 className="card-title">{device.name}</h4>
                            <p className="card-category">Status : stable</p>
                        </div>
                        <div className="card-body ">
                        <div className="card  card-tasks">
                                <div className="card-header ">
                                    <h4 className="card-title">States</h4>
                                </div>
                                <div className="card-body ">
                                    <div className="table-full-width">
                                        <table className="table">
                                            <tbody>
                                                   {device.states.map((state) => {
                                                    return Object.keys(state).map((sensor,i) => {
                                                        return <tr key={i}>
                                                    <td>
                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                                <span className="form-check-sign"></span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>{sensor}</td>
                                                    <td>{state[sensor]}</td>
                                                </tr> 
                                                    })
                                                         
                                                   })}                                        
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-footer ">
                                    <div className="stats">
                                        <i className="now-ui-icons loader_refresh spin"></i> Updated on:{device.updated}
                                    </div>
                                </div>
                            </div>
                                    </div>
                    </div>
                </div>
            })
        }
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        {deviceList}
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Content;