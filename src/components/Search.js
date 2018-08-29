import React, { Component } from 'react';
import {DebounceInput} from 'react-debounce-input';
class Search extends Component {
    state = {
        query: ""
    }
    updQuery(query) {
        this.props.searchLocations(query)
    }
    render() {
        return ( 
            <div className="search" aria-label="Search input">
                <DebounceInput
                    tabIndex="2"
                    placeholder="Search by name or category..."
                    minLength={2}
                    debounceTimeout={1000}
                    onChange={(event) => this.updQuery(event.target.value)}
                />
            </div>
        )
    }
}
export default Search 