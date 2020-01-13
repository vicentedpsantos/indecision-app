import React from 'react'

class Errors extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.errorMessages.map((message, i) => {
            return <p key={i}>{message}</p>
          })
        }
      </div>
    )
  }
}

export default Errors
