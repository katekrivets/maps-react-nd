import React, { Component } from 'react';
import Search from './Search';
import LocationBox from './LocationBox';

class SideMenu extends Component {
    render() {
        let {searchLocations, filteredLocations} = this.props
        return ( 
            <div className="side-bar">
            <Search
                searchLocations={searchLocations}
            />
                <div className="search-results">
                { filteredLocations.length && 
                    filteredLocations.map(loca => (
                        <LocationBox 
                            key={loca.venue.id}
                            sight={loca.venue}
                        />
                    ))
                }
                   
                </div>
            </div>
        )
    }
}
export default SideMenu 