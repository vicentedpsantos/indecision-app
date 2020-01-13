class VisibilityApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this)
    this.state = {
      title: props.title,
      info: props.info,
      isVisibile: false
    }
  }

  handleVisibilityToggle() {
    this.setState((previousState) => {
      return {
        isVisible: !previousState.isVisible
      }
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.title}</h1>
        <button
          onClick={this.handleVisibilityToggle}
        >
          {this.state.isVisible ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.isVisible && <p>{this.state.info}</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityApp title="Visibility App" info="Details" />, document.getElementById('app'))
