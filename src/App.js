import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from './apis/youtube';
import { KEY } from './config';

function App() {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		searchVideos('Beach Boys');
	}, []);

	const searchVideos = async (searchTerm) => {
		const response = await youtube.get('/search', {
			params: {
				q: searchTerm,
				part: 'snippet',
				maxResults: 5,
				type: 'video',
				key: KEY,
			},
		});
		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	};

	const selectVideo = (video) => {
		setSelectedVideo(video);
	};

	return (
		<div className="ui container">
			<SearchBar searchVideos={searchVideos} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail selectedVideo={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList videos={videos} selectVideo={selectVideo} />
					</div>
				</div>

			</div>

		</div>
	);
}

export default App;
