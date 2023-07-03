import React from 'react'
import PropTypes from 'prop-types'

const Tabs = ({ active, onClick, label, inputId }) => {
  return (
    <div className={`tab ${active ? 'active' : ''}`} onClick={onClick}>
      <input type="radio" id={inputId} name="tabs" />
      <label htmlFor={inputId}>{label}</label>
    </div>
  )
}

Tabs.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired
}

export default Tabs
