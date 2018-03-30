import _ from 'lodash';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyBdoJd-YE_Z9Ge92FaxD8Pxk44anexozJk";

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: undefined
		}

		YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({videos, selectedVideo: videos[0]})
		})

	}

	updateSelectedVideo(selectedVideo) {
		this.setState({selectedVideo})
	}

	onSearchUpdate(term) {
		this.setState({
			videos: [],
			selectedVideo: undefined
		})
		YTSearch({ key: API_KEY, term}, (videos) => {
			this.setState({videos, selectedVideo: videos[0]})
		})
	}

	render() {
		const onSearchUpdate = _.debounce((term) => {this.onSearchUpdate(term)}, 300);
		return (<div>
					<SearchBar onSearchCallback={onSearchUpdate}/>
					<VideoDetail video={this.state.selectedVideo}/>
					<VideoList videos={this.state.videos} onSelectCallback={(video) => this.updateSelectedVideo(video)}/>
				</div>);
	}
}


ReactDom.render(<App />, document.querySelector('.container'));
