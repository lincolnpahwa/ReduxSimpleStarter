import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			term: ''
		};
	}

	render() {
		return <input className="search-bar"
				value={this.state.term}
				onChange={(event) => this.onInputChange(event)} />;
	}

	onInputChange(event) {
		this.setState({
			term: event.target.value
		});

		this.props.onSearchCallback(this.state.term)
	}
}

export default SearchBar;