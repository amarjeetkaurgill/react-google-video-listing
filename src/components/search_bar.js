// We need to import in each file because it is required to convert the JSX syntax into ES5 syntax
// {Component} means import React and pull Component out of it, ie const Component = React.Component
import React, {Component} from 'react';

// Class component: We need to make it as a class component because we want to change the state
// whenever term will be updated. To access the state inside a component, it should be a class component
export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {'term':''};
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  /**
   * Whenever input term will change, corresponding state will update.
   * and the callback method passed as prop from 'index.js' will also be called
   * This method will pass the term to VideoSearch method in 'index.js' to fetch
   * youtube videos.
   */
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
