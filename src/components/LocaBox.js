import React, { Component } from 'react';

class LocaBox extends Component {
    render() {
        return (
            <div className="loca-box">
                <div className="loca-name">
                    {this.props.name}
                </div>
                <div className="loca-address">
                    {this.props.address}
                </div>
            </div>
        )
    }
}
export default LocaBox