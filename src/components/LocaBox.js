import React, { Component } from 'react';

class LocaBox extends Component {
    render() {
        return (
            <div className="box" 
                aria-label={this.props.name} 
                tabIndex="3" onClick={this.props.clickkBox} 
                onKeyDown={(e) => (e.keyCode === 13?e.target.click():null)}
            >
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