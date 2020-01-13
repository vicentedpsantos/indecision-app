import React from 'react'

const AddOption = (props) => {
  const handleAddOption = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()

    props.handleAddOption(option)
    e.target.elements.option.value = ''
  }

  return(
    <div>
      <form
        onSubmit={handleAddOption}
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

export default AddOption
