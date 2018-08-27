import React, { Component } from 'react';

class LocaBox extends Component {
    render() {
        return (
            <div className="box">
                <div className="location-name">
                    {this.props.name}
                </div>
                <div className="location-address">
                    {this.props.address}
                </div>
            </div>
        )
    }
}
export default LocaBox