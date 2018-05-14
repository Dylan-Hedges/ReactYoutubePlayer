import React from 'react';
import VideoListItem from './video_list_item';
import classes from './style.css';

//Renders the list of reccomended videos
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });
    //Returns a <ul> with each video being a seperate <li>
    return (
      <div className="col-md-12">
        <ul className={classes.liststyle}>
            {videoItems}
        </ul>
      </div>
    );
}

export default VideoList;
