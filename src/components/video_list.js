import React from 'react';
import VideoListItem from './video_list_item';

// This component doesn't need any state change, so we can make it as a functional component
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
     // Here `onVideoSelect` method callback has been passed as a `prop` from
     // parent component. It will retrieve the output and pass it back to the
     // parent component.
      return (
        <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
      )
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
