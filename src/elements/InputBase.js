import React, { Component } from 'react';
import PropTypes from 'prop-types';

const useChecked = ({type}) => type === 'radio' || type === 'checkbox';
const getValueKey(props) => useChecked(props) ? 'checked' : 'value';

class InputBase extends Component {
  constructor(props) {
    super();
    this.state = {
      value: useChecked(props) ? props.defaultChecked : props.defaultValue,
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = useChecked(this.props) ? event.target.checked : event.target.value;
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    const valueKey = getValueKey(this.props);
    const overrideProps = {
      onChange: this.onChange,
      [valueKey]: this.state.value,
    };
    const renderProps = Object.assign({}, this.props, overrideProps);
    return <input {...renderProps}>{this.props.children}</input>
  }
}

InputBase.propTypes = {
  defaultValue: PropTypes.string,
  defaultChecked: PropTypes.boolean,
};

InputBase.defaultProps = {
  defaultValue: '',
  defaultChecked: false,
};

export default InputBase;
