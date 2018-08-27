import React, { Component } from 'react';

class LocaBox extends Component {
    render() {
        return (
            <div className="box" onClick={this.props.clickkBox}>
                <div className="loca-name">
                    {this.props.name}
                </div>
                <div className="loca-address" onClick={this.props.clickkBox}>
                    {this.props.address}
                </div>
            </div>
        )
    }
}
export default LocaBox