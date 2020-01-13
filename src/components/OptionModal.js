import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected option"
    onRequestClose={props.clearSelectedOption}
  >
    <h3>Selected option:</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button
      onClick={props.clearSelectedOption}
    >
      OK
    </button>
  </Modal>
)

export default OptionModal
