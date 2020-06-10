import React, { Component } from 'react';
import './App.css';
import MainPage from './components/mainPage'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Список фильмов</h1>
        </header>
        <p className="App-intro">Первая страница. Вселенная DC</p>
        <div>
          <MainPage/>
        </div>
      </div>
    )
  }
}

export default App;
