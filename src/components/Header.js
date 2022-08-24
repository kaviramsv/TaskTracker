import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {

  return (
    <h1>{title}</h1>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}
Header.defaultProps = {
  title: "default",
}

export default Header