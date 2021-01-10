import React from 'react';
import './App.css';
import MovieSearch from './movieSearch.js';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">My React Movie Hub</h1>
        <MovieSearch />
      </div>
    );
  }

}

export default App;
