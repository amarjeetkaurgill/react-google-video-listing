import React, {Component} from 'react'; // React helps to creat React components
import ReactDOM from 'react-dom'; // ReactDOM is helpful in rendering the component into DOM
import YTSearch from 'youtube-api-search'; // module to fetch youtube videos
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'YOUTUBE-API-KEY'

// Create a new component
class App extends Component {
  constructor(props) {
    super(props);
    // Set the default state properties
    this.state = {'videos': [],
                  selectedVideo:null
                 };
    // By default search for 'meditation'
    this.videoSearch('meditation');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({videos});
      this.setState({selectedVideo:videos[0]})
    });
  }

 // Since we need to pass videos into this component, so we need to pass these as
 //In this method we will be passing the method as callback to child components as 'prop'
 // and will retrieve the selected video and update the state
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    );
  }
}

// Put the component's generated HTML into DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
