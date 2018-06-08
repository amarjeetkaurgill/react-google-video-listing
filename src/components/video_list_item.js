import React from 'react';

// multiple props can be pulled by {prop1, prop2}
const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;
  //{video} is sane as const video = props.video;
  return (
      <li className="list-group-item"
      onClick={() => onVideoSelect(video)}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageURL}/>
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
}

export default VideoListItem;
