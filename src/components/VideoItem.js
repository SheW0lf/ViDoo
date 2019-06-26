import React from 'react';

//video and onVideoSelect destructured from props
const VideoItem = ( {video, onVideoSelect} ) => {
    return(
        <div className="card" onClick={() => onVideoSelect(video)}>
            <img className="card__img" src={video.snippet.thumbnails.medium.url} alt={`image for ${video.snippet.title} video`} />
            <h3 className="card__title">{video.snippet.title}</h3>
        </div>
    )
}

export default VideoItem;