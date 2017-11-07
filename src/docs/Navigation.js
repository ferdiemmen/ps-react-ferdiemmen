
import React from 'react';
import PropTypes from 'prop-types';
import Input from 'ps-react/Input';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  filterComponents = (query) => {
    this.setState({query: query});
  }

  render() {
    const {query} = this.state;

    return (
      <div>
        <Input onChange={this.filterComponents} />
        <ul className="navigation">
          {
            this.props.components
              .filter(name => {
                return query ? ~name.toLowerCase().indexOf(query.toLowerCase()) : true;
              })
              .map(name => {
                return (
                  <li key={name}>
                    <a href={`#${name}`}>{name}</a>
                  </li>
                )
              })
          }
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;