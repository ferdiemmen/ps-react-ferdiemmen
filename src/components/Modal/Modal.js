
import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
    }
  }

  toggleVisibility = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {open: !prevState.open};
    });
  }

  close = event => {
    this.setState({open: false});
  }

  open = event => {
    this.setState({open: true});
  }

  render() {
    return (
      <div className={`modal-overlay ${this.state.open ? 'open' : ''}`} onClick={this.close}>
        <div className="modal">
          foobar
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  /** Triggered when the modal is opened */
  open: PropTypes.func
}

export default Modal;