  import React, { Component } from 'react'
  import { connect } from 'react-redux'
  
  export class Search extends Component {

    findMovie() {
        
        this.props.onFindMovie(this.searchMovie.value)
    }
    
    render() {
        return (
            <div>
                {console.log(123, this.props)}
                <input type='text' ref={(input) => { this.searchMovie = input }} onChange={this.findMovie.bind(this)} /> 
            </div>
        )
    }
  }
  
  const mapStateToProps = state => ({
      movies: state.movies.filter(movie => movie.name.includes(state.filterMovieReducer))
  })
  
  const mapDispatchToProps = dispatch => {
      return {
        onFindTrack: name => dispatch({ type: 'FIND_MOVIE', payload: name})
      }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search)
