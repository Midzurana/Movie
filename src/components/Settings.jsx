import React from 'react'
import PropTypes from 'prop-types'

export class Settings extends React.Component {
  onBtnClick = e => {
    const lang = +e.currentTarget.innerText
    this.props.setLanguage(lang)
  }
  render() {
    return (
      <div>
        <p>Здесь пока есть только:</p>
        <div>
          <button onClick={this.onBtnClick}>EN</button>
          <button onClick={this.onBtnClick}>RU</button>
        </div>
      </div>
    )
  }
}

Settings.propTypes = {
  setLanguage: PropTypes.func.isRequired,
}