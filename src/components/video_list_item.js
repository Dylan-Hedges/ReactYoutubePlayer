import React from 'react';
import classes from './style.css';

//Renders individual reccomended videos
const VideoListItem = ({video, onVideoSelect}) => {
    //Saves image thumbail URL
    const imageUrl = video.snippet.thumbnails.default.url;
    //Renders reccomended videos picture, title and description
    return (
        <li onClick={() => onVideoSelect(video)} className={classes.listitemstyle}>
          <div>
            <img src={imageUrl}/>
          </div>

        </li>
    );
};

export default VideoListItem;

// <div>
//     <div>{video.snippet.title}</div>
// </div>
