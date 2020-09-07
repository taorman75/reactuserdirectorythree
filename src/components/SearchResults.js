import React, { Component } from "react";

import API from "../utils/api";
import ResultList from "./ResultList";

export default class SearchResults extends Component {

  state= {
    users: [],
    filteredUsers: []
  }

  componentDidMount() {
    API.searchEmployees().then(results => {
        this.setState({
            users: results.data.results,
            filteredUsers: results.data.results
        })
    })
  }

  searchEmployees = query => {
    API.search(query)
   
    
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <ResultList results={this.state.users} />
    )
  }

 }

// export default SearchResultContainer;