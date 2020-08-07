import React, { useMemo, useLayoutEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import AccordionContext from './AccordionContext';

import clsx from 'clsx';

const useEventKey = (eventKey, onToggle) => {
  const [activeEventKey, setActiveEventKey] = useState(eventKey);
  useLayoutEffect(() => {
    setActiveEventKey(eventKey);
  }, [eventKey, onToggle]);
  return [activeEventKey, setActiveEventKey];
};

const Accordion = props => {
  const {
    activeEventKey,
    onToggle,
    children,
    component: Component = 'div',
    ...rest
  } = props;

  const [eventKey, setEventKey] = useEventKey(activeEventKey, onToggle);

  const handleToggle = useCallback(
    eventKey => {
      if (activeEventKey !== undefined) {
        onToggle(eventKey);
        return;
      }
      setEventKey(eventKey);
    },
    [activeEventKey, onToggle, setEventKey]
  );

  const context = useMemo(() => {
    return {
      activeEventKey: eventKey,
      onToggle: handleToggle
    };
  }, [eventKey, handleToggle]);

  return (
    <AccordionContext.Provider value={context}>
      <Component className={clsx('border-l-2 border-transparent')} {...rest}>
        {children}
      </Component>
    </AccordionContext.Provider>
  );
};

Accordion.propTypes = {
  /**
   * `eventKey` of the accordion/section which is active/open
   */
  activeEventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
   * onToggle callback
   */
  onToggle: PropTypes.func
};

Accordion.defaultProps = {};

export default Accordion;
