import React from 'react'

const AddOption = (props) => {
  const handleAddOption = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()

    props.handleAddOption(option)
    e.target.elements.option.value = ''
  }

  return(
    <div className='add-option'>
      <form
        onSubmit={handleAddOption}
      >
        <input
          className='add-option__input'
          name="option"
          type="text"
        />
        <button className='button'>
          Add Option
        </button>
      </form>
    </div>
  )
}

export default AddOption
