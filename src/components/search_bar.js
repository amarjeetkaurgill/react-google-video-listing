// We need to import in each file because it is required to convert the JSX syntax into ES5 syntax
// {Component} means import React and pull Component out of it, ie const Component = React.Component
import React, {Component} from 'react';

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

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
