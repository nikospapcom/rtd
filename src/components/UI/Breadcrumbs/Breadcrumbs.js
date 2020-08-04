import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { breadcrumbs } from '../../../theme';

function insertSeparators(items, className, separator) {
  return items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(
        current,
        <li aria-hidden className={className} key={`separator-${index}`}>
          {separator}
        </li>
      );
    } else {
      acc.push(current);
    }

    return acc;
  }, []);
}

const Breadcrumbs = props => {
  const {
    align,
    children,
    classes,
    seperator,
    seperatorClasses,
    size,
    ...rest
  } = props;

  const breadcrumbItems = React.Children.toArray(
    children
  ).map((child, index) => <li key={index}>{child}</li>);

  return (
    <nav
      className={clsx(
        'bg-gray-200 p-3 text-sm rounded',
        breadcrumbs.size[size],
        classes
      )}
      {...rest}>
      <ol className={clsx('list-reset flex', breadcrumbs.align[align])}>
        {insertSeparators(breadcrumbItems, seperatorClasses, seperator)}
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  /**
   * The Breadcrumb align
   *
   * @type {'left' | 'center' | 'right'},
   */
  align: PropTypes.string,

  /**
   * The content of the Breadcrumbs
   */
  children: PropTypes.node,

  /**
   * The classes coming from props
   */
  classes: PropTypes.string,

  /**
   * The seperator coming from props
   */
  seperator: PropTypes.any,

  /**
   * The seperator classes coming from props
   */
  seperatorClasses: PropTypes.string,

  /**
   * The Alert visual size
   *
   * @type {'sm' | 'nl' | 'lg'}
   */
  size: PropTypes.oneOf(['sm', 'nl', 'lg'])
};

Breadcrumbs.defaultProps = {
  align: 'left',
  classes: null,
  seperator: '/',
  seperatorClasses: 'px-2',
  size: 'nl'
};

export default Breadcrumbs;
