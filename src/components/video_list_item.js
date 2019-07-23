import React from 'react';
import classes from './style.css';
import Aux from '../hoc/Aux_file.js';
import { Link, animateScroll as scroll } from "react-scroll";

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
            <li onClick={() => onVideoSelect(video)}>
               <div>
                  <img src={imageUrl} className={classes.sideThumbnailStyle}/>
                  <p className={classes.sideVideoTitle}>{video.snippet.title}</p>
                  {scroll.scrollToTop()}
              </div>
            </li>
          :
            <li onClick={() => onVideoSelect(video)}  className={`col-sm-2 ${classes.colmd2} ${classes.listVideoStyle}`}>
                <img src={imageUrl} className={classes.thumbnailStyle}/>
                {scroll.scrollToTop()}
            </li>
        }
      </Aux>
    );
};

export default VideoListItem;
