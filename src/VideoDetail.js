import React from 'react';
import './VideoItem.css';

const VideoDetail = ({selectedVideo}) => {

  if (!selectedVideo) {
    return <div><h1>Loading...</h1></div>
  }

  const embedUrl = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

	return (

    <div>
      <div className="ui embed">
        <iframe title="video-player" src={embedUrl} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  )
};

export default VideoDetail;
