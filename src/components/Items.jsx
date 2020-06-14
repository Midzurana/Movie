import React from 'react'

export default class Item extends React.Component {

  render() {
    const {poster, title, origin_country} = this.props
    return (
      <div>
        <img src={`https://image.tmdb.org/t/p/w300${poster}`}/>
        <h3>{title}</h3>
        <p>{origin_country}</p>
      </div>
    )
  }
}