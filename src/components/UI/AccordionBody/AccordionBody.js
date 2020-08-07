import React from 'react';
import PropTypes from 'prop-types';

import { useAccordionContext } from '../Accordion/hooks';

import clsx from 'clsx';

const AccordionBody = props => {
  const { eventKey, children, component: Component = 'div', ...rest } = props;

  const { activeEventKey } = useAccordionContext();

  return activeEventKey === eventKey ? (
    <Component className={clsx('pl-8 pr-8 pb-5 text-grey-darkest')} {...rest}>
      {children}
    </Component>
  ) : null;
};

AccordionBody.propTypes = {
  /**
   * The content of the alert
   */
  children: PropTypes.node,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * `eventKey` of the content to be controlled.
   */
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * onToggle callback
   */
  onToggle: PropTypes.func
};

AccordionBody.defaultProps = {};

export default AccordionBody;
