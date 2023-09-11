import React from 'react'
import PropTypes from 'prop-types'
import TabContainer, { HiddenRadioInput } from './TabsStyled'

const Tabs = ({ active, onClick, label, inputId }) => {
  return (
    <TabContainer active={active} onClick={onClick}>
      <HiddenRadioInput type="radio" id={inputId} name="tabs" />
      <label htmlFor={inputId}>{label}</label>
    </TabContainer>

  )
}

Tabs.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired
}

export default Tabs
