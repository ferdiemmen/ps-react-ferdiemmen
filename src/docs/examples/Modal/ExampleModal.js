
import React from 'react';
import Modal from 'ps-react/Modal';

export default function ExampleModal() {
  let _modal;

  const toggleModal = () => {
    _modal.toggleVisibility();
  }

  const apenbroek = () => {
    alert('apenbroek');
  }

  const modalOptions = {
    buttons: [
      {
        name: 'Close',
        action: () => _modal.close(),
      },
      {
        name: 'Say "Apenbroek"!',
        action: apenbroek
      }
    ]
  };

  return (
    <div>
        <p>
          <button onClick={toggleModal}>
            Show Modal
          </button>
        </p>
      <Modal ref={modal => _modal = modal} options={modalOptions}>foobar die food</Modal>
    </div>
  )
}
