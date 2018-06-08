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

  /**
   * This method will help us fetching youtube videos based on provided search
   * term.
   *
   * @param term {string} The search term
   */
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({videos});
      this.setState({selectedVideo:videos[0]})
    });
  }


  render() {
    // While typing the search term we don't want to call the function on each change event,
    // so debounce will help us calling this function after 300 ms.

    // This videoSearch method will be passed as a callback to Searchbar component.
    // which will help us in searching new videos based on entered search term.
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    /**
     * We want to open a video from the list, once clicked. So to achieve this behaviour,
     * we are passing `onVideoSelect` method as callback to child components where
     * it can be accessed using 'prop'.
     * From VideoList component, this method will be again passed to VideoListItem as 'prop',
     * where it will be accessed using method callback and will retrieve
     * the selected video back here and the state will be updated to `selectedVideo`
     */
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
