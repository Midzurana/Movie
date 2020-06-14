import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

export default class Settings extends React.Component {
  onBtnClick = e => {
    const lang = +e.currentTarget.innerText
    this.props.setLanguage(lang)
  }
  render() {
    return (
      <div className='languages'>
        <button onClick={this.onBtnClick}>EN</button>
        <button onClick={this.onBtnClick}>RU</button>
      </div>
    )
  }
}

Settings.propTypes = {
  setLanguage: PropTypes.func.isRequired,
}