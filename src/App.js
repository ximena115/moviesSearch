import React, { Component } from 'react';
import { Title } from './components/title'
import { SearchForm } from './components/searchForm'
import { MovieList } from './components/moviesList';

import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {
  state = { results: [] };

  handleResults = (results) => {
    this.setState({ results });
  };

 

  render() {
    return (
      <div className="App">
        <Title> Search Movies </Title>
        <div className="searchForm-wrapper">
          <SearchForm onResults={this.handleResults}></SearchForm>
        </div>
        {this.state.results.length === 0 
          ? <p>Sin resultados</p>
          : <MovieList movies={this.state.results}/>
        }
      </div>
    );
  }
}

export default App;
