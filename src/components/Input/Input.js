
import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

/** Enhanced input element with callbacks and debounce. */
class Input extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnChange = debounce(this.handleOnChange, (props.debounceDelay && props.debounceDelay));
  }

  handleOnChange(event) {
    event.persist();  

    // Trigger onEmpty hook because input field has been cleared.
    if (!event.target.value && Object.prototype.hasOwnProperty.call(this.props, 'onEmpty')) {
      this.props.onEmpty();
      return false;
    };

    // Trigger onChange hook returning current value.
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div className="input">
        <input type="text" onChange={event => {
          event.persist();
          this.handleOnChange(event);
        }} />
      </div>
    )
  }
}

Input.propTypes = {
  /** Callback function on changes */
  onChange: PropTypes.func,
  /** Callback function on an empty value */
  onEmpty: PropTypes.func,
  /** Delay before callback function is invoked */
  debounceDelay: PropTypes.number,
};

Input.defaultProps = {
  debounceDelay: 100,
}

export default Input;
