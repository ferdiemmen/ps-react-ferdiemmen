
import React from 'react';
import PropTypes from 'prop-types';

/** A progress bar showing the current progress */
class ProgressBar extends React.Component {

  getColor = (percent = 0) => {
    if (this.props.percent === 100) return 'green';
    return this.props.percent > 50 ? 'lightgreen' : 'red';
  }

  getWidthAsPercentOfTotalWidth = () => {
    return parseInt(this.props.width * (this.props.percent / 100), 10) + '%';
  }

  render() {
    const {percent, width, height} = this.props;
    return (
      <div style={{border: 'solid 1px lightgray', width: width + '%'}}>
        <div style={{
          width: this.getWidthAsPercentOfTotalWidth(),
          height,
          backgroundColor: this.getColor(percent)
        }} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  width: PropTypes.number.isRequired,
  /** Bar width */
  height: PropTypes.number.isRequired,
  /** Bar height */
  percent: PropTypes.number,
}

ProgressBar.defaultProps = {
  width: 100,
  height: 5
};

export default ProgressBar;