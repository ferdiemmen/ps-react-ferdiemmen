
import React from 'react';
import Modal from 'ps-react/Modal';

export default function ExampleModal() {
  let _modal;

  const toggleModal = () => {
    _modal.toggleVisibility();
  }

  return (
    <div>
        <p>
          <button onClick={toggleModal}>
            Show Modal
          </button>
        </p>
      <Modal ref={modal => _modal = modal}>foobar die food</Modal>
    </div>
  )
}
