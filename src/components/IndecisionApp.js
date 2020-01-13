import React from 'react'

import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import Errors from './Errors'

class IndecisionApp extends React.Component {
  state = {
    subtitle: 'Put your life in the hands of a computer',
    options: [],
    errors: []
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState((prevState) => ({ options: options }))
      }
    } catch(e) {
      // do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  addErrorMessage = (message) => {
    if(this.state.errors.indexOf(message) === -1) {
      this.setState((prevState) => ({ errors: prevState.errors.concat([message]) }))
    }
  }

  handleRemoveOption = (option) => {
    let editedOptions = [...this.state.options]
    editedOptions.splice(editedOptions.indexOf(option), 1)

    this.setState(() => ({ options: editedOptions }))
  }

  clearErrorMessages = () => {
    this.setState(() => ({ errors: [] }))
  }

  handleAddOption = (option) => {
    if(!option) {
      this.addErrorMessage('Enter valid item to add option!')
    } else if (this.state.options.indexOf(option) > -1) {
      this.addErrorMessage('This option has already been included!')
    } else {
      this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
      this.clearErrorMessages()
    }
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handlePick = () => {
    if (this.state.options && this.state.options.length > 0) {
      const randomNum = Math.floor(Math.random() * this.state.options.length)
      const option = this.state.options[randomNum]
      alert(`Your chosen option is ${option}`)
    } else {
      this.addErrorMessage("Cannot generate response if there are no options!")
    }
  }

  render() {
    return(
      <div>
        <Header
          subtitle="Leave your future in the hands of a computer"
        />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          handleRemoveOption={this.handleRemoveOption}
          options={this.state.options}
        />
        <Errors
          errorMessages={this.state.errors}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp
