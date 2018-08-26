import React, {Component} from 'react';

class Box extends Component {
    render() {
        return (
            <div className="box">
                <div className="location-name">
                    {this.props.sight.name}
                </div>
                <div className="location-address">
                    {this.props.sight.location.address}
                </div>
            </div>
        )
    }
}
export default Box