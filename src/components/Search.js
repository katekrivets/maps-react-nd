import React, { Component } from 'react';
import {DebounceInput} from 'react-debounce-input';
class Search extends Component {
    state = {
        query: ""
    }
    updQuery(query) {
        console.log(query)
        this.props.searchLocations(query)
    }
    render() {
        return ( 
            <div className="search">
                <DebounceInput
                    placeholder="Search by name or category..."
                    minLength={2}
                    debounceTimeout={1000}
                    onChange={(event) => this.updQuery(event.target.value)} />
                {console.log(this.state.query)}
            </div>
        )
    }
}
export default Search 