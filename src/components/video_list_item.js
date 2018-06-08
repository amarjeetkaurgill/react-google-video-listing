import React from 'react';

// Multiple props can be pulled by {prop1, prop2}
//In ES6, `const video = props.video` can be written as {video};
// Similarly `const onVideoSelect = props.onVideoSelect`
const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;

  // once video is clicked, onVideoSelect callback will fetch the video and will
  // pass it to the parent component
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
