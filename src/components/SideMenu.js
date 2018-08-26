import React, { Component } from 'react';
import Search from './Search';

class SideMenu extends Component {
    render() {
        return ( 
            <div className="side-bar">
            <Search
                searchLocations={this.props.searchLocations}/>
            </div>
        )
    }
}
export default SideMenu 