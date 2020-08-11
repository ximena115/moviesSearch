import React, { Component } from 'react';
import { Title } from './components/title'
import { SearchForm } from './components/searchForm'
import { MovieList } from './components/moviesList';

import  { Detail } from "./pages/detail" 

import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {
  state = { usedSearch: false, results: [] };

  handleResults = (results) => {
    this.setState({ results, usedSearch: true });
  };
  
  renderResults() {
    return  this.state.results.length === 0 
      ? <p>Sorry! Result not faund!</p>
      : <MovieList movies={this.state.results}/>
   
  }
 

  render() {
    const url = new URL(document.location)
    const hasId = url.searchParams.has("id")
    console.log(hasId)
    if (hasId) {
      return <Detail id={url.searchParams.get("id")} />
      
    }
    return (
      <div className="App">
        <Title> Search Movies </Title>
        <div className="searchForm-wrapper">
          <SearchForm onResults={this.handleResults}></SearchForm>
        </div>
        {this.state.usedSearch
        ? this.renderResults()
        : <small>Use the form to search a movie</small>
        }
       
      </div>
    );
  }
}

export default App;
