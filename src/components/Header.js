import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  const headerStyles = {
    color: '#ff6a95',
    backgroundColor: 'rgba(0,0,0,.4)',
    text: 'Task Tracker',
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}
Header.defaultProps = {
  // backgroundColor: '#ff6a95',
  // color: 'rgba(0,0,0,.4)',
  title: 'Task Tracker',
}

export default Header