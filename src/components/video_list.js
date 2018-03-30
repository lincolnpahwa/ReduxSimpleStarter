import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onSelectCallback}) => {
	const videoItems = videos.map((item, index) => <VideoListItem video={item} key={item.etag} onSelectCallback={onSelectCallback}/>)

	return (
			<ul className="col-md-4 list-group">
				{videoItems}
			</ul>
		);
};

export default VideoList;