import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const TextField = props => {
  const {
    type = 'text',
    name,
    label,
    id,
    valid,
    validMessage,
    error,
    errorMessage,
    prepend: prependProp,
    append: appendProp,
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  const prepend = prependProp && (
    <span className="text-gray-500 ml-1 text-sm">{prependProp}</span>
  );
  const append = appendProp && (
    <span className="text-gray-500 mr-1 text-sm">{appendProp}</span>
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
          'flex items-center border border-gray-300 rounded',
          error && 'border-red-500',
          valid && 'border-green-400'
        )}>
        {prepend}
        <input
          className={clsx(
            'appearance-none w-full py-2 px-2 text-gray-700 text-sm leading-tight outline-none rounded'
          )}
          id={id}
          name={name}
          onChange={handleChange}
          type={type}
          value={inputValue}
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
   * The label text
   */
  label: PropTypes.string,

  /**
   * The input name
   */
  name: PropTypes.string,

  /**
   * Element placed before the children.
   */
  prepend: PropTypes.node,

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
