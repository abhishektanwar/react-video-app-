import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // each elt of props.video array is passed to video 
    // var in line 6,same arg is passed to video_list_item in l7
    const videoItems = props.videos.map((video) => {
        return (<VideoListItem 
        key={video.etag} 
        video = {video} 
        onVideoSelect = {props.onVideoSelect}/>
        
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {/* {props.videos.length} */}
            
            {videoItems}

        </ul>
    );

};

export default VideoList;