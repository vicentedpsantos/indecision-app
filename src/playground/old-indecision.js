console.log("App.js is running");

let app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!',
  options: [],
  errors: []
}

const displayOptions = (options) => {
  if(options && options.length > 0) {
    return options.map((option, i) =>
      <li key={i.toString()}>
        {option}
      </li>
    )
  } else {
    return <p>No options available</p>
  }
}

const addErrorMessage = (message, errors) => {
  const errorMessage = message
  errors.indexOf(errorMessage) === -1 ? errors.push(errorMessage) : undefined
}

const clearErrors = () => {
  app.errors = []
}

const clearOptions = () => {
  app.options = []
}

const addOption = (option) => {
  app.options.push(option)
}

const clearInputValue = (target) => {
  target.elements.option.value = ''
}

const onMakeDecision = (options) => {
  if (options && options.length > 0) {
    const randomNum = Math.floor(Math.random() * options.length)
    const option = options[randomNum]
    alert(`Your chosen option is ${option}`)
  } else {
    addErrorMessage("Cannot generate response if there are no options!", app.errors)
  }

  rerenderApp()
}

const onFormSubmit = (event) => {
  event.preventDefault()

  const option = event.target.elements.option.value

  if (option) {
    addOption(option)
    clearErrors()
    clearInputValue(event.target)
  } else {
    addErrorMessage("Option cannot be blank!", app.errors)
  }

  rerenderApp()
}

const removeAll = () => {
  clearOptions()
  clearErrors()
  rerenderApp()
}

const showErrors = (errors) => {
  if(errors && errors.length > 0) {
    return errors.map((error, i) =>
      <p key={i.toString()}>
        {error}
      </p>
    )
  }
}

const appRoot = document.getElementById('app')

const rerenderApp = () => {
  const template = ({title, subtitle, options, errors}) => (
    <div>
      <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <button
          disabled={app.options.length == 0}
          onClick={() => onMakeDecision(options)}>
          What should I do?
        </button>
        <button
          onClick={removeAll}>
          Remove all
        </button>
      <ol>
        {displayOptions(options)}
      </ol>
      {showErrors(errors)}
      <form
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          name="option"
        />
        <button>
          Add option
        </button>
      </form>
    </div>
  )

  ReactDOM.render(template(app), appRoot)
}

rerenderApp()
