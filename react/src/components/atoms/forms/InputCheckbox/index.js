import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class InputCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const selected = event.target.value;
    const value = this.props.value;
    if (typeof this.props.onChange === 'function') {
      this.props.onChange({ selected, value, event });
    }
  }

  render() {
    const spanClass = this.props.outline ? 'ma__input-checkbox ma__input-checkbox--outline' : 'ma__input-checkbox';
    return(
      <div className={spanClass}>
        <input
          checked={this.props.checked}
          name={this.props.name}
          type="checkbox"
          value={this.props.value}
          id={this.props.id}
          required={this.props.required}
          onChange={this.handleChange}
          disabled={this.props.disabled}
        />
        <label htmlFor={this.props.id}>
          <span>{this.props.label}</span>
        </label>
      </div>
    );
  }
}

InputCheckbox.propTypes = {
  /** The name of the input checkbox. */
  name: PropTypes.string.isRequired,
  /** The id of the input radio. */
  id: PropTypes.string.isRequired,
  /** The value of the input radio */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** The input radio label */
  label: PropTypes.string.isRequired,
  /** Whether the input radio is checked or not  */
  checked: PropTypes.bool,
  /** Whether radio input is required or not */
  required: PropTypes.bool,
  /** Whether you want the radio input outlined */
  outline: PropTypes.bool,
  /** OnChange function */
  onChange: PropTypes.func,
  /** Whether the input is disabled or not */
  disabled: PropTypes.bool
};

InputCheckbox.defaultProps = {
  outline: false,
  checked: false,
  required: false,
  onChange: () => {},
  disabled: false
};

export default InputCheckbox;
