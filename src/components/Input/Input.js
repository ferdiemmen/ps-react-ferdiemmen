
import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {

  handleOnChange = event => {
    event.persist();
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div className="input">
        <input type="text" onChange={this.handleOnChange} />
      </div>
    )
  }
}

Input.propTypes = {
  /** Callback function on changes */
  onChange: PropTypes.func
};

export default Input;
