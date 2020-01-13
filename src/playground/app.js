class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleRemoveOption = this.handleRemoveOption.bind(this)
    this.state = {
      subtitle: 'Put your life in the hands of a computer',
      options: props.options ,
      errors: []
    }
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

  addErrorMessage(message) {
    if(this.state.errors.indexOf(message) === -1) {
      this.setState((prevState) => ({ errors: prevState.errors.concat([message]) }))
    }
  }

  handleRemoveOption(option) {
    let editedOptions = [...this.state.options]
    editedOptions.splice(editedOptions.indexOf(option), 1)

    this.setState(() => ({ options: editedOptions }))
  }

  clearErrorMessages() {
    this.setState(() => ({ errors: [] }))
  }

  handleAddOption = () => {
    if(!option) {
      this.addErrorMessage('Enter valid item to add option!')
    } else if (this.state.options.indexOf(option) > -1) {
      this.addErrorMessage('This option has already been included!')
    } else {
      this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
      this.clearErrorMessages()
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  handlePick() {
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

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.handlePick}
      >
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
        <button
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        <ol>
          {
            props.options.map((option, i) =>
              <Option
                key={i}
                option={option}
                handleRemoveOption={props.handleRemoveOption}
              />
            )
          }
        </ol>
      </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.option}
      <button
        onClick={() => props.handleRemoveOption(props.option)}
      >
        Remove Option
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddOption(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()

    this.props.handleAddOption(option)
    e.target.elements.option.value = ''
  }

  render() {
    return(
      <div>
        <form
          onSubmit={this.handleAddOption}
        >
          <input
            name="option"
            type="text"
          />
          <button>
            Add Option
          </button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp options={["Os Guris", "Star Wars"]} />, document.getElementById('app'))
