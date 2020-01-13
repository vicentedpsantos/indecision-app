import React from 'react'

const Errors = (props) => (
  <div>
    {
      props.errorMessages.map((message, i) => {
        return <p key={i}>{message}</p>
      })
    }
  </div>
)

export default Errors
