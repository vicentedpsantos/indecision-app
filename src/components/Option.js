import React from 'react'

const Option = (props) => (
  <div className="option">
    <p className='option__text'>{props.option}</p>
    <button
      className="button button--link"
      onClick={() => props.handleRemoveOption(props.option)}
    >
      Remove Option
    </button>
  </div>
)

export default Option
