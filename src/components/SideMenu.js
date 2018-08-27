import React, { Component } from 'react';
import Search from './Search';
import LocaBox from './LocaBox';

class SideMenu extends Component {
    render() {
        console.log(this.props)
        return ( 
            <div className="side-bar">
                <Search
                    searchLocations={this.props.searchLocations}
                />
                <div className="search-results">
                    {this.props.filteredLocations && (this.props.filteredLocations.map((loca) => (
                            loca.venue?
                            <LocaBox
                                key={loca.venue.id}
                                name={loca.venue.name}
                                address={loca.venue.location.address}
                                clickkBox={() => {this.props.clickkBox(loca)}}
                            />
                            :<LocaBox
                                key={loca.id}
                                name={loca.name}
                                address={loca.location.address}
                                clickkBox={() => {this.props.clickkBox(loca)}}
                            /> 
                        )))
                    }
                
                </div>
            </div>
            
        )
    }
}
export default SideMenu 