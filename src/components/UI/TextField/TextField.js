import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const TextField = props => {
  const { type = 'text', name, label, id, error, ...rest } = props;
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <div className="mb-4">
      {label && (
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={clsx(
          'appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight',
          error && 'border-red-500'
        )}
        id={id}
        name={name}
        onChange={handleChange}
        type={type}
        value={inputValue}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
};

TextField.propTypes = {
  /**
   * The className coming from props
   */
  className: PropTypes.string,

  /**
   * If true, the input will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The error message
   */
  error: PropTypes.string,

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
   * The input type
   */
  type: PropTypes.string,

  /**
   * The input value
   */
  value: PropTypes.string
};

export default TextField;
