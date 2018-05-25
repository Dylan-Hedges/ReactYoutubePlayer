import React from 'react';
import classes from './style.css';

//Renders individual reccomended videos
const VideoListItem = ({video, onVideoSelect}) => {
    //Saves image thumbail URL
    const imageUrl = video.snippet.thumbnails.default.url;
    //Renders reccomended videos picture, title and description
    return (
        <li onClick={() => onVideoSelect(video)} className={classes.sideListItemStyle}>
          <div>
            <img src={imageUrl}/>
            {video.snippet.title}
          </div>
        </li>
    );
};

export default VideoListItem;
