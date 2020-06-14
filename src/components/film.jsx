import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDetailedFilm } from '../actions/PageActions'

class Film extends Component {
    componentDidMount() {
        const { fetchDetailedFilm, match: { params } } = this.props;
        fetchDetailedFilm(params.filmId);
    }

    renderMovieDetails() {
        const { movie: { item: { details, recomendations, similar} } } = this.props;
        return(
            <div>
                <h3>{details.original_title}</h3>
                <img src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}/>
                <p>{details.overview}</p>
            </div>
        )
    }

    render() {
        const {movie: { isLoading }} = this.props;

        if(isLoading) {
            return <div>Загрузка</div>
        }

        return (
            <div>
                {this.renderMovieDetails()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movie: state.movie
})

const mapDispatchToProps = dispatch => {
    return {
        fetchDetailedFilm: (id) => dispatch(fetchDetailedFilm(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Film)
