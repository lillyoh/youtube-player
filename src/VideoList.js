import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, selectVideo }) => {
	return (
		<div>
			{videos.map((video) => {
				return (
					<VideoItem
						video={video}
						key={video.id.videoId}
						selectVideo={selectVideo}
					/>
				);
			})}
		</div>
	);
};

export default VideoList;
