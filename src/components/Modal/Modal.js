
import React from 'react';
import PropTypes from 'prop-types';

let _modal;

class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: true,
    }
  }

  toggleVisibility = () => {
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
      <div ref={modal => _modal = this} className={`modal-container ${this.state.open ? 'open' : ''}`}>
        <div className="modal-overlay" onClick={this.close}></div>
        <div className="modal">
          {this.props.children}
          {
            this.props.buttons
              .map(button => {
                return (
                  <button key={button.name} onClick={button.action}>{button.name}</button>
                );
              })
          }
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  /** Trigger to open the modal */
  open: PropTypes.bool,
  /** Trigger to close the modal */
  close: PropTypes.func,
  buttons: PropTypes.array,
}

Modal.defaultProps = {
  buttons: [{
    name: 'Close',
    action: () => _modal.close(),
  }],
}

export default Modal;