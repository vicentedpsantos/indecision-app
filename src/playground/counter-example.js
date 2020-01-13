class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)

    this.state = {
      count: 0
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const count = JSON.stringify(this.state.count)
      localStorage.setItem('count', count)
    }
  }

  componentDidMount() {
    let count = parseInt(JSON.parse(localStorage.getItem('count')), 10)

    if (count) {
      try {
        this.setState(() => ({ count: count }))
      } catch (e) {
      // do nothing
      }
    }
  }

  handleMinusOne() {
    this.setState((previousState) => {
      return {
        count: previousState.count - 1
      }
    })
  }

  handleAddOne() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      }
    })
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    return(
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button
          onClick={this.handleMinusOne}
        >
          -1
        </button>
        <button
          onClick={this.handleAddOne}
        >
          +1
        </button>
        <button
          onClick={this.handleReset}
        >
          reset
        </button>
      </div>
    )
  }
}

ReactDOM.render(<Counter count={100}/>, document.getElementById('app'))
