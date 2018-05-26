import React from 'react';
import VideoListItem from './video_list_item';
import classes from './style.css';
import Aux from '../hoc/Aux_file.js';

//Renders the list of reccomended videos
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
          <Aux>
            { (props.sideList === true) ?
                <VideoListItem
                    onVideoSelect={props.onVideoSelect}
                    key={video.etag}
                    video={video}
                    sideList={true}
                />
               :
               <VideoListItem
                   key={video.etag}
                   video={video}
                   sideList={false}
               />
            }
          </Aux>
        );
    });

    //Returns a <ul> with each video being a seperate <li>
    return (
      <Aux>
        { (props.sideList === true) ?
            <ul className={classes.sideListStyle}>
              {videoItems}
            </ul>
          :
            <ul className={classes.listStyle}>
              {videoItems}
            </ul>
        }
      </Aux>
    );
}

export default VideoList;
