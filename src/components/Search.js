import React, { Component } from 'react';
class Search extends Component {
    state = {
        query: ""
    }
    updQuery(query) {
        console.log(this.props)
        this.props.searchLocations(query)
    }
    render() {
        return ( 
            <div className="search">
                <input 
                    type="text"
                    placeholder="Search by title or author"
                    onChange={(event) => this.updQuery(event.target.value)}
                />
                {console.log(this.state.query)}
            </div>
        )
    }
}
export default Search 