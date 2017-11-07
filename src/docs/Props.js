
import React from 'react';
import PropTypes from 'prop-types';

const Props = ({props}) => {
  return (
    <table className="props">
      <thead>
        <tr>
          <td>Name</td>
          <td>Description</td>
          <td>Type</td>
          <td>Default</td>
          <td>Required</td>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(props).map(key => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{props[key].description}</td>
                <td>{props[key].type.name}</td>
                <td>{props[key].defaultValue && props[key].defaultValue.value}</td>
                <td>{props[key].required && 'X'}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

Props.propTypes = {
  props: PropTypes.object.isRequired
}

export default Props;
