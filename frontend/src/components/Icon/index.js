// NPM imports

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../../styles/theme'

// Project imports

import './style.css'

// Styled

const I = styled.i`
  display: block;
  width: 1em;
  height: 1em;
  font-size: ${(props) => props.size};
  line-height: 1;
  margin: 0;
  color: ${props => props.color || 'inherit'};
`

function Icon({ name, className, size, color, toolTip, toolTipEffect, toolTipPlace, onClick, style }) {
  return (
    <I
      className={`icon-${name} ${className}`}
      size={size}
      color={color}
      onClick={onClick}
      data-tip={toolTip}
      data-place={toolTipPlace}
      data-class="tooltip"
      data-background-color={colors.black80}
      data-effect={toolTipEffect}
      style={style}
    />
  )
}

export const iconProps = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  toolTip: PropTypes.string,
  toolTipEffect: PropTypes.string,
  toolTipPlace: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any)
}

Icon.propTypes = iconProps

Icon.defaultProps = {
  className: '',
  size: '24px',
  color: '',
  toolTip: '',
  toolTipEffect: 'solid',
  toolTipPlace: 'right',
  style: {},
  onClick: () => null
}

export default Icon
