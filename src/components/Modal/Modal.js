
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
      <div className={`modal-container ${this.state.open ? 'open' : ''}`}>
        <div className="modal-overlay" onClick={this.close}></div>
        <div className="modal">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  /** Triggered when the modal is opened */
  opened: PropTypes.func,
  /** Trigger to open the modal */
  open: PropTypes.bool,
  /** Trigger to close the modal */
  close: PropTypes.func,
}

export default Modal;