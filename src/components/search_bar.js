import React from 'react'

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
    }


    onInputChange = event => {
        this.setState({a: event.target.value})
    }

    render() {
        return (
            <div>
                <input value={this.state.term} onChange={this.onInputChange}/>
            </div>
        )
    }
}

export default SearchBar
