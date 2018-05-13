import React, { Component } from 'react';
import classes from './style.css';

//Renders search bar
class SearchBar extends Component {
    //Initalizes state for search bar
    constructor(props){
        super(props);
        //Sets the term displayed in the search bar on page load
        this.state = { term: ''};
    }
    onInputChange(term){
        //Sets components state with the new term and rerenders the page
        this.setState({term});
        //Executes the callback function onSearchTermChange with the new term
        this.props.onSearchTermChange(term);
    }
    render(){
        return (
          <div className="col-md-6">
            <div className={classes.searchbar}>
                <input
                  value={this.state.term}
                  //When the user types, the "onInputChange" callback is executed and passed the new terms
                  onChange = {event => this.onInputChange(event.target.value)}
                />
            </div>
          </div>
        );
    }
}

export default SearchBar;
