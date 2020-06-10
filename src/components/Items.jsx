import React from 'react'

export default class Item extends React.Component {

  render() {
    const {poster, title} = this.props
    return (
      <div>
        <h3>{title}</h3>
        <img src={`https://image.tmdb.org/t/p/w300${poster}`}/>
      </div>
    )
  }
}