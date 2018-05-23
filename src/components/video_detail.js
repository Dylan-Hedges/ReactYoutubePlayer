import React from 'react';
import classes from './style.css';

//Renders main video
const VideoDetail = ({video}) => {
    //Checks if video has loaded before rendering the page - if no video, display loading message
    if (!video){
        return <div>Loading...</div>
    }
    //Captures the main videos id
    const videoId = video.id.videoId;
    //URL - Embeds youtube video player and appends video id
    const url = `https://www.youtube.com/embed/${videoId}` ;
    //Renders main video's picture, title and description
    return(
        <div className={classes.mainVideoStyle}>
            <div className ="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className={classes.mainVideoDescription}>
                <div className={classes.mainVideoTitle}>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
          </div>
    );
};

export default VideoDetail;
