import React, { Component } from 'react';
import './App.css';
import MainPage from './components/mainPage'
import Settings from './components/Settings'
import Search from './components/Search'
import { searchMovie, fetchData } from './actions/PageActions'
import { connect } from 'react-redux'
import Film from './components/film'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  renderAbout() {
    return <div>About</div>
  }

  render() {
    return (
      <div className="App">
        <Router>
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Home</Link> 
          </h1>       
          <Search 
              fetchData={this.props.fetchData}
              mainState={this.props.mainState}
              getDataBySearch={this.props.getDataBySearch}
          />
          <Settings />
        </header>
        <div class='list'>
          <div className='movies-list'>                     
            <Route exact path="/" render={(props) => 
              <MainPage
                fetchData={this.props.fetchData}
                mainState={this.props.mainState}
                {...props}
            />} />      
            <Route  exact path="/film/:filmId" component={Film}/>
          </div>
        </div>
        </Router>  
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      mainState: state.main,
      // settings: state.settings,
      search: state.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
      // setLanguageAction: lang => dispatch(setLanguage(lang)),
      fetchData: (page, lang) => dispatch(fetchData(page, lang)),
      getDataBySearch: (lang, value) => dispatch(searchMovie(lang, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

