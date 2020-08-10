import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const TextField = props => {
  const {
    disabled,
    type = 'text',
    name,
    label,
    id,
    valid,
    validMessage,
    error,
    errorMessage,
    isGray,
    prepend: prependProp,
    append: appendProp,
    readOnly,
    rows = 3,
    multiline,
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  let ComponentProp = 'input';
  let multilineProps;
  if (multiline) {
    ComponentProp = 'textarea';
    multilineProps = { rows };
  }

  const prepend = prependProp && (
    <span className={clsx('text-gray-500 ml-1 text-sm', multiline && 'pt-1')}>
      {prependProp}
    </span>
  );
  const append = appendProp && (
    <span className={clsx('text-gray-500 mr-1 text-sm', multiline && 'pt-1')}>
      {appendProp}
    </span>
  );

  return (
    <div className="mb-4">
      {label && (
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={clsx(
          'flex border border-gray-300 rounded',
          error && 'border-red-500',
          valid && 'border-green-400',
          isGray && 'bg-gray-300',
          disabled && 'bg-gray-300 opacity-50',
          readOnly && 'bg-gray-100',
          multiline ? 'items-start' : 'items-center'
        )}>
        {prepend}
        <ComponentProp
          className={clsx(
            'appearance-none w-full py-2 px-2 text-gray-700 text-sm leading-tight outline-none rounded bg-transparent',
            disabled && 'cursor-not-allowed',
            multiline && 'resize-none'
          )}
          disabled={disabled}
          id={id}
          name={name}
          onChange={handleChange}
          readOnly={readOnly}
          type={type}
          value={inputValue}
          {...multilineProps}
          {...rest}
        />
        {append}
      </div>
      {error && <p className="text-red-500 text-xs mt-2">{errorMessage}</p>}
      {valid && <p className="text-green-400 text-xs mt-2">{validMessage}</p>}
    </div>
  );
};

TextField.propTypes = {
  /**
   * Element placed after the children.
   */
  append: PropTypes.node,

  /**
   * The className coming from props
   */
  className: PropTypes.string,

  /**
   * If true, the input will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The error bool
   */
  error: PropTypes.bool,

  /**
   * The error message text
   */
  errorMessage: PropTypes.string,

  /**
   * The input id
   */
  id: PropTypes.string,

  /**
   * The alternative input style
   */
  isGray: PropTypes.bool,

  /**
   * The label text
   */
  label: PropTypes.string,

  /**
   * If true, the input will be textarea otherwise input.
   */
  multiline: PropTypes.bool,

  /**
   * The input name
   */
  name: PropTypes.string,

  /**
   * Element placed before the children.
   */
  prepend: PropTypes.node,

  /**
   * If true, the input will be readOnly.
   */
  readOnly: PropTypes.bool,

  /**
   * The number of rows
   */
  rows: PropTypes.number,

  /**
   * The input type
   */
  type: PropTypes.string,

  /**
   * The valid bool
   */
  valid: PropTypes.bool,

  /**
   * The valid message text
   */
  validMessage: PropTypes.string,

  /**
   * The input value
   */
  value: PropTypes.string
};

export default TextField;
