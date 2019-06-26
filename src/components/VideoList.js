import React from 'react';
import VideoItem from './VideoItem';

//video and onVideoSelect destructured from props
const VideoList = ( {videos, onVideoSelect} ) => {
    const videoItems = videos.map(video => {
        return(
            <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
        );
    })
    return(
        <div className="video-list">
            {videoItems}
        </div>
    );
}


export default VideoList;