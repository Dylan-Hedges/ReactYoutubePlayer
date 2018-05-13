import React from 'react';
import classes from './style.css';

//Renders individual reccomended videos
const VideoListItem = ({video, onVideoSelect}) => {
    //Saves image thumbail URL
    const imageUrl = video.snippet.thumbnails.default.url;
    //Renders reccomended videos picture, title and description
    return (
        <li onClick={() => onVideoSelect(video)}className={classes.listgroupitem}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
