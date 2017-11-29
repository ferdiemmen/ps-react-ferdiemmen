
import React from 'react';
import PropTypes from 'prop-types';

let _modal;

class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
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
    const { buttons } = this.props.options;

    return (
      <div ref={modal => _modal = this} className={`modal-container ${this.state.open ? 'open' : ''}`}>
        <div className="modal-overlay" onClick={this.close}></div>
        <div className="modal">
          {this.props.children}
          {
            buttons.map(button => {
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
  /** An object defining options for the modal */
  options: PropTypes.shape({
    /** Definition of buttons for the modal */
    buttons: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      action: PropTypes.func
    }))
  }),
}

Modal.defaultProps = {
  options: {
    buttons: [{
      name: 'Close',
      action: () => _modal.close(),
    }],
  }
}

export default Modal;