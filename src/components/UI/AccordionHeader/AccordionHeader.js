import React from 'react';
import PropTypes from 'prop-types';

import { useAccordionContext } from '../Accordion/hooks';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import clsx from 'clsx';

const useAccordionClick = (eventKey, onClick) => {
  const { onToggle, activeEventKey } = useAccordionContext();
  return event => {
    onToggle(eventKey === activeEventKey ? null : eventKey);

    if (onClick) {
      onClick(event);
    }
  };
};

const AccordionHeader = props => {
  const {
    eventKey,
    onClick,
    children,
    component: Component = 'div',
    ...rest
  } = props;

  const accordionClick = useAccordionClick(eventKey, onClick);

  const { activeEventKey } = useAccordionContext();

  return (
    <Component
      className={clsx(
        'flex justify-between items-center cursor-pointer select-none'
      )}
      onClick={accordionClick}
      {...rest}>
      <div>
        {activeEventKey} - {eventKey} / {children}
      </div>
      <div>
        {activeEventKey === eventKey ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
    </Component>
  );
};

AccordionHeader.propTypes = {
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

AccordionHeader.defaultProps = {};

export default AccordionHeader;
