import React from 'react';
import classes from './style.css';
import Aux from '../hoc/Aux_file.js';

//Renders individual reccomended videos
const VideoListItem = ({video, onVideoSelect, sideList}) => {
    //Saves image thumbail URL
    const imageUrl = video.snippet.thumbnails.default.url;
    //Renders reccomended videos picture, title and description
    return (
      <Aux>
        { (sideList === true) ?
            <li onClick={() => onVideoSelect(video)} className={classes.sideListVideoStyle}>
                <img src={imageUrl}/>
                {video.snippet.title}
            </li>
          :
            <li onClick={() => onVideoSelect(video)} className={classes.listVideoStyle}>
                <img src={imageUrl}/>
            </li>
        }
      </Aux>
    );
};

export default VideoListItem;
