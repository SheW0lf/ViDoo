import React from 'react';
import NotFound from './NotFound';

const VideoDetail = ({video}) => {
    //if no video found, show not found components
    if(!video){ 
        return <NotFound />
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return(
        <div className="video">
            <div className="video__player">
                <iframe src={videoSrc} title='video player'/>
            </div>
            <div className="video__info">
                <h4 className="video__info--title">{video.snippet.title}</h4>
                <p className="video__info--description">{video.snippet.description}</p>
            </div>
        </div>
    );
    
}   

export default VideoDetail;