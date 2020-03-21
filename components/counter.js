import React from 'react'
import PropTypes from 'prop-types'

import colors from '../styles/colors'

const Counter = ({value, label, color}) => {
  return (
    <div className='counter'>
      <div className='value'>{value}</div>
      <div>{label}</div>

      <style jsx>{`
        .counter {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          margin: 1em 0;
          color: ${colors[color]};
        }

        .value {
          font-size: xx-large;
          font-weight: bold;
        }
        `}</style>
    </div>
  )
}

Counter.defaultProps = {
  label: null,
  color: 'almostBlack'
}

Counter.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  label: PropTypes.string,
  color: PropTypes.string
}

export default Counter
