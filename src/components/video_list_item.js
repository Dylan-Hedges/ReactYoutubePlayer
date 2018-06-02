import React from 'react';
import classes from './style.css';
import Aux from '../hoc/Aux_file.js';

//Renders individual reccomended videos
const VideoListItem = ({video, onVideoSelect, sideList}) => {
    //Saves image thumbail URL
    const imageUrl = video.snippet.thumbnails.high.url;
    //Captures the main videos id
    const videoId = video.id.videoId;
    //URL - Embeds youtube video player and appends video id
    const url = `https://www.youtube.com/embed/${videoId}` ;
    //Renders reccomended videos picture, title and description
    return (
      <Aux>
        { (sideList === true) ?
            <li onClick={() => onVideoSelect(video)} className={classes.sideListVideoStyle}>
                <img src={imageUrl} className={classes.sideThumbnailStyle}/>
                {video.snippet.title}
            </li>
          :
            <li onClick={() => onVideoSelect(video)}  className={`col-md-2 ${classes.col} ${classes.listVideoStyle}`}>
                <img src={imageUrl} className={classes.thumbnailStyle}/>
            </li>
        }
      </Aux>
    );
};

export default VideoListItem;
